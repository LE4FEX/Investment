import { rsi } from '../core/indicators.js';

export function createAlertsModule({ store, dataProvider, translator, formatters }) {
  const form = document.getElementById('alerts-form');
  const symbolInput = document.getElementById('alerts-symbol');
  const rsiLowInput = document.getElementById('alerts-rsi-low');
  const rsiHighInput = document.getElementById('alerts-rsi-high');
  const listContainer = document.getElementById('alerts-list');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const symbol = symbolInput.value.trim().toUpperCase();
    const rsiLow = Number.parseFloat(rsiLowInput.value);
    const rsiHigh = Number.parseFloat(rsiHighInput.value);

    if (!symbol || !Number.isFinite(rsiLow) || !Number.isFinite(rsiHigh) || rsiLow >= rsiHigh) {
      alert(translator.t('alerts.form.invalid'));
      return;
    }

    store.state.alerts.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      symbol,
      rsiLow,
      rsiHigh,
    });
    store.persist();
    form.reset();
    symbolInput.value = symbol;
    await render();
  });

  listContainer.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-action="remove"]');
    if (!button) return;
    const id = button.dataset.id;
    store.state.alerts = store.state.alerts.filter((alert) => alert.id !== id);
    store.persist();
    await render();
  });

  async function render() {
    if (!store.state.alerts.length) {
      listContainer.innerHTML = `<p class="small-text">${translator.t('alerts.empty')}</p>`;
      return;
    }

    const cards = await Promise.all(
      store.state.alerts.map(async (alert) => {
        const series = await dataProvider.getSeries(alert.symbol, 'daily');
        const closes = series.map((point) => point.close);
        const rsiValues = rsi(closes, 14);
        const latestRsi = rsiValues.at(-1);
        const lastPrice = closes.at(-1);
        let statusKey = 'neutral';
        if (latestRsi <= alert.rsiLow) {
          statusKey = 'oversold';
        } else if (latestRsi >= alert.rsiHigh) {
          statusKey = 'overbought';
        }
        return {
          alert,
          lastPrice,
          latestRsi,
          statusKey,
        };
      })
    );

    listContainer.innerHTML = cards
      .map((card) => {
        const statusClass =
          card.statusKey === 'oversold'
            ? 'card signal'
            : card.statusKey === 'overbought'
              ? 'card signal sell'
              : 'card';
        const statusText = translator.t(`alerts.status.${card.statusKey}`);
        return `<div class="${statusClass}" data-id="${card.alert.id}">
          <div class="card-header">
            <div>
              <strong>${card.alert.symbol}</strong>
              <div class="small-text">${translator.t('quotes.card.last')}: ${formatters.currency(card.lastPrice)}</div>
            </div>
            <button data-action="remove" data-id="${card.alert.id}" aria-label="${translator.t('common.remove')} ${card.alert.symbol}">✕</button>
          </div>
          <div class="card-body">
            ${translator.t('alerts.card.rsi', { value: formatters.number(card.latestRsi) })}<br />
            ${translator.t('alerts.card.thresholds', {
              low: formatters.number(card.alert.rsiLow),
              high: formatters.number(card.alert.rsiHigh),
            })}<br />
            ${translator.t('alerts.card.status', { status: statusText })}
          </div>
        </div>`;
      })
      .join('');
  }

  function populateDefaults(defaultSymbol) {
    symbolInput.value = defaultSymbol;
  }

  function setFormatters(nextFormatters) {
    formatters = nextFormatters;
    render();
  }

  return {
    render,
    populateDefaults,
    setFormatters,
  };
}
