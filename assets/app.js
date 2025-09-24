const STORAGE_KEY = "investment-toolkit-state";
const runtimeConfig = window.__ENV__ || window.env || {};
const clone = (value) =>
  typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));

const languageOptions = {
  en: { label: "English", locale: "en-US", htmlLang: "en" },
  th: { label: "ไทย", locale: "th-TH", htmlLang: "th" }
};

const currencyOptions = [
  { code: "USD", label: "USD — US Dollar" },
  { code: "THB", label: "THB — Thai Baht" },
  { code: "EUR", label: "EUR — Euro" },
  { code: "JPY", label: "JPY — Japanese Yen" }
];

const translations = {
  en: {
    app: { title: "Investment Toolkit" },
    nav: {
      portfolio: "Portfolio",
      quotes: "Quotes",
      technicals: "Technicals",
      backtest: "Backtest",
      dca: "DCA",
      alerts: "Alerts",
      settings: "Settings"
    },
    header: {
      controls: {
        language: "Language",
        currency: "Currency",
        apiStatus: "API Status"
      }
    },
    placeholders: {
      symbol: "e.g. AAPL",
      apiKey: "Enter API key"
    },
    portfolio: {
      heading: "Portfolio Tracker",
      form: {
        symbol: "Ticker",
        shares: "Shares",
        price: "Price",
        submit: "Add Position",
        invalid: "Enter valid symbol, shares, and price"
      },
      table: {
        symbol: "Symbol",
        shares: "Shares",
        avgCost: "Avg Cost",
        lastPrice: "Last Price",
        value: "Value",
        pl: "P/L"
      },
      empty: "No holdings yet. Add a position to get started.",
      summary: {
        value: "Portfolio Value",
        cost: "Total Cost Basis",
        pl: "Unrealized P/L"
      }
    },
    quotes: {
      heading: "Quotes & Watchlist",
      form: {
        symbol: "Symbol",
        submit: "Add to Watchlist"
      },
      hint: "Uses Alpha Vantage if API key is saved, otherwise falls back to mock data.",
      empty: "No symbols yet. Add one to start tracking quotes.",
      card: {
        last: "Last",
        change: "Change"
      },
      chart: {
        close: "{symbol} Close",
        sma20: "SMA 20",
        sma50: "SMA 50"
      }
    },
    technicals: {
      heading: "Technical Analysis",
      form: {
        symbol: "Symbol",
        interval: "Interval",
        daily: "Daily",
        weekly: "Weekly",
        submit: "Calculate"
      },
      summary: {
        price: "Last Price",
        rsi: "RSI (14)",
        macd: "MACD",
        bias: "Bias"
      },
      bias: {
        neutral: "Neutral",
        bullish: "Bullish (signal {bars} bars ago)",
        bearish: "Bearish (signal {bars} bars ago)"
      },
      signals: {
        title: "Recent Signals",
        empty: "No crossover signals yet."
      },
      chart: {
        close: "{symbol} Close",
        sma20: "SMA 20",
        sma50: "SMA 50"
      }
    },
    backtest: {
      heading: "Backtesting",
      form: {
        symbol: "Symbol",
        short: "Short MA",
        long: "Long MA",
        submit: "Run Backtest",
        invalid: "Enter valid symbol and ensure Short MA < Long MA"
      },
      summary: {
        strategyReturn: "Strategy Return",
        strategyCagr: "Strategy CAGR",
        buyHoldReturn: "Buy & Hold Return",
        buyHoldCagr: "Buy & Hold CAGR",
        completedTrades: "Completed Trades",
        tradeStats: "{count} ({winRate})"
      },
      chart: {
        strategy: "Strategy Equity",
        buyHold: "Buy & Hold"
      }
    },
    dca: {
      heading: "DCA Simulator",
      form: {
        symbol: "Symbol",
        amount: "Monthly Amount",
        months: "Months",
        submit: "Simulate",
        invalid: "Enter valid symbol, monthly amount, and months"
      },
      empty: "Not enough data for DCA simulation.",
      summary: {
        invested: "Total Invested",
        shares: "Total Shares",
        value: "Current Value",
        gain: "Net Gain"
      },
      chart: {
        invested: "Invested",
        value: "Value"
      }
    },
    alerts: {
      heading: "Alerts",
      form: {
        symbol: "Symbol",
        rsiLow: "RSI Low",
        rsiHigh: "RSI High",
        submit: "Save Alert",
        invalid: "Enter valid symbol and RSI thresholds"
      },
      empty: "No alerts configured. Add one to monitor RSI triggers.",
      status: {
        neutral: "Neutral",
        oversold: "Oversold",
        overbought: "Overbought"
      },
      card: {
        rsi: "RSI: {value}",
        thresholds: "Low: {low} / High: {high}",
        status: "Status: {status}"
      }
    },
    settings: {
      heading: "Settings",
      form: {
        apiKey: "Alpha Vantage API Key",
        defaultSymbol: "Default Symbol",
        currency: "Display Currency",
        language: "Language",
        useNetlify: "Use Netlify proxy (serverless API key)",
        submit: "Save Settings",
        reset: "Reset App"
      },
      saveSuccess: "Settings saved.",
      resetConfirm: "Reset all data?",
      resetDone: "Application reset."
    },
    footer: {
      disclaimer: "Data provided via Alpha Vantage (or mock data). Educational use only."
    },
    status: {
      api: {
        live: "API: Live",
        mock: "API: Mock data",
        error: "API: Error",
        unknown: "API: Unknown"
      }
    },
    common: {
      remove: "Remove",
      price: "Price",
      signal: {
        buy: "BUY",
        sell: "SELL"
      }
    }
  },
  th: {
    app: { title: "ชุดเครื่องมือการลงทุน" },
    nav: {
      portfolio: "พอร์ต",
      quotes: "ราคาหุ้น",
      technicals: "เทคนิคอล",
      backtest: "ทดสอบย้อนหลัง",
      dca: "DCA",
      alerts: "แจ้งเตือน",
      settings: "ตั้งค่า"
    },
    header: {
      controls: {
        language: "ภาษา",
        currency: "สกุลเงิน",
        apiStatus: "สถานะ API"
      }
    },
    placeholders: {
      symbol: "เช่น AAPL",
      apiKey: "กรอก API key"
    },
    portfolio: {
      heading: "ตัวติดตามพอร์ต",
      form: {
        symbol: "สัญลักษณ์",
        shares: "จำนวนหุ้น",
        price: "ราคาซื้อ",
        submit: "เพิ่มสถานะ",
        invalid: "กรุณากรอกสัญลักษณ์ จำนวนหุ้น และราคาให้ถูกต้อง"
      },
      table: {
        symbol: "สัญลักษณ์",
        shares: "จำนวนหุ้น",
        avgCost: "ต้นทุนเฉลี่ย",
        lastPrice: "ราคาล่าสุด",
        value: "มูลค่า",
        pl: "กำไร/ขาดทุน"
      },
      empty: "ยังไม่มีการถือครอง เพิ่มรายการเพื่อเริ่มต้น",
      summary: {
        value: "มูลค่าพอร์ต",
        cost: "เงินลงทุนรวม",
        pl: "กำไร/ขาดทุนที่ยังไม่รับรู้"
      }
    },
    quotes: {
      heading: "ราคาและวอทช์ลิสต์",
      form: {
        symbol: "สัญลักษณ์",
        submit: "เพิ่มเข้าวอทช์ลิสต์"
      },
      hint: "ใช้ข้อมูล Alpha Vantage เมื่อบันทึก API key หากไม่มีก็จะใช้ข้อมูลจำลอง",
      empty: "ยังไม่มีวอทช์ลิสต์ เพิ่มสัญลักษณ์เพื่อเริ่มติดตาม",
      card: {
        last: "ราคาล่าสุด",
        change: "การเปลี่ยนแปลง"
      },
      chart: {
        close: "ราคาปิด {symbol}",
        sma20: "SMA 20",
        sma50: "SMA 50"
      }
    },
    technicals: {
      heading: "วิเคราะห์เชิงเทคนิค",
      form: {
        symbol: "สัญลักษณ์",
        interval: "ช่วงเวลา",
        daily: "รายวัน",
        weekly: "รายสัปดาห์",
        submit: "คำนวณ"
      },
      summary: {
        price: "ราคาล่าสุด",
        rsi: "RSI (14)",
        macd: "MACD",
        bias: "มุมมอง"
      },
      bias: {
        neutral: "เป็นกลาง",
        bullish: "แนวโน้มขาขึ้น (สัญญาณ {bars} แท่งก่อน)",
        bearish: "แนวโน้มขาลง (สัญญาณ {bars} แท่งก่อน)"
      },
      signals: {
        title: "สัญญาณล่าสุด",
        empty: "ยังไม่มีสัญญาณตัดกันของเส้นค่าเฉลี่ย"
      },
      chart: {
        close: "ราคาปิด {symbol}",
        sma20: "SMA 20",
        sma50: "SMA 50"
      }
    },
    backtest: {
      heading: "ทดสอบย้อนหลัง",
      form: {
        symbol: "สัญลักษณ์",
        short: "เส้นสั้น",
        long: "เส้นยาว",
        submit: "รันทดสอบ",
        invalid: "กรุณากรอกสัญลักษณ์ และให้เส้นสั้น < เส้นยาว"
      },
      summary: {
        strategyReturn: "ผลตอบแทนกลยุทธ์",
        strategyCagr: "CAGR กลยุทธ์",
        buyHoldReturn: "ผลตอบแทนซื้อถือ",
        buyHoldCagr: "CAGR ซื้อถือ",
        completedTrades: "จำนวนเทรด",
        tradeStats: "{count} ({winRate})"
      },
      chart: {
        strategy: "มูลค่ากลยุทธ์",
        buyHold: "ซื้อถือ"
      }
    },
    dca: {
      heading: "ตัวจำลอง DCA",
      form: {
        symbol: "สัญลักษณ์",
        amount: "เงินต่อเดือน",
        months: "จำนวนเดือน",
        submit: "จำลอง",
        invalid: "กรุณากรอกสัญลักษณ์ จำนวนเงินต่อเดือน และจำนวนเดือนให้ถูกต้อง"
      },
      empty: "ข้อมูลไม่เพียงพอสำหรับการจำลอง DCA",
      summary: {
        invested: "เงินลงทุนรวม",
        shares: "จำนวนหน่วยสะสม",
        value: "มูลค่าปัจจุบัน",
        gain: "กำไร/ขาดทุนสุทธิ"
      },
      chart: {
        invested: "เงินลงทุน",
        value: "มูลค่า"
      }
    },
    alerts: {
      heading: "แจ้งเตือน",
      form: {
        symbol: "สัญลักษณ์",
        rsiLow: "RSI ต่ำ",
        rsiHigh: "RSI สูง",
        submit: "บันทึกแจ้งเตือน",
        invalid: "กรุณากรอกสัญลักษณ์ และค่าช่วง RSI ให้ถูกต้อง"
      },
      empty: "ยังไม่มีการตั้งแจ้งเตือน เพิ่มเพื่อเฝ้าดู RSI",
      status: {
        neutral: "ปกติ",
        oversold: "ขายมาก",
        overbought: "ซื้อมาก"
      },
      card: {
        rsi: "RSI: {value}",
        thresholds: "ต่ำ: {low} / สูง: {high}",
        status: "สถานะ: {status}"
      }
    },
    settings: {
      heading: "ตั้งค่า",
      form: {
        apiKey: "Alpha Vantage API Key",
        defaultSymbol: "สัญลักษณ์เริ่มต้น",
        currency: "สกุลเงินที่แสดง",
        language: "ภาษา",
        useNetlify: "ใช้ Netlify proxy (เก็บ API key บนเซิร์ฟเวอร์)",
        submit: "บันทึกการตั้งค่า",
        reset: "รีเซ็ตแอป"
      },
      saveSuccess: "บันทึกการตั้งค่าแล้ว",
      resetConfirm: "ต้องการรีเซ็ตข้อมูลทั้งหมดหรือไม่?",
      resetDone: "รีเซ็ตแอปแล้ว"
    },
    footer: {
      disclaimer: "ข้อมูลจาก Alpha Vantage (หรือข้อมูลจำลอง) ใช้เพื่อการศึกษาเท่านั้น"
    },
    status: {
      api: {
        live: "API: ใช้งานได้",
        mock: "API: ข้อมูลจำลอง",
        error: "API: ขัดข้อง",
        unknown: "API: ไม่ทราบ"
      }
    },
    common: {
      remove: "ลบ",
      price: "ราคา",
      signal: {
        buy: "ซื้อ",
        sell: "ขาย"
      }
    }
  }
};

