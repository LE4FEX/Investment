const STORAGE_KEY = "investment-toolkit-state";
const clone = (value) =>
  typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2
});

const percentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const defaultState = {
  settings: {
    apiKey: "",
    defaultSymbol: "AAPL"
  },
  portfolio: [],
  watchlist: [],
  alerts: []
};

const state = loadState();
const uiState = {
  activeQuoteSymbol: state.watchlist[0] || state.settings.defaultSymbol || "AAPL",
  technicalsSymbol: state.settings.defaultSymbol || "AAPL"
};

const DataService = (() => {
  const quoteCache = new Map();
  const seriesCache = new Map();

  async function fetchAlpha(params) {
    if (!state.settings.apiKey) throw new Error("Missing API key");
    const search = new URLSearchParams({ ...params, apikey: state.settings.apiKey });
    const url = `https://www.alphavantage.co/query?${search.toString()}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.Note || data["Error Message"] || Object.keys(data).length === 0) {
      throw new Error(data.Note || data["Error Message"] || "Alpha Vantage returned no data");
    }
    return data;
  }

  async function getQuote(symbol) {
    const key = symbol.toUpperCase();
    if (quoteCache.has(key)) return quoteCache.get(key);

    let quote;
    if (state.settings.apiKey) {
      try {
        const payload = await fetchAlpha({ function: "GLOBAL_QUOTE", symbol: key });
        const raw = payload["Global Quote"] || {};
        const price = parseFloat(raw["05. price"]);
        const prevClose = parseFloat(raw["08. previous close"]) || parseFloat(raw["02. open"]);
        const change = parseFloat(raw["09. change"]);
        const changePercent = raw["10. change percent"]
          ? parseFloat(raw["10. change percent"].replace("%", ""))
          : prevClose
          ? ((price - prevClose) / prevClose) * 100
          : 0;
        if (!Number.isFinite(price)) throw new Error("Invalid quote response");
        quote = {
          symbol: key,
          price,
          previousClose: prevClose || price,
          change: Number.isFinite(change) ? change : price - (prevClose || price),
          changePercent
        };
      } catch (error) {
        console.warn("Falling back to mock quote", error);
      }
    }

    if (!quote) {
      quote = MockData.getQuote(key);
    }

    quoteCache.set(key, quote);
    return quote;
  }

  async function getSeries(symbol, interval = "daily") {
    const key = `${symbol.toUpperCase()}-${interval}`;
    if (seriesCache.has(key)) return seriesCache.get(key);

    let series;
    if (state.settings.apiKey) {
      try {
        const fn = interval === "weekly" ? "TIME_SERIES_WEEKLY_ADJUSTED" : "TIME_SERIES_DAILY_ADJUSTED";
        const payload = await fetchAlpha({ function: fn, symbol: symbol.toUpperCase(), outputsize: "full" });
        const rawKey = interval === "weekly" ? "Weekly Adjusted Time Series" : "Time Series (Daily)";
        const rawSeries = payload[rawKey];
        if (!rawSeries) throw new Error("Missing time series data");
        series = Object.entries(rawSeries).map(([date, values]) => ({
          date,
          open: parseFloat(values["1. open"]) || parseFloat(values["1. open "]),
          high: parseFloat(values["2. high"]),
          low: parseFloat(values["3. low"]),
          close: parseFloat(values["4. close"]),
          adjustedClose: parseFloat(values["5. adjusted close"]) || parseFloat(values["5. adjusted close "]),
          volume: parseFloat(values["6. volume"]) || parseFloat(values["6. volume "])
        }));
        series = series
          .filter((item) => Number.isFinite(item.close))
          .sort((a, b) => new Date(a.date) - new Date(b.date));
      } catch (error) {
        console.warn("Falling back to mock series", error);
      }
    }

    if (!series) {
      series = MockData.getSeries(symbol, interval);
    }

    seriesCache.set(key, series);
    return series;
  }

  function clearCache() {
    quoteCache.clear();
    seriesCache.clear();
  }

  return { getQuote, getSeries, clearCache };
})();

const MockData = (() => {
  const cache = new Map();

  function seedFrom(symbol) {
    return symbol
      .toUpperCase()
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }

  function createRng(seed) {
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    return () => {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function generateSeries(symbol, interval) {
    const key = `${symbol.toUpperCase()}-${interval}`;
    if (cache.has(key)) return cache.get(key);

    const rng = createRng(seedFrom(symbol + interval));
    const today = new Date();
    const points = interval === "weekly" ? 260 : 520;
    let price = 30 + rng() * 200;
    const series = [];
    let cursor = new Date(today);

    for (let i = 0; i < points; i++) {
      if (interval === "weekly") {
        cursor.setDate(cursor.getDate() - 7);
      } else {
        do {
          cursor.setDate(cursor.getDate() - 1);
        } while (cursor.getDay() === 0 || cursor.getDay() === 6);
      }

      const drift = 0.015 + rng() * 0.025;
      const direction = rng() - 0.5;
      price = Math.max(5, price * (1 + direction * drift));
      const high = price * (1 + rng() * 0.02);
      const low = price * (1 - rng() * 0.02);
      const open = (high + low) / 2;
      const close = price;
      const volumeBase = interval === "weekly" ? 7.5e6 : 1.5e6;
      const volume = Math.round(volumeBase * (0.7 + rng() * 0.6));

      series.push({
        date: formatDate(cursor),
        open,
        high,
        low,
        close,
        adjustedClose: close,
        volume
      });
      cursor = new Date(cursor);
    }

    series.sort((a, b) => new Date(a.date) - new Date(b.date));
    cache.set(key, series);
    return series;
  }

  function getQuote(symbol) {
    const series = generateSeries(symbol, "daily");
    const last = series[series.length - 1];
    const prev = series[series.length - 2] || last;
    const change = last.close - prev.close;
    const changePercent = (change / prev.close) * 100;
    return {
      symbol,
      price: last.close,
      previousClose: prev.close,
      change,
      changePercent
    };
  }

  function getSeries(symbol, interval) {
    return clone(generateSeries(symbol, interval));
  }

  return { getSeries, getQuote };
})();

const Indicators = {
  sma(values, period) {
    const result = new Array(values.length).fill(null);
    const queue = [];
    let sum = 0;
    values.forEach((value, index) => {
      if (!Number.isFinite(value)) return;
      queue.push(value);
      sum += value;
      if (queue.length > period) {
        sum -= queue.shift();
      }
      if (queue.length === period) {
        result[index] = sum / period;
      }
    });
    return result;
  },

  ema(values, period) {
    const result = new Array(values.length).fill(null);
    const k = 2 / (period + 1);
    let previous;
    values.forEach((value, index) => {
      if (!Number.isFinite(value)) return;
      if (previous === undefined) {
        previous = value;
      } else {
        previous = value * k + previous * (1 - k);
      }
      if (index >= period - 1) {
        result[index] = previous;
      }
    });
    return result;
  },

  rsi(values, period = 14) {
    const result = new Array(values.length).fill(null);
    let gainSum = 0;
    let lossSum = 0;

    for (let i = 1; i < values.length; i++) {
      const change = values[i] - values[i - 1];
      const gain = Math.max(0, change);
      const loss = Math.max(0, -change);

      if (i <= period) {
        gainSum += gain;
        lossSum += loss;
        if (i === period) {
          const avgGain = gainSum / period;
          const avgLoss = lossSum / period;
          const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
          result[i] = 100 - 100 / (1 + rs);
        }
      } else {
        gainSum = (gainSum * (period - 1) + gain) / period;
        lossSum = (lossSum * (period - 1) + loss) / period;
        const rs = lossSum === 0 ? 100 : gainSum / lossSum;
        result[i] = 100 - 100 / (1 + rs);
      }
    }

    return result;
  },

  macd(values, fast = 12, slow = 26, signalPeriod = 9) {
    const emaFast = this.ema(values, fast);
    const emaSlow = this.ema(values, slow);
    const macdLine = values.map((_, index) => {
      if (emaFast[index] === null || emaSlow[index] === null) return null;
      return emaFast[index] - emaSlow[index];
    });
    const signalLine = this.ema(macdLine.map((v) => (v === null ? 0 : v)), signalPeriod).map((v, index) =>
      macdLine[index] === null ? null : v
    );
    const histogram = macdLine.map((value, index) =>
      value === null || signalLine[index] === null ? null : value - signalLine[index]
    );
    return { macdLine, signalLine, histogram };
  },

  crossoverSignals(series, shortPeriod, longPeriod) {
    const closes = series.map((point) => point.close);
    const shortMA = this.sma(closes, shortPeriod);
    const longMA = this.sma(closes, longPeriod);
    const signals = [];

    for (let i = 1; i < series.length; i++) {
      const prevShort = shortMA[i - 1];
      const prevLong = longMA[i - 1];
      const currShort = shortMA[i];
      const currLong = longMA[i];

      if ([prevShort, prevLong, currShort, currLong].some((value) => value === null)) continue;

      if (prevShort <= prevLong && currShort > currLong) {
        signals.push({ type: "buy", index: i, date: series[i].date, price: series[i].close });
      }
      if (prevShort >= prevLong && currShort < currLong) {
        signals.push({ type: "sell", index: i, date: series[i].date, price: series[i].close });
      }
    }

    return { shortMA, longMA, signals };
  }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      settings: { ...defaultState.settings, ...parsed.settings },
      portfolio: parsed.portfolio ?? [],
      watchlist: parsed.watchlist ?? [],
      alerts: parsed.alerts ?? []
    };
  } catch (error) {
    console.error("Failed to load state", error);
    return clone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState() {
  Object.assign(state, clone(defaultState));
  saveState();
  DataService.clearCache();
}

const Dom = {
  panels: document.querySelectorAll(".panel"),
  navButtons: document.querySelectorAll(".nav-btn"),
  portfolio: {
    form: document.getElementById("portfolio-form"),
    symbol: document.getElementById("portfolio-symbol"),
    shares: document.getElementById("portfolio-shares"),
    price: document.getElementById("portfolio-price"),
    tableBody: document.querySelector("#portfolio-table tbody"),
    summary: document.getElementById("portfolio-summary")
  },
  quotes: {
    form: document.getElementById("quotes-form"),
    symbol: document.getElementById("quotes-symbol"),
    list: document.getElementById("quotes-list"),
    chart: document.getElementById("price-chart")
  },
  technicals: {
    form: document.getElementById("technicals-form"),
    symbol: document.getElementById("technicals-symbol"),
    interval: document.getElementById("technicals-interval"),
    chart: document.getElementById("technicals-chart"),
    signals: document.getElementById("technicals-signals")
  },
  backtest: {
    form: document.getElementById("backtest-form"),
    symbol: document.getElementById("backtest-symbol"),
    shortInput: document.getElementById("backtest-short"),
    longInput: document.getElementById("backtest-long"),
    results: document.getElementById("backtest-results"),
    chart: document.getElementById("backtest-chart")
  },
  dca: {
    form: document.getElementById("dca-form"),
    symbol: document.getElementById("dca-symbol"),
    amount: document.getElementById("dca-amount"),
    months: document.getElementById("dca-months"),
    results: document.getElementById("dca-results"),
    chart: document.getElementById("dca-chart")
  },
  alerts: {
    form: document.getElementById("alerts-form"),
    symbol: document.getElementById("alerts-symbol"),
    rsiLow: document.getElementById("alerts-rsi-low"),
    rsiHigh: document.getElementById("alerts-rsi-high"),
    list: document.getElementById("alerts-list")
  },
  settings: {
    form: document.getElementById("settings-form"),
    apiKey: document.getElementById("settings-api-key"),
    defaultSymbol: document.getElementById("settings-default-symbol"),
    reset: document.getElementById("settings-reset")
  }
};

const charts = {
  price: null,
  technicals: null,
  backtest: null,
  dca: null
};

setupNavigation();
wireForms();
bootstrapState();
renderPortfolio();
renderWatchlist();
renderAlerts();
renderTechnicals(
  Dom.technicals.symbol.value.trim().toUpperCase(),
  Dom.technicals.interval.value
);
renderBacktest(
  Dom.backtest.symbol.value.trim().toUpperCase(),
  parseInt(Dom.backtest.shortInput.value, 10) || 50,
  parseInt(Dom.backtest.longInput.value, 10) || 200
);
renderDca(
  Dom.dca.symbol.value.trim().toUpperCase(),
  parseFloat(Dom.dca.amount.value) || 100,
  parseInt(Dom.dca.months.value, 10) || 12
);

function setupNavigation() {
  Dom.navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      Dom.navButtons.forEach((nav) => nav.classList.toggle("active", nav === btn));
      Dom.panels.forEach((panel) => panel.classList.toggle("active", panel.id === target));
    });
  });
}

function wireForms() {
  Dom.portfolio.form.addEventListener("submit", handlePortfolioSubmit);
  Dom.portfolio.tableBody.addEventListener("click", handlePortfolioTableClick);

  Dom.quotes.form.addEventListener("submit", handleQuotesSubmit);
  Dom.quotes.list.addEventListener("click", handleWatchlistClick);

  Dom.technicals.form.addEventListener("submit", handleTechnicalsSubmit);
  Dom.backtest.form.addEventListener("submit", handleBacktestSubmit);
  Dom.dca.form.addEventListener("submit", handleDcaSubmit);

  Dom.alerts.form.addEventListener("submit", handleAlertsSubmit);
  Dom.alerts.list.addEventListener("click", handleAlertsListClick);

  Dom.settings.form.addEventListener("submit", handleSettingsSubmit);
  Dom.settings.reset.addEventListener("click", handleSettingsReset);
}

function bootstrapState() {
  Dom.settings.apiKey.value = state.settings.apiKey;
  Dom.settings.defaultSymbol.value = state.settings.defaultSymbol;

  const defaultSymbol = (state.settings.defaultSymbol || "AAPL").toUpperCase();
  if (!state.watchlist.length) {
    state.watchlist.push(defaultSymbol);
    saveState();
  }

  Dom.portfolio.symbol.value = defaultSymbol;
  Dom.quotes.symbol.value = "";
  Dom.technicals.symbol.value = defaultSymbol;
  Dom.backtest.symbol.value = defaultSymbol;
  Dom.dca.symbol.value = defaultSymbol;
  Dom.alerts.symbol.value = defaultSymbol;

  uiState.activeQuoteSymbol = state.watchlist.includes(defaultSymbol)
    ? defaultSymbol
    : state.watchlist[0];
  uiState.technicalsSymbol = defaultSymbol;
}

async function handlePortfolioSubmit(event) {
  event.preventDefault();
  const symbol = Dom.portfolio.symbol.value.trim().toUpperCase();
  const shares = parseFloat(Dom.portfolio.shares.value);
  const price = parseFloat(Dom.portfolio.price.value);

  if (!symbol || !Number.isFinite(shares) || !Number.isFinite(price) || shares <= 0 || price <= 0) {
    alert("Enter valid symbol, shares, and price");
    return;
  }

  const existing = state.portfolio.find((item) => item.symbol === symbol);
  if (existing) {
    const totalShares = existing.shares + shares;
    const totalCost = existing.avgCost * existing.shares + price * shares;
    existing.shares = Number(totalShares.toFixed(4));
    existing.avgCost = Number((totalCost / totalShares).toFixed(4));
  } else {
    state.portfolio.push({ symbol, shares, avgCost: price });
  }

  saveState();
  await renderPortfolio();
  Dom.portfolio.form.reset();
  Dom.portfolio.symbol.value = symbol;
}

async function handlePortfolioTableClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const symbol = button.dataset.symbol;
  if (!symbol) return;

  if (button.dataset.action === "remove") {
    state.portfolio = state.portfolio.filter((item) => item.symbol !== symbol);
    saveState();
    await renderPortfolio();
  }
}

async function renderPortfolio() {
  const positions = state.portfolio;
  if (!positions.length) {
    Dom.portfolio.tableBody.innerHTML = `<tr><td colspan="7">No holdings yet. Add a position to get started.</td></tr>`;
    Dom.portfolio.summary.innerHTML = "";
    return;
  }

  const rows = await Promise.all(
    positions.map(async (position) => {
      const quote = await DataService.getQuote(position.symbol);
      const lastPrice = quote.price;
      const value = position.shares * lastPrice;
      const cost = position.shares * position.avgCost;
      const pl = value - cost;
      const plPercent = cost === 0 ? 0 : (pl / cost) * 100;
      return {
        ...position,
        lastPrice,
        value,
        cost,
        pl,
        plPercent
      };
    })
  );

  Dom.portfolio.tableBody.innerHTML = rows
    .map((row) => {
      const plClass = row.pl >= 0 ? "positive" : "negative";
      return `<tr>
        <td>${row.symbol}</td>
        <td>${numberFormatter.format(row.shares)}</td>
        <td>${currencyFormatter.format(row.avgCost)}</td>
        <td>${currencyFormatter.format(row.lastPrice)}</td>
        <td>${currencyFormatter.format(row.value)}</td>
        <td class="${plClass}">${currencyFormatter.format(row.pl)} (${percentFormatter.format(row.plPercent / 100)})</td>
        <td><button data-action="remove" data-symbol="${row.symbol}">Remove</button></td>
      </tr>`;
    })
    .join("");

  const totalCost = rows.reduce((sum, row) => sum + row.cost, 0);
  const totalValue = rows.reduce((sum, row) => sum + row.value, 0);
  const totalPL = totalValue - totalCost;
  const totalPercent = totalCost === 0 ? 0 : (totalPL / totalCost) * 100;

  Dom.portfolio.summary.innerHTML = `
    <div class="summary-card">
      <h3>Portfolio Value</h3>
      <p>${currencyFormatter.format(totalValue)}</p>
    </div>
    <div class="summary-card">
      <h3>Total Cost Basis</h3>
      <p>${currencyFormatter.format(totalCost)}</p>
    </div>
    <div class="summary-card">
      <h3>Unrealized P/L</h3>
      <p>${currencyFormatter.format(totalPL)} (${percentFormatter.format(totalPercent / 100)})</p>
    </div>`;
}

async function handleQuotesSubmit(event) {
  event.preventDefault();
  const symbol = Dom.quotes.symbol.value.trim().toUpperCase();
  if (!symbol) return;
  if (!state.watchlist.includes(symbol)) {
    state.watchlist.push(symbol);
    saveState();
  }
  uiState.activeQuoteSymbol = symbol;
  Dom.quotes.form.reset();
  await renderWatchlist();
}

async function handleWatchlistClick(event) {
  const card = event.target.closest(".card[data-symbol]");
  if (!card) return;

  if (event.target.matches("button[data-action=remove]") || event.target.closest("button[data-action=remove]")) {
    const symbol = card.dataset.symbol;
    state.watchlist = state.watchlist.filter((item) => item !== symbol);
    if (uiState.activeQuoteSymbol === symbol) {
      uiState.activeQuoteSymbol = state.watchlist[0] || state.settings.defaultSymbol || "AAPL";
    }
    saveState();
    await renderWatchlist();
    return;
  }

  uiState.activeQuoteSymbol = card.dataset.symbol;
  await renderWatchlist();
}

async function renderWatchlist() {
  if (!state.watchlist.length) {
    Dom.quotes.list.innerHTML = `<p class="small-text">No symbols yet. Add one to start tracking quotes.</p>`;
    if (charts.price) {
      charts.price.destroy();
      charts.price = null;
    }
    return;
  }

  const cards = await Promise.all(
    state.watchlist.map(async (symbol) => {
      const quote = await DataService.getQuote(symbol);
      return { symbol, quote };
    })
  );

  Dom.quotes.list.innerHTML = cards
    .map(({ symbol, quote }) => {
      const changeClass = quote.change >= 0 ? "positive" : "negative";
      const active = symbol === uiState.activeQuoteSymbol ? "active" : "";
      return `<div class="card ${active}" data-symbol="${symbol}">
        <div class="card-header">
          <div>
            <strong>${symbol}</strong>
            <div class="small-text">Last: ${currencyFormatter.format(quote.price)}</div>
          </div>
          <button data-action="remove" aria-label="Remove ${symbol}">×</button>
        </div>
        <div class="card-body ${changeClass}">
          ${currencyFormatter.format(quote.change)} (${percentFormatter.format(quote.changePercent / 100)})
        </div>
      </div>`;
    })
    .join("");

  const activeSymbol = uiState.activeQuoteSymbol || cards[0].symbol;
  uiState.activeQuoteSymbol = activeSymbol;
  await renderQuoteChart(activeSymbol);
}

async function renderQuoteChart(symbol) {
  const series = await DataService.getSeries(symbol, "daily");
  const recent = series.slice(-180);
  const labels = recent.map((point) => point.date);
  const closes = recent.map((point) => point.close);
  const sma20 = Indicators.sma(closes, 20);
  const sma50 = Indicators.sma(closes, 50);

  if (charts.price) {
    charts.price.destroy();
  }

  const context = Dom.quotes.chart.getContext("2d");
  charts.price = new Chart(context, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: `${symbol} Close`,
          data: closes,
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56, 189, 248, 0.2)",
          tension: 0.15,
          fill: false
        },
        {
          label: "SMA 20",
          data: sma20,
          borderColor: "#22c55e",
          borderDash: [4, 4],
          tension: 0.15,
          fill: false
        },
        {
          label: "SMA 50",
          data: sma50,
          borderColor: "#f97316",
          borderDash: [6, 6],
          tension: 0.15,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#e2e8f0"
          }
        },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${currencyFormatter.format(context.parsed.y)}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#94a3b8" },
          grid: { color: "rgba(148, 163, 184, 0.1)" }
        },
        y: {
          ticks: { color: "#94a3b8" },
          grid: { color: "rgba(148, 163, 184, 0.1)" }
        }
      }
    }
  });
}

async function handleTechnicalsSubmit(event) {
  event.preventDefault();
  const symbol = Dom.technicals.symbol.value.trim().toUpperCase();
  const interval = Dom.technicals.interval.value;
  if (!symbol) return;
  uiState.technicalsSymbol = symbol;
  await renderTechnicals(symbol, interval);
}

async function renderTechnicals(symbol, interval) {
  if (!symbol) return;
  const series = await DataService.getSeries(symbol, interval);
  const closes = series.map((point) => point.close);
  const labels = series.map((point) => point.date);

  const sma20 = Indicators.sma(closes, 20);
  const sma50 = Indicators.sma(closes, 50);
  const ema12 = Indicators.ema(closes, 12);
  const ema26 = Indicators.ema(closes, 26);
  const rsi14 = Indicators.rsi(closes, 14);
  const macd = Indicators.macd(closes);
  const { shortMA, longMA, signals } = Indicators.crossoverSignals(series, 20, 50);

  if (charts.technicals) {
    charts.technicals.destroy();
  }

  const context = Dom.technicals.chart.getContext("2d");
  charts.technicals = new Chart(context, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: `${symbol} Close`,
          data: closes,
          borderColor: "#38bdf8",
          fill: false,
          tension: 0.1
        },
        {
          label: "SMA 20",
          data: sma20,
          borderColor: "#22c55e",
          borderDash: [5, 5],
          tension: 0.1,
          fill: false
        },
        {
          label: "SMA 50",
          data: sma50,
          borderColor: "#f97316",
          borderDash: [6, 6],
          tension: 0.1,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "#e2e8f0" }
        },
        tooltip: {
          callbacks: {
            label(context) {
              if (context.dataset.label.includes("SMA")) {
                return `${context.dataset.label}: ${currencyFormatter.format(context.parsed.y)}`;
              }
              return `${context.dataset.label}: ${currencyFormatter.format(context.parsed.y)}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#94a3b8" },
          grid: { color: "rgba(148, 163, 184, 0.1)" }
        },
        y: {
          ticks: { color: "#94a3b8" },
          grid: { color: "rgba(148, 163, 184, 0.1)" }
        }
      }
    }
  });

  const latestIndex = closes.length - 1;
  const latestPrice = closes[latestIndex];
  const latestRsi = rsi14[latestIndex];
  const latestMacd = macd.macdLine[latestIndex];
  const latestSignal = macd.signalLine[latestIndex];
  const histogram = macd.histogram[latestIndex];
  const lastSignal = signals.slice(-1)[0];

  const bias = (() => {
    if (!lastSignal) return "Neutral";
    const daysAgo = latestIndex - lastSignal.index;
    const word = lastSignal.type === "buy" ? "Bullish" : "Bearish";
    return `${word} (signal ${daysAgo} bars ago)`;
  })();

  Dom.technicals.signals.innerHTML = `
    <div class="summary-card">
      <h3>Last Price</h3>
      <p>${currencyFormatter.format(latestPrice)}</p>
    </div>
    <div class="summary-card">
      <h3>RSI (14)</h3>
      <p>${numberFormatter.format(latestRsi ?? 0)}</p>
    </div>
    <div class="summary-card">
      <h3>MACD</h3>
      <p>${numberFormatter.format(latestMacd ?? 0)} / ${numberFormatter.format(latestSignal ?? 0)}</p>
    </div>
    <div class="summary-card">
      <h3>Bias</h3>
      <p>${bias}</p>
    </div>
    <div class="signals">
      <h3>Recent Signals</h3>
      ${signals
        .slice(-5)
        .reverse()
        .map((signal) => {
          const klass = signal.type === "buy" ? "signal" : "signal sell";
          return `<div class="${klass}">
            <strong>${signal.type.toUpperCase()} &bull; ${signal.date}</strong>
            <div>Price: ${currencyFormatter.format(signal.price)}</div>
          </div>`;
        })
        .join("") || "<p class=\"small-text\">No crossover signals yet.</p>"}
    </div>`;
}

