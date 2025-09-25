import { Chart, createZoomOptions } from './charting.js';

export function createQuotesModule({ store, dataProvider, translator, formatters }) {
  const form = document.getElementById('quotes-form');
  const symbolInput = document.getElementById('quotes-symbol');
  const listContainer = document.getElementById('quotes-list');
  const filterInput = document.getElementById('quotes-filter');
  const chartCanvas = document.getElementById('price-chart');

  let activeSymbol = store.state.watchlist[0] || store.state.settings.defaultSymbol || 'AAPL';
  let currentFormatters = formatters;
  let chart;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const symbol = symbolInput.value.trim().toUpperCase();
    if (!symbol) return;
    if (!store.state.watchlist.includes(symbol)) {
      store.state.watchlist.push(symbol);
      store.persist();
    }
    activeSymbol = symbol;
    form.reset();
    await render();
  });

  filterInput.addEventListener('input', () => renderCards());

  listContainer.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-action="remove"]');
    const card = event.target.closest('.card[data-symbol]');

    if (button) {
      const symbol = button.dataset.symbol;
      store.state.watchlist = store.state.watchlist.filter((item) => item !== symbol);
      store.persist();
      if (activeSymbol === symbol) {
        activeSymbol = store.state.watchlist[0] || store.state.settings.defaultSymbol || 'AAPL';
      }
      await render();
      return;
    }

    if (card) {
      activeSymbol = card.dataset.symbol;
      renderCards();
      await renderChart(activeSymbol);
    }
  });

  async function render() {
    if (!store.state.watchlist.includes(activeSymbol)) {
      activeSymbol = store.state.watchlist[0] || store.state.settings.defaultSymbol || 'AAPL';
    }
    await renderCards();
    await renderChart(activeSymbol);
  }

  async function renderCards() {
    if (!store.state.watchlist.length) {
      listContainer.innerHTML = `<p class="small-text">${translator.t('quotes.empty')}</p>`;
      if (chart) {
        chart.destroy();
        chart = null;
      }
      return;
    }

    const filter = filterInput.value.trim().toUpperCase();
    const displaySymbols = filter
      ? store.state.watchlist.filter((symbol) => symbol.toUpperCase().includes(filter))
      : [...store.state.watchlist];

    const cards = await Promise.all(
      displaySymbols.map(async (symbol) => {
        const quote = await dataProvider.getQuote(symbol);
        return { symbol, quote };
      })
    );

    listContainer.innerHTML = cards
      .map(({ symbol, quote }) => {
        const changeClass = quote.change >= 0 ? 'positive' : 'negative';
        const active = symbol === activeSymbol ? 'active' : '';
        return `<div class="card ${active}" data-symbol="${symbol}">
          <div class="card-header">
            <div>
              <strong>${symbol}</strong>
              <div class="small-text">${translator.t('quotes.card.last')}: ${currentFormatters.currency(quote.price)}</div>
            </div>
            <button data-action="remove" data-symbol="${symbol}" aria-label="${translator.t('common.remove')} ${symbol}">✕</button>
          </div>
          <div class="card-body ${changeClass}">
            ${currentFormatters.currency(quote.change)} (${currentFormatters.percent(quote.changePercent / 100)})
          </div>
        </div>`;
      })
      .join('');
  }

  async function renderChart(symbol) {
    const series = await dataProvider.getSeries(symbol, 'daily');
    const recent = series.slice(-180);
    const labels = recent.map((point) => point.date);
    const closes = recent.map((point) => point.close);

    if (chart) {
      chart.destroy();
    }

    const sma20 = calculateSMA(closes, 20);
    const sma50 = calculateSMA(closes, 50);

    chart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: translator.t('quotes.chart.close', { symbol }),
            data: closes,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.2)',
            tension: 0.15,
            fill: false,
          },
          {
            label: translator.t('quotes.chart.sma20'),
            data: sma20,
            borderColor: '#22c55e',
            borderDash: [4, 4],
            tension: 0.15,
            fill: false,
          },
          {
            label: translator.t('quotes.chart.sma50'),
            data: sma50,
            borderColor: '#f97316',
            borderDash: [6, 6],
            tension: 0.15,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#e2e8f0',
            },
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                `${context.dataset.label}: ${currentFormatters.currency(context.parsed.y)}`,
            },
          },
          zoom: createZoomOptions(),
        },
        scales: {
          x: {
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
          },
          y: {
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
          },
        },
      },
    });
  }

  async function setFormatters(nextFormatters) {
    currentFormatters = nextFormatters;
    await render();
  }

  function setActiveSymbol(symbol) {
    activeSymbol = symbol.toUpperCase();
  }

  return {
    render,
    setFormatters,
    setActiveSymbol,
  };
}

function calculateSMA(values, period) {
  const result = [];
  const queue = [];
  let sum = 0;
  values.forEach((value) => {
    queue.push(value);
    sum += value;
    if (queue.length > period) {
      sum -= queue.shift();
    }
    result.push(queue.length === period ? sum / period : null);
  });
  return result;
}