const defaultState = {
  settings: {
    apiKey: runtimeConfig.ALPHA_VANTAGE_API_KEY || "",
    defaultSymbol: "AAPL",
    currency: "USD",
    language: "en",
    useNetlifyProxy: Boolean(runtimeConfig.USE_NETLIFY_PROXY)
  },
  portfolio: [],
  watchlist: [],
  alerts: []
};

const state = loadState();

const Formatters = {
  currencyFormatter: null,
  numberFormatter: null,
  percentFormatter: null,
  locale: "en-US",
  update() {
    const language = languageOptions[state.settings.language] || languageOptions.en;
    this.locale = language.locale;
    try {
      this.currencyFormatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: state.settings.currency,
        maximumFractionDigits: 2
      });
    } catch (error) {
      console.warn("Falling back to USD currency formatter", error);
      this.currencyFormatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
      });
    }
    this.numberFormatter = new Intl.NumberFormat(this.locale, {
      maximumFractionDigits: 4
    });
    this.percentFormatter = new Intl.NumberFormat(this.locale, {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  },
  currency(value) {
    return Number.isFinite(value) ? this.currencyFormatter.format(value) : "N/A";
  },
  number(value) {
    return Number.isFinite(value) ? this.numberFormatter.format(value) : "N/A";
  },
  percent(value) {
    return Number.isFinite(value) ? this.percentFormatter.format(value) : "N/A";
  }
};

