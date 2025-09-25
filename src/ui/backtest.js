import { Chart, createZoomOptions } from './charting.js';
import { runBacktest } from '../core/backtest.js';
import { downloadFile } from '../utils/csv.js';

export function createBacktestModule({ store, dataProvider, translator, formatters }) {
  const form = document.getElementById('backtest-form');
  const symbolInput = document.getElementById('backtest-symbol');
  const shortInput = document.getElementById('backtest-short');
  const longInput = document.getElementById('backtest-long');
  const resultsContainer = document.getElementById('backtest-results');
  const chartCanvas = document.getElementById('backtest-chart');
  const exportButton = document.getElementById('backtest-export-csv');

  let chart;
  let latestResult = null;
  let currentFormatters = formatters;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await render();
  });

  exportButton.addEventListener('click', () => {
    if (!latestResult) return;
    const rows = ['Date,Strategy,BuyHold'];
    latestResult.equityCurve.forEach((point, index) => {
      const buyHoldPoint = latestResult.buyHoldCurve[index];
      rows.push(`${point.date},${point.value},${buyHoldPoint.value}`);
    });
    downloadFile('backtest-equity.csv', rows.join('\n'), 'text/csv');
  });

  async function render() {
    const symbol = (
      symbolInput.value ||
      store.state.settings.defaultSymbol ||
      'AAPL'
    ).toUpperCase();
    const shortPeriod = Number.parseInt(shortInput.value, 10) || 50;
    const longPeriod = Number.parseInt(longInput.value, 10) || 200;

    if (shortPeriod >= longPeriod) {
      alert(translator.t('backtest.form.invalid'));
      return;
    }

    const series = await dataProvider.getSeries(symbol, 'daily');
    const result = runBacktest(series, { shortPeriod, longPeriod, capital: 10000 });
    latestResult = result;

    renderSummary(result.stats);
    renderChart(symbol, result);
  }

  function renderSummary(stats) {
    resultsContainer.innerHTML = `
      <div class="summary-card">
        <h3>${translator.t('backtest.summary.strategyReturn')}</h3>
        <p>${currentFormatters.percent(stats.totalReturn)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('backtest.summary.strategyCagr')}</h3>
        <p>${currentFormatters.percent(stats.cagr)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('backtest.summary.buyHoldReturn')}</h3>
        <p>${currentFormatters.percent(stats.buyHoldReturn)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('backtest.summary.buyHoldCagr')}</h3>
        <p>${currentFormatters.percent(stats.buyHoldCagr)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('backtest.summary.completedTrades')}</h3>
        <p>${translator.t('backtest.summary.tradeStats', {
          count: stats.completedTrades,
          winRate: currentFormatters.percent(stats.winRate),
        })}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('backtest.summary.maxDrawdown')}</h3>
        <p>${currentFormatters.percent(stats.maxDrawdown)}</p>
      </div>`;
  }

  function renderChart(symbol, result) {
    const labels = result.equityCurve.map((point) => point.date);
    const equityData = result.equityCurve.map((point) => point.value);
    const buyHoldData = result.buyHoldCurve.map((point) => point.value);

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: translator.t('backtest.chart.strategy'),
            data: equityData,
            borderColor: '#38bdf8',
            fill: false,
            tension: 0.1,
          },
          {
            label: translator.t('backtest.chart.buyHold'),
            data: buyHoldData,
            borderColor: '#22c55e',
            fill: false,
            tension: 0.1,
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
    if (latestResult) {
      renderSummary(latestResult.stats);
      renderChart(symbolInput.value.toUpperCase(), latestResult);
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