async function handleBacktestSubmit(event) {
  event.preventDefault();
  const symbol = Dom.backtest.symbol.value.trim().toUpperCase();
  const shortPeriod = parseInt(Dom.backtest.shortInput.value, 10) || 50;
  const longPeriod = parseInt(Dom.backtest.longInput.value, 10) || 200;
  if (!symbol || shortPeriod >= longPeriod) {
    alert("Enter valid symbol and ensure Short MA < Long MA");
    return;
  }
  await renderBacktest(symbol, shortPeriod, longPeriod);
}

async function renderBacktest(symbol, shortPeriod, longPeriod) {
  if (!symbol || shortPeriod >= longPeriod) return;
  const series = await DataService.getSeries(symbol, "daily");
  const closes = series.map((point) => point.close);
  const { shortMA, longMA, signals } = Indicators.crossoverSignals(series, shortPeriod, longPeriod);
  const capital = 10000;
  let cash = capital;
  let shares = 0;
  const equityCurve = [];
  const trades = [];

  series.forEach((point, index) => {
    const signal = signals.find((item) => item.index === index);
    if (signal && signal.type === "buy" && shares === 0) {
      shares = cash / point.close;
      cash = 0;
      trades.push({ type: "buy", date: point.date, price: point.close });
    } else if (signal && signal.type === "sell" && shares > 0) {
      cash += shares * point.close;
      trades.push({ type: "sell", date: point.date, price: point.close });
      shares = 0;
    }

    const equity = cash + shares * point.close;
    equityCurve.push({ date: point.date, value: equity });
  });

  if (shares > 0) {
    const lastPrice = series[series.length - 1].close;
    cash += shares * lastPrice;
    trades.push({ type: "sell", date: series[series.length - 1].date, price: lastPrice });
    shares = 0;
  }

  const finalValue = cash;
  const buyHoldShares = capital / series[0].close;
  const buyHoldCurve = series.map((point) => ({ date: point.date, value: buyHoldShares * point.close }));
  const buyHoldValue = buyHoldCurve[buyHoldCurve.length - 1].value;

  const totalReturn = (finalValue - capital) / capital;
  const buyHoldReturn = (buyHoldValue - capital) / capital;

  const startDate = new Date(series[0].date);
  const endDate = new Date(series[series.length - 1].date);
  const years = Math.max(1 / 365, (endDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  const cagr = Math.pow(finalValue / capital, 1 / years) - 1;
  const buyHoldCagr = Math.pow(buyHoldValue / capital, 1 / years) - 1;

  const winningTrades = trades.filter((trade, index) => {
    if (trade.type !== "sell") return false;
    const entry = trades.slice(0, index).reverse().find((t) => t.type === "buy");
    if (!entry) return false;
    return trade.price > entry.price;
  }).length;
  const completedTrades = trades.filter((trade) => trade.type === "sell").length;

  Dom.backtest.results.innerHTML = `
    <div class="summary-card">
      <h3>Strategy Return</h3>
      <p>${percentFormatter.format(totalReturn)}</p>
    </div>
    <div class="summary-card">
      <h3>Strategy CAGR</h3>
      <p>${percentFormatter.format(cagr)}</p>
    </div>
    <div class="summary-card">
      <h3>Buy & Hold Return</h3>
      <p>${percentFormatter.format(buyHoldReturn)}</p>
    </div>
    <div class="summary-card">
      <h3>Buy & Hold CAGR</h3>
      <p>${percentFormatter.format(buyHoldCagr)}</p>
    </div>
    <div class="summary-card">
      <h3>Completed Trades</h3>
      <p>${completedTrades} (${percentFormatter.format((winningTrades / Math.max(1, completedTrades)) || 0)})</p>
    </div>`;

  if (charts.backtest) {
    charts.backtest.destroy();
  }

  const labels = equityCurve.map((point) => point.date);
  charts.backtest = new Chart(Dom.backtest.chart.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Strategy Equity",
          data: equityCurve.map((point) => point.value),
          borderColor: "#38bdf8",
          tension: 0.1,
          fill: false
        },
        {
          label: "Buy & Hold",
          data: buyHoldCurve.map((point) => point.value),
          borderColor: "#22c55e",
          tension: 0.1,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#e2e8f0" } }
      },
      scales: {
        x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148, 163, 184, 0.1)" } },
        y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148, 163, 184, 0.1)" } }
      }
    }
  });
}