Formatters.update();

const uiState = {
  activeQuoteSymbol: state.watchlist[0] || state.settings.defaultSymbol || "AAPL",
  technicalsSymbol: state.settings.defaultSymbol || "AAPL"
};

const DataService = (() => {
  const quoteCache = new Map();
  const seriesCache = new Map();

  async function fetchAlpha(params) {
    const search = new URLSearchParams(params);

    if (state.settings.useNetlifyProxy) {
      try {
        const response = await fetch(`/.netlify/functions/alphavantage?${search.toString()}`);
        if (!response.ok) {
          throw new Error(`Proxy HTTP ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
          updateApiStatus("error", data.error);
          throw new Error(data.error);
        }
        updateApiStatus("live");
        return data;
      } catch (error) {
        console.warn("Netlify proxy failed", error);
        updateApiStatus("error", error.message);
        if (!state.settings.apiKey) {
          throw error;
        }
        // fall through and attempt direct request with client key
      }
    }

    if (!state.settings.apiKey) {
      throw new Error("Missing API credentials");
    }

    search.set("apikey", state.settings.apiKey);
    try {
      const response = await fetch(`https://www.alphavantage.co/query?${search.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      const message = data.Note || data["Error Message"] || (Object.keys(data).length === 0 ? "Alpha Vantage returned no data" : null);
      if (message) {
        updateApiStatus("error", message);
        throw new Error(message);
      }
      updateApiStatus("live");
      return data;
    } catch (error) {
      updateApiStatus("error", error.message);
      throw error;
    }
  }

  async function getQuote(symbol) {
    const key = symbol.toUpperCase();
    if (quoteCache.has(key)) {
      return quoteCache.get(key);
    }

    let quote;
    if (state.settings.apiKey || state.settings.useNetlifyProxy) {
      try {
        const payload = await fetchAlpha({ function: "GLOBAL_QUOTE", symbol: key });
        const raw = payload["Global Quote"] || {};
        const price = parseFloat(raw["05. price"]);
        const prevClose = parseFloat(raw["08. previous close"]) || parseFloat(raw["02. open"]);
        const change = parseFloat(raw["09. change"]);
        const rawChangePercent = raw["10. change percent"];
        const changePercent = rawChangePercent
          ? parseFloat(rawChangePercent.replace("%", ""))
          : prevClose
          ? ((price - prevClose) / prevClose) * 100
          : 0;
        if (!Number.isFinite(price)) {
          throw new Error("Invalid quote response");
        }
        quote = {
          symbol: key,
          price,
          previousClose: prevClose || price,
          change: Number.isFinite(change) ? change : price - (prevClose || price),
          changePercent
        };
      } catch (error) {
        console.warn("Quote fetch failed, using mock data", error);
        updateApiStatus("error", error.message);
      }
    }

    if (!quote) {
      if (!state.settings.apiKey && !state.settings.useNetlifyProxy) {
        updateApiStatus("mock");
      }
      quote = MockData.getQuote(key);
    }

    quoteCache.set(key, quote);
    return quote;
  }

  async function getSeries(symbol, interval = "daily") {
    const key = `${symbol.toUpperCase()}-${interval}`;
    if (seriesCache.has(key)) {
      return seriesCache.get(key);
    }

    let series;
    if (state.settings.apiKey || state.settings.useNetlifyProxy) {
      try {
        const fn = interval === "weekly" ? "TIME_SERIES_WEEKLY_ADJUSTED" : "TIME_SERIES_DAILY_ADJUSTED";
        const payload = await fetchAlpha({ function: fn, symbol: symbol.toUpperCase(), outputsize: "full" });
        const rawKey = interval === "weekly" ? "Weekly Adjusted Time Series" : "Time Series (Daily)";
        const rawSeries = payload[rawKey];
        if (!rawSeries) {
          throw new Error("Missing time series data");
        }
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
        console.warn("Series fetch failed, using mock data", error);
        updateApiStatus("error", error.message);
      }
    }

    if (!series) {
      if (!state.settings.apiKey && !state.settings.useNetlifyProxy) {
        updateApiStatus("mock");
      }
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
    if (value <= 0) {
      value += 2147483646;
    }
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
    if (cache.has(key)) {
      return cache.get(key);
    }

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
      if (!Number.isFinite(value)) {
        return;
      }
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
      if (!Number.isFinite(value)) {
        return;
      }
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
      if (emaFast[index] === null || emaSlow[index] === null) {
        return null;
      }
      return emaFast[index] - emaSlow[index];
    });
    const signalLine = this.ema(
      macdLine.map((value) => (value === null ? 0 : value)),
      signalPeriod
    ).map((value, index) => (macdLine[index] === null ? null : value));
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
      if ([prevShort, prevLong, currShort, currLong].some((value) => value === null)) {
        continue;
      }
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

const Dom = {
  panels: document.querySelectorAll(".panel"),
  navButtons: document.querySelectorAll(".nav-btn"),
  header: {
    language: document.getElementById("global-language"),
    currency: document.getElementById("global-currency"),
    apiStatus: document.getElementById("api-status")
  },
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
    netlifyProxy: document.getElementById("settings-netlify-proxy"),
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
populateGlobalSelectors();
bootstrapState();
evaluateInitialApiStatus();
applyTranslations();
rerenderAllPanels();

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

  if (Dom.header.language) {
    Dom.header.language.addEventListener("change", handleLanguageChange);
  }
  if (Dom.header.currency) {
    Dom.header.currency.addEventListener("change", handleCurrencyChange);
  }

  Dom.settings.form.addEventListener("submit", handleSettingsSubmit);
  Dom.settings.reset.addEventListener("click", handleSettingsReset);
}

let selectorsPopulated = false;
function populateGlobalSelectors() {
  if (selectorsPopulated) {
    return;
  }
  if (Dom.header.currency) {
    Dom.header.currency.innerHTML = currencyOptions
      .map((option) => `<option value="${option.code}">${option.label}</option>`)
      .join("");
  }
  if (Dom.header.language) {
    Dom.header.language.innerHTML = Object.entries(languageOptions)
      .map(([value, meta]) => `<option value="${value}">${meta.label}</option>`)
      .join("");
  }
  selectorsPopulated = true;
}

function handleLanguageChange(event) {
  const language = event.target.value;
  if (!languageOptions[language]) {
    return;
  }
  state.settings.language = language;
  saveState();
  Formatters.update();
  applyTranslations();
  rerenderAllPanels();
}

function handleCurrencyChange(event) {
  const currency = event.target.value;
  const valid = currencyOptions.some((option) => option.code === currency);
  if (!valid) {
    return;
  }
  state.settings.currency = currency;
  saveState();
  Formatters.update();
  rerenderAllPanels();
}

function bootstrapState() {
  Formatters.update();
  const defaultSymbol = (state.settings.defaultSymbol || "AAPL").toUpperCase();

  if (!state.watchlist.includes(defaultSymbol)) {
    state.watchlist.unshift(defaultSymbol);
    saveState();
  }

  Dom.settings.apiKey.value = state.settings.apiKey;
  Dom.settings.defaultSymbol.value = defaultSymbol;
  Dom.settings.netlifyProxy.checked = state.settings.useNetlifyProxy;

  if (Dom.header.language) {
    Dom.header.language.value = state.settings.language;
  }
  if (Dom.header.currency) {
    Dom.header.currency.value = state.settings.currency;
  }

  Dom.portfolio.symbol.value = defaultSymbol;
  Dom.quotes.symbol.value = "";
  Dom.technicals.symbol.value = defaultSymbol;
  Dom.backtest.symbol.value = defaultSymbol;
  Dom.dca.symbol.value = defaultSymbol;
  Dom.alerts.symbol.value = defaultSymbol;

  uiState.activeQuoteSymbol = state.watchlist.includes(defaultSymbol)
    ? defaultSymbol
    : state.watchlist[0] || defaultSymbol;
  uiState.technicalsSymbol = defaultSymbol;
}

function evaluateInitialApiStatus() {
  if (state.settings.apiKey || state.settings.useNetlifyProxy) {
    updateApiStatus("unknown");
  } else {
    updateApiStatus("mock");
  }
}

function rerenderAllPanels() {
  renderPortfolio().catch(console.error);
  renderWatchlist().catch(console.error);
  renderAlerts().catch(console.error);
  renderTechnicals(
    Dom.technicals.symbol.value.trim().toUpperCase(),
    Dom.technicals.interval.value
  ).catch(console.error);
  renderBacktest(
    Dom.backtest.symbol.value.trim().toUpperCase(),
    parseInt(Dom.backtest.shortInput.value, 10) || 50,
    parseInt(Dom.backtest.longInput.value, 10) || 200
  ).catch(console.error);
  renderDca(
    Dom.dca.symbol.value.trim().toUpperCase(),
    parseFloat(Dom.dca.amount.value) || 100,
    parseInt(Dom.dca.months.value, 10) || 12
  ).catch(console.error);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return clone(defaultState);
    }
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

function resolveTranslation(key, languagePack) {
  return key.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), languagePack);
}

function t(key, params = {}) {
  const langPack = translations[state.settings.language] || translations.en;
  let template = resolveTranslation(key, langPack);
  if (template === undefined) {
    template = resolveTranslation(key, translations.en);
  }
  if (template === undefined) {
    return key;
  }
  if (typeof template !== "string") {
    return template;
  }
  return template.replace(/\{(\w+)}/g, (match, token) => {
    if (params[token] !== undefined) {
      return params[token];
    }
    return match;
  });
}

function updateApiStatus(status, message = "") {
  const allowed = new Set(["live", "mock", "error", "unknown"]);
  apiStatusState.status = allowed.has(status) ? status : "unknown";
  apiStatusState.message = message;
  refreshApiStatusLabel();
}

function refreshApiStatusLabel() {
  if (!Dom || !Dom.header || !Dom.header.apiStatus) {
    return;
  }
  const el = Dom.header.apiStatus;
  const { status, message } = apiStatusState;
  el.dataset.status = status;
  el.textContent = t(`status.api.${status}`);
  if (message) {
    el.setAttribute("title", message);
  } else {
    el.removeAttribute("title");
  }
}

function applyTranslations() {
  document.title = t("app.title");
  const langMeta = languageOptions[state.settings.language] || languageOptions.en;
  document.documentElement.lang = langMeta.htmlLang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) {
      return;
    }
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) {
      return;
    }
    element.setAttribute("placeholder", t(key));
  });

  refreshApiStatusLabel();
}

