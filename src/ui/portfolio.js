import {
  portfolioToCsv,
  csvToPortfolio,
  downloadFile,
  readFile,
  portfolioToJson,
  jsonToPortfolio,
} from '../utils/csv.js';

export function createPortfolioModule({ store, dataProvider, translator, formatters }) {
  const form = document.getElementById('portfolio-form');
  const symbolInput = document.getElementById('portfolio-symbol');
  const sharesInput = document.getElementById('portfolio-shares');
  const priceInput = document.getElementById('portfolio-price');
  const tableBody = document.querySelector('#portfolio-table tbody');
  const summaryContainer = document.getElementById('portfolio-summary');
  const exportCsvBtn = document.getElementById('portfolio-export-csv');
  const exportJsonBtn = document.getElementById('portfolio-export-json');
  const importCsvBtn = document.getElementById('portfolio-import-csv');
  const importJsonBtn = document.getElementById('portfolio-import-json');
  const importFileInput = document.getElementById('portfolio-import-file');

  let currentFormatters = formatters;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const symbol = symbolInput.value.trim().toUpperCase();
    const shares = Number.parseFloat(sharesInput.value);
    const price = Number.parseFloat(priceInput.value);

    if (
      !symbol ||
      !Number.isFinite(shares) ||
      !Number.isFinite(price) ||
      shares <= 0 ||
      price <= 0
    ) {
      alert(translator.t('portfolio.form.invalid'));
      return;
    }

    const existing = store.state.portfolio.find((item) => item.symbol === symbol);
    if (existing) {
      const totalShares = existing.shares + shares;
      const totalCost = existing.avgCost * existing.shares + price * shares;
      existing.shares = Number(totalShares.toFixed(4));
      existing.avgCost = Number((totalCost / totalShares).toFixed(4));
    } else {
      store.state.portfolio.push({ symbol, shares, avgCost: price });
    }

    store.persist();
    symbolInput.value = symbol;
    form.reset();
    await render();
  });

  tableBody.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-action="remove"]');
    if (!button) return;
    const symbol = button.dataset.symbol;
    store.state.portfolio = store.state.portfolio.filter((item) => item.symbol !== symbol);
    store.persist();
    await render();
  });

  exportCsvBtn.addEventListener('click', () => {
    const csv = portfolioToCsv(store.state.portfolio);
    downloadFile('portfolio.csv', csv, 'text/csv');
  });

  exportJsonBtn.addEventListener('click', () => {
    const json = portfolioToJson(store.state.portfolio);
    downloadFile('portfolio.json', json, 'application/json');
  });

  importCsvBtn.addEventListener('click', () => {
    importFileInput.accept = '.csv';
    importFileInput.dataset.format = 'csv';
    importFileInput.click();
  });

  importJsonBtn.addEventListener('click', () => {
    importFileInput.accept = '.json';
    importFileInput.dataset.format = 'json';
    importFileInput.click();
  });

  importFileInput.addEventListener('change', async () => {
    if (!importFileInput.files?.length) return;
    const [file] = importFileInput.files;
    try {
      const text = await readFile(file);
      let entries;
      if (importFileInput.dataset.format === 'json') {
        entries = jsonToPortfolio(text);
      } else {
        entries = csvToPortfolio(text);
      }
      mergePortfolio(entries);
      store.persist();
      await render();
    } catch (error) {
      alert(`Import failed: ${error.message}`);
    } finally {
      importFileInput.value = '';
    }
  });

  function mergePortfolio(entries) {
    entries.forEach((entry) => {
      if (!entry.symbol || !Number.isFinite(entry.shares) || !Number.isFinite(entry.avgCost)) {
        return;
      }
      const symbol = entry.symbol.toUpperCase();
      const existing = store.state.portfolio.find((item) => item.symbol === symbol);
      if (existing) {
        const totalShares = existing.shares + entry.shares;
        const totalCost = existing.avgCost * existing.shares + entry.avgCost * entry.shares;
        existing.shares = Number(totalShares.toFixed(4));
        existing.avgCost = Number((totalCost / totalShares).toFixed(4));
      } else {
        store.state.portfolio.push({ symbol, shares: entry.shares, avgCost: entry.avgCost });
      }
    });
  }

  async function render() {
    const positions = store.state.portfolio;
    if (!positions.length) {
      tableBody.innerHTML = `<tr><td colspan="7">${translator.t('portfolio.empty')}</td></tr>`;
      summaryContainer.innerHTML = '';
      store.emit('portfolio:changed', []);
      return;
    }

    const rows = await Promise.all(
      positions.map(async (position) => {
        const quote = await dataProvider.getQuote(position.symbol);
        const lastPrice = quote.price;
        const value = position.shares * lastPrice;
        const cost = position.shares * position.avgCost;
        const pl = value - cost;
        const plPercent = cost === 0 ? 0 : pl / cost;
        return { ...position, lastPrice, value, cost, pl, plPercent };
      })
    );

    tableBody.innerHTML = rows
      .map((row) => {
        const plClass = row.pl >= 0 ? 'positive' : 'negative';
        return `<tr>
          <td>${row.symbol}</td>
          <td>${currentFormatters.number(row.shares)}</td>
          <td>${currentFormatters.currency(row.avgCost)}</td>
          <td>${currentFormatters.currency(row.lastPrice)}</td>
          <td>${currentFormatters.currency(row.value)}</td>
          <td class="${plClass}">${currentFormatters.currency(row.pl)} (${currentFormatters.percent(row.plPercent)})</td>
          <td><button data-action="remove" data-symbol="${row.symbol}" aria-label="${translator.t('common.remove')} ${row.symbol}">✕</button></td>
        </tr>`;
      })
      .join('');

    const totalCost = rows.reduce((sum, row) => sum + row.cost, 0);
    const totalValue = rows.reduce((sum, row) => sum + row.value, 0);
    const totalPL = totalValue - totalCost;
    const totalPercent = totalCost === 0 ? 0 : totalPL / totalCost;

    summaryContainer.innerHTML = `
      <div class="summary-card">
        <h3>${translator.t('portfolio.summary.value')}</h3>
        <p>${currentFormatters.currency(totalValue)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('portfolio.summary.cost')}</h3>
        <p>${currentFormatters.currency(totalCost)}</p>
      </div>
      <div class="summary-card">
        <h3>${translator.t('portfolio.summary.pl')}</h3>
        <p>${currentFormatters.currency(totalPL)} (${currentFormatters.percent(totalPercent)})</p>
      </div>`;

    store.emit('portfolio:changed', rows);
  }

  async function setFormatters(nextFormatters) {
    currentFormatters = nextFormatters;
    await render();
  }

  return {
    render,
    setFormatters,
    populateDefaults(defaultSymbol) {
      symbolInput.value = defaultSymbol;
    },
  };
}