async function handleDcaSubmit(event) {
  event.preventDefault();
  const symbol = Dom.dca.symbol.value.trim().toUpperCase();
  const monthlyAmount = parseFloat(Dom.dca.amount.value);
  const months = parseInt(Dom.dca.months.value, 10);
  if (!symbol || !Number.isFinite(monthlyAmount) || monthlyAmount <= 0 || !Number.isFinite(months) || months <= 0) {
    alert("Enter valid symbol, monthly amount, and months");
    return;
  }
  await renderDca(symbol, monthlyAmount, months);
}

async function renderDca(symbol, monthlyAmount, months) {
  if (!symbol || !Number.isFinite(monthlyAmount) || !Number.isFinite(months)) return;
  const series = await DataService.getSeries(symbol, "daily");
  const monthlyPoints = selectMonthlySeries(series, months);
  if (!monthlyPoints.length) {
    Dom.dca.results.innerHTML = `<p class="small-text">Not enough data for DCA simulation.</p>`;
    return;
  }

  let invested = 0;
  let shares = 0;
  const progress = monthlyPoints.map((point) => {
    invested += monthlyAmount;
    const purchaseShares = monthlyAmount / point.price;
    shares += purchaseShares;
    return {
      date: point.date,
      invested,
      shares,
      value: shares * point.price
    };
  });

  const latestPrice = series[series.length - 1].close;
  const currentValue = shares * latestPrice;
  const gain = currentValue - invested;
  const gainPercent = invested === 0 ? 0 : gain / invested;

  Dom.dca.results.innerHTML = `
    <div class="summary-card">
      <h3>Total Invested</h3>
      <p>${currencyFormatter.format(invested)}</p>
    </div>
    <div class="summary-card">
      <h3>Total Shares</h3>
      <p>${numberFormatter.format(shares)}</p>
    </div>
    <div class="summary-card">
      <h3>Current Value</h3>
      <p>${currencyFormatter.format(currentValue)}</p>
    </div>
    <div class="summary-card">
      <h3>Net Gain</h3>
      <p>${currencyFormatter.format(gain)} (${percentFormatter.format(gainPercent)})</p>
    </div>`;

  if (charts.dca) {
    charts.dca.destroy();
  }

  charts.dca = new Chart(Dom.dca.chart.getContext("2d"), {
    type: "line",
    data: {
      labels: progress.map((item) => item.date),
      datasets: [
        {
          label: "Invested",
          data: progress.map((item) => item.invested),
          borderColor: "#94a3b8",
          tension: 0.1,
          fill: false
        },
        {
          label: "Value",
          data: progress.map((item) => item.value),
          borderColor: "#38bdf8",
          tension: 0.1,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#e2e8f0" } }
      },
      scales: {
        x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148, 163, 184, 0.1)" } },
        y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(148, 163, 184, 0.1)" } }
      }
    }
  });
}