async function handlePortfolioSubmit(event) {
  event.preventDefault();
  const symbol = Dom.portfolio.symbol.value.trim().toUpperCase();
  const shares = parseFloat(Dom.portfolio.shares.value);
  const price = parseFloat(Dom.portfolio.price.value);

  if (!symbol || !Number.isFinite(shares) || !Number.isFinite(price) || shares <= 0 || price <= 0) {
    alert(t("portfolio.form.invalid"));
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
  if (!button) {
    return;
  }
  const symbol = button.dataset.symbol;
  if (!symbol) {
    return;
  }
  if (button.dataset.action === "remove") {
    state.portfolio = state.portfolio.filter((item) => item.symbol !== symbol);
    saveState();
    await renderPortfolio();
  }
}

async function renderPortfolio() {
  const positions = state.portfolio;
  if (!positions.length) {
    Dom.portfolio.tableBody.innerHTML = `<tr><td colspan="7">${t("portfolio.empty")}</td></tr>`;
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
      const plPercent = cost === 0 ? 0 : pl / cost;
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
        <td>${Formatters.number(row.shares)}</td>
        <td>${Formatters.currency(row.avgCost)}</td>
        <td>${Formatters.currency(row.lastPrice)}</td>
        <td>${Formatters.currency(row.value)}</td>
        <td class="${plClass}">${Formatters.currency(row.pl)} (${Formatters.percent(row.plPercent)})</td>
        <td><button data-action="remove" data-symbol="${row.symbol}">${t("common.remove")}</button></td>
      </tr>`;
    })
    .join("");

  const totalCost = rows.reduce((sum, row) => sum + row.cost, 0);
  const totalValue = rows.reduce((sum, row) => sum + row.value, 0);
  const totalPL = totalValue - totalCost;
  const totalPercent = totalCost === 0 ? 0 : totalPL / totalCost;

  Dom.portfolio.summary.innerHTML = `
    <div class="summary-card">
      <h3>${t("portfolio.summary.value")}</h3>
      <p>${Formatters.currency(totalValue)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("portfolio.summary.cost")}</h3>
      <p>${Formatters.currency(totalCost)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("portfolio.summary.pl")}</h3>
      <p>${Formatters.currency(totalPL)} (${Formatters.percent(totalPercent)})</p>
    </div>`;
}

async function handleQuotesSubmit(event) {
  event.preventDefault();
  const symbol = Dom.quotes.symbol.value.trim().toUpperCase();
  if (!symbol) {
    return;
  }
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
  if (!card) {
    return;
  }
  const removeButton = event.target.closest("button[data-action=remove]");
  const symbol = card.dataset.symbol;
  if (removeButton) {
    state.watchlist = state.watchlist.filter((item) => item !== symbol);
    if (uiState.activeQuoteSymbol === symbol) {
      uiState.activeQuoteSymbol = state.watchlist[0] || state.settings.defaultSymbol || "AAPL";
    }
    saveState();
    await renderWatchlist();
    return;
  }
  uiState.activeQuoteSymbol = symbol;
  await renderWatchlist();
}

async function renderWatchlist() {
  if (!state.watchlist.length) {
    Dom.quotes.list.innerHTML = `<p class="small-text">${t("quotes.empty")}</p>`;
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
            <div class="small-text">${t("quotes.card.last")}: ${Formatters.currency(quote.price)}</div>
          </div>
          <button data-action="remove" aria-label="${t("common.remove")}" data-symbol="${symbol}">×</button>
        </div>
        <div class="card-body ${changeClass}">
          ${Formatters.currency(quote.change)} (${Formatters.percent(quote.changePercent / 100)})
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

  charts.price = new Chart(Dom.quotes.chart.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: t("quotes.chart.close", { symbol }),
          data: closes,
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56, 189, 248, 0.2)",
          tension: 0.15,
          fill: false
        },
        {
          label: t("quotes.chart.sma20"),
          data: sma20,
          borderColor: "#22c55e",
          borderDash: [4, 4],
          tension: 0.15,
          fill: false
        },
        {
          label: t("quotes.chart.sma50"),
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
              const value = context.parsed.y;
              return `${context.dataset.label}: ${Formatters.currency(value)}`;
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
  if (!symbol) {
    return;
  }
  uiState.technicalsSymbol = symbol;
  await renderTechnicals(symbol, interval);
}

async function renderTechnicals(symbol, interval) {
  if (!symbol) {
    return;
  }
  const series = await DataService.getSeries(symbol, interval);
  const closes = series.map((point) => point.close);
  const labels = series.map((point) => point.date);
  const sma20 = Indicators.sma(closes, 20);
  const sma50 = Indicators.sma(closes, 50);
  const rsi14 = Indicators.rsi(closes, 14);
  const macd = Indicators.macd(closes);
  const { signals } = Indicators.crossoverSignals(series, 20, 50);

  if (charts.technicals) {
    charts.technicals.destroy();
  }

  charts.technicals = new Chart(Dom.technicals.chart.getContext("2d"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: t("technicals.chart.close", { symbol }),
          data: closes,
          borderColor: "#38bdf8",
          fill: false,
          tension: 0.1
        },
        {
          label: t("technicals.chart.sma20"),
          data: sma20,
          borderColor: "#22c55e",
          borderDash: [5, 5],
          tension: 0.1,
          fill: false
        },
        {
          label: t("technicals.chart.sma50"),
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
          labels: {
            color: "#e2e8f0"
          }
        },
        tooltip: {
          callbacks: {
            label(context) {
              const value = context.parsed.y;
              return `${context.dataset.label}: ${Formatters.currency(value)}`;
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
  const lastSignal = signals.slice(-1)[0];
  const barsAgo = lastSignal ? latestIndex - lastSignal.index : 0;
  const biasKey = lastSignal ? (lastSignal.type === "buy" ? "bullish" : "bearish") : "neutral";
  const bias = t(`technicals.bias.${biasKey}`, { bars: barsAgo });

  Dom.technicals.signals.innerHTML = `
    <div class="summary-card">
      <h3>${t("technicals.summary.price")}</h3>
      <p>${Formatters.currency(latestPrice)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("technicals.summary.rsi")}</h3>
      <p>${Formatters.number(latestRsi)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("technicals.summary.macd")}</h3>
      <p>${Formatters.number(latestMacd)} / ${Formatters.number(latestSignal)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("technicals.summary.bias")}</h3>
      <p>${bias}</p>
    </div>
    <div class="signals">
      <h3>${t("technicals.signals.title")}</h3>
      ${signals
        .slice(-5)
        .reverse()
        .map((signal) => {
          const klass = signal.type === "buy" ? "signal" : "signal sell";
          return `<div class="${klass}">
            <strong>${t(`common.signal.${signal.type}`)} • ${signal.date}</strong>
            <div>${t("common.price")}: ${Formatters.currency(signal.price)}</div>
          </div>`;
        })
        .join("") || `<p class="small-text">${t("technicals.signals.empty")}</p>`}
    </div>`;
}

async function handleBacktestSubmit(event) {
  event.preventDefault();
  const symbol = Dom.backtest.symbol.value.trim().toUpperCase();
  const shortPeriod = parseInt(Dom.backtest.shortInput.value, 10) || 50;
  const longPeriod = parseInt(Dom.backtest.longInput.value, 10) || 200;
  if (!symbol || shortPeriod >= longPeriod) {
    alert(t("backtest.form.invalid"));
    return;
  }
  await renderBacktest(symbol, shortPeriod, longPeriod);
}

async function renderBacktest(symbol, shortPeriod, longPeriod) {
  if (!symbol || shortPeriod >= longPeriod) {
    return;
  }
  const series = await DataService.getSeries(symbol, "daily");
  const closes = series.map((point) => point.close);
  const { signals } = Indicators.crossoverSignals(series, shortPeriod, longPeriod);
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

  const completedTrades = trades.filter((trade) => trade.type === "sell").length;
  const winningTrades = trades.filter((trade, index) => {
    if (trade.type !== "sell") {
      return false;
    }
    const entry = trades.slice(0, index).reverse().find((t) => t.type === "buy");
    if (!entry) {
      return false;
    }
    return trade.price > entry.price;
  }).length;

  const winRate = completedTrades > 0 ? winningTrades / completedTrades : 0;

  Dom.backtest.results.innerHTML = `
    <div class="summary-card">
      <h3>${t("backtest.summary.strategyReturn")}</h3>
      <p>${Formatters.percent(totalReturn)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("backtest.summary.strategyCagr")}</h3>
      <p>${Formatters.percent(cagr)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("backtest.summary.buyHoldReturn")}</h3>
      <p>${Formatters.percent(buyHoldReturn)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("backtest.summary.buyHoldCagr")}</h3>
      <p>${Formatters.percent(buyHoldCagr)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("backtest.summary.completedTrades")}</h3>
      <p>${t("backtest.summary.tradeStats", {
        count: completedTrades,
        winRate: Formatters.percent(winRate)
      })}</p>
    </div>`;

  if (charts.backtest) {
    charts.backtest.destroy();
  }

  charts.backtest = new Chart(Dom.backtest.chart.getContext("2d"), {
    type: "line",
    data: {
      labels: equityCurve.map((point) => point.date),
      datasets: [
        {
          label: t("backtest.chart.strategy"),
          data: equityCurve.map((point) => point.value),
          borderColor: "#38bdf8",
          tension: 0.1,
          fill: false
        },
        {
          label: t("backtest.chart.buyHold"),
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
        legend: {
          labels: {
            color: "#e2e8f0"
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

async function handleDcaSubmit(event) {
  event.preventDefault();
  const symbol = Dom.dca.symbol.value.trim().toUpperCase();
  const monthlyAmount = parseFloat(Dom.dca.amount.value);
  const months = parseInt(Dom.dca.months.value, 10);
  if (!symbol || !Number.isFinite(monthlyAmount) || monthlyAmount <= 0 || !Number.isFinite(months) || months <= 0) {
    alert(t("dca.form.invalid"));
    return;
  }
  await renderDca(symbol, monthlyAmount, months);
}

async function renderDca(symbol, monthlyAmount, months) {
  if (!symbol || !Number.isFinite(monthlyAmount) || !Number.isFinite(months)) {
    return;
  }
  const series = await DataService.getSeries(symbol, "daily");
  const monthlyPoints = selectMonthlySeries(series, months);
  if (!monthlyPoints.length) {
    Dom.dca.results.innerHTML = `<p class="small-text">${t("dca.empty")}</p>`;
    if (charts.dca) {
      charts.dca.destroy();
      charts.dca = null;
    }
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
      <h3>${t("dca.summary.invested")}</h3>
      <p>${Formatters.currency(invested)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("dca.summary.shares")}</h3>
      <p>${Formatters.number(shares)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("dca.summary.value")}</h3>
      <p>${Formatters.currency(currentValue)}</p>
    </div>
    <div class="summary-card">
      <h3>${t("dca.summary.gain")}</h3>
      <p>${Formatters.currency(gain)} (${Formatters.percent(gainPercent)})</p>
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
          label: t("dca.chart.invested"),
          data: progress.map((item) => item.invested),
          borderColor: "#94a3b8",
          tension: 0.1,
          fill: false
        },
        {
          label: t("dca.chart.value"),
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
        legend: {
          labels: {
            color: "#e2e8f0"
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

async function handleAlertsSubmit(event) {
  event.preventDefault();
  const symbol = Dom.alerts.symbol.value.trim().toUpperCase();
  const rsiLow = parseFloat(Dom.alerts.rsiLow.value);
  const rsiHigh = parseFloat(Dom.alerts.rsiHigh.value);
  if (!symbol || !Number.isFinite(rsiLow) || !Number.isFinite(rsiHigh) || rsiLow >= rsiHigh) {
    alert(t("alerts.form.invalid"));
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
  if (!button) {
    return;
  }
  const id = button.dataset.id;
  state.alerts = state.alerts.filter((alert) => alert.id !== id);
  saveState();
  await renderAlerts();
}

async function renderAlerts() {
  if (!state.alerts.length) {
    Dom.alerts.list.innerHTML = `<p class="small-text">${t("alerts.empty")}</p>`;
    return;
  }

  const cards = await Promise.all(
    state.alerts.map(async (alert) => {
      const series = await DataService.getSeries(alert.symbol, "daily");
      const closes = series.map((point) => point.close);
      const rsi = Indicators.rsi(closes, 14);
      const latestRsi = rsi[rsi.length - 1];
      const lastPrice = closes[closes.length - 1];
      let statusKey = "neutral";
      if (latestRsi <= alert.rsiLow) {
        statusKey = "oversold";
      } else if (latestRsi >= alert.rsiHigh) {
        statusKey = "overbought";
      }
      return {
        id: alert.id,
        symbol: alert.symbol,
        lastPrice,
        latestRsi,
        statusKey,
        rsiLow: alert.rsiLow,
        rsiHigh: alert.rsiHigh
      };
    })
  );

  Dom.alerts.list.innerHTML = cards
    .map((card) => {
      const statusClass =
        card.statusKey === "oversold" ? "card signal" : card.statusKey === "overbought" ? "card signal sell" : "card";
      const statusText = t(`alerts.status.${card.statusKey}`);
      return `<div class="${statusClass}" data-id="${card.id}">
        <div class="card-header">
          <div>
            <strong>${card.symbol}</strong>
            <div class="small-text">${t("quotes.card.last")}: ${Formatters.currency(card.lastPrice)}</div>
          </div>
          <button data-action="remove" data-id="${card.id}" aria-label="${t("common.remove")}">×</button>
        </div>
        <div class="card-body">
          ${t("alerts.card.rsi", { value: Formatters.number(card.latestRsi) })}<br />
          ${t("alerts.card.thresholds", { low: Formatters.number(card.rsiLow), high: Formatters.number(card.rsiHigh) })}<br />
          ${t("alerts.card.status", { status: statusText })}
        </div>
      </div>`;
    })
    .join("");
}

function handleSettingsSubmit(event) {
  event.preventDefault();
  state.settings.apiKey = Dom.settings.apiKey.value.trim();
  state.settings.defaultSymbol = Dom.settings.defaultSymbol.value.trim().toUpperCase() || "AAPL";
  state.settings.useNetlifyProxy = Dom.settings.netlifyProxy.checked;
  saveState();
  DataService.clearCache();
  Formatters.update();
  bootstrapState();
  evaluateInitialApiStatus();
  applyTranslations();
  rerenderAllPanels();
  alert(t("settings.saveSuccess"));
}

function handleSettingsReset() {
  if (!confirm(t("settings.resetConfirm"))) {
    return;
  }
  resetState();
  bootstrapState();
  evaluateInitialApiStatus();
  applyTranslations();
  rerenderAllPanels();
  alert(t("settings.resetDone"));
}
