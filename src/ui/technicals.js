import { Chart, createZoomOptions } from './charting.js';
import { sma, ema, rsi, macd, crossoverSignals } from '../core/indicators.js';

export function createTechnicalsModule({ store, dataProvider, translator, formatters }) {
  const form = document.getElementById('technicals-form');
  const symbolInput = document.getElementById('technicals-symbol');
  const intervalInput = document.getElementById('technicals-interval');
  const chartCanvas = document.getElementById('technicals-chart');
  const signalsContainer = document.getElementById('technicals-signals');
  const resetZoomButton = document.getElementById('technicals-reset-zoom');
  const toggleContainer = document.querySelector('.indicator-toggles');

  let chart;
  let latestMetrics = null;
  let toggleState = {
    price: true,
    sma20: true,
    sma50: true,
    ema12: false,
    ema26: false,
    rsi: true,
    macd: true,
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await render();
  });

  resetZoomButton.addEventListener('click', () => {
    if (chart?.resetZoom) {
      chart.resetZoom();
    }
  });

  toggleContainer.addEventListener('change', (event) => {
    const checkbox = event.target.closest('input[type="checkbox"][data-indicator]');
    if (!checkbox) return;
    const indicator = checkbox.dataset.indicator;
    toggleState[indicator] = checkbox.checked;
    updateDatasetVisibility();
    updateSignals();
  });

  async function render() {
    const symbol = (
      symbolInput.value ||
      store.state.settings.defaultSymbol ||
      'AAPL'
    ).toUpperCase();
    const interval = intervalInput.value;
    symbolInput.value = symbol;

    const series = await dataProvider.getSeries(symbol, interval);
    if (!series.length) {
      return;
    }

    const closes = series.map((point) => point.close);
    const sma20 = sma(closes, 20);
    const sma50 = sma(closes, 50);
    const ema12 = ema(closes, 12);
    const ema26 = ema(closes, 26);
    const rsi14 = rsi(closes, 14);
    const macdResult = macd(closes);
    const crossover = crossoverSignals(series, 20, 50);

    latestMetrics = {
      series,
      closes,
      rsi14,
      macdResult,
      signals: crossover.signals,
    };

    renderChart(symbol, series, {
      sma20,
      sma50,
      ema12,
      ema26,
      rsi14,
      macdResult,
    });
    updateSignals();
  }

  function renderChart(symbol, series, indicatorData) {
    const labels = series.map((point) => point.date);
    const closes = series.map((point) => point.close);

    if (chart) {
      chart.destroy();
    }

    chart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: translator.t('technicals.chart.close', { symbol }),
            data: closes,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.2)',
            tension: 0.15,
            yAxisID: 'price',
          },
          {
            label: translator.t('technicals.toggles.sma20'),
            data: indicatorData.sma20,
            borderColor: '#22c55e',
            borderDash: [5, 3],
            tension: 0.15,
            yAxisID: 'price',
          },
          {
            label: translator.t('technicals.toggles.sma50'),
            data: indicatorData.sma50,
            borderColor: '#f97316',
            borderDash: [6, 4],
            tension: 0.15,
            yAxisID: 'price',
          },
          {
            label: translator.t('technicals.toggles.ema12'),
            data: indicatorData.ema12,
            borderColor: '#c084fc',
            borderDash: [3, 3],
            tension: 0.15,
            yAxisID: 'price',
          },
          {
            label: translator.t('technicals.toggles.ema26'),
            data: indicatorData.ema26,
            borderColor: '#facc15',
            borderDash: [3, 6],
            tension: 0.15,
            yAxisID: 'price',
          },
          {
            label: 'RSI (14)',
            data: indicatorData.rsi14,
            borderColor: '#34d399',
            borderDash: [2, 2],
            yAxisID: 'rsi',
          },
          {
            label: 'MACD',
            data: indicatorData.macdResult.macdLine,
            borderColor: '#60a5fa',
            yAxisID: 'macd',
          },
          {
            label: 'MACD Signal',
            data: indicatorData.macdResult.signalLine,
            borderColor: '#fb7185',
            borderDash: [4, 2],
            yAxisID: 'macd',
          },
          {
            label: 'MACD Hist',
            type: 'bar',
            data: indicatorData.macdResult.histogram,
            backgroundColor: indicatorData.macdResult.histogram.map((value) =>
              value >= 0 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(248, 113, 113, 0.5)'
            ),
            yAxisID: 'macd',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            labels: { color: '#e2e8f0' },
          },
          tooltip: {
            callbacks: {
              label(context) {
                const value = context.parsed.y;
                if (context.dataset.yAxisID === 'rsi') {
                  return `RSI: ${formatters.number(value)}`;
                }
                if (context.dataset.yAxisID === 'macd') {
                  return `${context.dataset.label}: ${formatters.number(value)}`;
                }
                return `${context.dataset.label}: ${formatters.currency(value)}`;
              },
            },
          },
          zoom: {
            ...createZoomOptions(),
          },
        },
        scales: {
          price: {
            position: 'left',
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
          },
          rsi: {
            position: 'right',
            min: 0,
            max: 100,
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.05)' },
          },
          macd: {
            position: 'right',
            ticks: { color: '#94a3b8' },
            grid: { display: false },
          },
          x: {
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.1)' },
          },
        },
      },
    });

    updateDatasetVisibility();
  }

  function updateDatasetVisibility() {
    if (!chart) return;
    chart.data.datasets.forEach((dataset) => {
      const indicatorKey = mapLabelToIndicator(dataset.label);
      if (!indicatorKey) return;
      dataset.hidden = !toggleState[indicatorKey];
    });
    chart.update('none');
  }

  function mapLabelToIndicator(label) {
    if (label.includes('Price')) return 'price';
    if (label.includes('SMA 20')) return 'sma20';
    if (label.includes('SMA 50')) return 'sma50';
    if (label.includes('EMA 12')) return 'ema12';
    if (label.includes('EMA 26')) return 'ema26';
    if (label.includes('RSI')) return 'rsi';
    if (label.includes('MACD Hist')) return 'macd';
    if (label.includes('MACD Signal')) return 'macd';
    if (label.includes('MACD')) return 'macd';
    return null;
  }

  function updateSignals() {
    if (!latestMetrics) {
      signalsContainer.innerHTML = '';
      return;
    }

    const { closes, rsi14, macdResult, signals } = latestMetrics;
    const latestIndex = closes.length - 1;
    const latestPrice = closes[latestIndex];
    const latestRsi = rsi14[latestIndex];
    const latestMacd = macdResult.macdLine[latestIndex];
    const latestSignal = macdResult.signalLine[latestIndex];
    const lastCrossover = signals.at(-1);
    const barsAgo = lastCrossover ? latestIndex - lastCrossover.index : null;
    const biasKey = lastCrossover
      ? lastCrossover.type === 'buy'
        ? 'bullish'
        : 'bearish'
      : 'neutral';
    const biasText = lastCrossover
      ? translator.t(`technicals.bias.${biasKey}`, { bars: barsAgo })
      : translator.t('technicals.bias.neutral');

    const rsiVisible = toggleState.rsi;
    const macdVisible = toggleState.macd;

    signalsContainer.innerHTML = `
      <div class="summary-card">
        <h3>${translator.t('technicals.summary.price')}</h3>
        <p>${formatters.currency(latestPrice)}</p>
      </div>
      ${
        rsiVisible
          ? `<div class="summary-card">
              <h3>${translator.t('technicals.summary.rsi')}</h3>
              <p>${formatters.number(latestRsi)}</p>
            </div>`
          : ''
      }
      ${
        macdVisible
          ? `<div class="summary-card">
              <h3>${translator.t('technicals.summary.macd')}</h3>
              <p>${formatters.number(latestMacd)} / ${formatters.number(latestSignal)}</p>
            </div>`
          : ''
      }
      <div class="summary-card">
        <h3>${translator.t('technicals.summary.bias')}</h3>
        <p>${biasText}</p>
      </div>
      <div class="signals">
        <h3>${translator.t('technicals.signals.title')}</h3>
        ${renderSignalList(signals)}
      </div>`;
  }

  function renderSignalList(signals) {
    if (!signals.length) {
      return `<p class="small-text">${translator.t('technicals.signals.empty')}</p>`;
    }
    return signals
      .slice(-5)
      .reverse()
      .map((signal) => {
        const klass = signal.type === 'buy' ? 'signal' : 'signal sell';
        return `<div class="${klass}">
          <strong>${translator.t(`common.signal.${signal.type}`)} • ${signal.date}</strong>
          <div>${translator.t('common.price')}: ${formatters.currency(signal.price)}</div>
        </div>`;
      })
      .join('');
  }

  function setFormatters(nextFormatters) {
    formatters = nextFormatters;
    return render();
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