function selectMonthlySeries(series, months) {
  const map = new Map();
  for (let i = series.length - 1; i >= 0 && map.size < months; i--) {
    const point = series[i];
    const month = point.date.slice(0, 7);
    if (!map.has(month)) {
      map.set(month, { date: point.date, price: point.close });
    }
  }
  return Array.from(map.values()).sort((a, b) => new Date(a.date) - new Date(b.date));
}

async function handleAlertsSubmit(event) {
  event.preventDefault();
  const symbol = Dom.alerts.symbol.value.trim().toUpperCase();
  const rsiLow = parseFloat(Dom.alerts.rsiLow.value);
  const rsiHigh = parseFloat(Dom.alerts.rsiHigh.value);
  if (!symbol || !Number.isFinite(rsiLow) || !Number.isFinite(rsiHigh) || rsiLow >= rsiHigh) {
    alert("Enter valid symbol and RSI thresholds");
    return;
  }

  state.alerts.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    symbol,
    rsiLow,
    rsiHigh
  });
  saveState();
  Dom.alerts.form.reset();
  Dom.alerts.symbol.value = symbol;
  await renderAlerts();
}

async function handleAlertsListClick(event) {
  const button = event.target.closest("button[data-action=remove]");
  if (!button) return;
  const id = button.dataset.id;
  state.alerts = state.alerts.filter((alert) => alert.id !== id);
  saveState();
  await renderAlerts();
}

