import { Chart, createZoomOptions } from './charting.js';
import { downloadFile } from '../utils/csv.js';

export function createDcaModule({ store, dataProvider, translator, formatters }) {
  const form = document.getElementById('dca-form');
  const symbolInput = document.getElementById('dca-symbol');
  const amountInput = document.getElementById('dca-amount');
  const monthsInput = document.getElementById('dca-months');
  const resultsContainer = document.getElementById('dca-results');
  const chartCanvas = document.getElementById('dca-chart');
  const exportButton = document.getElementById('dca-export-csv');

  let chart;
  let latestProgress = null;
  let latestStats = null;
  let currentFormatters = formatters;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await render();
  });

  exportButton.addEventListener('click', () => {
    if (!latestProgress) return;
    const header = 'Date,Invested,Shares,Value';
    const rows = latestProgress.map(
      (point) => `${point.date},${point.invested},${point.shares},${point.value}`
    );
    downloadFile('dca-progress.csv', [header, ...rows].join('\n'), 'text/csv');
  });

  async function render() {
    const symbol = (
      symbolInput.value ||
      store.state.settings.defaultSymbol ||
      'AAPL'
    ).toUpperCase();
    const monthlyAmount = Number.parseFloat(amountInput.value);
    const months = Number.parseInt(monthsInput.value, 10);

    if (
      !symbol ||
      !Number.isFinite(monthlyAmount) ||
      monthlyAmount <= 0 ||
      !Number.isFinite(months) ||
      months <= 0
    ) {
      alert(translator.t('dca.form.invalid'));
      return;
    }

    const series = await dataProvider.getSeries(symbol, 'daily');
    const monthlySeries = selectMonthlySeries(series, months);
    if (!monthlySeries.length) {
      resultsContainer.innerHTML = `<p class="small-text">${translator.t('dca.empty')}</p>`;
      if (chart) {
        chart.destroy();
        chart = null;
      }
      return;
    }

    let invested = 0;
    let shares = 0;
    const progress = monthlySeries.map((point) => {
      invested += monthlyAmount;
      const purchaseShares = monthlyAmount / point.price;
      shares += purchaseShares;
      return {
        date: point.date,
        invested,
        shares,
        value: shares * point.price,
      };
    });

    const latestPrice = series.at(-1).close;
    const currentValue = shares * latestPrice;
    const gain = currentValue - invested;
    const gainPercent = invested === 0 ? 0 : gain / invested;

    latestProgress = progress;
    latestStats = { invested, shares, currentValue, gain, gainPercent };

    renderSummary();
    renderChart(progress);
  }

  function renderSummary() {
    if (!latestStats) return;
    const { invested, shares, currentValue, gain, gainPercent } = latestStats;
    resultsContainer.innerHTML = `
      <div class="summary-card">
        <h3>${translator.t('dca.summary.invested')}</h3>
        <p>${currentFormatters.currency(invested)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('dca.summary.shares')}</h3>
        <p>${currentFormatters.number(shares)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('dca.summary.value')}</h3>
        <p>${currentFormatters.currency(currentValue)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('dca.summary.gain')}</h3>
        <p>${currentFormatters.currency(gain)} (${currentFormatters.percent(gainPercent)})</p>
      </div>`;
  }

  function renderChart(progress) {
    const labels = progress.map((point) => point.date);
    const investedData = progress.map((point) => point.invested);
    const valueData = progress.map((point) => point.value);

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: translator.t('dca.chart.invested'),
            data: investedData,
            borderColor: '#94a3b8',
            tension: 0.1,
            fill: false,
          },
          {
            label: translator.t('dca.chart.value'),
            data: valueData,
            borderColor: '#38bdf8',
            tension: 0.1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
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

  function setFormatters(nextFormatters) {
    currentFormatters = nextFormatters;
    renderSummary();
    if (latestProgress) {
      renderChart(latestProgress);
    }
    return Promise.resolve();
  }

  function populateDefaults(defaultSymbol) {
    symbolInput.value = defaultSymbol;
  }

  return {
    render,
    setFormatters,
    populateDefaults,
  };
}

function selectMonthlySeries(series, months) {
  const map = new Map();
  for (let i = series.length - 1; i >= 0 && map.size < months; i--) {
    const point = series[i];
    const monthKey = point.date.slice(0, 7);
    if (!map.has(monthKey)) {
      map.set(monthKey, { date: point.date, price: point.close });
    }
  }
  return Array.from(map.values()).sort((a, b) => new Date(a.date) - new Date(b.date));
}