async function renderAlerts() {
  if (!state.alerts.length) {
    Dom.alerts.list.innerHTML = `<p class="small-text">No alerts configured. Add one to monitor RSI triggers.</p>`;
    return;
  }

  const cards = await Promise.all(
    state.alerts.map(async (alert) => {
      const series = await DataService.getSeries(alert.symbol, "daily");
      const closes = series.map((point) => point.close);
      const rsi = Indicators.rsi(closes, 14);
      const latestRsi = rsi[rsi.length - 1];
      let status = "Neutral";
      let statusClass = "card";
      if (latestRsi <= alert.rsiLow) {
        status = "Oversold";
        statusClass = "card signal";
      } else if (latestRsi >= alert.rsiHigh) {
        status = "Overbought";
        statusClass = "card signal sell";
      }
      const lastPrice = closes[closes.length - 1];
      return {
        html: `<div class="${statusClass}" data-id="${alert.id}">
          <div class="card-header">
            <div>
              <strong>${alert.symbol}</strong>
              <div class="small-text">Last: ${currencyFormatter.format(lastPrice)}</div>
            </div>
            <button data-action="remove" data-id="${alert.id}">×</button>
          </div>
          <div class="card-body">
            RSI: ${numberFormatter.format(latestRsi)}<br />
            Low: ${alert.rsiLow} / High: ${alert.rsiHigh}<br />
            Status: ${status}
          </div>
        </div>`
      };
    })
  );

  Dom.alerts.list.innerHTML = cards.map((card) => card.html).join("");
}

function handleSettingsSubmit(event) {
  event.preventDefault();
  state.settings.apiKey = Dom.settings.apiKey.value.trim();
  state.settings.defaultSymbol = Dom.settings.defaultSymbol.value.trim().toUpperCase() || "AAPL";
  saveState();
  DataService.clearCache();
  bootstrapState();
  renderPortfolio();
  renderWatchlist();
  renderAlerts();
  alert("Settings saved.");
}

function handleSettingsReset() {
  if (!confirm("Reset all data?")) return;
  resetState();
  bootstrapState();
  renderPortfolio();
  renderWatchlist();
  renderAlerts();
  alert("Application reset.");
}
