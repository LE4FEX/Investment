var Bl = Object.defineProperty;
var ro = (i) => {
  throw TypeError(i);
};
var Hl = (i, t, e) =>
  t in i ? Bl(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (i[t] = e);
var D = (i, t, e) => Hl(i, typeof t != 'symbol' ? t + '' : t, e),
  Vl = (i, t, e) => t.has(i) || ro('Cannot ' + e);
var lo = (i, t, e) =>
  t.has(i)
    ? ro('Cannot add the same private member more than once')
    : t instanceof WeakSet
      ? t.add(i)
      : t.set(i, e);
var he = (i, t, e) => (Vl(i, t, 'access private method'), e);
function Ep() {
  (import.meta.url, import('_').catch(() => 1), (async function* () {})().next());
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === 'childList')
        for (const a of o.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = e(s);
    fetch(s.href, o);
  }
})();
window.__ENV__ = { ALPHA_VANTAGE_API_KEY: 'IXBF3GIIZ3VILTJ9', USE_NETLIFY_PROXY: !1 };
const Ga = 'investment-toolkit-state-v2',
  Je = {
    settings: {
      apiKey: '',
      defaultSymbol: 'AAPL',
      currency: 'USD',
      language: 'en',
      useNetlifyProxy: !1,
    },
    portfolio: [],
    watchlist: [],
    alerts: [],
  };
function Jn(i) {
  return typeof window < 'u' && typeof window.structuredClone == 'function'
    ? window.structuredClone(i)
    : JSON.parse(JSON.stringify(i));
}
function Wl() {
  var i, t, e;
  try {
    const n = localStorage.getItem(Ga);
    if (!n) return Jn(Je);
    const s = JSON.parse(n);
    return {
      settings: { ...Je.settings, ...s.settings },
      portfolio: (i = s.portfolio) != null ? i : [],
      watchlist: (t = s.watchlist) != null ? t : [],
      alerts: (e = s.alerts) != null ? e : [],
    };
  } catch (n) {
    return (console.error('Failed to load state', n), Jn(Je));
  }
}
function co(i) {
  localStorage.setItem(Ga, JSON.stringify(i));
}
function $l() {
  const i = Wl(),
    t = new Map();
  function e(n, s) {
    const o = t.get(n);
    o &&
      o.forEach((a) => {
        try {
          a(s);
        } catch (r) {
          console.error('Event handler error', r);
        }
      });
  }
  return {
    state: i,
    defaultState: Je,
    persist() {
      co(i);
    },
    reset() {
      (Object.assign(i, Jn(Je)), co(i), e('store:reset', i));
    },
    on(n, s) {
      var a;
      const o = (a = t.get(n)) != null ? a : new Set();
      return (
        o.add(s),
        t.set(n, o),
        () => {
          o.delete(s);
        }
      );
    },
    emit: e,
  };
}
const jl = {
    app: { title: 'Investment Toolkit' },
    nav: {
      portfolio: 'Portfolio',
      quotes: 'Quotes',
      technicals: 'Technicals',
      backtest: 'Backtest',
      dca: 'DCA',
      alerts: 'Alerts',
      settings: 'Settings',
    },
    header: { controls: { language: 'Language', currency: 'Currency', apiStatus: 'API Status' } },
    placeholders: { symbol: 'e.g. AAPL', apiKey: 'Enter API key' },
    portfolio: {
      heading: 'Portfolio Tracker',
      form: {
        symbol: 'Ticker',
        shares: 'Shares',
        price: 'Price',
        submit: 'Add Position',
        importCsv: 'Import CSV',
        importJson: 'Import JSON',
        exportCsv: 'Export CSV',
        exportJson: 'Export JSON',
        invalid: 'Enter valid symbol, shares, and price',
      },
      table: {
        symbol: 'Symbol',
        shares: 'Shares',
        avgCost: 'Avg Cost',
        lastPrice: 'Last Price',
        value: 'Value',
        pl: 'P/L',
      },
      empty: 'No holdings yet. Add a position to get started.',
      summary: { value: 'Portfolio Value', cost: 'Total Cost Basis', pl: 'Unrealized P/L' },
    },
    quotes: {
      heading: 'Quotes & Watchlist',
      form: { symbol: 'Symbol', submit: 'Add to Watchlist' },
      search: { placeholder: 'Filter symbols...' },
      hint: 'Uses Alpha Vantage if API key is saved, otherwise falls back to mock data.',
      empty: 'No symbols yet. Add one to start tracking quotes.',
      card: { last: 'Last', change: 'Change' },
      chart: { close: '{symbol} Close', sma20: 'SMA 20', sma50: 'SMA 50' },
    },
    technicals: {
      heading: 'Technical Analysis',
      form: {
        symbol: 'Symbol',
        interval: 'Interval',
        daily: 'Daily',
        weekly: 'Weekly',
        submit: 'Calculate',
      },
      toggles: {
        heading: 'Indicators',
        price: 'Price',
        sma20: 'SMA 20',
        sma50: 'SMA 50',
        ema12: 'EMA 12',
        ema26: 'EMA 26',
        rsi: 'RSI',
        macd: 'MACD',
      },
      zoom: { reset: 'Reset Zoom' },
      summary: { price: 'Last Price', rsi: 'RSI (14)', macd: 'MACD', bias: 'Bias' },
      bias: {
        neutral: 'Neutral',
        bullish: 'Bullish (signal {bars} bars ago)',
        bearish: 'Bearish (signal {bars} bars ago)',
      },
      signals: { title: 'Recent Signals', empty: 'No crossover signals yet.' },
      chart: { close: '{symbol} Close', sma20: 'SMA 20', sma50: 'SMA 50' },
    },
    backtest: {
      heading: 'Backtesting',
      form: {
        symbol: 'Symbol',
        short: 'Short MA',
        long: 'Long MA',
        submit: 'Run Backtest',
        invalid: 'Enter valid symbol and ensure Short MA < Long MA',
      },
      summary: {
        strategyReturn: 'Strategy Return',
        strategyCagr: 'Strategy CAGR',
        buyHoldReturn: 'Buy & Hold Return',
        buyHoldCagr: 'Buy & Hold CAGR',
        completedTrades: 'Completed Trades',
        tradeStats: '{count} ({winRate})',
        maxDrawdown: 'Max Drawdown',
      },
      chart: { strategy: 'Strategy Equity', buyHold: 'Buy & Hold' },
      export: { csv: 'Export Equity CSV' },
    },
    dca: {
      heading: 'DCA Simulator',
      form: {
        symbol: 'Symbol',
        amount: 'Monthly Amount',
        months: 'Months',
        submit: 'Simulate',
        invalid: 'Enter valid symbol, monthly amount, and months',
      },
      empty: 'Not enough data for DCA simulation.',
      summary: {
        invested: 'Total Invested',
        shares: 'Total Shares',
        value: 'Current Value',
        gain: 'Net Gain',
      },
      chart: { invested: 'Invested', value: 'Value' },
      export: { csv: 'Export DCA CSV' },
    },
    alerts: {
      heading: 'Alerts',
      form: {
        symbol: 'Symbol',
        rsiLow: 'RSI Low',
        rsiHigh: 'RSI High',
        submit: 'Save Alert',
        invalid: 'Enter valid symbol and RSI thresholds',
      },
      empty: 'No alerts configured. Add one to monitor RSI triggers.',
      status: { neutral: 'Neutral', oversold: 'Oversold', overbought: 'Overbought' },
      card: {
        rsi: 'RSI: {value}',
        thresholds: 'Low: {low} / High: {high}',
        status: 'Status: {status}',
      },
    },
    settings: {
      heading: 'Settings',
      form: {
        apiKey: 'Alpha Vantage API Key',
        defaultSymbol: 'Default Symbol',
        useNetlify: 'Use Netlify proxy (serverless API key)',
        submit: 'Save Settings',
        reset: 'Reset App',
      },
      saveSuccess: 'Settings saved.',
      resetConfirm: 'Reset all data?',
      resetDone: 'Application reset.',
    },
    footer: { disclaimer: 'Educational use only. Not financial advice.' },
    status: {
      api: {
        live: 'API: Live',
        mock: 'API: Mock data',
        error: 'API: Error',
        unknown: 'API: Unknown',
      },
    },
    common: {
      remove: 'Remove',
      price: 'Price',
      download: 'Download',
      restore: 'Restore',
      browse: 'Browse…',
      cancel: 'Cancel',
      signal: { buy: 'BUY', sell: 'SELL' },
    },
  },
  Ul = {
    app: { title: 'ชุดเครื่องมือการลงทุน' },
    nav: {
      portfolio: 'พอร์ต',
      quotes: 'ราคาหุ้น',
      technicals: 'เทคนิคอล',
      backtest: 'ทดสอบย้อนหลัง',
      dca: 'DCA',
      alerts: 'แจ้งเตือน',
      settings: 'ตั้งค่า',
    },
    header: { controls: { language: 'ภาษา', currency: 'สกุลเงิน', apiStatus: 'สถานะ API' } },
    placeholders: { symbol: 'เช่น AAPL', apiKey: 'กรอก API key' },
    portfolio: {
      heading: 'ตัวติดตามพอร์ต',
      form: {
        symbol: 'สัญลักษณ์',
        shares: 'จำนวนหุ้น',
        price: 'ราคาซื้อ',
        submit: 'เพิ่มสถานะ',
        importCsv: 'นำเข้า CSV',
        importJson: 'นำเข้า JSON',
        exportCsv: 'ส่งออก CSV',
        exportJson: 'ส่งออก JSON',
        invalid: 'กรุณากรอกสัญลักษณ์ จำนวนหุ้น และราคาให้ถูกต้อง',
      },
      table: {
        symbol: 'สัญลักษณ์',
        shares: 'จำนวนหุ้น',
        avgCost: 'ต้นทุนเฉลี่ย',
        lastPrice: 'ราคาล่าสุด',
        value: 'มูลค่า',
        pl: 'กำไร/ขาดทุน',
      },
      empty: 'ยังไม่มีการถือครอง เพิ่มรายการเพื่อเริ่มต้น',
      summary: { value: 'มูลค่าพอร์ต', cost: 'เงินลงทุนรวม', pl: 'กำไร/ขาดทุนที่ยังไม่รับรู้' },
    },
    quotes: {
      heading: 'ราคาและวอทช์ลิสต์',
      form: { symbol: 'สัญลักษณ์', submit: 'เพิ่มเข้าวอทช์ลิสต์' },
      search: { placeholder: 'ค้นหาสัญลักษณ์...' },
      hint: 'ใช้ข้อมูล Alpha Vantage เมื่อบันทึก API key หากไม่มีก็จะใช้ข้อมูลจำลอง',
      empty: 'ยังไม่มีวอทช์ลิสต์ เพิ่มสัญลักษณ์เพื่อเริ่มติดตาม',
      card: { last: 'ราคาล่าสุด', change: 'การเปลี่ยนแปลง' },
      chart: { close: 'ราคาปิด {symbol}', sma20: 'SMA 20', sma50: 'SMA 50' },
    },
    technicals: {
      heading: 'วิเคราะห์เชิงเทคนิค',
      form: {
        symbol: 'สัญลักษณ์',
        interval: 'ช่วงเวลา',
        daily: 'รายวัน',
        weekly: 'รายสัปดาห์',
        submit: 'คำนวณ',
      },
      toggles: {
        heading: 'ตัวชี้วัด',
        price: 'ราคา',
        sma20: 'SMA 20',
        sma50: 'SMA 50',
        ema12: 'EMA 12',
        ema26: 'EMA 26',
        rsi: 'RSI',
        macd: 'MACD',
      },
      zoom: { reset: 'รีเซ็ตการซูม' },
      summary: { price: 'ราคาล่าสุด', rsi: 'RSI (14)', macd: 'MACD', bias: 'มุมมอง' },
      bias: {
        neutral: 'เป็นกลาง',
        bullish: 'แนวโน้มขาขึ้น (สัญญาณ {bars} แท่งก่อน)',
        bearish: 'แนวโน้มขาลง (สัญญาณ {bars} แท่งก่อน)',
      },
      signals: { title: 'สัญญาณล่าสุด', empty: 'ยังไม่มีสัญญาณตัดกันของเส้นค่าเฉลี่ย' },
      chart: { close: 'ราคาปิด {symbol}', sma20: 'SMA 20', sma50: 'SMA 50' },
    },
    backtest: {
      heading: 'ทดสอบย้อนหลัง',
      form: {
        symbol: 'สัญลักษณ์',
        short: 'เส้นสั้น',
        long: 'เส้นยาว',
        submit: 'รันทดสอบ',
        invalid: 'กรุณากรอกสัญลักษณ์ และให้เส้นสั้น < เส้นยาว',
      },
      summary: {
        strategyReturn: 'ผลตอบแทนกลยุทธ์',
        strategyCagr: 'CAGR กลยุทธ์',
        buyHoldReturn: 'ผลตอบแทนซื้อถือ',
        buyHoldCagr: 'CAGR ซื้อถือ',
        completedTrades: 'จำนวนเทรด',
        tradeStats: '{count} ({winRate})',
        maxDrawdown: 'ดรอว์ดาวน์สูงสุด',
      },
      chart: { strategy: 'มูลค่ากลยุทธ์', buyHold: 'ซื้อถือ' },
      export: { csv: 'ส่งออกข้อมูล CSV' },
    },
    dca: {
      heading: 'ตัวจำลอง DCA',
      form: {
        symbol: 'สัญลักษณ์',
        amount: 'เงินต่อเดือน',
        months: 'จำนวนเดือน',
        submit: 'จำลอง',
        invalid: 'กรุณากรอกสัญลักษณ์ จำนวนเงินต่อเดือน และจำนวนเดือนให้ถูกต้อง',
      },
      empty: 'ข้อมูลไม่เพียงพอสำหรับการจำลอง DCA',
      summary: {
        invested: 'เงินลงทุนรวม',
        shares: 'จำนวนหน่วยสะสม',
        value: 'มูลค่าปัจจุบัน',
        gain: 'กำไร/ขาดทุนสุทธิ',
      },
      chart: { invested: 'เงินลงทุน', value: 'มูลค่า' },
      export: { csv: 'ส่งออก CSV' },
    },
    alerts: {
      heading: 'แจ้งเตือน',
      form: {
        symbol: 'สัญลักษณ์',
        rsiLow: 'RSI ต่ำ',
        rsiHigh: 'RSI สูง',
        submit: 'บันทึกแจ้งเตือน',
        invalid: 'กรุณากรอกสัญลักษณ์ และค่าช่วง RSI ให้ถูกต้อง',
      },
      empty: 'ยังไม่มีการตั้งแจ้งเตือน เพิ่มเพื่อเฝ้าดู RSI',
      status: { neutral: 'ปกติ', oversold: 'ขายมาก', overbought: 'ซื้อมาก' },
      card: {
        rsi: 'RSI: {value}',
        thresholds: 'ต่ำ: {low} / สูง: {high}',
        status: 'สถานะ: {status}',
      },
    },
    settings: {
      heading: 'ตั้งค่า',
      form: {
        apiKey: 'Alpha Vantage API Key',
        defaultSymbol: 'สัญลักษณ์เริ่มต้น',
        useNetlify: 'ใช้ Netlify proxy (เก็บ API key บนเซิร์ฟเวอร์)',
        submit: 'บันทึกการตั้งค่า',
        reset: 'รีเซ็ตแอป',
      },
      saveSuccess: 'บันทึกการตั้งค่าแล้ว',
      resetConfirm: 'ต้องการรีเซ็ตข้อมูลทั้งหมดหรือไม่?',
      resetDone: 'รีเซ็ตแอปแล้ว',
    },
    footer: { disclaimer: 'เพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำการลงทุน' },
    status: {
      api: {
        live: 'API: ใช้งานได้',
        mock: 'API: ข้อมูลจำลอง',
        error: 'API: ขัดข้อง',
        unknown: 'API: ไม่ทราบ',
      },
    },
    common: {
      remove: 'ลบ',
      price: 'ราคา',
      download: 'ดาวน์โหลด',
      restore: 'กู้คืน',
      browse: 'เลือกไฟล์…',
      cancel: 'ยกเลิก',
      signal: { buy: 'ซื้อ', sell: 'ขาย' },
    },
  },
  Kt = {
    en: { label: 'English', locale: 'en-US', htmlLang: 'en', messages: jl },
    th: { label: 'ไทย', locale: 'th-TH', htmlLang: 'th', messages: Ul },
  },
  On = 'en';
function ho(i, t) {
  return i.split('.').reduce((e, n) => (e && e[n] !== void 0 ? e[n] : void 0), t);
}
class Yl {
  constructor() {
    ((this.localeKey = On), (this.listeners = new Set()));
  }
  get locale() {
    return Kt[this.localeKey];
  }
  setLocale(t) {
    (Kt[t]
      ? (this.localeKey = t)
      : (console.warn('Locale '.concat(t, ' not found, falling back to default')),
        (this.localeKey = On)),
      this.listeners.forEach((e) => e()));
  }
  onChange(t) {
    return (this.listeners.add(t), () => this.listeners.delete(t));
  }
  t(t, e = {}) {
    var o;
    const n = this.locale.messages;
    let s = (o = ho(t, n)) != null ? o : ho(t, Kt[On].messages);
    return s === void 0
      ? t
      : typeof s != 'string'
        ? s
        : s.replace(/\{(\w+)}/g, (a, r) => (e[r] !== void 0 ? e[r] : a));
  }
  applyTranslations(t = document) {
    (t.querySelectorAll('[data-i18n]').forEach((e) => {
      const n = e.dataset.i18n;
      n && (e.textContent = this.t(n));
    }),
      t.querySelectorAll('[data-i18n-placeholder]').forEach((e) => {
        const n = e.dataset.i18nPlaceholder;
        n && e.setAttribute('placeholder', this.t(n));
      }),
      (document.title = this.t('app.title')),
      (document.documentElement.lang = this.locale.htmlLang));
  }
}
const Xl = [
  { code: 'USD', label: 'USD — US Dollar' },
  { code: 'THB', label: 'THB — Thai Baht' },
  { code: 'EUR', label: 'EUR — Euro' },
  { code: 'JPY', label: 'JPY — Japanese Yen' },
];
function Ai(i, t) {
  const e = i.locale;
  let n;
  try {
    n = new Intl.NumberFormat(e, { style: 'currency', currency: t, maximumFractionDigits: 2 });
  } catch (a) {
    (console.warn('Falling back to USD currency formatter', a),
      (n = new Intl.NumberFormat(e, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      })));
  }
  const s = new Intl.NumberFormat(e, { maximumFractionDigits: 4 }),
    o = new Intl.NumberFormat(e, {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return {
    locale: e,
    currency(a) {
      return Number.isFinite(a) ? n.format(a) : 'N/A';
    },
    number(a) {
      return Number.isFinite(a) ? s.format(a) : 'N/A';
    },
    percent(a) {
      return Number.isFinite(a) ? o.format(a) : 'N/A';
    },
  };
}
const Za = 'investment-toolkit-cache-v1';
function ql() {
  try {
    const i = localStorage.getItem(Za);
    return i ? JSON.parse(i) : {};
  } catch (i) {
    return (console.warn('Failed to load cache', i), {});
  }
}
let ai = ql();
function ws() {
  try {
    localStorage.setItem(Za, JSON.stringify(ai));
  } catch (i) {
    console.warn('Failed to persist cache', i);
  }
}
function uo(i) {
  const t = ai[i];
  return t ? (t.expireAt && t.expireAt < Date.now() ? (delete ai[i], ws(), null) : t.value) : null;
}
function Ti(i, t, e) {
  ((ai[i] = { value: t, expireAt: e ? Date.now() + e : null }), ws());
}
function Kl() {
  ((ai = {}), ws());
}
function Gl(i) {
  return new Promise((t) => setTimeout(t, i));
}
class Zl {
  constructor({ initialDelay: t = 0, maxDelay: e = 6e4 } = {}) {
    ((this.queue = Promise.resolve()), (this.delay = t), (this.maxDelay = e));
  }
  enqueue(t) {
    return (
      (this.queue = this.queue.then(async () => (this.delay > 0 && (await Gl(this.delay)), t()))),
      this.queue
    );
  }
  backoff(t = 2e3) {
    this.delay = Math.min(this.delay + t, this.maxDelay);
  }
  reset() {
    this.delay = 0;
  }
}
const Jl = ['frequency', 'Thank you for using Alpha Vantage'];
class Ae extends Error {
  constructor(t) {
    (super(t), (this.name = 'RateLimitError'));
  }
}
var wt, Ja, Qa, Qn, ts;
class Ql {
  constructor({ getSettings: t, updateStatus: e }) {
    lo(this, wt);
    ((this.getSettings = t),
      (this.updateStatus = e),
      (this.queue = new Zl({ initialDelay: 0, maxDelay: 6e4 })));
  }
  async getQuote(t) {
    return this.queue.enqueue(() => he(this, wt, Ja).call(this, t));
  }
  async getSeries(t, e) {
    return this.queue.enqueue(() => he(this, wt, Qa).call(this, t, e));
  }
}
((wt = new WeakSet()),
  (Ja = async function (t) {
    const { apiKey: e, useNetlifyProxy: n } = this.getSettings();
    if (!e && !n) throw new Error('Missing API credentials');
    const s = new URLSearchParams({ function: 'GLOBAL_QUOTE', symbol: t.toUpperCase() }),
      a = (await he(this, wt, Qn).call(this, s))['Global Quote'] || {},
      r = Number.parseFloat(a['05. price']),
      l = Number.parseFloat(a['08. previous close']) || Number.parseFloat(a['02. open']),
      c = Number.parseFloat(a['09. change']),
      h = a['10. change percent'],
      u = h ? Number.parseFloat(h.replace('%', '')) : l ? ((r - l) / l) * 100 : 0;
    if (!Number.isFinite(r)) throw new Error('Invalid quote response');
    return (
      this.queue.reset(),
      this.updateStatus('live'),
      {
        status: 'live',
        data: {
          symbol: t.toUpperCase(),
          price: r,
          previousClose: l || r,
          change: Number.isFinite(c) ? c : r - (l || r),
          changePercent: u,
        },
      }
    );
  }),
  (Qa = async function (t, e) {
    const { apiKey: n, useNetlifyProxy: s } = this.getSettings();
    if (!n && !s) throw new Error('Missing API credentials');
    const o = e === 'weekly' ? 'TIME_SERIES_WEEKLY_ADJUSTED' : 'TIME_SERIES_DAILY_ADJUSTED',
      a = new URLSearchParams({ function: o, symbol: t.toUpperCase(), outputsize: 'full' }),
      c = (await he(this, wt, Qn).call(this, a))[
        e === 'weekly' ? 'Weekly Adjusted Time Series' : 'Time Series (Daily)'
      ];
    if (!c) throw new Error('Missing time series data');
    const h = Object.entries(c)
      .map(([u, d]) => ({
        date: u,
        open: Number.parseFloat(d['1. open']),
        high: Number.parseFloat(d['2. high']),
        low: Number.parseFloat(d['3. low']),
        close: Number.parseFloat(d['4. close']),
        adjustedClose:
          Number.parseFloat(d['5. adjusted close']) || Number.parseFloat(d['4. close']),
        volume: Number.parseFloat(d['6. volume']),
      }))
      .filter((u) => Number.isFinite(u.close))
      .sort((u, d) => new Date(u.date) - new Date(d.date));
    return (this.queue.reset(), this.updateStatus('live'), { status: 'live', data: h });
  }),
  (Qn = async function (t) {
    const { apiKey: e, useNetlifyProxy: n } = this.getSettings();
    let s;
    if (n) {
      if (((s = await fetch('/.netlify/functions/alphavantage?'.concat(t.toString()))), !s.ok))
        throw s.status === 429
          ? (this.queue.backoff(), new Ae('Alpha Vantage proxy rate limit'))
          : new Error('Proxy HTTP '.concat(s.status));
      const r = await s.json(),
        l = he(this, wt, ts).call(this, r);
      if (l) throw (this.queue.backoff(), new Ae(l));
      return r;
    }
    if (
      (t.set('apikey', e),
      (s = await fetch('https://www.alphavantage.co/query?'.concat(t.toString()))),
      !s.ok)
    )
      throw s.status === 429
        ? (this.queue.backoff(), new Ae('Alpha Vantage rate limit'))
        : new Error('HTTP '.concat(s.status));
    const o = await s.json(),
      a = he(this, wt, ts).call(this, o);
    if (a) throw (this.queue.backoff(), new Ae(a));
    return o;
  }),
  (ts = function (t) {
    const e = (t == null ? void 0 : t.Note) || (t == null ? void 0 : t['Error Message']);
    if (!e) return null;
    const n = e.toLowerCase();
    return Jl.some((o) => n.includes(o)) ? e : null;
  }));
function tc(i) {
  return i
    .toUpperCase()
    .split('')
    .reduce((t, e) => t + e.charCodeAt(0), 0);
}
function ec(i) {
  let t = i % 2147483647;
  return (
    t <= 0 && (t += 2147483646),
    () => ((t = (t * 16807) % 2147483647), (t - 1) / 2147483646)
  );
}
function ic(i) {
  const t = i.getFullYear(),
    e = ''.concat(i.getMonth() + 1).padStart(2, '0'),
    n = ''.concat(i.getDate()).padStart(2, '0');
  return ''.concat(t, '-').concat(e, '-').concat(n);
}
const In = new Map();
function fo(i, t) {
  const e = ''.concat(i.toUpperCase(), '-').concat(t);
  if (In.has(e)) return In.get(e);
  const n = ec(tc(i + t)),
    s = new Date(),
    o = t === 'weekly' ? 260 : 520;
  let a = 30 + n() * 200;
  const r = [];
  let l = new Date(s);
  for (let c = 0; c < o; c++) {
    if (t === 'weekly') l.setDate(l.getDate() - 7);
    else
      do l.setDate(l.getDate() - 1);
      while (l.getDay() === 0 || l.getDay() === 6);
    const h = 0.015 + n() * 0.025,
      u = n() - 0.5;
    a = Math.max(5, a * (1 + u * h));
    const d = a * (1 + n() * 0.02),
      f = a * (1 - n() * 0.02),
      m = (d + f) / 2,
      b = a,
      _ = Math.round((t === 'weekly' ? 75e5 : 15e5) * (0.7 + n() * 0.6));
    (r.push({ date: ic(l), open: m, high: d, low: f, close: b, adjustedClose: b, volume: _ }),
      (l = new Date(l)));
  }
  return (r.sort((c, h) => new Date(c.date) - new Date(h.date)), In.set(e, r), r);
}
class nc {
  async getQuote(t) {
    var r;
    const e = fo(t, 'daily'),
      n = e.at(-1),
      s = (r = e.at(-2)) != null ? r : n,
      o = n.close - s.close,
      a = (o / s.close) * 100;
    return {
      status: 'mock',
      data: {
        symbol: t.toUpperCase(),
        price: n.close,
        previousClose: s.close,
        change: o,
        changePercent: a,
      },
    };
  }
  async getSeries(t, e) {
    return { status: 'mock', data: fo(t, e) };
  }
}
const Ei = { quote: 60 * 1e3, series: 300 * 1e3 };
function sc(i, t) {
  const e = () => i.state.settings,
    n = new Ql({ getSettings: e, updateStatus: t }),
    s = new nc();
  function o() {
    const c = e();
    return !!(c.apiKey || c.useNetlifyProxy);
  }
  async function a(c) {
    const h = 'quote:'.concat(c.toUpperCase()),
      u = uo(h);
    if (u) return u;
    if (o())
      try {
        const f = await n.getQuote(c);
        return (Ti(h, f.data, Ei.quote), f.data);
      } catch (f) {
        f instanceof Ae
          ? (console.warn('Alpha Vantage rate limit reached. Falling back to mock data.'),
            t('error', f.message))
          : (console.warn('Alpha Vantage quote error', f), t('error', f.message));
      }
    const d = await s.getQuote(c);
    return (t('mock'), Ti(h, d.data, Ei.quote), d.data);
  }
  async function r(c, h = 'daily') {
    const u = 'series:'.concat(c.toUpperCase(), ':').concat(h),
      d = uo(u);
    if (d) return d;
    if (o())
      try {
        const m = await n.getSeries(c, h);
        return (Ti(u, m.data, Ei.series), m.data);
      } catch (m) {
        m instanceof Ae
          ? (console.warn(
              'Alpha Vantage rate limit reached for series. Falling back to mock data.'
            ),
            t('error', m.message))
          : (console.warn('Alpha Vantage series error', m), t('error', m.message));
      }
    const f = await s.getSeries(c, h);
    return (t('mock'), Ti(u, f.data, Ei.series), f.data);
  }
  function l() {
    Kl();
  }
  return { getQuote: a, getSeries: r, clearCache: l };
}
function oc(i) {
  const t = document.getElementById('api-status');
  function e(n, s = '') {
    t &&
      ((t.dataset.status = n),
      (t.textContent = i.t('status.api.'.concat(n))),
      s ? (t.title = s) : t.removeAttribute('title'));
  }
  return (
    i.onChange(() => {
      if (!t) return;
      const n = t.dataset.status || 'unknown';
      t.textContent = i.t('status.api.'.concat(n));
    }),
    { update: e }
  );
}
function ac() {
  const i = Array.from(document.querySelectorAll('.panel')),
    t = Array.from(document.querySelectorAll('.nav-btn'));
  t.forEach((e) => {
    e.addEventListener('click', () => {
      const n = e.dataset.target;
      (t.forEach((o) => o.classList.toggle('active', o === e)),
        i.forEach((o) => o.classList.toggle('active', o.id === n)));
      const s = i.find((o) => o.id === n);
      s && s.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
function rc(i) {
  const t = ['Symbol', 'Shares', 'AvgCost'],
    e = i.map((n) => [n.symbol, n.shares, n.avgCost].join(','));
  return [t.join(','), ...e].join('\n');
}
function lc(i) {
  const t = i.trim().split(/\r?\n/);
  if (t.length < 2) throw new Error('CSV must include header and at least one row');
  const [, ...e] = t;
  return e
    .map((n) => n.split(',').map((s) => s.trim()))
    .filter((n) => n.length >= 3)
    .map(([n, s, o]) => ({
      symbol: n.toUpperCase(),
      shares: Number.parseFloat(s),
      avgCost: Number.parseFloat(o),
    }))
    .filter((n) => n.symbol && Number.isFinite(n.shares) && Number.isFinite(n.avgCost));
}
function cc(i) {
  return JSON.stringify({ portfolio: i }, null, 2);
}
function hc(i) {
  const t = JSON.parse(i);
  if (!Array.isArray(t.portfolio))
    throw new Error('Invalid JSON format. Expected { "portfolio": [...] }');
  return t.portfolio.map((e) => ({
    symbol: String(e.symbol || '').toUpperCase(),
    shares: Number.parseFloat(e.shares),
    avgCost: Number.parseFloat(e.avgCost),
  }));
}
function en(i, t, e = 'text/plain') {
  const n = new Blob([t], { type: e }),
    s = URL.createObjectURL(n),
    o = document.createElement('a');
  ((o.href = s),
    (o.download = i),
    document.body.appendChild(o),
    o.click(),
    document.body.removeChild(o),
    URL.revokeObjectURL(s));
}
function uc(i) {
  return new Promise((t, e) => {
    const n = new FileReader();
    ((n.onload = () => t(n.result)), (n.onerror = e), n.readAsText(i));
  });
}
function dc({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = document.getElementById('portfolio-form'),
    o = document.getElementById('portfolio-symbol'),
    a = document.getElementById('portfolio-shares'),
    r = document.getElementById('portfolio-price'),
    l = document.querySelector('#portfolio-table tbody'),
    c = document.getElementById('portfolio-summary'),
    h = document.getElementById('portfolio-export-csv'),
    u = document.getElementById('portfolio-export-json'),
    d = document.getElementById('portfolio-import-csv'),
    f = document.getElementById('portfolio-import-json'),
    m = document.getElementById('portfolio-import-file');
  let b = n;
  (s.addEventListener('submit', async (P) => {
    P.preventDefault();
    const v = o.value.trim().toUpperCase(),
      S = Number.parseFloat(a.value),
      M = Number.parseFloat(r.value);
    if (!v || !Number.isFinite(S) || !Number.isFinite(M) || S <= 0 || M <= 0) {
      alert(e.t('portfolio.form.invalid'));
      return;
    }
    const A = i.state.portfolio.find((k) => k.symbol === v);
    if (A) {
      const k = A.shares + S,
        T = A.avgCost * A.shares + M * S;
      ((A.shares = Number(k.toFixed(4))), (A.avgCost = Number((T / k).toFixed(4))));
    } else i.state.portfolio.push({ symbol: v, shares: S, avgCost: M });
    (i.persist(), (o.value = v), s.reset(), await _());
  }),
    l.addEventListener('click', async (P) => {
      const v = P.target.closest('button[data-action="remove"]');
      if (!v) return;
      const S = v.dataset.symbol;
      ((i.state.portfolio = i.state.portfolio.filter((M) => M.symbol !== S)),
        i.persist(),
        await _());
    }),
    h.addEventListener('click', () => {
      const P = rc(i.state.portfolio);
      en('portfolio.csv', P, 'text/csv');
    }),
    u.addEventListener('click', () => {
      const P = cc(i.state.portfolio);
      en('portfolio.json', P, 'application/json');
    }),
    d.addEventListener('click', () => {
      ((m.accept = '.csv'), (m.dataset.format = 'csv'), m.click());
    }),
    f.addEventListener('click', () => {
      ((m.accept = '.json'), (m.dataset.format = 'json'), m.click());
    }),
    m.addEventListener('change', async () => {
      var v;
      if (!((v = m.files) != null && v.length)) return;
      const [P] = m.files;
      try {
        const S = await uc(P);
        let M;
        (m.dataset.format === 'json' ? (M = hc(S)) : (M = lc(S)), x(M), i.persist(), await _());
      } catch (S) {
        alert('Import failed: '.concat(S.message));
      } finally {
        m.value = '';
      }
    }));
  function x(P) {
    P.forEach((v) => {
      if (!v.symbol || !Number.isFinite(v.shares) || !Number.isFinite(v.avgCost)) return;
      const S = v.symbol.toUpperCase(),
        M = i.state.portfolio.find((A) => A.symbol === S);
      if (M) {
        const A = M.shares + v.shares,
          k = M.avgCost * M.shares + v.avgCost * v.shares;
        ((M.shares = Number(A.toFixed(4))), (M.avgCost = Number((k / A).toFixed(4))));
      } else i.state.portfolio.push({ symbol: S, shares: v.shares, avgCost: v.avgCost });
    });
  }
  async function _() {
    const P = i.state.portfolio;
    if (!P.length) {
      ((l.innerHTML = '<tr><td colspan="7">'.concat(e.t('portfolio.empty'), '</td></tr>')),
        (c.innerHTML = ''),
        i.emit('portfolio:changed', []));
      return;
    }
    const v = await Promise.all(
      P.map(async (T) => {
        const I = (await t.getQuote(T.symbol)).price,
          R = T.shares * I,
          j = T.shares * T.avgCost,
          X = R - j,
          z = j === 0 ? 0 : X / j;
        return { ...T, lastPrice: I, value: R, cost: j, pl: X, plPercent: z };
      })
    );
    l.innerHTML = v
      .map((T) => {
        const O = T.pl >= 0 ? 'positive' : 'negative';
        return '<tr>\n          <td>'
          .concat(T.symbol, '</td>\n          <td>')
          .concat(b.number(T.shares), '</td>\n          <td>')
          .concat(b.currency(T.avgCost), '</td>\n          <td>')
          .concat(b.currency(T.lastPrice), '</td>\n          <td>')
          .concat(b.currency(T.value), '</td>\n          <td class="')
          .concat(O, '">')
          .concat(b.currency(T.pl), ' (')
          .concat(
            b.percent(T.plPercent),
            ')</td>\n          <td><button data-action="remove" data-symbol="'
          )
          .concat(T.symbol, '" aria-label="')
          .concat(e.t('common.remove'), ' ')
          .concat(T.symbol, '">✕</button></td>\n        </tr>');
      })
      .join('');
    const S = v.reduce((T, O) => T + O.cost, 0),
      M = v.reduce((T, O) => T + O.value, 0),
      A = M - S,
      k = S === 0 ? 0 : A / S;
    ((c.innerHTML = '\n      <div class="summary-card">\n        <h3>'
      .concat(e.t('portfolio.summary.value'), '</h3>\n        <p>')
      .concat(b.currency(M), '</p>\n      </div>\n      <div class="summary-card">\n        <h3>')
      .concat(e.t('portfolio.summary.cost'), '</h3>\n        <p>')
      .concat(b.currency(S), '</p>\n      </div>\n      <div class="summary-card">\n        <h3>')
      .concat(e.t('portfolio.summary.pl'), '</h3>\n        <p>')
      .concat(b.currency(A), ' (')
      .concat(b.percent(k), ')</p>\n      </div>')),
      i.emit('portfolio:changed', v));
  }
  async function w(P) {
    ((b = P), await _());
  }
  return {
    render: _,
    setFormatters: w,
    populateDefaults(P) {
      o.value = P;
    },
  };
}
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function mi(i) {
  return (i + 0.5) | 0;
}
const Gt = (i, t, e) => Math.max(Math.min(i, e), t);
function Ye(i) {
  return Gt(mi(i * 2.55), 0, 255);
}
function te(i) {
  return Gt(mi(i * 255), 0, 255);
}
function $t(i) {
  return Gt(mi(i / 2.55) / 100, 0, 1);
}
function go(i) {
  return Gt(mi(i * 100), 0, 100);
}
const vt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  es = [...'0123456789ABCDEF'],
  fc = (i) => es[i & 15],
  gc = (i) => es[(i & 240) >> 4] + es[i & 15],
  Di = (i) => (i & 240) >> 4 === (i & 15),
  pc = (i) => Di(i.r) && Di(i.g) && Di(i.b) && Di(i.a);
function mc(i) {
  var t = i.length,
    e;
  return (
    i[0] === '#' &&
      (t === 4 || t === 5
        ? (e = {
            r: 255 & (vt[i[1]] * 17),
            g: 255 & (vt[i[2]] * 17),
            b: 255 & (vt[i[3]] * 17),
            a: t === 5 ? vt[i[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (e = {
            r: (vt[i[1]] << 4) | vt[i[2]],
            g: (vt[i[3]] << 4) | vt[i[4]],
            b: (vt[i[5]] << 4) | vt[i[6]],
            a: t === 9 ? (vt[i[7]] << 4) | vt[i[8]] : 255,
          })),
    e
  );
}
const bc = (i, t) => (i < 255 ? t(i) : '');
function yc(i) {
  var t = pc(i) ? fc : gc;
  return i ? '#' + t(i.r) + t(i.g) + t(i.b) + bc(i.a, t) : void 0;
}
const xc =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function tr(i, t, e) {
  const n = t * Math.min(e, 1 - e),
    s = (o, a = (o + i / 30) % 12) => e - n * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [s(0), s(8), s(4)];
}
function _c(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function vc(i, t, e) {
  const n = tr(i, 1, 0.5);
  let s;
  for (t + e > 1 && ((s = 1 / (t + e)), (t *= s), (e *= s)), s = 0; s < 3; s++)
    ((n[s] *= 1 - t - e), (n[s] += t));
  return n;
}
function Sc(i, t, e, n, s) {
  return i === s ? (t - e) / n + (t < e ? 6 : 0) : t === s ? (e - i) / n + 2 : (i - t) / n + 4;
}
function Ms(i) {
  const e = i.r / 255,
    n = i.g / 255,
    s = i.b / 255,
    o = Math.max(e, n, s),
    a = Math.min(e, n, s),
    r = (o + a) / 2;
  let l, c, h;
  return (
    o !== a &&
      ((h = o - a),
      (c = r > 0.5 ? h / (2 - o - a) : h / (o + a)),
      (l = Sc(e, n, s, h, o)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, r]
  );
}
function ks(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(te);
}
function Ps(i, t, e) {
  return ks(tr, i, t, e);
}
function wc(i, t, e) {
  return ks(vc, i, t, e);
}
function Mc(i, t, e) {
  return ks(_c, i, t, e);
}
function er(i) {
  return ((i % 360) + 360) % 360;
}
function kc(i) {
  const t = xc.exec(i);
  let e = 255,
    n;
  if (!t) return;
  t[5] !== n && (e = t[6] ? Ye(+t[5]) : te(+t[5]));
  const s = er(+t[2]),
    o = +t[3] / 100,
    a = +t[4] / 100;
  return (
    t[1] === 'hwb' ? (n = wc(s, o, a)) : t[1] === 'hsv' ? (n = Mc(s, o, a)) : (n = Ps(s, o, a)),
    { r: n[0], g: n[1], b: n[2], a: e }
  );
}
function Pc(i, t) {
  var e = Ms(i);
  ((e[0] = er(e[0] + t)), (e = Ps(e)), (i.r = e[0]), (i.g = e[1]), (i.b = e[2]));
}
function Cc(i) {
  if (!i) return;
  const t = Ms(i),
    e = t[0],
    n = go(t[1]),
    s = go(t[2]);
  return i.a < 255
    ? 'hsla('.concat(e, ', ').concat(n, '%, ').concat(s, '%, ').concat($t(i.a), ')')
    : 'hsl('.concat(e, ', ').concat(n, '%, ').concat(s, '%)');
}
const po = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  mo = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
function Ac() {
  const i = {},
    t = Object.keys(mo),
    e = Object.keys(po);
  let n, s, o, a, r;
  for (n = 0; n < t.length; n++) {
    for (a = r = t[n], s = 0; s < e.length; s++) ((o = e[s]), (r = r.replace(o, po[o])));
    ((o = parseInt(mo[a], 16)), (i[r] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]));
  }
  return i;
}
let Oi;
function Tc(i) {
  Oi || ((Oi = Ac()), (Oi.transparent = [0, 0, 0, 0]));
  const t = Oi[i.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const Ec =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Dc(i) {
  const t = Ec.exec(i);
  let e = 255,
    n,
    s,
    o;
  if (t) {
    if (t[7] !== n) {
      const a = +t[7];
      e = t[8] ? Ye(a) : Gt(a * 255, 0, 255);
    }
    return (
      (n = +t[1]),
      (s = +t[3]),
      (o = +t[5]),
      (n = 255 & (t[2] ? Ye(n) : Gt(n, 0, 255))),
      (s = 255 & (t[4] ? Ye(s) : Gt(s, 0, 255))),
      (o = 255 & (t[6] ? Ye(o) : Gt(o, 0, 255))),
      { r: n, g: s, b: o, a: e }
    );
  }
}
function Oc(i) {
  return (
    i &&
    (i.a < 255
      ? 'rgba('.concat(i.r, ', ').concat(i.g, ', ').concat(i.b, ', ').concat($t(i.a), ')')
      : 'rgb('.concat(i.r, ', ').concat(i.g, ', ').concat(i.b, ')'))
  );
}
const Ln = (i) => (i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055),
  Pe = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function Ic(i, t, e) {
  const n = Pe($t(i.r)),
    s = Pe($t(i.g)),
    o = Pe($t(i.b));
  return {
    r: te(Ln(n + e * (Pe($t(t.r)) - n))),
    g: te(Ln(s + e * (Pe($t(t.g)) - s))),
    b: te(Ln(o + e * (Pe($t(t.b)) - o))),
    a: i.a + e * (t.a - i.a),
  };
}
function Ii(i, t, e) {
  if (i) {
    let n = Ms(i);
    ((n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1))),
      (n = Ps(n)),
      (i.r = n[0]),
      (i.g = n[1]),
      (i.b = n[2]));
  }
}
function ir(i, t) {
  return i && Object.assign(t || {}, i);
}
function bo(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((t = { r: i[0], g: i[1], b: i[2], a: 255 }), i.length > 3 && (t.a = te(i[3])))
      : ((t = ir(i, { r: 0, g: 0, b: 0, a: 1 })), (t.a = te(t.a))),
    t
  );
}
function Lc(i) {
  return i.charAt(0) === 'r' ? Dc(i) : kc(i);
}
class ri {
  constructor(t) {
    if (t instanceof ri) return t;
    const e = typeof t;
    let n;
    (e === 'object' ? (n = bo(t)) : e === 'string' && (n = mc(t) || Tc(t) || Lc(t)),
      (this._rgb = n),
      (this._valid = !!n));
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ir(this._rgb);
    return (t && (t.a = $t(t.a)), t);
  }
  set rgb(t) {
    this._rgb = bo(t);
  }
  rgbString() {
    return this._valid ? Oc(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? yc(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Cc(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb,
        s = t.rgb;
      let o;
      const a = e === o ? 0.5 : e,
        r = 2 * a - 1,
        l = n.a - s.a,
        c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      ((o = 1 - c),
        (n.r = 255 & (c * n.r + o * s.r + 0.5)),
        (n.g = 255 & (c * n.g + o * s.g + 0.5)),
        (n.b = 255 & (c * n.b + o * s.b + 0.5)),
        (n.a = a * n.a + (1 - a) * s.a),
        (this.rgb = n));
    }
    return this;
  }
  interpolate(t, e) {
    return (t && (this._rgb = Ic(this._rgb, t._rgb, e)), this);
  }
  clone() {
    return new ri(this.rgb);
  }
  alpha(t) {
    return ((this._rgb.a = te(t)), this);
  }
  clearer(t) {
    const e = this._rgb;
    return ((e.a *= 1 - t), this);
  }
  greyscale() {
    const t = this._rgb,
      e = mi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return ((t.r = t.g = t.b = e), this);
  }
  opaquer(t) {
    const e = this._rgb;
    return ((e.a *= 1 + t), this);
  }
  negate() {
    const t = this._rgb;
    return ((t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this);
  }
  lighten(t) {
    return (Ii(this._rgb, 2, t), this);
  }
  darken(t) {
    return (Ii(this._rgb, 2, -t), this);
  }
  saturate(t) {
    return (Ii(this._rgb, 1, t), this);
  }
  desaturate(t) {
    return (Ii(this._rgb, 1, -t), this);
  }
  rotate(t) {
    return (Pc(this._rgb, t), this);
  }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function Ht() {}
const Rc = (() => {
  let i = 0;
  return () => i++;
})();
function V(i) {
  return i == null;
}
function K(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]';
}
function W(i) {
  return i !== null && Object.prototype.toString.call(i) === '[object Object]';
}
function J(i) {
  return (typeof i == 'number' || i instanceof Number) && isFinite(+i);
}
function bt(i, t) {
  return J(i) ? i : t;
}
function N(i, t) {
  return typeof i > 'u' ? t : i;
}
const Fc = (i, t) => (typeof i == 'string' && i.endsWith('%') ? parseFloat(i) / 100 : +i / t),
  nr = (i, t) => (typeof i == 'string' && i.endsWith('%') ? (parseFloat(i) / 100) * t : +i);
function F(i, t, e) {
  if (i && typeof i.call == 'function') return i.apply(e, t);
}
function H(i, t, e, n) {
  let s, o, a;
  if (K(i)) for (o = i.length, s = 0; s < o; s++) t.call(e, i[s], s);
  else if (W(i)) for (a = Object.keys(i), o = a.length, s = 0; s < o; s++) t.call(e, i[a[s]], a[s]);
}
function nn(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length) return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (((s = i[e]), (o = t[e]), s.datasetIndex !== o.datasetIndex || s.index !== o.index))
      return !1;
  return !0;
}
function sn(i) {
  if (K(i)) return i.map(sn);
  if (W(i)) {
    const t = Object.create(null),
      e = Object.keys(i),
      n = e.length;
    let s = 0;
    for (; s < n; ++s) t[e[s]] = sn(i[e[s]]);
    return t;
  }
  return i;
}
function sr(i) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(i) === -1;
}
function Nc(i, t, e, n) {
  if (!sr(i)) return;
  const s = t[i],
    o = e[i];
  W(s) && W(o) ? li(s, o, n) : (t[i] = sn(o));
}
function li(i, t, e) {
  const n = K(t) ? t : [t],
    s = n.length;
  if (!W(i)) return i;
  e = e || {};
  const o = e.merger || Nc;
  let a;
  for (let r = 0; r < s; ++r) {
    if (((a = n[r]), !W(a))) continue;
    const l = Object.keys(a);
    for (let c = 0, h = l.length; c < h; ++c) o(l[c], i, a, e);
  }
  return i;
}
function Qe(i, t) {
  return li(i, t, { merger: zc });
}
function zc(i, t, e) {
  if (!sr(i)) return;
  const n = t[i],
    s = e[i];
  W(n) && W(s) ? Qe(n, s) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = sn(s));
}
const yo = { '': (i) => i, x: (i) => i.x, y: (i) => i.y };
function Bc(i) {
  const t = i.split('.'),
    e = [];
  let n = '';
  for (const s of t)
    ((n += s), n.endsWith('\\') ? (n = n.slice(0, -1) + '.') : (e.push(n), (n = '')));
  return e;
}
function Hc(i) {
  const t = Bc(i);
  return (e) => {
    for (const n of t) {
      if (n === '') break;
      e = e && e[n];
    }
    return e;
  };
}
function ee(i, t) {
  return (yo[t] || (yo[t] = Hc(t)))(i);
}
function Cs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const ci = (i) => typeof i < 'u',
  ie = (i) => typeof i == 'function',
  xo = (i, t) => {
    if (i.size !== t.size) return !1;
    for (const e of i) if (!t.has(e)) return !1;
    return !0;
  };
function Vc(i) {
  return i.type === 'mouseup' || i.type === 'click' || i.type === 'contextmenu';
}
const U = Math.PI,
  q = 2 * U,
  Wc = q + U,
  on = Number.POSITIVE_INFINITY,
  $c = U / 180,
  tt = U / 2,
  ue = U / 4,
  _o = (U * 2) / 3,
  Zt = Math.log10,
  St = Math.sign;
function be(i, t, e) {
  return Math.abs(i - t) < e;
}
function vo(i) {
  const t = Math.round(i);
  i = be(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(Zt(i))),
    n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function jc(i) {
  const t = [],
    e = Math.sqrt(i);
  let n;
  for (n = 1; n < e; n++) i % n === 0 && (t.push(n), t.push(i / n));
  return (e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t);
}
function Uc(i) {
  return (
    typeof i == 'symbol' ||
    (typeof i == 'object' &&
      i !== null &&
      !(Symbol.toPrimitive in i || 'toString' in i || 'valueOf' in i))
  );
}
function Ee(i) {
  return !Uc(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Yc(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function or(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    ((o = i[n][e]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o))));
}
function Pt(i) {
  return i * (U / 180);
}
function As(i) {
  return i * (180 / U);
}
function So(i) {
  if (!J(i)) return;
  let t = 1,
    e = 0;
  for (; Math.round(i * t) / t !== i; ) ((t *= 10), e++);
  return e;
}
function ar(i, t) {
  const e = t.x - i.x,
    n = t.y - i.y,
    s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return (o < -0.5 * U && (o += q), { angle: o, distance: s });
}
function is(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Xc(i, t) {
  return ((i - t + Wc) % q) - U;
}
function rt(i) {
  return ((i % q) + q) % q;
}
function hi(i, t, e, n) {
  const s = rt(i),
    o = rt(t),
    a = rt(e),
    r = rt(o - s),
    l = rt(a - s),
    c = rt(s - o),
    h = rt(s - a);
  return s === o || s === a || (n && o === a) || (r > l && c < h);
}
function st(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function qc(i) {
  return st(i, -32768, 32767);
}
function jt(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function Ts(i, t, e) {
  e = e || ((a) => i[a] < t);
  let n = i.length - 1,
    s = 0,
    o;
  for (; n - s > 1; ) ((o = (s + n) >> 1), e(o) ? (s = o) : (n = o));
  return { lo: s, hi: n };
}
const Ut = (i, t, e, n) =>
    Ts(
      i,
      e,
      n
        ? (s) => {
            const o = i[s][t];
            return o < e || (o === e && i[s + 1][t] === e);
          }
        : (s) => i[s][t] < e
    ),
  Kc = (i, t, e) => Ts(i, e, (n) => i[n][t] >= e);
function Gc(i, t, e) {
  let n = 0,
    s = i.length;
  for (; n < s && i[n] < t; ) n++;
  for (; s > n && i[s - 1] > e; ) s--;
  return n > 0 || s < i.length ? i.slice(n, s) : i;
}
const rr = ['push', 'pop', 'shift', 'splice', 'unshift'];
function Zc(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  (Object.defineProperty(i, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    rr.forEach((e) => {
      const n = '_onData' + Cs(e),
        s = i[e];
      Object.defineProperty(i, e, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const a = s.apply(this, o);
          return (
            i._chartjs.listeners.forEach((r) => {
              typeof r[n] == 'function' && r[n](...o);
            }),
            a
          );
        },
      });
    }));
}
function wo(i, t) {
  const e = i._chartjs;
  if (!e) return;
  const n = e.listeners,
    s = n.indexOf(t);
  (s !== -1 && n.splice(s, 1),
    !(n.length > 0) &&
      (rr.forEach((o) => {
        delete i[o];
      }),
      delete i._chartjs));
}
function lr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const cr = (function () {
  return typeof window > 'u'
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function hr(i, t) {
  let e = [],
    n = !1;
  return function (...s) {
    ((e = s),
      n ||
        ((n = !0),
        cr.call(window, () => {
          ((n = !1), i.apply(t, e));
        })));
  };
}
function Jc(i, t) {
  let e;
  return function (...n) {
    return (t ? (clearTimeout(e), (e = setTimeout(i, t, n))) : i.apply(this, n), t);
  };
}
const Es = (i) => (i === 'start' ? 'left' : i === 'end' ? 'right' : 'center'),
  at = (i, t, e) => (i === 'start' ? t : i === 'end' ? e : (t + e) / 2),
  Qc = (i, t, e, n) => (i === (n ? 'left' : 'right') ? e : i === 'center' ? (t + e) / 2 : t);
function ur(i, t, e) {
  const n = t.length;
  let s = 0,
    o = n;
  if (i._sorted) {
    const { iScale: a, vScale: r, _parsed: l } = i,
      c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
      h = a.axis,
      { min: u, max: d, minDefined: f, maxDefined: m } = a.getUserBounds();
    if (f) {
      if (((s = Math.min(Ut(l, h, u).lo, e ? n : Ut(t, h, a.getPixelForValue(u)).lo)), c)) {
        const b = l
          .slice(0, s + 1)
          .reverse()
          .findIndex((x) => !V(x[r.axis]));
        s -= Math.max(0, b);
      }
      s = st(s, 0, n - 1);
    }
    if (m) {
      let b = Math.max(
        Ut(l, a.axis, d, !0).hi + 1,
        e ? 0 : Ut(t, h, a.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const x = l.slice(b - 1).findIndex((_) => !V(_[r.axis]));
        b += Math.max(0, x);
      }
      o = st(b, s, n) - s;
    } else o = n - s;
  }
  return { start: s, count: o };
}
function dr(i) {
  const { xScale: t, yScale: e, _scaleRanges: n } = i,
    s = { xmin: t.min, xmax: t.max, ymin: e.min, ymax: e.max };
  if (!n) return ((i._scaleRanges = s), !0);
  const o = n.xmin !== t.min || n.xmax !== t.max || n.ymin !== e.min || n.ymax !== e.max;
  return (Object.assign(n, s), o);
}
const Li = (i) => i === 0 || i === 1,
  Mo = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - t) * q) / e)),
  ko = (i, t, e) => Math.pow(2, -10 * i) * Math.sin(((i - t) * q) / e) + 1,
  ti = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) => ((i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1)),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) => ((i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2)),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * tt) + 1,
    easeOutSine: (i) => Math.sin(i * tt),
    easeInOutSine: (i) => -0.5 * (Math.cos(U * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      Li(i)
        ? i
        : i < 0.5
          ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (Li(i) ? i : Mo(i, 0.075, 0.3)),
    easeOutElastic: (i) => (Li(i) ? i : ko(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return Li(i)
        ? i
        : i < 0.5
          ? 0.5 * Mo(i * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * ko(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let t = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t))
        : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i) => 1 - ti.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
          ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
          : i < 2.5 / 2.75
            ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
            : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5 ? ti.easeInBounce(i * 2) * 0.5 : ti.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function Ds(i) {
  if (i && typeof i == 'object') {
    const t = i.toString();
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]';
  }
  return !1;
}
function Po(i) {
  return Ds(i) ? i : new ri(i);
}
function Rn(i) {
  return Ds(i) ? i : new ri(i).saturate(0.5).darken(0.1).hexString();
}
const th = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  eh = ['color', 'borderColor', 'backgroundColor'];
function ih(i) {
  (i.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn',
    }),
    i.set('animations', {
      colors: { type: 'color', properties: eh },
      numbers: { type: 'number', properties: th },
    }),
    i.describe('animations', { _fallback: 'animation' }),
    i.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: (t) => t | 0 },
        },
      },
    }));
}
function nh(i) {
  i.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
}
const Co = new Map();
function sh(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let n = Co.get(e);
  return (n || ((n = new Intl.NumberFormat(i, t)), Co.set(e, n)), n);
}
function bi(i, t, e) {
  return sh(t, e).format(i);
}
const fr = {
  values(i) {
    return K(i) ? i : '' + i;
  },
  numeric(i, t, e) {
    if (i === 0) return '0';
    const n = this.chart.options.locale;
    let s,
      o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      ((c < 1e-4 || c > 1e15) && (s = 'scientific'), (o = oh(i, e)));
    }
    const a = Zt(Math.abs(o)),
      r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
      l = { notation: s, minimumFractionDigits: r, maximumFractionDigits: r };
    return (Object.assign(l, this.options.ticks.format), bi(i, n, l));
  },
  logarithmic(i, t, e) {
    if (i === 0) return '0';
    const n = e[t].significand || i / Math.pow(10, Math.floor(Zt(i)));
    return [1, 2, 3, 5, 10, 15].includes(n) || t > 0.8 * e.length
      ? fr.numeric.call(this, i, t, e)
      : '';
  },
};
function oh(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return (Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e);
}
var dn = { formatters: fr };
function ah(i) {
  (i.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: dn.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    i.route('scale.ticks', 'color', '', 'color'),
    i.route('scale.grid', 'color', '', 'borderColor'),
    i.route('scale.border', 'color', '', 'borderColor'),
    i.route('scale.title', 'color', '', 'color'),
    i.describe('scale', {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith('before') && !t.startsWith('after') && t !== 'callback' && t !== 'parser',
      _indexable: (t) => t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash',
    }),
    i.describe('scales', { _fallback: 'scale' }),
    i.describe('scale.ticks', {
      _scriptable: (t) => t !== 'backdropPadding' && t !== 'callback',
      _indexable: (t) => t !== 'backdropPadding',
    }));
}
const _e = Object.create(null),
  ns = Object.create(null);
function ei(i, t) {
  if (!t) return i;
  const e = t.split('.');
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = Object.create(null));
  }
  return i;
}
function Fn(i, t, e) {
  return typeof t == 'string' ? li(ei(i, t), e) : li(ei(i, ''), t);
}
class rh {
  constructor(t, e) {
    ((this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => Rn(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => Rn(s.borderColor)),
      (this.hoverColor = (n, s) => Rn(s.color)),
      (this.indexAxis = 'x'),
      (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(e));
  }
  set(t, e) {
    return Fn(this, t, e);
  }
  get(t) {
    return ei(this, t);
  }
  describe(t, e) {
    return Fn(ns, t, e);
  }
  override(t, e) {
    return Fn(_e, t, e);
  }
  route(t, e, n, s) {
    const o = ei(this, t),
      a = ei(this, n),
      r = '_' + e;
    Object.defineProperties(o, {
      [r]: { value: o[e], writable: !0 },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[r],
            c = a[s];
          return W(l) ? Object.assign({}, c, l) : N(l, c);
        },
        set(l) {
          this[r] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var G = new rh(
  {
    _scriptable: (i) => !i.startsWith('on'),
    _indexable: (i) => i !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [ih, nh, ah]
);
function lh(i) {
  return !i || V(i.size) || V(i.family)
    ? null
    : (i.style ? i.style + ' ' : '') + (i.weight ? i.weight + ' ' : '') + i.size + 'px ' + i.family;
}
function an(i, t, e, n, s) {
  let o = t[s];
  return (o || ((o = t[s] = i.measureText(s).width), e.push(s)), o > n && (n = o), n);
}
function ch(i, t, e, n) {
  n = n || {};
  let s = (n.data = n.data || {}),
    o = (n.garbageCollect = n.garbageCollect || []);
  (n.font !== t && ((s = n.data = {}), (o = n.garbageCollect = []), (n.font = t)),
    i.save(),
    (i.font = t));
  let a = 0;
  const r = e.length;
  let l, c, h, u, d;
  for (l = 0; l < r; l++)
    if (((u = e[l]), u != null && !K(u))) a = an(i, s, o, a, u);
    else if (K(u))
      for (c = 0, h = u.length; c < h; c++)
        ((d = u[c]), d != null && !K(d) && (a = an(i, s, o, a, d)));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++) delete s[o[l]];
    o.splice(0, f);
  }
  return a;
}
function de(i, t, e) {
  const n = i.currentDevicePixelRatio,
    s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function Ao(i, t) {
  (!t && !i) ||
    ((t = t || i.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, i.width, i.height),
    t.restore());
}
function ss(i, t, e, n) {
  gr(i, t, e, n, null);
}
function gr(i, t, e, n, s) {
  let o, a, r, l, c, h, u, d;
  const f = t.pointStyle,
    m = t.rotation,
    b = t.radius;
  let x = (m || 0) * $c;
  if (
    f &&
    typeof f == 'object' &&
    ((o = f.toString()), o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
  ) {
    (i.save(),
      i.translate(e, n),
      i.rotate(x),
      i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      i.restore());
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch ((i.beginPath(), f)) {
      default:
        (s ? i.ellipse(e, n, s / 2, b, 0, 0, q) : i.arc(e, n, b, 0, q), i.closePath());
        break;
      case 'triangle':
        ((h = s ? s / 2 : b),
          i.moveTo(e + Math.sin(x) * h, n - Math.cos(x) * b),
          (x += _o),
          i.lineTo(e + Math.sin(x) * h, n - Math.cos(x) * b),
          (x += _o),
          i.lineTo(e + Math.sin(x) * h, n - Math.cos(x) * b),
          i.closePath());
        break;
      case 'rectRounded':
        ((c = b * 0.516),
          (l = b - c),
          (a = Math.cos(x + ue) * l),
          (u = Math.cos(x + ue) * (s ? s / 2 - c : l)),
          (r = Math.sin(x + ue) * l),
          (d = Math.sin(x + ue) * (s ? s / 2 - c : l)),
          i.arc(e - u, n - r, c, x - U, x - tt),
          i.arc(e + d, n - a, c, x - tt, x),
          i.arc(e + u, n + r, c, x, x + tt),
          i.arc(e - d, n + a, c, x + tt, x + U),
          i.closePath());
        break;
      case 'rect':
        if (!m) {
          ((l = Math.SQRT1_2 * b), (h = s ? s / 2 : l), i.rect(e - h, n - l, 2 * h, 2 * l));
          break;
        }
        x += ue;
      case 'rectRot':
        ((u = Math.cos(x) * (s ? s / 2 : b)),
          (a = Math.cos(x) * b),
          (r = Math.sin(x) * b),
          (d = Math.sin(x) * (s ? s / 2 : b)),
          i.moveTo(e - u, n - r),
          i.lineTo(e + d, n - a),
          i.lineTo(e + u, n + r),
          i.lineTo(e - d, n + a),
          i.closePath());
        break;
      case 'crossRot':
        x += ue;
      case 'cross':
        ((u = Math.cos(x) * (s ? s / 2 : b)),
          (a = Math.cos(x) * b),
          (r = Math.sin(x) * b),
          (d = Math.sin(x) * (s ? s / 2 : b)),
          i.moveTo(e - u, n - r),
          i.lineTo(e + u, n + r),
          i.moveTo(e + d, n - a),
          i.lineTo(e - d, n + a));
        break;
      case 'star':
        ((u = Math.cos(x) * (s ? s / 2 : b)),
          (a = Math.cos(x) * b),
          (r = Math.sin(x) * b),
          (d = Math.sin(x) * (s ? s / 2 : b)),
          i.moveTo(e - u, n - r),
          i.lineTo(e + u, n + r),
          i.moveTo(e + d, n - a),
          i.lineTo(e - d, n + a),
          (x += ue),
          (u = Math.cos(x) * (s ? s / 2 : b)),
          (a = Math.cos(x) * b),
          (r = Math.sin(x) * b),
          (d = Math.sin(x) * (s ? s / 2 : b)),
          i.moveTo(e - u, n - r),
          i.lineTo(e + u, n + r),
          i.moveTo(e + d, n - a),
          i.lineTo(e - d, n + a));
        break;
      case 'line':
        ((a = s ? s / 2 : Math.cos(x) * b),
          (r = Math.sin(x) * b),
          i.moveTo(e - a, n - r),
          i.lineTo(e + a, n + r));
        break;
      case 'dash':
        (i.moveTo(e, n), i.lineTo(e + Math.cos(x) * (s ? s / 2 : b), n + Math.sin(x) * b));
        break;
      case !1:
        i.closePath();
        break;
    }
    (i.fill(), t.borderWidth > 0 && i.stroke());
  }
}
function Ft(i, t, e) {
  return (
    (e = e || 0.5),
    !t || (i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e)
  );
}
function fn(i, t) {
  (i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip());
}
function gn(i) {
  i.restore();
}
function hh(i, t, e, n, s) {
  if (!t) return i.lineTo(e.x, e.y);
  if (s === 'middle') {
    const o = (t.x + e.x) / 2;
    (i.lineTo(o, t.y), i.lineTo(o, e.y));
  } else (s === 'after') != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function uh(i, t, e, n) {
  if (!t) return i.lineTo(e.x, e.y);
  i.bezierCurveTo(
    n ? t.cp1x : t.cp2x,
    n ? t.cp1y : t.cp2y,
    n ? e.cp2x : e.cp1x,
    n ? e.cp2y : e.cp1y,
    e.x,
    e.y
  );
}
function dh(i, t) {
  (t.translation && i.translate(t.translation[0], t.translation[1]),
    V(t.rotation) || i.rotate(t.rotation),
    t.color && (i.fillStyle = t.color),
    t.textAlign && (i.textAlign = t.textAlign),
    t.textBaseline && (i.textBaseline = t.textBaseline));
}
function fh(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n),
      a = t - o.actualBoundingBoxLeft,
      r = t + o.actualBoundingBoxRight,
      l = e - o.actualBoundingBoxAscent,
      c = e + o.actualBoundingBoxDescent,
      h = s.strikethrough ? (l + c) / 2 : c;
    ((i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = s.decorationWidth || 2),
      i.moveTo(a, h),
      i.lineTo(r, h),
      i.stroke());
  }
}
function gh(i, t) {
  const e = i.fillStyle;
  ((i.fillStyle = t.color), i.fillRect(t.left, t.top, t.width, t.height), (i.fillStyle = e));
}
function ve(i, t, e, n, s, o = {}) {
  const a = K(t) ? t : [t],
    r = o.strokeWidth > 0 && o.strokeColor !== '';
  let l, c;
  for (i.save(), i.font = s.string, dh(i, o), l = 0; l < a.length; ++l)
    ((c = a[l]),
      o.backdrop && gh(i, o.backdrop),
      r &&
        (o.strokeColor && (i.strokeStyle = o.strokeColor),
        V(o.strokeWidth) || (i.lineWidth = o.strokeWidth),
        i.strokeText(c, e, n, o.maxWidth)),
      i.fillText(c, e, n, o.maxWidth),
      fh(i, e, n, c, o),
      (n += Number(s.lineHeight)));
  i.restore();
}
function ui(i, t) {
  const { x: e, y: n, w: s, h: o, radius: a } = t;
  (i.arc(e + a.topLeft, n + a.topLeft, a.topLeft, 1.5 * U, U, !0),
    i.lineTo(e, n + o - a.bottomLeft),
    i.arc(e + a.bottomLeft, n + o - a.bottomLeft, a.bottomLeft, U, tt, !0),
    i.lineTo(e + s - a.bottomRight, n + o),
    i.arc(e + s - a.bottomRight, n + o - a.bottomRight, a.bottomRight, tt, 0, !0),
    i.lineTo(e + s, n + a.topRight),
    i.arc(e + s - a.topRight, n + a.topRight, a.topRight, 0, -tt, !0),
    i.lineTo(e + a.topLeft, n));
}
const ph = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  mh = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function bh(i, t) {
  const e = ('' + i).match(ph);
  if (!e || e[1] === 'normal') return t * 1.2;
  switch (((i = +e[2]), e[3])) {
    case 'px':
      return i;
    case '%':
      i /= 100;
      break;
  }
  return t * i;
}
const yh = (i) => +i || 0;
function Os(i, t) {
  const e = {},
    n = W(t),
    s = n ? Object.keys(t) : t,
    o = W(i) ? (n ? (a) => N(i[a], i[t[a]]) : (a) => i[a]) : () => i;
  for (const a of s) e[a] = yh(o(a));
  return e;
}
function pr(i) {
  return Os(i, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function ye(i) {
  return Os(i, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function ct(i) {
  const t = pr(i);
  return ((t.width = t.left + t.right), (t.height = t.top + t.bottom), t);
}
function it(i, t) {
  ((i = i || {}), (t = t || G.font));
  let e = N(i.size, t.size);
  typeof e == 'string' && (e = parseInt(e, 10));
  let n = N(i.style, t.style);
  n &&
    !('' + n).match(mh) &&
    (console.warn('Invalid font style specified: "' + n + '"'), (n = void 0));
  const s = {
    family: N(i.family, t.family),
    lineHeight: bh(N(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: N(i.weight, t.weight),
    string: '',
  };
  return ((s.string = lh(s)), s);
}
function Xe(i, t, e, n) {
  let s, o, a;
  for (s = 0, o = i.length; s < o; ++s) if (((a = i[s]), a !== void 0 && a !== void 0)) return a;
}
function xh(i, t, e) {
  const { min: n, max: s } = i,
    o = nr(t, (s - n) / 2),
    a = (r, l) => (e && r === 0 ? 0 : r + l);
  return { min: a(n, -Math.abs(o)), max: a(s, o) };
}
function se(i, t) {
  return Object.assign(Object.create(i), t);
}
function Is(i, t = [''], e, n, s = () => i[0]) {
  const o = e || i;
  typeof n > 'u' && (n = xr('_fallback', i));
  const a = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (r) => Is([r, ...i], t, o, n),
  };
  return new Proxy(a, {
    deleteProperty(r, l) {
      return (delete r[l], delete r._keys, delete i[0][l], !0);
    },
    get(r, l) {
      return br(r, l, () => Ch(l, t, i, r));
    },
    getOwnPropertyDescriptor(r, l) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(r, l) {
      return Eo(r).includes(l);
    },
    ownKeys(r) {
      return Eo(r);
    },
    set(r, l, c) {
      const h = r._storage || (r._storage = s());
      return ((r[l] = h[l] = c), delete r._keys, !0);
    },
  });
}
function De(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: new Set(),
    _descriptors: mr(i, n),
    setContext: (o) => De(i, o, e, n),
    override: (o) => De(i.override(o), t, e, n),
  };
  return new Proxy(s, {
    deleteProperty(o, a) {
      return (delete o[a], delete i[a], !0);
    },
    get(o, a, r) {
      return br(o, a, () => vh(o, a, r));
    },
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys
        ? Reflect.has(i, a)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(o, a) {
      return Reflect.has(i, a);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(o, a, r) {
      return ((i[a] = r), delete o[a], !0);
    },
  });
}
function mr(i, t = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: e = t.scriptable, _indexable: n = t.indexable, _allKeys: s = t.allKeys } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: ie(e) ? e : () => e,
    isIndexable: ie(n) ? n : () => n,
  };
}
const _h = (i, t) => (i ? i + Cs(t) : t),
  Ls = (i, t) =>
    W(t) && i !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function br(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === 'constructor') return i[t];
  const n = e();
  return ((i[t] = n), n);
}
function vh(i, t, e) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: a } = i;
  let r = n[t];
  return (
    ie(r) && a.isScriptable(t) && (r = Sh(t, r, i, e)),
    K(r) && r.length && (r = wh(t, r, i, a.isIndexable)),
    Ls(t, r) && (r = De(r, s, o && o[t], a)),
    r
  );
}
function Sh(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: a, _stack: r } = e;
  if (r.has(i)) throw new Error('Recursion detected: ' + Array.from(r).join('->') + '->' + i);
  r.add(i);
  let l = t(o, a || n);
  return (r.delete(i), Ls(i, l) && (l = Rs(s._scopes, s, i, l)), l);
}
function wh(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: a, _descriptors: r } = e;
  if (typeof o.index < 'u' && n(i)) return t[o.index % t.length];
  if (W(t[0])) {
    const l = t,
      c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = Rs(c, s, i, h);
      t.push(De(u, o, a && a[i], r));
    }
  }
  return t;
}
function yr(i, t, e) {
  return ie(i) ? i(t, e) : i;
}
const Mh = (i, t) => (i === !0 ? t : typeof i == 'string' ? ee(t, i) : void 0);
function kh(i, t, e, n, s) {
  for (const o of t) {
    const a = Mh(e, o);
    if (a) {
      i.add(a);
      const r = yr(a._fallback, e, s);
      if (typeof r < 'u' && r !== e && r !== n) return r;
    } else if (a === !1 && typeof n < 'u' && e !== n) return null;
  }
  return !1;
}
function Rs(i, t, e, n) {
  const s = t._rootScopes,
    o = yr(t._fallback, e, n),
    a = [...i, ...s],
    r = new Set();
  r.add(n);
  let l = To(r, a, e, o || e, n);
  return l === null || (typeof o < 'u' && o !== e && ((l = To(r, a, o, l, n)), l === null))
    ? !1
    : Is(Array.from(r), [''], s, o, () => Ph(t, e, n));
}
function To(i, t, e, n, s) {
  for (; e; ) e = kh(i, t, e, n, s);
  return e;
}
function Ph(i, t, e) {
  const n = i._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return K(s) && W(e) ? e : s || {};
}
function Ch(i, t, e, n) {
  let s;
  for (const o of t)
    if (((s = xr(_h(o, i), e)), typeof s < 'u')) return Ls(i, s) ? Rs(e, n, i, s) : s;
}
function xr(i, t) {
  for (const e of t) {
    if (!e) continue;
    const n = e[i];
    if (typeof n < 'u') return n;
  }
}
function Eo(i) {
  let t = i._keys;
  return (t || (t = i._keys = Ah(i._scopes)), t);
}
function Ah(i) {
  const t = new Set();
  for (const e of i) for (const n of Object.keys(e).filter((s) => !s.startsWith('_'))) t.add(n);
  return Array.from(t);
}
function _r(i, t, e, n) {
  const { iScale: s } = i,
    { key: o = 'r' } = this._parsing,
    a = new Array(n);
  let r, l, c, h;
  for (r = 0, l = n; r < l; ++r) ((c = r + e), (h = t[c]), (a[r] = { r: s.parse(ee(h, o), c) }));
  return a;
}
const Th = Number.EPSILON || 1e-14,
  Oe = (i, t) => t < i.length && !i[t].skip && i[t],
  vr = (i) => (i === 'x' ? 'y' : 'x');
function Eh(i, t, e, n) {
  const s = i.skip ? t : i,
    o = t,
    a = e.skip ? t : e,
    r = is(o, s),
    l = is(a, o);
  let c = r / (r + l),
    h = l / (r + l);
  ((c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h));
  const u = n * c,
    d = n * h;
  return {
    previous: { x: o.x - u * (a.x - s.x), y: o.y - u * (a.y - s.y) },
    next: { x: o.x + d * (a.x - s.x), y: o.y + d * (a.y - s.y) },
  };
}
function Dh(i, t, e) {
  const n = i.length;
  let s,
    o,
    a,
    r,
    l,
    c = Oe(i, 0);
  for (let h = 0; h < n - 1; ++h)
    if (((l = c), (c = Oe(i, h + 1)), !(!l || !c))) {
      if (be(t[h], 0, Th)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      ((s = e[h] / t[h]),
        (o = e[h + 1] / t[h]),
        (r = Math.pow(s, 2) + Math.pow(o, 2)),
        !(r <= 9) && ((a = 3 / Math.sqrt(r)), (e[h] = s * a * t[h]), (e[h + 1] = o * a * t[h])));
    }
}
function Oh(i, t, e = 'x') {
  const n = vr(e),
    s = i.length;
  let o,
    a,
    r,
    l = Oe(i, 0);
  for (let c = 0; c < s; ++c) {
    if (((a = r), (r = l), (l = Oe(i, c + 1)), !r)) continue;
    const h = r[e],
      u = r[n];
    (a && ((o = (h - a[e]) / 3), (r['cp1'.concat(e)] = h - o), (r['cp1'.concat(n)] = u - o * t[c])),
      l &&
        ((o = (l[e] - h) / 3), (r['cp2'.concat(e)] = h + o), (r['cp2'.concat(n)] = u + o * t[c])));
  }
}
function Ih(i, t = 'x') {
  const e = vr(t),
    n = i.length,
    s = Array(n).fill(0),
    o = Array(n);
  let a,
    r,
    l,
    c = Oe(i, 0);
  for (a = 0; a < n; ++a)
    if (((r = l), (l = c), (c = Oe(i, a + 1)), !!l)) {
      if (c) {
        const h = c[t] - l[t];
        s[a] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[a] = r ? (c ? (St(s[a - 1]) !== St(s[a]) ? 0 : (s[a - 1] + s[a]) / 2) : s[a - 1]) : s[a];
    }
  (Dh(i, s, o), Oh(i, o, t));
}
function Ri(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function Lh(i, t) {
  let e,
    n,
    s,
    o,
    a,
    r = Ft(i[0], t);
  for (e = 0, n = i.length; e < n; ++e)
    ((a = o),
      (o = r),
      (r = e < n - 1 && Ft(i[e + 1], t)),
      o &&
        ((s = i[e]),
        a && ((s.cp1x = Ri(s.cp1x, t.left, t.right)), (s.cp1y = Ri(s.cp1y, t.top, t.bottom))),
        r && ((s.cp2x = Ri(s.cp2x, t.left, t.right)), (s.cp2y = Ri(s.cp2y, t.top, t.bottom)))));
}
function Rh(i, t, e, n, s) {
  let o, a, r, l;
  if ((t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === 'monotone'))
    Ih(i, s);
  else {
    let c = n ? i[i.length - 1] : i[0];
    for (o = 0, a = i.length; o < a; ++o)
      ((r = i[o]),
        (l = Eh(c, r, i[Math.min(o + 1, a - (n ? 0 : 1)) % a], t.tension)),
        (r.cp1x = l.previous.x),
        (r.cp1y = l.previous.y),
        (r.cp2x = l.next.x),
        (r.cp2y = l.next.y),
        (c = r));
  }
  t.capBezierPoints && Lh(i, e);
}
function Fs() {
  return typeof window < 'u' && typeof document < 'u';
}
function Ns(i) {
  let t = i.parentNode;
  return (t && t.toString() === '[object ShadowRoot]' && (t = t.host), t);
}
function rn(i, t, e) {
  let n;
  return (
    typeof i == 'string'
      ? ((n = parseInt(i, 10)), i.indexOf('%') !== -1 && (n = (n / 100) * t.parentNode[e]))
      : (n = i),
    n
  );
}
const pn = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Fh(i, t) {
  return pn(i).getPropertyValue(t);
}
const Nh = ['top', 'right', 'bottom', 'left'];
function xe(i, t, e) {
  const n = {};
  e = e ? '-' + e : '';
  for (let s = 0; s < 4; s++) {
    const o = Nh[s];
    n[o] = parseFloat(i[t + '-' + o + e]) || 0;
  }
  return ((n.width = n.left + n.right), (n.height = n.top + n.bottom), n);
}
const zh = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Bh(i, t) {
  const e = i.touches,
    n = e && e.length ? e[0] : i,
    { offsetX: s, offsetY: o } = n;
  let a = !1,
    r,
    l;
  if (zh(s, o, i.target)) ((r = s), (l = o));
  else {
    const c = t.getBoundingClientRect();
    ((r = n.clientX - c.left), (l = n.clientY - c.top), (a = !0));
  }
  return { x: r, y: l, box: a };
}
function Rt(i, t) {
  if ('native' in i) return i;
  const { canvas: e, currentDevicePixelRatio: n } = t,
    s = pn(e),
    o = s.boxSizing === 'border-box',
    a = xe(s, 'padding'),
    r = xe(s, 'border', 'width'),
    { x: l, y: c, box: h } = Bh(i, e),
    u = a.left + (h && r.left),
    d = a.top + (h && r.top);
  let { width: f, height: m } = t;
  return (
    o && ((f -= a.width + r.width), (m -= a.height + r.height)),
    { x: Math.round((((l - u) / f) * e.width) / n), y: Math.round((((c - d) / m) * e.height) / n) }
  );
}
function Hh(i, t, e) {
  let n, s;
  if (t === void 0 || e === void 0) {
    const o = i && Ns(i);
    if (!o) ((t = i.clientWidth), (e = i.clientHeight));
    else {
      const a = o.getBoundingClientRect(),
        r = pn(o),
        l = xe(r, 'border', 'width'),
        c = xe(r, 'padding');
      ((t = a.width - c.width - l.width),
        (e = a.height - c.height - l.height),
        (n = rn(r.maxWidth, o, 'clientWidth')),
        (s = rn(r.maxHeight, o, 'clientHeight')));
    }
  }
  return { width: t, height: e, maxWidth: n || on, maxHeight: s || on };
}
const Fi = (i) => Math.round(i * 10) / 10;
function Vh(i, t, e, n) {
  const s = pn(i),
    o = xe(s, 'margin'),
    a = rn(s.maxWidth, i, 'clientWidth') || on,
    r = rn(s.maxHeight, i, 'clientHeight') || on,
    l = Hh(i, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === 'content-box') {
    const d = xe(s, 'border', 'width'),
      f = xe(s, 'padding');
    ((c -= f.width + d.width), (h -= f.height + d.height));
  }
  return (
    (c = Math.max(0, c - o.width)),
    (h = Math.max(0, n ? c / n : h - o.height)),
    (c = Fi(Math.min(c, a, l.maxWidth))),
    (h = Fi(Math.min(h, r, l.maxHeight))),
    c && !h && (h = Fi(c / 2)),
    (t !== void 0 || e !== void 0) &&
      n &&
      l.height &&
      h > l.height &&
      ((h = l.height), (c = Fi(Math.floor(h * n)))),
    { width: c, height: h }
  );
}
function Do(i, t, e) {
  const n = t || 1,
    s = Math.floor(i.height * n),
    o = Math.floor(i.width * n);
  ((i.height = Math.floor(i.height)), (i.width = Math.floor(i.width)));
  const a = i.canvas;
  return (
    a.style &&
      (e || (!a.style.height && !a.style.width)) &&
      ((a.style.height = ''.concat(i.height, 'px')), (a.style.width = ''.concat(i.width, 'px'))),
    i.currentDevicePixelRatio !== n || a.height !== s || a.width !== o
      ? ((i.currentDevicePixelRatio = n),
        (a.height = s),
        (a.width = o),
        i.ctx.setTransform(n, 0, 0, n, 0, 0),
        !0)
      : !1
  );
}
const Wh = (function () {
  let i = !1;
  try {
    const t = {
      get passive() {
        return ((i = !0), !1);
      },
    };
    Fs() && (window.addEventListener('test', null, t), window.removeEventListener('test', null, t));
  } catch (t) {}
  return i;
})();
function Oo(i, t) {
  const e = Fh(i, t),
    n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function pe(i, t, e, n) {
  return { x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) };
}
function $h(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y:
      n === 'middle'
        ? e < 0.5
          ? i.y
          : t.y
        : n === 'after'
          ? e < 1
            ? i.y
            : t.y
          : e > 0
            ? t.y
            : i.y,
  };
}
function jh(i, t, e, n) {
  const s = { x: i.cp2x, y: i.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    a = pe(i, s, e),
    r = pe(s, o, e),
    l = pe(o, t, e),
    c = pe(a, r, e),
    h = pe(r, l, e);
  return pe(c, h, e);
}
const Uh = function (i, t) {
    return {
      x(e) {
        return i + i + t - e;
      },
      setWidth(e) {
        t = e;
      },
      textAlign(e) {
        return e === 'center' ? e : e === 'right' ? 'left' : 'right';
      },
      xPlus(e, n) {
        return e - n;
      },
      leftForLtr(e, n) {
        return e - n;
      },
    };
  },
  Yh = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, t) {
        return i + t;
      },
      leftForLtr(i, t) {
        return i;
      },
    };
  };
function Te(i, t, e) {
  return i ? Uh(t, e) : Yh();
}
function Sr(i, t) {
  let e, n;
  (t === 'ltr' || t === 'rtl') &&
    ((e = i.canvas.style),
    (n = [e.getPropertyValue('direction'), e.getPropertyPriority('direction')]),
    e.setProperty('direction', t, 'important'),
    (i.prevTextDirection = n));
}
function wr(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty('direction', t[0], t[1]));
}
function Mr(i) {
  return i === 'angle'
    ? { between: hi, compare: Xc, normalize: rt }
    : { between: jt, compare: (t, e) => t - e, normalize: (t) => t };
}
function Io({ start: i, end: t, count: e, loop: n, style: s }) {
  return { start: i % e, end: t % e, loop: n && (t - i + 1) % e === 0, style: s };
}
function Xh(i, t, e) {
  const { property: n, start: s, end: o } = e,
    { between: a, normalize: r } = Mr(n),
    l = t.length;
  let { start: c, end: h, loop: u } = i,
    d,
    f;
  if (u) {
    for (c += l, h += l, d = 0, f = l; d < f && a(r(t[c % l][n]), s, o); ++d) (c--, h--);
    ((c %= l), (h %= l));
  }
  return (h < c && (h += l), { start: c, end: h, loop: u, style: i.style });
}
function kr(i, t, e) {
  if (!e) return [i];
  const { property: n, start: s, end: o } = e,
    a = t.length,
    { compare: r, between: l, normalize: c } = Mr(n),
    { start: h, end: u, loop: d, style: f } = Xh(i, t, e),
    m = [];
  let b = !1,
    x = null,
    _,
    w,
    P;
  const v = () => l(s, P, _) && r(s, P) !== 0,
    S = () => r(o, _) === 0 || l(o, P, _),
    M = () => b || v(),
    A = () => !b || S();
  for (let k = h, T = h; k <= u; ++k)
    ((w = t[k % a]),
      !w.skip &&
        ((_ = c(w[n])),
        _ !== P &&
          ((b = l(_, s, o)),
          x === null && M() && (x = r(_, s) === 0 ? k : T),
          x !== null &&
            A() &&
            (m.push(Io({ start: x, end: k, loop: d, count: a, style: f })), (x = null)),
          (T = k),
          (P = _))));
  return (x !== null && m.push(Io({ start: x, end: u, loop: d, count: a, style: f })), m);
}
function Pr(i, t) {
  const e = [],
    n = i.segments;
  for (let s = 0; s < n.length; s++) {
    const o = kr(n[s], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function qh(i, t, e, n) {
  let s = 0,
    o = t - 1;
  if (e && !n) for (; s < t && !i[s].skip; ) s++;
  for (; s < t && i[s].skip; ) s++;
  for (s %= t, e && (o += s); o > s && i[o % t].skip; ) o--;
  return ((o %= t), { start: s, end: o });
}
function Kh(i, t, e, n) {
  const s = i.length,
    o = [];
  let a = t,
    r = i[t],
    l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % s];
    (c.skip || c.stop
      ? r.skip ||
        ((n = !1), o.push({ start: t % s, end: (l - 1) % s, loop: n }), (t = a = c.stop ? l : null))
      : ((a = l), r.skip && (t = l)),
      (r = c));
  }
  return (a !== null && o.push({ start: t % s, end: a % s, loop: n }), o);
}
function Gh(i, t) {
  const e = i.points,
    n = i.options.spanGaps,
    s = e.length;
  if (!s) return [];
  const o = !!i._loop,
    { start: a, end: r } = qh(e, s, o, n);
  if (n === !0) return Lo(i, [{ start: a, end: r, loop: o }], e, t);
  const l = r < a ? r + s : r,
    c = !!i._fullLoop && a === 0 && r === s - 1;
  return Lo(i, Kh(e, a, l, c), e, t);
}
function Lo(i, t, e, n) {
  return !n || !n.setContext || !e ? t : Zh(i, t, e, n);
}
function Zh(i, t, e, n) {
  const s = i._chart.getContext(),
    o = Ro(i.options),
    {
      _datasetIndex: a,
      options: { spanGaps: r },
    } = i,
    l = e.length,
    c = [];
  let h = o,
    u = t[0].start,
    d = u;
  function f(m, b, x, _) {
    const w = r ? -1 : 1;
    if (m !== b) {
      for (m += l; e[m % l].skip; ) m -= w;
      for (; e[b % l].skip; ) b += w;
      m % l !== b % l &&
        (c.push({ start: m % l, end: b % l, loop: x, style: _ }), (h = _), (u = b % l));
    }
  }
  for (const m of t) {
    u = r ? u : m.start;
    let b = e[u % l],
      x;
    for (d = u + 1; d <= m.end; d++) {
      const _ = e[d % l];
      ((x = Ro(
        n.setContext(
          se(s, {
            type: 'segment',
            p0: b,
            p1: _,
            p0DataIndex: (d - 1) % l,
            p1DataIndex: d % l,
            datasetIndex: a,
          })
        )
      )),
        Jh(x, h) && f(u, d - 1, m.loop, h),
        (b = _),
        (h = x));
    }
    u < d - 1 && f(u, d - 1, m.loop, h);
  }
  return c;
}
function Ro(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function Jh(i, t) {
  if (!t) return !1;
  const e = [],
    n = function (s, o) {
      return Ds(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
    };
  return JSON.stringify(i, n) !== JSON.stringify(t, n);
}
function Ni(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Qh(i, t) {
  const { xScale: e, yScale: n } = i;
  return e && n
    ? {
        left: Ni(e, t, 'left'),
        right: Ni(e, t, 'right'),
        top: Ni(n, t, 'top'),
        bottom: Ni(n, t, 'bottom'),
      }
    : t;
}
function Cr(i, t) {
  const e = t._clip;
  if (e.disabled) return !1;
  const n = Qh(t, i.chartArea);
  return {
    left: e.left === !1 ? 0 : n.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? i.width : n.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : n.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? i.height : n.bottom + (e.bottom === !0 ? 0 : e.bottom),
  };
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ class tu {
  constructor() {
    ((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0));
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s],
      a = e.duration;
    o.forEach((r) =>
      r({ chart: t, initial: e.initial, numSteps: a, currentStep: Math.min(n - e.start, a) })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = cr.call(window, () => {
        (this._update(), (this._request = null), this._running && this._refresh());
      })));
  }
  _update(t = Date.now()) {
    let e = 0;
    (this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length) return;
      const o = n.items;
      let a = o.length - 1,
        r = !1,
        l;
      for (; a >= 0; --a)
        ((l = o[a]),
          l._active
            ? (l._total > n.duration && (n.duration = l._total), l.tick(t), (r = !0))
            : ((o[a] = o[o.length - 1]), o.pop()));
      (r && (s.draw(), this._notify(s, n, t, 'progress')),
        o.length || ((n.running = !1), this._notify(s, n, t, 'complete'), (n.initial = !1)),
        (e += o.length));
    }),
      (this._lastDate = t),
      e === 0 && (this._running = !1));
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return (
      n ||
        ((n = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
        e.set(t, n)),
      n
    );
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e &&
      ((e.running = !0),
      (e.start = Date.now()),
      (e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length) return;
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s) n[s].cancel();
    ((e.items = []), this._notify(t, e, Date.now(), 'complete'));
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Vt = new tu();
const Fo = 'transparent',
  eu = {
    boolean(i, t, e) {
      return e > 0.5 ? t : i;
    },
    color(i, t, e) {
      const n = Po(i || Fo),
        s = n.valid && Po(t || Fo);
      return s && s.valid ? s.mix(n, e).hexString() : t;
    },
    number(i, t, e) {
      return i + (t - i) * e;
    },
  };
class iu {
  constructor(t, e, n, s) {
    const o = e[n];
    s = Xe([t.to, s, o, t.from]);
    const a = Xe([t.from, o, s]);
    ((this._active = !0),
      (this._fn = t.fn || eu[t.type || typeof a]),
      (this._easing = ti[t.easing] || ti.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = e),
      (this._prop = n),
      (this._from = a),
      (this._to = s),
      (this._promises = void 0));
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop],
        o = n - this._start,
        a = this._duration - o;
      ((this._start = n),
        (this._duration = Math.floor(Math.max(a, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Xe([t.to, e, s, t.from])),
        (this._from = Xe([t.from, s, e])));
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const e = t - this._start,
      n = this._duration,
      s = this._prop,
      o = this._from,
      a = this._loop,
      r = this._to;
    let l;
    if (((this._active = o !== r && (a || e < n)), !this._active)) {
      ((this._target[s] = r), this._notify(!0));
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    ((l = (e / n) % 2),
      (l = a && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[s] = this._fn(o, r, l)));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({ res: e, rej: n });
    });
  }
  _notify(t) {
    const e = t ? 'res' : 'rej',
      n = this._promises || [];
    for (let s = 0; s < n.length; s++) n[s][e]();
  }
}
class Ar {
  constructor(t, e) {
    ((this._chart = t), (this._properties = new Map()), this.configure(e));
  }
  configure(t) {
    if (!W(t)) return;
    const e = Object.keys(G.animation),
      n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!W(o)) return;
      const a = {};
      for (const r of e) a[r] = o[r];
      ((K(o.properties) && o.properties) || [s]).forEach((r) => {
        (r === s || !n.has(r)) && n.set(r, a);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options,
      s = su(t, n);
    if (!s) return [];
    const o = this._createAnimations(s, n);
    return (
      n.$shared &&
        nu(t.options.$animations, n).then(
          () => {
            t.options = n;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, e) {
    const n = this._properties,
      s = [],
      o = t.$animations || (t.$animations = {}),
      a = Object.keys(e),
      r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === '$') continue;
      if (c === 'options') {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let u = o[c];
      const d = n.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, r);
          continue;
        } else u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      ((o[c] = u = new iu(d, t, c, h)), s.push(u));
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length) return (Vt.add(this._chart, n), !0);
  }
}
function nu(i, t) {
  const e = [],
    n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = i[n[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function su(i, t) {
  if (!t) return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return (e.$shared && (i.options = e = Object.assign({}, e, { $shared: !1, $animations: {} })), e);
}
function No(i, t) {
  const e = (i && i.options) || {},
    n = e.reverse,
    s = e.min === void 0 ? t : 0,
    o = e.max === void 0 ? t : 0;
  return { start: n ? o : s, end: n ? s : o };
}
function ou(i, t, e) {
  if (e === !1) return !1;
  const n = No(i, e),
    s = No(t, e);
  return { top: s.end, right: n.end, bottom: s.start, left: n.start };
}
function au(i) {
  let t, e, n, s;
  return (
    W(i) ? ((t = i.top), (e = i.right), (n = i.bottom), (s = i.left)) : (t = e = n = s = i),
    { top: t, right: e, bottom: n, left: s, disabled: i === !1 }
  );
}
function Tr(i, t) {
  const e = [],
    n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s) e.push(n[s].index);
  return e;
}
function zo(i, t, e, n = {}) {
  const s = i.keys,
    o = n.mode === 'single';
  let a, r, l, c;
  if (t === null) return;
  let h = !1;
  for (a = 0, r = s.length; a < r; ++a) {
    if (((l = +s[a]), l === e)) {
      if (((h = !0), n.all)) continue;
      break;
    }
    ((c = i.values[l]), J(c) && (o || t === 0 || St(t) === St(c)) && (t += c));
  }
  return !h && !n.all ? 0 : t;
}
function ru(i, t) {
  const { iScale: e, vScale: n } = t,
    s = e.axis === 'x' ? 'x' : 'y',
    o = n.axis === 'x' ? 'x' : 'y',
    a = Object.keys(i),
    r = new Array(a.length);
  let l, c, h;
  for (l = 0, c = a.length; l < c; ++l) ((h = a[l]), (r[l] = { [s]: h, [o]: i[h] }));
  return r;
}
function Nn(i, t) {
  const e = i && i.options.stacked;
  return e || (e === void 0 && t.stack !== void 0);
}
function lu(i, t, e) {
  return ''
    .concat(i.id, '.')
    .concat(t.id, '.')
    .concat(e.stack || e.type);
}
function cu(i) {
  const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
  return { min: n ? t : Number.NEGATIVE_INFINITY, max: s ? e : Number.POSITIVE_INFINITY };
}
function hu(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function Bo(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if ((e && o > 0) || (!e && o < 0)) return s.index;
  }
  return null;
}
function Ho(i, t) {
  const { chart: e, _cachedMeta: n } = i,
    s = e._stacks || (e._stacks = {}),
    { iScale: o, vScale: a, index: r } = n,
    l = o.axis,
    c = a.axis,
    h = lu(o, a, n),
    u = t.length;
  let d;
  for (let f = 0; f < u; ++f) {
    const m = t[f],
      { [l]: b, [c]: x } = m,
      _ = m._stacks || (m._stacks = {});
    ((d = _[c] = hu(s, h, b)),
      (d[r] = x),
      (d._top = Bo(d, a, !0, n.type)),
      (d._bottom = Bo(d, a, !1, n.type)));
    const w = d._visualValues || (d._visualValues = {});
    w[r] = x;
  }
}
function zn(i, t) {
  const e = i.scales;
  return Object.keys(e)
    .filter((n) => e[n].axis === t)
    .shift();
}
function uu(i, t) {
  return se(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset',
  });
}
function du(i, t, e) {
  return se(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: 'default',
    type: 'data',
  });
}
function Ve(i, t) {
  const e = i.controller.index,
    n = i.vScale && i.vScale.axis;
  if (n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0) return;
      (delete o[n][e],
        o[n]._visualValues !== void 0 &&
          o[n]._visualValues[e] !== void 0 &&
          delete o[n]._visualValues[e]);
    }
  }
}
const Bn = (i) => i === 'reset' || i === 'none',
  Vo = (i, t) => (t ? i : Object.assign({}, i)),
  fu = (i, t, e) => i && !t.hidden && t._stacked && { keys: Tr(e, !0), values: null };
class Ct {
  constructor(t, e) {
    ((this.chart = t),
      (this._ctx = t.ctx),
      (this.index = e),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize());
  }
  initialize() {
    const t = this._cachedMeta;
    (this.configure(),
      this.linkScales(),
      (t._stacked = Nn(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        ));
  }
  updateIndex(t) {
    (this.index !== t && Ve(this._cachedMeta), (this.index = t));
  }
  linkScales() {
    const t = this.chart,
      e = this._cachedMeta,
      n = this.getDataset(),
      s = (u, d, f, m) => (u === 'x' ? d : u === 'r' ? m : f),
      o = (e.xAxisID = N(n.xAxisID, zn(t, 'x'))),
      a = (e.yAxisID = N(n.yAxisID, zn(t, 'y'))),
      r = (e.rAxisID = N(n.rAxisID, zn(t, 'r'))),
      l = e.indexAxis,
      c = (e.iAxisID = s(l, o, a, r)),
      h = (e.vAxisID = s(l, a, o, r));
    ((e.xScale = this.getScaleForId(o)),
      (e.yScale = this.getScaleForId(a)),
      (e.rScale = this.getScaleForId(r)),
      (e.iScale = this.getScaleForId(c)),
      (e.vScale = this.getScaleForId(h)));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const t = this._cachedMeta;
    (this._data && wo(this._data, this), t._stacked && Ve(t));
  }
  _dataCheck() {
    const t = this.getDataset(),
      e = t.data || (t.data = []),
      n = this._data;
    if (W(e)) {
      const s = this._cachedMeta;
      this._data = ru(e, s);
    } else if (n !== e) {
      if (n) {
        wo(n, this);
        const s = this._cachedMeta;
        (Ve(s), (s._parsed = []));
      }
      (e && Object.isExtensible(e) && Zc(e, this), (this._syncList = []), (this._data = e));
    }
  }
  addElements() {
    const t = this._cachedMeta;
    (this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType()));
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta,
      n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    ((e._stacked = Nn(e.vScale, e)),
      e.stack !== n.stack && ((s = !0), Ve(e), (e.stack = n.stack)),
      this._resyncElements(t),
      (s || o !== e._stacked) && (Ho(this, e._parsed), (e._stacked = Nn(e.vScale, e))));
  }
  configure() {
    const t = this.chart.config,
      e = t.datasetScopeKeys(this._type),
      n = t.getOptionScopes(this.getDataset(), e, !0);
    ((this.options = t.createResolver(n, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}));
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this,
      { iScale: o, _stacked: a } = n,
      r = o.axis;
    let l = t === 0 && e === s.length ? !0 : n._sorted,
      c = t > 0 && n._parsed[t - 1],
      h,
      u,
      d;
    if (this._parsing === !1) ((n._parsed = s), (n._sorted = !0), (d = s));
    else {
      K(s[t])
        ? (d = this.parseArrayData(n, s, t, e))
        : W(s[t])
          ? (d = this.parseObjectData(n, s, t, e))
          : (d = this.parsePrimitiveData(n, s, t, e));
      const f = () => u[r] === null || (c && u[r] < c[r]);
      for (h = 0; h < e; ++h) ((n._parsed[h + t] = u = d[h]), l && (f() && (l = !1), (c = u)));
      n._sorted = l;
    }
    a && Ho(this, d);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: a } = t,
      r = o.axis,
      l = a.axis,
      c = o.getLabels(),
      h = o === a,
      u = new Array(s);
    let d, f, m;
    for (d = 0, f = s; d < f; ++d)
      ((m = d + n), (u[d] = { [r]: h || o.parse(c[m], m), [l]: a.parse(e[m], m) }));
    return u;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: a } = t,
      r = new Array(s);
    let l, c, h, u;
    for (l = 0, c = s; l < c; ++l)
      ((h = l + n), (u = e[h]), (r[l] = { x: o.parse(u[0], h), y: a.parse(u[1], h) }));
    return r;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: a } = t,
      { xAxisKey: r = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = new Array(s);
    let h, u, d, f;
    for (h = 0, u = s; h < u; ++h)
      ((d = h + n), (f = e[d]), (c[h] = { x: o.parse(ee(f, r), d), y: a.parse(ee(f, l), d) }));
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart,
      o = this._cachedMeta,
      a = e[t.axis],
      r = { keys: Tr(s, !0), values: e._stacks[t.axis]._visualValues };
    return zo(r, a, o.index, { mode: n });
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let a = o === null ? NaN : o;
    const r = s && n._stacks[e.axis];
    (s && r && ((s.values = r), (a = zo(s, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, a)),
      (t.max = Math.max(t.max, a)));
  }
  getMinMax(t, e) {
    const n = this._cachedMeta,
      s = n._parsed,
      o = n._sorted && t === n.iScale,
      a = s.length,
      r = this._getOtherScale(t),
      l = fu(e, n, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: h, max: u } = cu(r);
    let d, f;
    function m() {
      f = s[d];
      const b = f[r.axis];
      return !J(f[t.axis]) || h > b || u < b;
    }
    for (d = 0; d < a && !(!m() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d);
    if (o) {
      for (d = a - 1; d >= 0; --d)
        if (!m()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed,
      n = [];
    let s, o, a;
    for (s = 0, o = e.length; s < o; ++s) ((a = e[s][t.axis]), J(a) && n.push(a));
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = e.iScale,
      s = e.vScale,
      o = this.getParsed(t);
    return {
      label: n ? '' + n.getLabelForValue(o[n.axis]) : '',
      value: s ? '' + s.getLabelForValue(o[s.axis]) : '',
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    (this.update(t || 'default'),
      (e._clip = au(N(this.options.clip, ou(e.xScale, e.yScale, this.getMaxOverflow())))));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      e = this.chart,
      n = this._cachedMeta,
      s = n.data || [],
      o = e.chartArea,
      a = [],
      r = this._drawStart || 0,
      l = this._drawCount || s.length - r,
      c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
      const u = s[h];
      u.hidden || (u.active && c ? a.push(u) : u.draw(t, o));
    }
    for (h = 0; h < a.length; ++h) a[h].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? 'active' : 'default';
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(n)
      : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      ((o = a.$context || (a.$context = du(this.getContext(), t, a))),
        (o.parsed = this.getParsed(t)),
        (o.raw = s.data[t]),
        (o.index = o.dataIndex = t));
    } else
      ((o = this.$context || (this.$context = uu(this.chart.getContext(), this.index))),
        (o.dataset = s),
        (o.index = o.datasetIndex = this.index));
    return ((o.active = !!e), (o.mode = n), o);
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = 'default', n) {
    const s = e === 'active',
      o = this._cachedDataOpts,
      a = t + '-' + e,
      r = o[a],
      l = this.enableOptionSharing && ci(n);
    if (r) return Vo(r, l);
    const c = this.chart.config,
      h = c.datasetElementScopeKeys(this._type, t),
      u = s ? [''.concat(t, 'Hover'), 'hover', t, ''] : [t, ''],
      d = c.getOptionScopes(this.getDataset(), h),
      f = Object.keys(G.elements[t]),
      m = () => this.getContext(n, s, e),
      b = c.resolveNamedOptions(d, f, m, u);
    return (b.$shared && ((b.$shared = l), (o[a] = Object.freeze(Vo(b, l)))), b);
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart,
      o = this._cachedDataOpts,
      a = 'animation-'.concat(e),
      r = o[a];
    if (r) return r;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config,
        u = h.datasetAnimationScopeKeys(this._type, e),
        d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, n, e));
    }
    const c = new Ar(s, l && l.animations);
    return (l && l._cacheable && (o[a] = Object.freeze(c)), c);
  }
  getSharedOptions(t) {
    if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Bn(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e),
      s = this._sharedOptions,
      o = this.getSharedOptions(n),
      a = this.includeOptions(e, o) || o !== s;
    return (this.updateSharedOptions(o, e, n), { sharedOptions: o, includeOptions: a });
  }
  updateElement(t, e, n, s) {
    Bn(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !Bn(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, { options: (!s && this.getSharedOptions(o)) || o });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, 'active', !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, 'active', !0);
  }
  _resyncElements(t) {
    const e = this._data,
      n = this._cachedMeta.data;
    for (const [r, l, c] of this._syncList) this[r](l, c);
    this._syncList = [];
    const s = n.length,
      o = e.length,
      a = Math.min(o, s);
    (a && this.parse(0, a),
      o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o));
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta,
      o = s.data,
      a = t + e;
    let r;
    const l = (c) => {
      for (c.length += e, r = c.length - 1; r >= a; r--) c[r] = c[r - e];
    };
    for (l(o), r = t; r < a; ++r) o[r] = new this.dataElementType();
    (this._parsing && l(s._parsed), this.parse(t, e), n && this.updateElements(o, t, e, 'reset'));
  }
  updateElements(t, e, n, s) {}
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && Ve(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(t, e) {
    e && this._sync(['_removeElements', t, e]);
    const n = arguments.length - 2;
    n && this._sync(['_insertElements', t, n]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
(D(Ct, 'defaults', {}), D(Ct, 'datasetElementType', null), D(Ct, 'dataElementType', null));
function gu(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let n = [];
    for (let s = 0, o = e.length; s < o; s++) n = n.concat(e[s].controller.getAllParsedValues(i));
    i._cache.$bar = lr(n.sort((s, o) => s - o));
  }
  return i._cache.$bar;
}
function pu(i) {
  const t = i.iScale,
    e = gu(t, i.type);
  let n = t._length,
    s,
    o,
    a,
    r;
  const l = () => {
    a === 32767 || a === -32768 || (ci(r) && (n = Math.min(n, Math.abs(a - r) || n)), (r = a));
  };
  for (s = 0, o = e.length; s < o; ++s) ((a = t.getPixelForValue(e[s])), l());
  for (r = void 0, s = 0, o = t.ticks.length; s < o; ++s) ((a = t.getPixelForTick(s)), l());
  return n;
}
function mu(i, t, e, n) {
  const s = e.barThickness;
  let o, a;
  return (
    V(s) ? ((o = t.min * e.categoryPercentage), (a = e.barPercentage)) : ((o = s * n), (a = 1)),
    { chunk: o / n, ratio: a, start: t.pixels[i] - o / 2 }
  );
}
function bu(i, t, e, n) {
  const s = t.pixels,
    o = s[i];
  let a = i > 0 ? s[i - 1] : null,
    r = i < s.length - 1 ? s[i + 1] : null;
  const l = e.categoryPercentage;
  (a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a));
  const c = o - ((o - Math.min(a, r)) / 2) * l;
  return { chunk: ((Math.abs(r - a) / 2) * l) / n, ratio: e.barPercentage, start: c };
}
function yu(i, t, e, n) {
  const s = e.parse(i[0], n),
    o = e.parse(i[1], n),
    a = Math.min(s, o),
    r = Math.max(s, o);
  let l = a,
    c = r;
  (Math.abs(a) > Math.abs(r) && ((l = r), (c = a)),
    (t[e.axis] = c),
    (t._custom = { barStart: l, barEnd: c, start: s, end: o, min: a, max: r }));
}
function Er(i, t, e, n) {
  return (K(i) ? yu(i, t, e, n) : (t[e.axis] = e.parse(i, n)), t);
}
function Wo(i, t, e, n) {
  const s = i.iScale,
    o = i.vScale,
    a = s.getLabels(),
    r = s === o,
    l = [];
  let c, h, u, d;
  for (c = e, h = e + n; c < h; ++c)
    ((d = t[c]), (u = {}), (u[s.axis] = r || s.parse(a[c], c)), l.push(Er(d, u, o, c)));
  return l;
}
function Hn(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function xu(i, t, e) {
  return i !== 0 ? St(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function _u(i) {
  let t, e, n, s, o;
  return (
    i.horizontal
      ? ((t = i.base > i.x), (e = 'left'), (n = 'right'))
      : ((t = i.base < i.y), (e = 'bottom'), (n = 'top')),
    t ? ((s = 'end'), (o = 'start')) : ((s = 'start'), (o = 'end')),
    { start: e, end: n, reverse: t, top: s, bottom: o }
  );
}
function vu(i, t, e, n) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    i.borderSkipped = o;
    return;
  }
  if (s === !0) {
    i.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: a, end: r, reverse: l, top: c, bottom: h } = _u(i);
  (s === 'middle' &&
    e &&
    ((i.enableBorderRadius = !0),
    (e._top || 0) === n
      ? (s = c)
      : (e._bottom || 0) === n
        ? (s = h)
        : ((o[$o(h, a, r, l)] = !0), (s = c))),
    (o[$o(s, a, r, l)] = !0),
    (i.borderSkipped = o));
}
function $o(i, t, e, n) {
  return (n ? ((i = Su(i, t, e)), (i = jo(i, e, t))) : (i = jo(i, t, e)), i);
}
function Su(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function jo(i, t, e) {
  return i === 'start' ? t : i === 'end' ? e : i;
}
function wu(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === 'auto' ? (e === 1 ? 0.33 : 0) : t;
}
class Yi extends Ct {
  parsePrimitiveData(t, e, n, s) {
    return Wo(t, e, n, s);
  }
  parseArrayData(t, e, n, s) {
    return Wo(t, e, n, s);
  }
  parseObjectData(t, e, n, s) {
    const { iScale: o, vScale: a } = t,
      { xAxisKey: r = 'x', yAxisKey: l = 'y' } = this._parsing,
      c = o.axis === 'x' ? r : l,
      h = a.axis === 'x' ? r : l,
      u = [];
    let d, f, m, b;
    for (d = n, f = n + s; d < f; ++d)
      ((b = e[d]), (m = {}), (m[o.axis] = o.parse(ee(b, c), d)), u.push(Er(ee(b, h), m, a, d)));
    return u;
  }
  updateRangeFromParsed(t, e, n, s) {
    super.updateRangeFromParsed(t, e, n, s);
    const o = n._custom;
    o &&
      e === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      { iScale: n, vScale: s } = e,
      o = this.getParsed(t),
      a = o._custom,
      r = Hn(a) ? '[' + a.start + ', ' + a.end + ']' : '' + s.getLabelForValue(o[s.axis]);
    return { label: '' + n.getLabelForValue(o[n.axis]), value: r };
  }
  initialize() {
    ((this.enableOptionSharing = !0), super.initialize());
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      {
        index: a,
        _cachedMeta: { vScale: r },
      } = this,
      l = r.getBasePixel(),
      c = r.isHorizontal(),
      h = this._getRuler(),
      { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, s);
    for (let f = e; f < e + n; f++) {
      const m = this.getParsed(f),
        b = o || V(m[r.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f),
        x = this._calculateBarIndexPixels(f, h),
        _ = (m._stacks || {})[r.axis],
        w = {
          horizontal: c,
          base: b.base,
          enableBorderRadius: !_ || Hn(m._custom) || a === _._top || a === _._bottom,
          x: c ? b.head : x.center,
          y: c ? x.center : b.head,
          height: c ? x.size : Math.abs(b.size),
          width: c ? Math.abs(b.size) : x.size,
        };
      d && (w.options = u || this.resolveDataElementOptions(f, t[f].active ? 'active' : s));
      const P = w.options || t[f].options;
      (vu(w, P, _, a), wu(w, P, h.ratio), this.updateElement(t[f], f, w, s));
    }
  }
  _getStacks(t, e) {
    const { iScale: n } = this._cachedMeta,
      s = n.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped),
      o = n.options.stacked,
      a = [],
      r = this._cachedMeta.controller.getParsed(e),
      l = r && r[n.axis],
      c = (h) => {
        const u = h._parsed.find((f) => f[n.axis] === l),
          d = u && u[h.vScale.axis];
        if (V(d) || isNaN(d)) return !0;
      };
    for (const h of s)
      if (
        !(e !== void 0 && c(h)) &&
        ((o === !1 || a.indexOf(h.stack) === -1 || (o === void 0 && h.stack === void 0)) &&
          a.push(h.stack),
        h.index === t)
      )
        break;
    return (a.length || a.push(void 0), a);
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales,
      e = this.chart.options.indexAxis;
    return Object.keys(t)
      .filter((n) => t[n].axis === e)
      .shift();
  }
  _getAxis() {
    const t = {},
      e = this.getFirstScaleIdForIndexAxis();
    for (const n of this.chart.data.datasets)
      t[N(this.chart.options.indexAxis === 'x' ? n.xAxisID : n.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, n) {
    const s = this._getStacks(t, n),
      o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      e = this._cachedMeta,
      n = e.iScale,
      s = [];
    let o, a;
    for (o = 0, a = e.data.length; o < a; ++o)
      s.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
    const r = t.barThickness;
    return {
      min: r || pu(e),
      pixels: s,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: e, _stacked: n, index: s },
        options: { base: o, minBarLength: a },
      } = this,
      r = o || 0,
      l = this.getParsed(t),
      c = l._custom,
      h = Hn(c);
    let u = l[e.axis],
      d = 0,
      f = n ? this.applyStack(e, l, n) : u,
      m,
      b;
    (f !== u && ((d = f - u), (f = u)),
      h &&
        ((u = c.barStart),
        (f = c.barEnd - c.barStart),
        u !== 0 && St(u) !== St(c.barEnd) && (d = 0),
        (d += u)));
    const x = !V(o) && !h ? o : d;
    let _ = e.getPixelForValue(x);
    if (
      (this.chart.getDataVisibility(t) ? (m = e.getPixelForValue(d + f)) : (m = _),
      (b = m - _),
      Math.abs(b) < a)
    ) {
      ((b = xu(b, e, r) * a), u === r && (_ -= b / 2));
      const w = e.getPixelForDecimal(0),
        P = e.getPixelForDecimal(1),
        v = Math.min(w, P),
        S = Math.max(w, P);
      ((_ = Math.max(Math.min(_, S), v)),
        (m = _ + b),
        n &&
          !h &&
          (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(m) - e.getValueForPixel(_)));
    }
    if (_ === e.getPixelForValue(r)) {
      const w = (St(b) * e.getLineWidthForValue(r)) / 2;
      ((_ += w), (b -= w));
    }
    return { size: b, base: _, head: m, center: m + b / 2 };
  }
  _calculateBarIndexPixels(t, e) {
    const n = e.scale,
      s = this.options,
      o = s.skipNull,
      a = N(s.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const h = o ? this._getStackCount(t) : e.stackCount,
        u = s.barThickness === 'flex' ? bu(t, e, s, h * c) : mu(t, e, s, h * c),
        d =
          this.chart.options.indexAxis === 'x'
            ? this.getDataset().xAxisID
            : this.getDataset().yAxisID,
        f = this._getAxis().indexOf(N(d, this.getFirstScaleIdForIndexAxis())),
        m = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
      ((r = u.start + u.chunk * m + u.chunk / 2), (l = Math.min(a, u.chunk * u.ratio)));
    } else
      ((r = n.getPixelForValue(this.getParsed(t)[n.axis], t)), (l = Math.min(a, e.min * e.ratio)));
    return { base: r - l / 2, head: r + l / 2, center: r, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      e = t.vScale,
      n = t.data,
      s = n.length;
    let o = 0;
    for (; o < s; ++o) this.getParsed(o)[e.axis] !== null && !n[o].hidden && n[o].draw(this._ctx);
  }
}
(D(Yi, 'id', 'bar'),
  D(Yi, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] } },
  }),
  D(Yi, 'overrides', {
    scales: {
      _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
      _value_: { type: 'linear', beginAtZero: !0 },
    },
  }));
class Xi extends Ct {
  initialize() {
    ((this.enableOptionSharing = !0), super.initialize());
  }
  parsePrimitiveData(t, e, n, s) {
    const o = super.parsePrimitiveData(t, e, n, s);
    for (let a = 0; a < o.length; a++) o[a]._custom = this.resolveDataElementOptions(a + n).radius;
    return o;
  }
  parseArrayData(t, e, n, s) {
    const o = super.parseArrayData(t, e, n, s);
    for (let a = 0; a < o.length; a++) {
      const r = e[n + a];
      o[a]._custom = N(r[2], this.resolveDataElementOptions(a + n).radius);
    }
    return o;
  }
  parseObjectData(t, e, n, s) {
    const o = super.parseObjectData(t, e, n, s);
    for (let a = 0; a < o.length; a++) {
      const r = e[n + a];
      o[a]._custom = N(r && r.r && +r.r, this.resolveDataElementOptions(a + n).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let n = t.length - 1; n >= 0; --n)
      e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      a = this.getParsed(t),
      r = s.getLabelForValue(a.x),
      l = o.getLabelForValue(a.y),
      c = a._custom;
    return { label: n[t] || '', value: '(' + r + ', ' + l + (c ? ', ' + c : '') + ')' };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      { iScale: a, vScale: r } = this._cachedMeta,
      { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s),
      h = a.axis,
      u = r.axis;
    for (let d = e; d < e + n; d++) {
      const f = t[d],
        m = !o && this.getParsed(d),
        b = {},
        x = (b[h] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(m[h])),
        _ = (b[u] = o ? r.getBasePixel() : r.getPixelForValue(m[u]));
      ((b.skip = isNaN(x) || isNaN(_)),
        c &&
          ((b.options = l || this.resolveDataElementOptions(d, f.active ? 'active' : s)),
          o && (b.options.radius = 0)),
        this.updateElement(f, d, b, s));
    }
  }
  resolveDataElementOptions(t, e) {
    const n = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
    const o = s.radius;
    return (e !== 'active' && (s.radius = 0), (s.radius += N(n && n._custom, o)), s);
  }
}
(D(Xi, 'id', 'bubble'),
  D(Xi, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'point',
    animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } },
  }),
  D(Xi, 'overrides', { scales: { x: { type: 'linear' }, y: { type: 'linear' } } }));
function Mu(i, t, e) {
  let n = 1,
    s = 1,
    o = 0,
    a = 0;
  if (t < q) {
    const r = i,
      l = r + t,
      c = Math.cos(r),
      h = Math.sin(r),
      u = Math.cos(l),
      d = Math.sin(l),
      f = (P, v, S) => (hi(P, r, l, !0) ? 1 : Math.max(v, v * e, S, S * e)),
      m = (P, v, S) => (hi(P, r, l, !0) ? -1 : Math.min(v, v * e, S, S * e)),
      b = f(0, c, u),
      x = f(tt, h, d),
      _ = m(U, c, u),
      w = m(U + tt, h, d);
    ((n = (b - _) / 2), (s = (x - w) / 2), (o = -(b + _) / 2), (a = -(x + w) / 2));
  }
  return { ratioX: n, ratioY: s, offsetX: o, offsetY: a };
}
class me extends Ct {
  constructor(t, e) {
    (super(t, e),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0));
  }
  linkScales() {}
  parse(t, e) {
    const n = this.getDataset().data,
      s = this._cachedMeta;
    if (this._parsing === !1) s._parsed = n;
    else {
      let o = (l) => +n[l];
      if (W(n[t])) {
        const { key: l = 'value' } = this._parsing;
        o = (c) => +ee(n[c], l);
      }
      let a, r;
      for (a = t, r = t + e; a < r; ++a) s._parsed[a] = o(a);
    }
  }
  _getRotation() {
    return Pt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Pt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = q,
      e = -q;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const s = this.chart.getDatasetMeta(n).controller,
          o = s._getRotation(),
          a = s._getCircumference();
        ((t = Math.min(t, o)), (e = Math.max(e, o + a)));
      }
    return { rotation: t, circumference: e - t };
  }
  update(t) {
    const e = this.chart,
      { chartArea: n } = e,
      s = this._cachedMeta,
      o = s.data,
      a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      r = Math.max((Math.min(n.width, n.height) - a) / 2, 0),
      l = Math.min(Fc(this.options.cutout, r), 1),
      c = this._getRingWeight(this.index),
      { circumference: h, rotation: u } = this._getRotationExtents(),
      { ratioX: d, ratioY: f, offsetX: m, offsetY: b } = Mu(u, h, l),
      x = (n.width - a) / d,
      _ = (n.height - a) / f,
      w = Math.max(Math.min(x, _) / 2, 0),
      P = nr(this.options.radius, w),
      v = Math.max(P * l, 0),
      S = (P - v) / this._getVisibleDatasetWeightTotal();
    ((this.offsetX = m * P),
      (this.offsetY = b * P),
      (s.total = this.calculateTotal()),
      (this.outerRadius = P - S * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - S * c, 0)),
      this.updateElements(o, 0, o.length, t));
  }
  _circumference(t, e) {
    const n = this.options,
      s = this._cachedMeta,
      o = this._getCircumference();
    return (e && n.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      s._parsed[t] === null ||
      s.data[t].hidden
      ? 0
      : this.calculateCircumference((s._parsed[t] * o) / q);
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      a = this.chart,
      r = a.chartArea,
      c = a.options.animation,
      h = (r.left + r.right) / 2,
      u = (r.top + r.bottom) / 2,
      d = o && c.animateScale,
      f = d ? 0 : this.innerRadius,
      m = d ? 0 : this.outerRadius,
      { sharedOptions: b, includeOptions: x } = this._getSharedOptions(e, s);
    let _ = this._getRotation(),
      w;
    for (w = 0; w < e; ++w) _ += this._circumference(w, o);
    for (w = e; w < e + n; ++w) {
      const P = this._circumference(w, o),
        v = t[w],
        S = {
          x: h + this.offsetX,
          y: u + this.offsetY,
          startAngle: _,
          endAngle: _ + P,
          circumference: P,
          outerRadius: m,
          innerRadius: f,
        };
      (x && (S.options = b || this.resolveDataElementOptions(w, v.active ? 'active' : s)),
        (_ += P),
        this.updateElement(v, w, S, s));
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      e = t.data;
    let n = 0,
      s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(s) &&
        !e[s].hidden &&
        (n += Math.abs(o));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? q * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = bi(e._parsed[t], n.options.locale);
    return { label: s[t] || '', value: o };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let s, o, a, r, l;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          ((a = n.getDatasetMeta(s)), (t = a.data), (r = a.controller));
          break;
        }
    }
    if (!t) return 0;
    for (s = 0, o = t.length; s < o; ++s)
      ((l = r.resolveDataElementOptions(s)),
        l.borderAlign !== 'inner' &&
          (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0)));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(N(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
(D(me, 'id', 'doughnut'),
  D(me, 'defaults', {
    datasetElementType: !1,
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: 'number',
        properties: [
          'circumference',
          'endAngle',
          'innerRadius',
          'outerRadius',
          'startAngle',
          'x',
          'y',
          'offset',
          'borderWidth',
          'spacing',
        ],
      },
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r',
  }),
  D(me, 'descriptors', {
    _scriptable: (t) => t !== 'spacing',
    _indexable: (t) =>
      t !== 'spacing' && !t.startsWith('borderDash') && !t.startsWith('hoverBorderDash'),
  }),
  D(me, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: n, color: s },
              } = t.legend.options;
              return e.labels.map((o, a) => {
                const l = t.getDatasetMeta(0).controller.getStyle(a);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(a),
                  index: a,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, n) {
          (n.chart.toggleDataVisibility(e.index), n.chart.update());
        },
      },
    },
  }));
class qi extends Ct {
  initialize() {
    ((this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize());
  }
  update(t) {
    const e = this._cachedMeta,
      { dataset: n, data: s = [], _dataset: o } = e,
      a = this.chart._animationsDisabled;
    let { start: r, count: l } = ur(e, s, a);
    ((this._drawStart = r),
      (this._drawCount = l),
      dr(e) && ((r = 0), (l = s.length)),
      (n._chart = this.chart),
      (n._datasetIndex = this.index),
      (n._decimated = !!o._decimated),
      (n.points = s));
    const c = this.resolveDatasetElementOptions(t);
    (this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(n, void 0, { animated: !a, options: c }, t),
      this.updateElements(s, r, l, t));
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, s),
      d = a.axis,
      f = r.axis,
      { spanGaps: m, segment: b } = this.options,
      x = Ee(m) ? m : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || o || s === 'none',
      w = e + n,
      P = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let S = 0; S < P; ++S) {
      const M = t[S],
        A = _ ? M : {};
      if (S < e || S >= w) {
        A.skip = !0;
        continue;
      }
      const k = this.getParsed(S),
        T = V(k[f]),
        O = (A[d] = a.getPixelForValue(k[d], S)),
        I = (A[f] =
          o || T ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, k, l) : k[f], S));
      ((A.skip = isNaN(O) || isNaN(I) || T),
        (A.stop = S > 0 && Math.abs(k[d] - v[d]) > x),
        b && ((A.parsed = k), (A.raw = c.data[S])),
        u && (A.options = h || this.resolveDataElementOptions(S, M.active ? 'active' : s)),
        _ || this.updateElement(M, S, A, s),
        (v = k));
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.dataset,
      n = (e.options && e.options.borderWidth) || 0,
      s = t.data || [];
    if (!s.length) return n;
    const o = s[0].size(this.resolveDataElementOptions(0)),
      a = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    (t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw());
  }
}
(D(qi, 'id', 'line'),
  D(qi, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  }),
  D(qi, 'overrides', { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } }));
class ii extends Ct {
  constructor(t, e) {
    (super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0));
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart,
      s = n.data.labels || [],
      o = bi(e._parsed[t].r, n.options.locale);
    return { label: s[t] || '', value: o };
  }
  parseObjectData(t, e, n, s) {
    return _r.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    (this._updateRadius(), this.updateElements(e, 0, e.length, t));
  }
  getMinMax() {
    const t = this._cachedMeta,
      e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((n, s) => {
        const o = this.getParsed(s).r;
        !isNaN(o) &&
          this.chart.getDataVisibility(s) &&
          (o < e.min && (e.min = o), o > e.max && (e.max = o));
      }),
      e
    );
  }
  _updateRadius() {
    const t = this.chart,
      e = t.chartArea,
      n = t.options,
      s = Math.min(e.right - e.left, e.bottom - e.top),
      o = Math.max(s / 2, 0),
      a = Math.max(n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1, 0),
      r = (o - a) / t.getVisibleDatasetCount();
    ((this.outerRadius = o - r * this.index), (this.innerRadius = this.outerRadius - r));
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      a = this.chart,
      l = a.options.animation,
      c = this._cachedMeta.rScale,
      h = c.xCenter,
      u = c.yCenter,
      d = c.getIndexAngle(0) - 0.5 * U;
    let f = d,
      m;
    const b = 360 / this.countVisibleElements();
    for (m = 0; m < e; ++m) f += this._computeAngle(m, s, b);
    for (m = e; m < e + n; m++) {
      const x = t[m];
      let _ = f,
        w = f + this._computeAngle(m, s, b),
        P = a.getDataVisibility(m) ? c.getDistanceFromCenterForValue(this.getParsed(m).r) : 0;
      ((f = w), o && (l.animateScale && (P = 0), l.animateRotate && (_ = w = d)));
      const v = {
        x: h,
        y: u,
        innerRadius: 0,
        outerRadius: P,
        startAngle: _,
        endAngle: w,
        options: this.resolveDataElementOptions(m, x.active ? 'active' : s),
      };
      this.updateElement(x, m, v, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return (
      t.data.forEach((n, s) => {
        !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
      }),
      e
    );
  }
  _computeAngle(t, e, n) {
    return this.chart.getDataVisibility(t)
      ? Pt(this.resolveDataElementOptions(t, e).angle || n)
      : 0;
  }
}
(D(ii, 'id', 'polarArea'),
  D(ii, 'defaults', {
    dataElementType: 'arc',
    animation: { animateRotate: !0, animateScale: !0 },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
      },
    },
    indexAxis: 'r',
    startAngle: 0,
  }),
  D(ii, 'overrides', {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const {
                labels: { pointStyle: n, color: s },
              } = t.legend.options;
              return e.labels.map((o, a) => {
                const l = t.getDatasetMeta(0).controller.getStyle(a);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: n,
                  hidden: !t.getDataVisibility(a),
                  index: a,
                };
              });
            }
            return [];
          },
        },
        onClick(t, e, n) {
          (n.chart.toggleDataVisibility(e.index), n.chart.update());
        },
      },
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: { display: !1 },
        beginAtZero: !0,
        grid: { circular: !0 },
        pointLabels: { display: !1 },
        startAngle: 0,
      },
    },
  }));
class os extends me {}
(D(os, 'id', 'pie'),
  D(os, 'defaults', { cutout: 0, rotation: 0, circumference: 360, radius: '100%' }));
class Ki extends Ct {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale,
      n = this.getParsed(t);
    return { label: e.getLabels()[t], value: '' + e.getLabelForValue(n[e.axis]) };
  }
  parseObjectData(t, e, n, s) {
    return _r.bind(this)(t, e, n, s);
  }
  update(t) {
    const e = this._cachedMeta,
      n = e.dataset,
      s = e.data || [],
      o = e.iScale.getLabels();
    if (((n.points = s), t !== 'resize')) {
      const a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0);
      const r = { _loop: !0, _fullLoop: o.length === s.length, options: a };
      this.updateElement(n, void 0, r, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, e, n, s) {
    const o = this._cachedMeta.rScale,
      a = s === 'reset';
    for (let r = e; r < e + n; r++) {
      const l = t[r],
        c = this.resolveDataElementOptions(r, l.active ? 'active' : s),
        h = o.getPointPositionForValue(r, this.getParsed(r).r),
        u = a ? o.xCenter : h.x,
        d = a ? o.yCenter : h.y,
        f = { x: u, y: d, angle: h.angle, skip: isNaN(u) || isNaN(d), options: c };
      this.updateElement(l, r, f, s);
    }
  }
}
(D(Ki, 'id', 'radar'),
  D(Ki, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: !0,
    elements: { line: { fill: 'start' } },
  }),
  D(Ki, 'overrides', { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } }));
class Gi extends Ct {
  getLabelAndValue(t) {
    const e = this._cachedMeta,
      n = this.chart.data.labels || [],
      { xScale: s, yScale: o } = e,
      a = this.getParsed(t),
      r = s.getLabelForValue(a.x),
      l = o.getLabelForValue(a.y);
    return { label: n[t] || '', value: '(' + r + ', ' + l + ')' };
  }
  update(t) {
    const e = this._cachedMeta,
      { data: n = [] } = e,
      s = this.chart._animationsDisabled;
    let { start: o, count: a } = ur(e, n, s);
    if (
      ((this._drawStart = o),
      (this._drawCount = a),
      dr(e) && ((o = 0), (a = n.length)),
      this.options.showLine)
    ) {
      this.datasetElementType || this.addElements();
      const { dataset: r, _dataset: l } = e;
      ((r._chart = this.chart),
        (r._datasetIndex = this.index),
        (r._decimated = !!l._decimated),
        (r.points = n));
      const c = this.resolveDatasetElementOptions(t);
      ((c.segment = this.options.segment),
        this.updateElement(r, void 0, { animated: !s, options: c }, t));
    } else this.datasetElementType && (delete e.dataset, (this.datasetElementType = !1));
    this.updateElements(n, o, a, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    (!this.datasetElementType &&
      t &&
      (this.datasetElementType = this.chart.registry.getElement('line')),
      super.addElements());
  }
  updateElements(t, e, n, s) {
    const o = s === 'reset',
      { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta,
      h = this.resolveDataElementOptions(e, s),
      u = this.getSharedOptions(h),
      d = this.includeOptions(s, u),
      f = a.axis,
      m = r.axis,
      { spanGaps: b, segment: x } = this.options,
      _ = Ee(b) ? b : Number.POSITIVE_INFINITY,
      w = this.chart._animationsDisabled || o || s === 'none';
    let P = e > 0 && this.getParsed(e - 1);
    for (let v = e; v < e + n; ++v) {
      const S = t[v],
        M = this.getParsed(v),
        A = w ? S : {},
        k = V(M[m]),
        T = (A[f] = a.getPixelForValue(M[f], v)),
        O = (A[m] =
          o || k ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, M, l) : M[m], v));
      ((A.skip = isNaN(T) || isNaN(O) || k),
        (A.stop = v > 0 && Math.abs(M[f] - P[f]) > _),
        x && ((A.parsed = M), (A.raw = c.data[v])),
        d && (A.options = u || this.resolveDataElementOptions(v, S.active ? 'active' : s)),
        w || this.updateElement(S, v, A, s),
        (P = M));
    }
    this.updateSharedOptions(u, s, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      e = t.data || [];
    if (!this.options.showLine) {
      let r = 0;
      for (let l = e.length - 1; l >= 0; --l)
        r = Math.max(r, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return r > 0 && r;
    }
    const n = t.dataset,
      s = (n.options && n.options.borderWidth) || 0;
    if (!e.length) return s;
    const o = e[0].size(this.resolveDataElementOptions(0)),
      a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(s, o, a) / 2;
  }
}
(D(Gi, 'id', 'scatter'),
  D(Gi, 'defaults', { datasetElementType: !1, dataElementType: 'point', showLine: !1, fill: !1 }),
  D(Gi, 'overrides', {
    interaction: { mode: 'point' },
    scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  }));
var ku = Object.freeze({
  __proto__: null,
  BarController: Yi,
  BubbleController: Xi,
  DoughnutController: me,
  LineController: qi,
  PieController: os,
  PolarAreaController: ii,
  RadarController: Ki,
  ScatterController: Gi,
});
function fe() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.'
  );
}
class zs {
  constructor(t) {
    D(this, 'options');
    this.options = t || {};
  }
  static override(t) {
    Object.assign(zs.prototype, t);
  }
  init() {}
  formats() {
    return fe();
  }
  parse() {
    return fe();
  }
  format() {
    return fe();
  }
  add() {
    return fe();
  }
  diff() {
    return fe();
  }
  startOf() {
    return fe();
  }
  endOf() {
    return fe();
  }
}
var Pu = { _date: zs };
function Cu(i, t, e, n) {
  const { controller: s, data: o, _sorted: a } = i,
    r = s._cachedMeta.iScale,
    l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (r && t === r.axis && t !== 'r' && a && o.length) {
    const c = r._reversePixels ? Kc : Ut;
    if (n) {
      if (s._sharedOptions) {
        const h = o[0],
          u = typeof h.getRange == 'function' && h.getRange(t);
        if (u) {
          const d = c(o, t, e - u),
            f = c(o, t, e + u);
          return { lo: d.lo, hi: f.hi };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: u } = s._cachedMeta,
          { _parsed: d } = i,
          f = d
            .slice(0, h.lo + 1)
            .reverse()
            .findIndex((b) => !V(b[u.axis]));
        h.lo -= Math.max(0, f);
        const m = d.slice(h.hi).findIndex((b) => !V(b[u.axis]));
        h.hi += Math.max(0, m);
      }
      return h;
    }
  }
  return { lo: 0, hi: o.length - 1 };
}
function mn(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(),
    a = e[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: h } = o[r],
      { lo: u, hi: d } = Cu(o[r], t, a, s);
    for (let f = u; f <= d; ++f) {
      const m = h[f];
      m.skip || n(m, c, f);
    }
  }
}
function Au(i) {
  const t = i.indexOf('x') !== -1,
    e = i.indexOf('y') !== -1;
  return function (n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0,
      a = e ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function Vn(i, t, e, n, s) {
  const o = [];
  return (
    (!s && !i.isPointInArea(t)) ||
      mn(
        i,
        e,
        t,
        function (r, l, c) {
          (!s && !Ft(r, i.chartArea, 0)) ||
            (r.inRange(t.x, t.y, n) && o.push({ element: r, datasetIndex: l, index: c }));
        },
        !0
      ),
    o
  );
}
function Tu(i, t, e, n) {
  let s = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: h } = a.getProps(['startAngle', 'endAngle'], n),
      { angle: u } = ar(a, { x: t.x, y: t.y });
    hi(u, c, h) && s.push({ element: a, datasetIndex: r, index: l });
  }
  return (mn(i, e, t, o), s);
}
function Eu(i, t, e, n, s, o) {
  let a = [];
  const r = Au(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const f = h.inRange(t.x, t.y, s);
    if (n && !f) return;
    const m = h.getCenterPoint(s);
    if (!(!!o || i.isPointInArea(m)) && !f) return;
    const x = r(t, m);
    x < l
      ? ((a = [{ element: h, datasetIndex: u, index: d }]), (l = x))
      : x === l && a.push({ element: h, datasetIndex: u, index: d });
  }
  return (mn(i, e, t, c), a);
}
function Wn(i, t, e, n, s, o) {
  return !o && !i.isPointInArea(t) ? [] : e === 'r' && !n ? Tu(i, t, e, s) : Eu(i, t, e, n, s, o);
}
function Uo(i, t, e, n, s) {
  const o = [],
    a = e === 'x' ? 'inXRange' : 'inYRange';
  let r = !1;
  return (
    mn(i, e, t, (l, c, h) => {
      l[a] &&
        l[a](t[e], s) &&
        (o.push({ element: l, datasetIndex: c, index: h }), (r = r || l.inRange(t.x, t.y, s)));
    }),
    n && !r ? [] : o
  );
}
var Du = {
  modes: {
    index(i, t, e, n) {
      const s = Rt(t, i),
        o = e.axis || 'x',
        a = e.includeInvisible || !1,
        r = e.intersect ? Vn(i, s, o, n, a) : Wn(i, s, o, !1, n, a),
        l = [];
      return r.length
        ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
            const h = r[0].index,
              u = c.data[h];
            u && !u.skip && l.push({ element: u, datasetIndex: c.index, index: h });
          }),
          l)
        : [];
    },
    dataset(i, t, e, n) {
      const s = Rt(t, i),
        o = e.axis || 'xy',
        a = e.includeInvisible || !1;
      let r = e.intersect ? Vn(i, s, o, n, a) : Wn(i, s, o, !1, n, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex,
          c = i.getDatasetMeta(l).data;
        r = [];
        for (let h = 0; h < c.length; ++h) r.push({ element: c[h], datasetIndex: l, index: h });
      }
      return r;
    },
    point(i, t, e, n) {
      const s = Rt(t, i),
        o = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return Vn(i, s, o, n, a);
    },
    nearest(i, t, e, n) {
      const s = Rt(t, i),
        o = e.axis || 'xy',
        a = e.includeInvisible || !1;
      return Wn(i, s, o, e.intersect, n, a);
    },
    x(i, t, e, n) {
      const s = Rt(t, i);
      return Uo(i, s, 'x', e.intersect, n);
    },
    y(i, t, e, n) {
      const s = Rt(t, i);
      return Uo(i, s, 'y', e.intersect, n);
    },
  },
};
const Dr = ['left', 'top', 'right', 'bottom'];
function We(i, t) {
  return i.filter((e) => e.pos === t);
}
function Yo(i, t) {
  return i.filter((e) => Dr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function $e(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e,
      o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Ou(i) {
  const t = [];
  let e, n, s, o, a, r;
  for (e = 0, n = (i || []).length; e < n; ++e)
    ((s = i[e]),
      ({
        position: o,
        options: { stack: a, stackWeight: r = 1 },
      } = s),
      t.push({
        index: e,
        box: s,
        pos: o,
        horizontal: s.isHorizontal(),
        weight: s.weight,
        stack: a && o + a,
        stackWeight: r,
      }));
  return t;
}
function Iu(i) {
  const t = {};
  for (const e of i) {
    const { stack: n, pos: s, stackWeight: o } = e;
    if (!n || !Dr.includes(s)) continue;
    const a = t[n] || (t[n] = { count: 0, placed: 0, weight: 0, size: 0 });
    (a.count++, (a.weight += o));
  }
  return t;
}
function Lu(i, t) {
  const e = Iu(i),
    { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, a, r;
  for (o = 0, a = i.length; o < a; ++o) {
    r = i[o];
    const { fullSize: l } = r.box,
      c = e[r.stack],
      h = c && r.stackWeight / c.weight;
    r.horizontal
      ? ((r.width = h ? h * n : l && t.availableWidth), (r.height = s))
      : ((r.width = n), (r.height = h ? h * s : l && t.availableHeight));
  }
  return e;
}
function Ru(i) {
  const t = Ou(i),
    e = $e(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    n = $e(We(t, 'left'), !0),
    s = $e(We(t, 'right')),
    o = $e(We(t, 'top'), !0),
    a = $e(We(t, 'bottom')),
    r = Yo(t, 'x'),
    l = Yo(t, 'y');
  return {
    fullSize: e,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(a).concat(r),
    chartArea: We(t, 'chartArea'),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(a).concat(r),
  };
}
function Xo(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function Or(i, t) {
  ((i.top = Math.max(i.top, t.top)),
    (i.left = Math.max(i.left, t.left)),
    (i.bottom = Math.max(i.bottom, t.bottom)),
    (i.right = Math.max(i.right, t.right)));
}
function Fu(i, t, e, n) {
  const { pos: s, box: o } = e,
    a = i.maxPadding;
  if (!W(s)) {
    e.size && (i[s] -= e.size);
    const u = n[e.stack] || { size: 0, count: 1 };
    ((u.size = Math.max(u.size, e.horizontal ? o.height : o.width)),
      (e.size = u.size / u.count),
      (i[s] += e.size));
  }
  o.getPadding && Or(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - Xo(a, i, 'left', 'right')),
    l = Math.max(0, t.outerHeight - Xo(a, i, 'top', 'bottom')),
    c = r !== i.w,
    h = l !== i.h;
  return ((i.w = r), (i.h = l), e.horizontal ? { same: c, other: h } : { same: h, other: c });
}
function Nu(i) {
  const t = i.maxPadding;
  function e(n) {
    const s = Math.max(t[n] - i[n], 0);
    return ((i[n] += s), s);
  }
  ((i.y += e('top')), (i.x += e('left')), e('right'), e('bottom'));
}
function zu(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      s.forEach((a) => {
        o[a] = Math.max(t[a], e[a]);
      }),
      o
    );
  }
  return n(i ? ['left', 'right'] : ['top', 'bottom']);
}
function qe(i, t, e, n) {
  const s = [];
  let o, a, r, l, c, h;
  for (o = 0, a = i.length, c = 0; o < a; ++o) {
    ((r = i[o]), (l = r.box), l.update(r.width || t.w, r.height || t.h, zu(r.horizontal, t)));
    const { same: u, other: d } = Fu(t, e, r, n);
    ((c |= u && s.length), (h = h || d), l.fullSize || s.push(r));
  }
  return (c && qe(s, t, e, n)) || h;
}
function zi(i, t, e, n, s) {
  ((i.top = e), (i.left = t), (i.right = t + n), (i.bottom = e + s), (i.width = n), (i.height = s));
}
function qo(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: a } = t;
  for (const r of i) {
    const l = r.box,
      c = n[r.stack] || { placed: 0, weight: 1 },
      h = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const u = t.w * h,
        d = c.size || l.height;
      (ci(c.start) && (a = c.start),
        l.fullSize
          ? zi(l, s.left, a, e.outerWidth - s.right - s.left, d)
          : zi(l, t.left + c.placed, a, u, d),
        (c.start = a),
        (c.placed += u),
        (a = l.bottom));
    } else {
      const u = t.h * h,
        d = c.size || l.width;
      (ci(c.start) && (o = c.start),
        l.fullSize
          ? zi(l, o, s.top, d, e.outerHeight - s.bottom - s.top)
          : zi(l, o, t.top + c.placed, d, u),
        (c.start = o),
        (c.placed += u),
        (o = l.right));
    }
  }
  ((t.x = o), (t.y = a));
}
var lt = {
  addBox(i, t) {
    (i.boxes || (i.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(e) {
                t.draw(e);
              },
            },
          ];
        }),
      i.boxes.push(t));
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    ((t.fullSize = e.fullSize), (t.position = e.position), (t.weight = e.weight));
  },
  update(i, t, e, n) {
    if (!i) return;
    const s = ct(i.options.layout.padding),
      o = Math.max(t - s.width, 0),
      a = Math.max(e - s.height, 0),
      r = Ru(i.boxes),
      l = r.vertical,
      c = r.horizontal;
    H(i.boxes, (b) => {
      typeof b.beforeLayout == 'function' && b.beforeLayout();
    });
    const h =
        l.reduce((b, x) => (x.box.options && x.box.options.display === !1 ? b : b + 1), 0) || 1,
      u = Object.freeze({
        outerWidth: t,
        outerHeight: e,
        padding: s,
        availableWidth: o,
        availableHeight: a,
        vBoxMaxWidth: o / 2 / h,
        hBoxMaxHeight: a / 2,
      }),
      d = Object.assign({}, s);
    Or(d, ct(n));
    const f = Object.assign({ maxPadding: d, w: o, h: a, x: s.left, y: s.top }, s),
      m = Lu(l.concat(c), u);
    (qe(r.fullSize, f, u, m),
      qe(l, f, u, m),
      qe(c, f, u, m) && qe(l, f, u, m),
      Nu(f),
      qo(r.leftAndTop, f, u, m),
      (f.x += f.w),
      (f.y += f.h),
      qo(r.rightAndBottom, f, u, m),
      (i.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      H(r.chartArea, (b) => {
        const x = b.box;
        (Object.assign(x, i.chartArea),
          x.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 }));
      }));
  },
};
class Ir {
  acquireContext(t, e) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {}
  removeEventListener(t, e, n) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return (
      (e = Math.max(0, e || t.width)),
      (n = n || t.height),
      { width: e, height: Math.max(0, s ? Math.floor(e / s) : n) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Bu extends Ir {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Zi = '$chartjs',
  Hu = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  Ko = (i) => i === null || i === '';
function Vu(i, t) {
  const e = i.style,
    n = i.getAttribute('height'),
    s = i.getAttribute('width');
  if (
    ((i[Zi] = {
      initial: {
        height: n,
        width: s,
        style: { display: e.display, height: e.height, width: e.width },
      },
    }),
    (e.display = e.display || 'block'),
    (e.boxSizing = e.boxSizing || 'border-box'),
    Ko(s))
  ) {
    const o = Oo(i, 'width');
    o !== void 0 && (i.width = o);
  }
  if (Ko(n))
    if (i.style.height === '') i.height = i.width / (t || 2);
    else {
      const o = Oo(i, 'height');
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Lr = Wh ? { passive: !0 } : !1;
function Wu(i, t, e) {
  i && i.addEventListener(t, e, Lr);
}
function $u(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Lr);
}
function ju(i, t) {
  const e = Hu[i.type] || i.type,
    { x: n, y: s } = Rt(i, t);
  return { type: e, chart: t, native: i, x: n !== void 0 ? n : null, y: s !== void 0 ? s : null };
}
function ln(i, t) {
  for (const e of i) if (e === t || e.contains(t)) return !0;
}
function Uu(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let a = !1;
      for (const r of o) ((a = a || ln(r.addedNodes, n)), (a = a && !ln(r.removedNodes, n)));
      a && e();
    });
  return (s.observe(document, { childList: !0, subtree: !0 }), s);
}
function Yu(i, t, e) {
  const n = i.canvas,
    s = new MutationObserver((o) => {
      let a = !1;
      for (const r of o) ((a = a || ln(r.removedNodes, n)), (a = a && !ln(r.addedNodes, n)));
      a && e();
    });
  return (s.observe(document, { childList: !0, subtree: !0 }), s);
}
const di = new Map();
let Go = 0;
function Rr() {
  const i = window.devicePixelRatio;
  i !== Go &&
    ((Go = i),
    di.forEach((t, e) => {
      e.currentDevicePixelRatio !== i && t();
    }));
}
function Xu(i, t) {
  (di.size || window.addEventListener('resize', Rr), di.set(i, t));
}
function qu(i) {
  (di.delete(i), di.size || window.removeEventListener('resize', Rr));
}
function Ku(i, t, e) {
  const n = i.canvas,
    s = n && Ns(n);
  if (!s) return;
  const o = hr((r, l) => {
      const c = s.clientWidth;
      (e(r, l), c < s.clientWidth && e());
    }, window),
    a = new ResizeObserver((r) => {
      const l = r[0],
        c = l.contentRect.width,
        h = l.contentRect.height;
      (c === 0 && h === 0) || o(c, h);
    });
  return (a.observe(s), Xu(i, o), a);
}
function $n(i, t, e) {
  (e && e.disconnect(), t === 'resize' && qu(i));
}
function Gu(i, t, e) {
  const n = i.canvas,
    s = hr((o) => {
      i.ctx !== null && e(ju(o, i));
    }, i);
  return (Wu(n, t, s), s);
}
class Zu extends Ir {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext('2d');
    return n && n.canvas === t ? (Vu(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Zi]) return !1;
    const n = e[Zi].initial;
    ['height', 'width'].forEach((o) => {
      const a = n[o];
      V(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    const s = n.style || {};
    return (
      Object.keys(s).forEach((o) => {
        e.style[o] = s[o];
      }),
      (e.width = e.width),
      delete e[Zi],
      !0
    );
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}),
      a = { attach: Uu, detach: Yu, resize: Ku }[e] || Gu;
    s[e] = a(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}),
      s = n[e];
    if (!s) return;
    ((({ attach: $n, detach: $n, resize: $n })[e] || $u)(t, e, s), (n[e] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return Vh(t, e, n, s);
  }
  isAttached(t) {
    const e = t && Ns(t);
    return !!(e && e.isConnected);
  }
}
function Ju(i) {
  return !Fs() || (typeof OffscreenCanvas < 'u' && i instanceof OffscreenCanvas) ? Bu : Zu;
}
class At {
  constructor() {
    D(this, 'x');
    D(this, 'y');
    D(this, 'active', !1);
    D(this, 'options');
    D(this, '$animations');
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps(['x', 'y'], t);
    return { x: e, y: n };
  }
  hasValue() {
    return Ee(this.x) && Ee(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n) return this;
    const s = {};
    return (
      t.forEach((o) => {
        s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
      }),
      s
    );
  }
}
(D(At, 'defaults', {}), D(At, 'defaultRoutes'));
function Qu(i, t) {
  const e = i.options.ticks,
    n = td(i),
    s = Math.min(e.maxTicksLimit || n, n),
    o = e.major.enabled ? id(t) : [],
    a = o.length,
    r = o[0],
    l = o[a - 1],
    c = [];
  if (a > s) return (nd(t, c, o, a / s), c);
  const h = ed(o, t, s);
  if (a > 0) {
    let u, d;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (Bi(t, c, h, V(f) ? 0 : r - f, r), u = 0, d = a - 1; u < d; u++)
      Bi(t, c, h, o[u], o[u + 1]);
    return (Bi(t, c, h, l, V(f) ? t.length : l + f), c);
  }
  return (Bi(t, c, h), c);
}
function td(i) {
  const t = i.options.offset,
    e = i._tickSize(),
    n = i._length / e + (t ? 0 : 1),
    s = i._maxLength / e;
  return Math.floor(Math.min(n, s));
}
function ed(i, t, e) {
  const n = sd(i),
    s = t.length / e;
  if (!n) return Math.max(s, 1);
  const o = jc(n);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > s) return l;
  }
  return Math.max(s, 1);
}
function id(i) {
  const t = [];
  let e, n;
  for (e = 0, n = i.length; e < n; e++) i[e].major && t.push(e);
  return t;
}
function nd(i, t, e, n) {
  let s = 0,
    o = e[0],
    a;
  for (n = Math.ceil(n), a = 0; a < i.length; a++) a === o && (t.push(i[a]), s++, (o = e[s * n]));
}
function Bi(i, t, e, n, s) {
  const o = N(n, 0),
    a = Math.min(N(s, i.length), i.length);
  let r = 0,
    l,
    c,
    h;
  for (e = Math.ceil(e), s && ((l = s - n), (e = l / Math.floor(l / e))), h = o; h < 0; )
    (r++, (h = Math.round(o + r * e)));
  for (c = Math.max(o, 0); c < a; c++) c === h && (t.push(i[c]), r++, (h = Math.round(o + r * e)));
}
function sd(i) {
  const t = i.length;
  let e, n;
  if (t < 2) return !1;
  for (n = i[0], e = 1; e < t; ++e) if (i[e] - i[e - 1] !== n) return !1;
  return n;
}
const od = (i) => (i === 'left' ? 'right' : i === 'right' ? 'left' : i),
  Zo = (i, t, e) => (t === 'top' || t === 'left' ? i[t] + e : i[t] - e),
  Jo = (i, t) => Math.min(t || i, i);
function Qo(i, t) {
  const e = [],
    n = i.length / t,
    s = i.length;
  let o = 0;
  for (; o < s; o += n) e.push(i[Math.floor(o)]);
  return e;
}
function ad(i, t, e) {
  const n = i.ticks.length,
    s = Math.min(t, n - 1),
    o = i._startPixel,
    a = i._endPixel,
    r = 1e-6;
  let l = i.getPixelForTick(s),
    c;
  if (
    !(
      e &&
      (n === 1
        ? (c = Math.max(l - o, a - l))
        : t === 0
          ? (c = (i.getPixelForTick(1) - l) / 2)
          : (c = (l - i.getPixelForTick(s - 1)) / 2),
      (l += s < t ? c : -c),
      l < o - r || l > a + r)
    )
  )
    return l;
}
function rd(i, t) {
  H(i, (e) => {
    const n = e.gc,
      s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o) delete e.data[n[o]];
      n.splice(0, s);
    }
  });
}
function je(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function ta(i, t) {
  if (!i.display) return 0;
  const e = it(i.font, t),
    n = ct(i.padding);
  return (K(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function ld(i, t) {
  return se(i, { scale: t, type: 'scale' });
}
function cd(i, t, e) {
  return se(i, { tick: e, index: t, type: 'tick' });
}
function hd(i, t, e) {
  let n = Es(i);
  return (((e && t !== 'right') || (!e && t === 'right')) && (n = od(n)), n);
}
function ud(i, t, e, n) {
  const { top: s, left: o, bottom: a, right: r, chart: l } = i,
    { chartArea: c, scales: h } = l;
  let u = 0,
    d,
    f,
    m;
  const b = a - s,
    x = r - o;
  if (i.isHorizontal()) {
    if (((f = at(n, o, r)), W(e))) {
      const _ = Object.keys(e)[0],
        w = e[_];
      m = h[_].getPixelForValue(w) + b - t;
    } else e === 'center' ? (m = (c.bottom + c.top) / 2 + b - t) : (m = Zo(i, e, t));
    d = r - o;
  } else {
    if (W(e)) {
      const _ = Object.keys(e)[0],
        w = e[_];
      f = h[_].getPixelForValue(w) - x + t;
    } else e === 'center' ? (f = (c.left + c.right) / 2 - x + t) : (f = Zo(i, e, t));
    ((m = at(n, a, s)), (u = e === 'left' ? -tt : tt));
  }
  return { titleX: f, titleY: m, maxWidth: d, rotation: u };
}
class Se extends At {
  constructor(t) {
    (super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0));
  }
  init(t) {
    ((this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax)));
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return (
      (t = bt(t, Number.POSITIVE_INFINITY)),
      (e = bt(e, Number.NEGATIVE_INFINITY)),
      (n = bt(n, Number.POSITIVE_INFINITY)),
      (s = bt(s, Number.NEGATIVE_INFINITY)),
      { min: bt(t, n), max: bt(e, s), minDefined: J(t), maxDefined: J(e) }
    );
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(),
      a;
    if (s && o) return { min: e, max: n };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      ((a = r[l].controller.getMinMax(this, t)),
        s || (e = Math.min(e, a.min)),
        o || (n = Math.max(n, a.max)));
    return (
      (e = o && e > n ? n : e),
      (n = s && e > n ? e : n),
      { min: bt(e, bt(n, e)), max: bt(n, bt(e, n)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    ((this._cache = {}), (this._dataLimitsCached = !1));
  }
  beforeUpdate() {
    F(this.options.beforeUpdate, [this]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: a } = this.options,
      r = a.sampleSize;
    (this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + n.left + n.right
        : this.height + n.top + n.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = xh(this, o, s)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks());
    const l = r < this.ticks.length;
    (this._convertTicksToLabels(l ? Qo(this.ticks, r) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      a.display &&
        (a.autoSkip || a.source === 'auto') &&
        ((this.ticks = Qu(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate());
  }
  configure() {
    let t = this.options.reverse,
      e,
      n;
    (this.isHorizontal()
      ? ((e = this.left), (n = this.right))
      : ((e = this.top), (n = this.bottom), (t = !t)),
      (this._startPixel = e),
      (this._endPixel = n),
      (this._reversePixels = t),
      (this._length = n - e),
      (this._alignToPixels = this.options.alignToPixels));
  }
  afterUpdate() {
    F(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    F(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    (this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0));
  }
  afterSetDimensions() {
    F(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    (this.chart.notifyPlugins(t, this.getContext()), F(this.options[t], [this]));
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    F(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      ((o = t[n]), (o.label = F(e.callback, [o.value, n, t], this)));
  }
  afterTickToLabelConversion() {
    F(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    F(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      e = t.ticks,
      n = Jo(this.ticks.length, t.ticks.maxTicksLimit),
      s = e.minRotation || 0,
      o = e.maxRotation;
    let a = s,
      r,
      l,
      c;
    if (!this._isVisible() || !e.display || s >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(),
      u = h.widest.width,
      d = h.highest.height,
      f = st(this.chart.width - u, 0, this.maxWidth);
    ((r = t.offset ? this.maxWidth / n : f / (n - 1)),
      u + 6 > r &&
        ((r = f / (n - (t.offset ? 0.5 : 1))),
        (l = this.maxHeight - je(t.grid) - e.padding - ta(t.title, this.chart.options.font)),
        (c = Math.sqrt(u * u + d * d)),
        (a = As(
          Math.min(
            Math.asin(st((h.highest.height + 6) / r, -1, 1)),
            Math.asin(st(l / c, -1, 1)) - Math.asin(st(d / c, -1, 1))
          )
        )),
        (a = Math.max(s, Math.min(o, a)))),
      (this.labelRotation = a));
  }
  afterCalculateLabelRotation() {
    F(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    F(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: e,
        options: { ticks: n, title: s, grid: o },
      } = this,
      a = this._isVisible(),
      r = this.isHorizontal();
    if (a) {
      const l = ta(s, e.options.font);
      if (
        (r
          ? ((t.width = this.maxWidth), (t.height = je(o) + l))
          : ((t.height = this.maxHeight), (t.width = je(o) + l)),
        n.display && this.ticks.length)
      ) {
        const { first: c, last: h, widest: u, highest: d } = this._getLabelSizes(),
          f = n.padding * 2,
          m = Pt(this.labelRotation),
          b = Math.cos(m),
          x = Math.sin(m);
        if (r) {
          const _ = n.mirror ? 0 : x * u.width + b * d.height;
          t.height = Math.min(this.maxHeight, t.height + _ + f);
        } else {
          const _ = n.mirror ? 0 : b * u.width + x * d.height;
          t.width = Math.min(this.maxWidth, t.width + _ + f);
        }
        this._calculatePadding(c, h, x, b);
      }
    }
    (this._handleMargins(),
      r
        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length = e.height - this._margins.top - this._margins.bottom)));
  }
  _calculatePadding(t, e, n, s) {
    const {
        ticks: { align: o, padding: a },
        position: r,
      } = this.options,
      l = this.labelRotation !== 0,
      c = r !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left,
        u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0,
        f = 0;
      (l
        ? c
          ? ((d = s * t.width), (f = n * e.height))
          : ((d = n * t.height), (f = s * e.width))
        : o === 'start'
          ? (f = e.width)
          : o === 'end'
            ? (d = t.width)
            : o !== 'inner' && ((d = t.width / 2), (f = e.width / 2)),
        (this.paddingLeft = Math.max(((d - h + a) * this.width) / (this.width - h), 0)),
        (this.paddingRight = Math.max(((f - u + a) * this.width) / (this.width - u), 0)));
    } else {
      let h = e.height / 2,
        u = t.height / 2;
      (o === 'start' ? ((h = 0), (u = t.height)) : o === 'end' && ((h = e.height), (u = 0)),
        (this.paddingTop = h + a),
        (this.paddingBottom = u + a));
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
  }
  afterFit() {
    F(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === 'top' || e === 'bottom' || t === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    (this.beforeTickToLabelConversion(), this.generateTickLabels(t));
    let e, n;
    for (e = 0, n = t.length; e < n; e++) V(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      (e < n.length && (n = Qo(n, e)),
        (this._labelSizes = t =
          this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit)));
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: s, _longestTextCache: o } = this,
      a = [],
      r = [],
      l = Math.floor(e / Jo(e, n));
    let c = 0,
      h = 0,
      u,
      d,
      f,
      m,
      b,
      x,
      _,
      w,
      P,
      v,
      S;
    for (u = 0; u < e; u += l) {
      if (
        ((m = t[u].label),
        (b = this._resolveTickFontOptions(u)),
        (s.font = x = b.string),
        (_ = o[x] = o[x] || { data: {}, gc: [] }),
        (w = b.lineHeight),
        (P = v = 0),
        !V(m) && !K(m))
      )
        ((P = an(s, _.data, _.gc, P, m)), (v = w));
      else if (K(m))
        for (d = 0, f = m.length; d < f; ++d)
          ((S = m[d]), !V(S) && !K(S) && ((P = an(s, _.data, _.gc, P, S)), (v += w)));
      (a.push(P), r.push(v), (c = Math.max(P, c)), (h = Math.max(v, h)));
    }
    rd(o, e);
    const M = a.indexOf(c),
      A = r.indexOf(h),
      k = (T) => ({ width: a[T] || 0, height: r[T] || 0 });
    return { first: k(0), last: k(e - 1), widest: k(M), highest: k(A), widths: a, heights: r };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return qc(this._alignToPixels ? de(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return n.$context || (n.$context = cd(this.getContext(), t, n));
    }
    return this.$context || (this.$context = ld(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      e = Pt(this.labelRotation),
      n = Math.abs(Math.cos(e)),
      s = Math.abs(Math.sin(e)),
      o = this._getLabelSizes(),
      a = t.autoSkipPadding || 0,
      r = o ? o.widest.width + a : 0,
      l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? (l * n > r * s ? r / n : l / s) : l * s < r * n ? l / n : r / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis,
      n = this.chart,
      s = this.options,
      { grid: o, position: a, border: r } = s,
      l = o.offset,
      c = this.isHorizontal(),
      u = this.ticks.length + (l ? 1 : 0),
      d = je(o),
      f = [],
      m = r.setContext(this.getContext()),
      b = m.display ? m.width : 0,
      x = b / 2,
      _ = function ($) {
        return de(n, $, b);
      };
    let w, P, v, S, M, A, k, T, O, I, R, j;
    if (a === 'top')
      ((w = _(this.bottom)),
        (A = this.bottom - d),
        (T = w - x),
        (I = _(t.top) + x),
        (j = t.bottom));
    else if (a === 'bottom')
      ((w = _(this.top)), (I = t.top), (j = _(t.bottom) - x), (A = w + x), (T = this.top + d));
    else if (a === 'left')
      ((w = _(this.right)), (M = this.right - d), (k = w - x), (O = _(t.left) + x), (R = t.right));
    else if (a === 'right')
      ((w = _(this.left)), (O = t.left), (R = _(t.right) - x), (M = w + x), (k = this.left + d));
    else if (e === 'x') {
      if (a === 'center') w = _((t.top + t.bottom) / 2 + 0.5);
      else if (W(a)) {
        const $ = Object.keys(a)[0],
          Y = a[$];
        w = _(this.chart.scales[$].getPixelForValue(Y));
      }
      ((I = t.top), (j = t.bottom), (A = w + x), (T = A + d));
    } else if (e === 'y') {
      if (a === 'center') w = _((t.left + t.right) / 2);
      else if (W(a)) {
        const $ = Object.keys(a)[0],
          Y = a[$];
        w = _(this.chart.scales[$].getPixelForValue(Y));
      }
      ((M = w - x), (k = M - d), (O = t.left), (R = t.right));
    }
    const X = N(s.ticks.maxTicksLimit, u),
      z = Math.max(1, Math.ceil(u / X));
    for (P = 0; P < u; P += z) {
      const $ = this.getContext(P),
        Y = o.setContext($),
        ht = r.setContext($),
        Q = Y.lineWidth,
        Tt = Y.color,
        Me = ht.dash || [],
        yt = ht.dashOffset,
        oe = Y.tickWidth,
        Mt = Y.tickColor,
        ae = Y.tickBorderDash || [],
        Nt = Y.tickBorderDashOffset;
      ((v = ad(this, P, l)),
        v !== void 0 &&
          ((S = de(n, v, Q)),
          c ? (M = k = O = R = S) : (A = T = I = j = S),
          f.push({
            tx1: M,
            ty1: A,
            tx2: k,
            ty2: T,
            x1: O,
            y1: I,
            x2: R,
            y2: j,
            width: Q,
            color: Tt,
            borderDash: Me,
            borderDashOffset: yt,
            tickWidth: oe,
            tickColor: Mt,
            tickBorderDash: ae,
            tickBorderDashOffset: Nt,
          })));
    }
    return ((this._ticksLength = u), (this._borderValue = w), f);
  }
  _computeLabelItems(t) {
    const e = this.axis,
      n = this.options,
      { position: s, ticks: o } = n,
      a = this.isHorizontal(),
      r = this.ticks,
      { align: l, crossAlign: c, padding: h, mirror: u } = o,
      d = je(n.grid),
      f = d + h,
      m = u ? -h : f,
      b = -Pt(this.labelRotation),
      x = [];
    let _,
      w,
      P,
      v,
      S,
      M,
      A,
      k,
      T,
      O,
      I,
      R,
      j = 'middle';
    if (s === 'top') ((M = this.bottom - m), (A = this._getXAxisLabelAlignment()));
    else if (s === 'bottom') ((M = this.top + m), (A = this._getXAxisLabelAlignment()));
    else if (s === 'left') {
      const z = this._getYAxisLabelAlignment(d);
      ((A = z.textAlign), (S = z.x));
    } else if (s === 'right') {
      const z = this._getYAxisLabelAlignment(d);
      ((A = z.textAlign), (S = z.x));
    } else if (e === 'x') {
      if (s === 'center') M = (t.top + t.bottom) / 2 + f;
      else if (W(s)) {
        const z = Object.keys(s)[0],
          $ = s[z];
        M = this.chart.scales[z].getPixelForValue($) + f;
      }
      A = this._getXAxisLabelAlignment();
    } else if (e === 'y') {
      if (s === 'center') S = (t.left + t.right) / 2 - f;
      else if (W(s)) {
        const z = Object.keys(s)[0],
          $ = s[z];
        S = this.chart.scales[z].getPixelForValue($);
      }
      A = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === 'y' && (l === 'start' ? (j = 'top') : l === 'end' && (j = 'bottom'));
    const X = this._getLabelSizes();
    for (_ = 0, w = r.length; _ < w; ++_) {
      ((P = r[_]), (v = P.label));
      const z = o.setContext(this.getContext(_));
      ((k = this.getPixelForTick(_) + o.labelOffset),
        (T = this._resolveTickFontOptions(_)),
        (O = T.lineHeight),
        (I = K(v) ? v.length : 1));
      const $ = I / 2,
        Y = z.color,
        ht = z.textStrokeColor,
        Q = z.textStrokeWidth;
      let Tt = A;
      a
        ? ((S = k),
          A === 'inner' &&
            (_ === w - 1
              ? (Tt = this.options.reverse ? 'left' : 'right')
              : _ === 0
                ? (Tt = this.options.reverse ? 'right' : 'left')
                : (Tt = 'center')),
          s === 'top'
            ? c === 'near' || b !== 0
              ? (R = -I * O + O / 2)
              : c === 'center'
                ? (R = -X.highest.height / 2 - $ * O + O)
                : (R = -X.highest.height + O / 2)
            : c === 'near' || b !== 0
              ? (R = O / 2)
              : c === 'center'
                ? (R = X.highest.height / 2 - $ * O)
                : (R = X.highest.height - I * O),
          u && (R *= -1),
          b !== 0 && !z.showLabelBackdrop && (S += (O / 2) * Math.sin(b)))
        : ((M = k), (R = ((1 - I) * O) / 2));
      let Me;
      if (z.showLabelBackdrop) {
        const yt = ct(z.backdropPadding),
          oe = X.heights[_],
          Mt = X.widths[_];
        let ae = R - yt.top,
          Nt = 0 - yt.left;
        switch (j) {
          case 'middle':
            ae -= oe / 2;
            break;
          case 'bottom':
            ae -= oe;
            break;
        }
        switch (A) {
          case 'center':
            Nt -= Mt / 2;
            break;
          case 'right':
            Nt -= Mt;
            break;
          case 'inner':
            _ === w - 1 ? (Nt -= Mt) : _ > 0 && (Nt -= Mt / 2);
            break;
        }
        Me = {
          left: Nt,
          top: ae,
          width: Mt + yt.width,
          height: oe + yt.height,
          color: z.backdropColor,
        };
      }
      x.push({
        label: v,
        font: T,
        textOffset: R,
        options: {
          rotation: b,
          color: Y,
          strokeColor: ht,
          strokeWidth: Q,
          textAlign: Tt,
          textBaseline: j,
          translation: [S, M],
          backdrop: Me,
        },
      });
    }
    return x;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Pt(this.labelRotation)) return t === 'top' ? 'left' : 'right';
    let s = 'center';
    return (
      e.align === 'start'
        ? (s = 'left')
        : e.align === 'end'
          ? (s = 'right')
          : e.align === 'inner' && (s = 'inner'),
      s
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: e,
        ticks: { crossAlign: n, mirror: s, padding: o },
      } = this.options,
      a = this._getLabelSizes(),
      r = t + o,
      l = a.widest.width;
    let c, h;
    return (
      e === 'left'
        ? s
          ? ((h = this.right + o),
            n === 'near'
              ? (c = 'left')
              : n === 'center'
                ? ((c = 'center'), (h += l / 2))
                : ((c = 'right'), (h += l)))
          : ((h = this.right - r),
            n === 'near'
              ? (c = 'right')
              : n === 'center'
                ? ((c = 'center'), (h -= l / 2))
                : ((c = 'left'), (h = this.left)))
        : e === 'right'
          ? s
            ? ((h = this.left + o),
              n === 'near'
                ? (c = 'right')
                : n === 'center'
                  ? ((c = 'center'), (h -= l / 2))
                  : ((c = 'left'), (h -= l)))
            : ((h = this.left + r),
              n === 'near'
                ? (c = 'left')
                : n === 'center'
                  ? ((c = 'center'), (h += l / 2))
                  : ((c = 'right'), (h = this.right)))
          : (c = 'right'),
      { textAlign: c, x: h }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      e = this.options.position;
    if (e === 'left' || e === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (e === 'top' || e === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: e },
      left: n,
      top: s,
      width: o,
      height: a,
    } = this;
    e && (t.save(), (t.fillStyle = e), t.fillRect(n, s, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display) return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid,
      n = this.ctx,
      s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, a;
    const r = (l, c, h) => {
      !h.width ||
        !h.color ||
        (n.save(),
        (n.lineWidth = h.width),
        (n.strokeStyle = h.color),
        n.setLineDash(h.borderDash || []),
        (n.lineDashOffset = h.borderDashOffset),
        n.beginPath(),
        n.moveTo(l.x, l.y),
        n.lineTo(c.x, c.y),
        n.stroke(),
        n.restore());
    };
    if (e.display)
      for (o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        (e.drawOnChartArea && r({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          e.drawTicks &&
            r(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            ));
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: e,
        options: { border: n, grid: s },
      } = this,
      o = n.setContext(this.getContext()),
      a = n.display ? o.width : 0;
    if (!a) return;
    const r = s.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let c, h, u, d;
    (this.isHorizontal()
      ? ((c = de(t, this.left, a) - a / 2), (h = de(t, this.right, r) + r / 2), (u = d = l))
      : ((u = de(t, this.top, a) - a / 2), (d = de(t, this.bottom, r) + r / 2), (c = h = l)),
      e.save(),
      (e.lineWidth = o.width),
      (e.strokeStyle = o.color),
      e.beginPath(),
      e.moveTo(c, u),
      e.lineTo(h, d),
      e.stroke(),
      e.restore());
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const n = this.ctx,
      s = this._computeLabelArea();
    s && fn(n, s);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options,
        l = a.font,
        c = a.label,
        h = a.textOffset;
      ve(n, c, 0, h, l, r);
    }
    s && gn(n);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: e, title: n, reverse: s },
    } = this;
    if (!n.display) return;
    const o = it(n.font),
      a = ct(n.padding),
      r = n.align;
    let l = o.lineHeight / 2;
    e === 'bottom' || e === 'center' || W(e)
      ? ((l += a.bottom), K(n.text) && (l += o.lineHeight * (n.text.length - 1)))
      : (l += a.top);
    const { titleX: c, titleY: h, maxWidth: u, rotation: d } = ud(this, l, e, r);
    ve(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: u,
      rotation: d,
      textAlign: hd(r, e, s),
      textBaseline: 'middle',
      translation: [c, h],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      e = (t.ticks && t.ticks.z) || 0,
      n = N(t.grid && t.grid.z, -1),
      s = N(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Se.prototype.draw
      ? [
          {
            z: e,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: n,
            draw: (o) => {
              (this.drawBackground(), this.drawGrid(o), this.drawTitle());
            },
          },
          {
            z: s,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: e,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(),
      n = this.axis + 'AxisID',
      s = [];
    let o, a;
    for (o = 0, a = e.length; o < a; ++o) {
      const r = e[o];
      r[n] === this.id && (!t || r.type === t) && s.push(r);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return it(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Hi {
  constructor(t, e, n) {
    ((this.type = t), (this.scope = e), (this.override = n), (this.items = Object.create(null)));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    gd(e) && (n = this.register(e));
    const s = this.items,
      o = t.id,
      a = this.scope + '.' + o;
    if (!o) throw new Error('class does not have id: ' + t);
    return (o in s || ((s[o] = t), dd(t, a, n), this.override && G.override(t.id, t.overrides)), a);
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items,
      n = t.id,
      s = this.scope;
    (n in e && delete e[n], s && n in G[s] && (delete G[s][n], this.override && delete _e[n]));
  }
}
function dd(i, t, e) {
  const n = li(Object.create(null), [e ? G.get(e) : {}, G.get(t), i.defaults]);
  (G.set(t, n),
    i.defaultRoutes && fd(t, i.defaultRoutes),
    i.descriptors && G.describe(t, i.descriptors));
}
function fd(i, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split('.'),
      s = n.pop(),
      o = [i].concat(n).join('.'),
      a = t[e].split('.'),
      r = a.pop(),
      l = a.join('.');
    G.route(o, s, l, r);
  });
}
function gd(i) {
  return 'id' in i && 'defaults' in i;
}
class pd {
  constructor() {
    ((this.controllers = new Hi(Ct, 'datasets', !0)),
      (this.elements = new Hi(At, 'elements')),
      (this.plugins = new Hi(Object, 'plugins')),
      (this.scales = new Hi(Se, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]));
  }
  add(...t) {
    this._each('register', t);
  }
  remove(...t) {
    this._each('unregister', t);
  }
  addControllers(...t) {
    this._each('register', t, this.controllers);
  }
  addElements(...t) {
    this._each('register', t, this.elements);
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins);
  }
  addScales(...t) {
    this._each('register', t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller');
  }
  getElement(t) {
    return this._get(t, this.elements, 'element');
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin');
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale');
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers);
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements);
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins);
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales);
  }
  _each(t, e, n) {
    [...e].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || (o === this.plugins && s.id)
        ? this._exec(t, o, s)
        : H(s, (a) => {
            const r = n || this._getRegistryForType(a);
            this._exec(t, r, a);
          });
    });
  }
  _exec(t, e, n) {
    const s = Cs(t);
    (F(n['before' + s], [], n), e[t](n), F(n['after' + s], [], n));
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t)) return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0) throw new Error('"' + t + '" is not a registered ' + n + '.');
    return s;
  }
}
var Lt = new pd();
class md {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t),
      a = this._notify(o, t, e, n);
    return (
      e === 'afterDestroy' &&
        (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      a
    );
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const a = o.plugin,
        r = a[n],
        l = [e, s, o.options];
      if (F(r, l, a) === !1 && s.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    V(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const e = (this._cache = this._createDescriptors(t));
    return (this._notifyStateChanges(t), e);
  }
  _createDescriptors(t, e) {
    const n = t && t.config,
      s = N(n.options && n.options.plugins, {}),
      o = bd(n);
    return s === !1 && !e ? [] : xd(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [],
      n = this._cache,
      s = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    (this._notify(s(e, n), t, 'stop'), this._notify(s(n, e), t, 'start'));
  }
}
function bd(i) {
  const t = {},
    e = [],
    n = Object.keys(Lt.plugins.items);
  for (let o = 0; o < n.length; o++) e.push(Lt.getPlugin(n[o]));
  const s = i.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    e.indexOf(a) === -1 && (e.push(a), (t[a.id] = !0));
  }
  return { plugins: e, localIds: t };
}
function yd(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function xd(i, { plugins: t, localIds: e }, n, s) {
  const o = [],
    a = i.getContext();
  for (const r of t) {
    const l = r.id,
      c = yd(n[l], s);
    c !== null && o.push({ plugin: r, options: _d(i.config, { plugin: r, local: e[l] }, c, a) });
  }
  return o;
}
function _d(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t),
    a = i.getOptionScopes(n, o);
  return (
    e && t.defaults && a.push(t.defaults),
    i.createResolver(a, s, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function as(i, t) {
  const e = G.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || 'x';
}
function vd(i, t) {
  let e = i;
  return (i === '_index_' ? (e = t) : i === '_value_' && (e = t === 'x' ? 'y' : 'x'), e);
}
function Sd(i, t) {
  return i === t ? '_index_' : '_value_';
}
function ea(i) {
  if (i === 'x' || i === 'y' || i === 'r') return i;
}
function wd(i) {
  if (i === 'top' || i === 'bottom') return 'x';
  if (i === 'left' || i === 'right') return 'y';
}
function rs(i, ...t) {
  if (ea(i)) return i;
  for (const e of t) {
    const n = e.axis || wd(e.position) || (i.length > 1 && ea(i[0].toLowerCase()));
    if (n) return n;
  }
  throw new Error(
    "Cannot determine type of '".concat(i, "' axis. Please provide 'axis' or 'position' option.")
  );
}
function ia(i, t, e) {
  if (e[t + 'AxisID'] === i) return { axis: t };
}
function Md(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((n) => n.xAxisID === i || n.yAxisID === i);
    if (e.length) return ia(i, 'x', e[0]) || ia(i, 'y', e[0]);
  }
  return {};
}
function kd(i, t) {
  const e = _e[i.type] || { scales: {} },
    n = t.scales || {},
    s = as(i.type, t),
    o = Object.create(null);
  return (
    Object.keys(n).forEach((a) => {
      const r = n[a];
      if (!W(r)) return console.error('Invalid scale configuration for scale: '.concat(a));
      if (r._proxy)
        return console.warn('Ignoring resolver passed as options for scale: '.concat(a));
      const l = rs(a, r, Md(a, i), G.scales[r.type]),
        c = Sd(l, s),
        h = e.scales || {};
      o[a] = Qe(Object.create(null), [{ axis: l }, r, h[l], h[c]]);
    }),
    i.data.datasets.forEach((a) => {
      const r = a.type || i.type,
        l = a.indexAxis || as(r, t),
        h = (_e[r] || {}).scales || {};
      Object.keys(h).forEach((u) => {
        const d = vd(u, l),
          f = a[d + 'AxisID'] || d;
        ((o[f] = o[f] || Object.create(null)), Qe(o[f], [{ axis: d }, n[f], h[u]]));
      });
    }),
    Object.keys(o).forEach((a) => {
      const r = o[a];
      Qe(r, [G.scales[r.type], G.scale]);
    }),
    o
  );
}
function Fr(i) {
  const t = i.options || (i.options = {});
  ((t.plugins = N(t.plugins, {})), (t.scales = kd(i, t)));
}
function Nr(i) {
  return ((i = i || {}), (i.datasets = i.datasets || []), (i.labels = i.labels || []), i);
}
function Pd(i) {
  return ((i = i || {}), (i.data = Nr(i.data)), Fr(i), i);
}
const na = new Map(),
  zr = new Set();
function Vi(i, t) {
  let e = na.get(i);
  return (e || ((e = t()), na.set(i, e), zr.add(e)), e);
}
const Ue = (i, t, e) => {
  const n = ee(t, e);
  n !== void 0 && i.add(n);
};
class Cd {
  constructor(t) {
    ((this._config = Pd(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map()));
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Nr(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    (this.clearCache(), Fr(t));
  }
  clearCache() {
    (this._scopeCache.clear(), this._resolverCache.clear());
  }
  datasetScopeKeys(t) {
    return Vi(t, () => [['datasets.'.concat(t), '']]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Vi(''.concat(t, '.transition.').concat(e), () => [
      ['datasets.'.concat(t, '.transitions.').concat(e), 'transitions.'.concat(e)],
      ['datasets.'.concat(t), ''],
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Vi(''.concat(t, '-').concat(e), () => [
      [
        'datasets.'.concat(t, '.elements.').concat(e),
        'datasets.'.concat(t),
        'elements.'.concat(e),
        '',
      ],
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id,
      n = this.type;
    return Vi(''.concat(n, '-plugin-').concat(e), () => [
      ['plugins.'.concat(e), ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return ((!s || e) && ((s = new Map()), n.set(t, s)), s);
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this,
      a = this._cachedScopes(t, n),
      r = a.get(e);
    if (r) return r;
    const l = new Set();
    e.forEach((h) => {
      (t && (l.add(t), h.forEach((u) => Ue(l, t, u))),
        h.forEach((u) => Ue(l, s, u)),
        h.forEach((u) => Ue(l, _e[o] || {}, u)),
        h.forEach((u) => Ue(l, G, u)),
        h.forEach((u) => Ue(l, ns, u)));
    });
    const c = Array.from(l);
    return (c.length === 0 && c.push(Object.create(null)), zr.has(e) && a.set(e, c), c);
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [t, _e[e] || {}, G.datasets[e] || {}, { type: e }, G, ns];
  }
  resolveNamedOptions(t, e, n, s = ['']) {
    const o = { $shared: !0 },
      { resolver: a, subPrefixes: r } = sa(this._resolverCache, t, s);
    let l = a;
    if (Td(a, e)) {
      ((o.$shared = !1), (n = ie(n) ? n() : n));
      const c = this.createResolver(t, n, r);
      l = De(a, n, c);
    }
    for (const c of e) o[c] = l[c];
    return o;
  }
  createResolver(t, e, n = [''], s) {
    const { resolver: o } = sa(this._resolverCache, t, n);
    return W(e) ? De(o, e, void 0, s) : o;
  }
}
function sa(i, t, e) {
  let n = i.get(t);
  n || ((n = new Map()), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return (
    o ||
      ((o = {
        resolver: Is(t, e),
        subPrefixes: e.filter((r) => !r.toLowerCase().includes('hover')),
      }),
      n.set(s, o)),
    o
  );
}
const Ad = (i) => W(i) && Object.getOwnPropertyNames(i).some((t) => ie(i[t]));
function Td(i, t) {
  const { isScriptable: e, isIndexable: n } = mr(i);
  for (const s of t) {
    const o = e(s),
      a = n(s),
      r = (a || o) && i[s];
    if ((o && (ie(r) || Ad(r))) || (a && K(r))) return !0;
  }
  return !1;
}
var Ed = '4.5.0';
const Dd = ['top', 'bottom', 'left', 'right', 'chartArea'];
function oa(i, t) {
  return i === 'top' || i === 'bottom' || (Dd.indexOf(i) === -1 && t === 'x');
}
function aa(i, t) {
  return function (e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function ra(i) {
  const t = i.chart,
    e = t.options.animation;
  (t.notifyPlugins('afterRender'), F(e && e.onComplete, [i], t));
}
function Od(i) {
  const t = i.chart,
    e = t.options.animation;
  F(e && e.onProgress, [i], t);
}
function Br(i) {
  return (
    Fs() && typeof i == 'string' ? (i = document.getElementById(i)) : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Ji = {},
  la = (i) => {
    const t = Br(i);
    return Object.values(Ji)
      .filter((e) => e.canvas === t)
      .pop();
  };
function Id(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const a = i[s];
      (delete i[s], (e > 0 || o > t) && (i[o + e] = a));
    }
  }
}
function Ld(i, t, e, n) {
  return !e || i.type === 'mouseout' ? null : n ? t : i;
}
var qt;
let bn =
  ((qt = class {
    static register(...t) {
      (Lt.add(...t), ca());
    }
    static unregister(...t) {
      (Lt.remove(...t), ca());
    }
    constructor(t, e) {
      const n = (this.config = new Cd(e)),
        s = Br(t),
        o = la(s);
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        );
      const a = n.createResolver(n.chartOptionScopes(), this.getContext());
      ((this.platform = new (n.platform || Ju(s))()), this.platform.updateConfig(n));
      const r = this.platform.acquireContext(s, a.aspectRatio),
        l = r && r.canvas,
        c = l && l.height,
        h = l && l.width;
      if (
        ((this.id = Rc()),
        (this.ctx = r),
        (this.canvas = l),
        (this.width = h),
        (this.height = c),
        (this._options = a),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new md()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = Jc((u) => this.update(u), a.resizeDelay || 0)),
        (this._dataChanges = []),
        (Ji[this.id] = this),
        !r || !l)
      ) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      (Vt.listen(this, 'complete', ra),
        Vt.listen(this, 'progress', Od),
        this._initialize(),
        this.attached && this.update());
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: e },
        width: n,
        height: s,
        _aspectRatio: o,
      } = this;
      return V(t) ? (e && o ? o : s ? n / s : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return Lt;
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive ? this.resize() : Do(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      );
    }
    clear() {
      return (Ao(this.canvas, this.ctx), this);
    }
    stop() {
      return (Vt.stop(this), this);
    }
    resize(t, e) {
      Vt.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
    }
    _resize(t, e) {
      const n = this.options,
        s = this.canvas,
        o = n.maintainAspectRatio && this.aspectRatio,
        a = this.platform.getMaximumSize(s, t, e, o),
        r = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
        l = this.width ? 'resize' : 'attach';
      ((this.width = a.width),
        (this.height = a.height),
        (this._aspectRatio = this.aspectRatio),
        Do(this, r, !0) &&
          (this.notifyPlugins('resize', { size: a }),
          F(n.onResize, [this, a], this),
          this.attached && this._doResize(l) && this.render()));
    }
    ensureScalesHaveIDs() {
      const e = this.options.scales || {};
      H(e, (n, s) => {
        n.id = s;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        e = t.scales,
        n = this.scales,
        s = Object.keys(n).reduce((a, r) => ((a[r] = !1), a), {});
      let o = [];
      (e &&
        (o = o.concat(
          Object.keys(e).map((a) => {
            const r = e[a],
              l = rs(a, r),
              c = l === 'r',
              h = l === 'x';
            return {
              options: r,
              dposition: c ? 'chartArea' : h ? 'bottom' : 'left',
              dtype: c ? 'radialLinear' : h ? 'category' : 'linear',
            };
          })
        )),
        H(o, (a) => {
          const r = a.options,
            l = r.id,
            c = rs(l, r),
            h = N(r.type, a.dtype);
          ((r.position === void 0 || oa(r.position, c) !== oa(a.dposition)) &&
            (r.position = a.dposition),
            (s[l] = !0));
          let u = null;
          if (l in n && n[l].type === h) u = n[l];
          else {
            const d = Lt.getScale(h);
            ((u = new d({ id: l, type: h, ctx: this.ctx, chart: this })), (n[u.id] = u));
          }
          u.init(r, t);
        }),
        H(s, (a, r) => {
          a || delete n[r];
        }),
        H(n, (a) => {
          (lt.configure(this, a, a.options), lt.addBox(this, a));
        }));
    }
    _updateMetasets() {
      const t = this._metasets,
        e = this.data.datasets.length,
        n = t.length;
      if ((t.sort((s, o) => s.index - o.index), n > e)) {
        for (let s = e; s < n; ++s) this._destroyDatasetMeta(s);
        t.splice(e, n - e);
      }
      this._sortedMetasets = t.slice(0).sort(aa('order', 'index'));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: e },
      } = this;
      (t.length > e.length && delete this._stacks,
        t.forEach((n, s) => {
          e.filter((o) => o === n._dataset).length === 0 && this._destroyDatasetMeta(s);
        }));
    }
    buildOrUpdateControllers() {
      const t = [],
        e = this.data.datasets;
      let n, s;
      for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
        const o = e[n];
        let a = this.getDatasetMeta(n);
        const r = o.type || this.config.type;
        if (
          (a.type && a.type !== r && (this._destroyDatasetMeta(n), (a = this.getDatasetMeta(n))),
          (a.type = r),
          (a.indexAxis = o.indexAxis || as(r, this.options)),
          (a.order = o.order || 0),
          (a.index = n),
          (a.label = '' + o.label),
          (a.visible = this.isDatasetVisible(n)),
          a.controller)
        )
          (a.controller.updateIndex(n), a.controller.linkScales());
        else {
          const l = Lt.getController(r),
            { datasetElementType: c, dataElementType: h } = G.datasets[r];
          (Object.assign(l, {
            dataElementType: Lt.getElement(h),
            datasetElementType: c && Lt.getElement(c),
          }),
            (a.controller = new l(this, n)),
            t.push(a.controller));
        }
      }
      return (this._updateMetasets(), t);
    }
    _resetElements() {
      H(
        this.data.datasets,
        (t, e) => {
          this.getDatasetMeta(e).controller.reset();
        },
        this
      );
    }
    reset() {
      (this._resetElements(), this.notifyPlugins('reset'));
    }
    update(t) {
      const e = this.config;
      e.update();
      const n = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
        s = (this._animationsDisabled = !n.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const o = this.buildOrUpdateControllers();
      this.notifyPlugins('beforeElementsUpdate');
      let a = 0;
      for (let c = 0, h = this.data.datasets.length; c < h; c++) {
        const { controller: u } = this.getDatasetMeta(c),
          d = !s && o.indexOf(u) === -1;
        (u.buildOrUpdateElements(d), (a = Math.max(+u.getMaxOverflow(), a)));
      }
      ((a = this._minPadding = n.layout.autoPadding ? a : 0),
        this._updateLayout(a),
        s ||
          H(o, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins('afterUpdate', { mode: t }),
        this._layers.sort(aa('z', '_idx')));
      const { _active: r, _lastEvent: l } = this;
      (l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0),
        this.render());
    }
    _updateScales() {
      (H(this.scales, (t) => {
        lt.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales());
    }
    _checkEventBindings() {
      const t = this.options,
        e = new Set(Object.keys(this._listeners)),
        n = new Set(t.events);
      (!xo(e, n) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        e = this._getUniformDataChanges() || [];
      for (const { method: n, start: s, count: o } of e) {
        const a = n === '_removeElements' ? -o : o;
        Id(t, s, a);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const e = this.data.datasets.length,
        n = (o) =>
          new Set(t.filter((a) => a[0] === o).map((a, r) => r + ',' + a.splice(1).join(','))),
        s = n(0);
      for (let o = 1; o < e; o++) if (!xo(s, n(o))) return;
      return Array.from(s)
        .map((o) => o.split(','))
        .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
      lt.update(this, this.width, this.height, t);
      const e = this.chartArea,
        n = e.width <= 0 || e.height <= 0;
      ((this._layers = []),
        H(
          this.boxes,
          (s) => {
            (n && s.position === 'chartArea') ||
              (s.configure && s.configure(), this._layers.push(...s._layers()));
          },
          this
        ),
        this._layers.forEach((s, o) => {
          s._idx = o;
        }),
        this.notifyPlugins('afterLayout'));
    }
    _updateDatasets(t) {
      if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
        for (let e = 0, n = this.data.datasets.length; e < n; ++e)
          this.getDatasetMeta(e).controller.configure();
        for (let e = 0, n = this.data.datasets.length; e < n; ++e)
          this._updateDataset(e, ie(t) ? t({ datasetIndex: e }) : t);
        this.notifyPlugins('afterDatasetsUpdate', { mode: t });
      }
    }
    _updateDataset(t, e) {
      const n = this.getDatasetMeta(t),
        s = { meta: n, index: t, mode: e, cancelable: !0 };
      this.notifyPlugins('beforeDatasetUpdate', s) !== !1 &&
        (n.controller._update(e), (s.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', s));
    }
    render() {
      this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
        (Vt.has(this)
          ? this.attached && !Vt.running(this) && Vt.start(this)
          : (this.draw(), ra({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: n, height: s } = this._resizeBeforeDraw;
        ((this._resizeBeforeDraw = null), this._resize(n, s));
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
      )
        return;
      const e = this._layers;
      for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
      for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
      this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(t) {
      const e = this._sortedMetasets,
        n = [];
      let s, o;
      for (s = 0, o = e.length; s < o; ++s) {
        const a = e[s];
        (!t || a.visible) && n.push(a);
      }
      return n;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
      this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(t) {
      const e = this.ctx,
        n = { meta: t, index: t.index, cancelable: !0 },
        s = Cr(this, t);
      this.notifyPlugins('beforeDatasetDraw', n) !== !1 &&
        (s && fn(e, s),
        t.controller.draw(),
        s && gn(e),
        (n.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', n));
    }
    isPointInArea(t) {
      return Ft(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, n, s) {
      const o = Du.modes[e];
      return typeof o == 'function' ? o(this, t, n, s) : [];
    }
    getDatasetMeta(t) {
      const e = this.data.datasets[t],
        n = this._metasets;
      let s = n.filter((o) => o && o._dataset === e).pop();
      return (
        s ||
          ((s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (e && e.order) || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1,
          }),
          n.push(s)),
        s
      );
    }
    getContext() {
      return this.$context || (this.$context = se(null, { chart: this, type: 'chart' }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const e = this.data.datasets[t];
      if (!e) return !1;
      const n = this.getDatasetMeta(t);
      return typeof n.hidden == 'boolean' ? !n.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
      const n = this.getDatasetMeta(t);
      n.hidden = !e;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, n) {
      const s = n ? 'show' : 'hide',
        o = this.getDatasetMeta(t),
        a = o.controller._resolveAnimations(void 0, s);
      ci(e)
        ? ((o.data[e].hidden = !n), this.update())
        : (this.setDatasetVisibility(t, n),
          a.update(o, { visible: n }),
          this.update((r) => (r.datasetIndex === t ? s : void 0)));
    }
    hide(t, e) {
      this._updateVisibility(t, e, !1);
    }
    show(t, e) {
      this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
      const e = this._metasets[t];
      (e && e.controller && e.controller._destroy(), delete this._metasets[t]);
    }
    _stop() {
      let t, e;
      for (this.stop(), Vt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins('beforeDestroy');
      const { canvas: t, ctx: e } = this;
      (this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          Ao(t, e),
          this.platform.releaseContext(e),
          (this.canvas = null),
          (this.ctx = null)),
        delete Ji[this.id],
        this.notifyPlugins('afterDestroy'));
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      (this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0));
    }
    bindUserEvents() {
      const t = this._listeners,
        e = this.platform,
        n = (o, a) => {
          (e.addEventListener(this, o, a), (t[o] = a));
        },
        s = (o, a, r) => {
          ((o.offsetX = a), (o.offsetY = r), this._eventHandler(o));
        };
      H(this.options.events, (o) => n(o, s));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        e = this.platform,
        n = (l, c) => {
          (e.addEventListener(this, l, c), (t[l] = c));
        },
        s = (l, c) => {
          t[l] && (e.removeEventListener(this, l, c), delete t[l]);
        },
        o = (l, c) => {
          this.canvas && this.resize(l, c);
        };
      let a;
      const r = () => {
        (s('attach', r), (this.attached = !0), this.resize(), n('resize', o), n('detach', a));
      };
      ((a = () => {
        ((this.attached = !1), s('resize', o), this._stop(), this._resize(0, 0), n('attach', r));
      }),
        e.isAttached(this.canvas) ? r() : a());
    }
    unbindEvents() {
      (H(this._listeners, (t, e) => {
        this.platform.removeEventListener(this, e, t);
      }),
        (this._listeners = {}),
        H(this._responsiveListeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
        (this._responsiveListeners = void 0));
    }
    updateHoverStyle(t, e, n) {
      const s = n ? 'set' : 'remove';
      let o, a, r, l;
      for (
        e === 'dataset' &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller['_' + s + 'DatasetHoverStyle']()),
          r = 0,
          l = t.length;
        r < l;
        ++r
      ) {
        a = t[r];
        const c = a && this.getDatasetMeta(a.datasetIndex).controller;
        c && c[s + 'HoverStyle'](a.element, a.datasetIndex, a.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const e = this._active || [],
        n = t.map(({ datasetIndex: o, index: a }) => {
          const r = this.getDatasetMeta(o);
          if (!r) throw new Error('No dataset found at index ' + o);
          return { datasetIndex: o, element: r.data[a], index: a };
        });
      !nn(n, e) && ((this._active = n), (this._lastEvent = null), this._updateHoverStyles(n, e));
    }
    notifyPlugins(t, e, n) {
      return this._plugins.notify(this, t, e, n);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, e, n) {
      const s = this.options.hover,
        o = (l, c) =>
          l.filter((h) => !c.some((u) => h.datasetIndex === u.datasetIndex && h.index === u.index)),
        a = o(e, t),
        r = n ? t : o(t, e);
      (a.length && this.updateHoverStyle(a, s.mode, !1),
        r.length && s.mode && this.updateHoverStyle(r, s.mode, !0));
    }
    _eventHandler(t, e) {
      const n = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
        s = (a) => (a.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins('beforeEvent', n, s) === !1) return;
      const o = this._handleEvent(t, e, n.inChartArea);
      return (
        (n.cancelable = !1),
        this.notifyPlugins('afterEvent', n, s),
        (o || n.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, e, n) {
      const { _active: s = [], options: o } = this,
        a = e,
        r = this._getActiveElements(t, s, n, a),
        l = Vc(t),
        c = Ld(t, this._lastEvent, n, l);
      n &&
        ((this._lastEvent = null),
        F(o.onHover, [t, r, this], this),
        l && F(o.onClick, [t, r, this], this));
      const h = !nn(r, s);
      return (
        (h || e) && ((this._active = r), this._updateHoverStyles(r, s, e)),
        (this._lastEvent = c),
        h
      );
    }
    _getActiveElements(t, e, n, s) {
      if (t.type === 'mouseout') return [];
      if (!n) return e;
      const o = this.options.hover;
      return this.getElementsAtEventForMode(t, o.mode, o, s);
    }
  }),
  D(qt, 'defaults', G),
  D(qt, 'instances', Ji),
  D(qt, 'overrides', _e),
  D(qt, 'registry', Lt),
  D(qt, 'version', Ed),
  D(qt, 'getChart', la),
  qt);
function ca() {
  return H(bn.instances, (i) => i._plugins.invalidate());
}
function Rd(i, t, e) {
  const { startAngle: n, x: s, y: o, outerRadius: a, innerRadius: r, options: l } = t,
    { borderWidth: c, borderJoinStyle: h } = l,
    u = Math.min(c / a, rt(n - e));
  if ((i.beginPath(), i.arc(s, o, a - c / 2, n + u / 2, e - u / 2), r > 0)) {
    const d = Math.min(c / r, rt(n - e));
    i.arc(s, o, r + c / 2, e - d / 2, n + d / 2, !0);
  } else {
    const d = Math.min(c / 2, a * rt(n - e));
    if (h === 'round') i.arc(s, o, d, e - U / 2, n + U / 2, !0);
    else if (h === 'bevel') {
      const f = 2 * d * d,
        m = -f * Math.cos(e + U / 2) + s,
        b = -f * Math.sin(e + U / 2) + o,
        x = f * Math.cos(n + U / 2) + s,
        _ = f * Math.sin(n + U / 2) + o;
      (i.lineTo(m, b), i.lineTo(x, _));
    }
  }
  (i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip('evenodd'));
}
function Fd(i, t, e) {
  const { startAngle: n, pixelMargin: s, x: o, y: a, outerRadius: r, innerRadius: l } = t;
  let c = s / r;
  (i.beginPath(),
    i.arc(o, a, r, n - c, e + c),
    l > s ? ((c = s / l), i.arc(o, a, l, e + c, n - c, !0)) : i.arc(o, a, s, e + tt, n - tt),
    i.closePath(),
    i.clip());
}
function Nd(i) {
  return Os(i, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
function zd(i, t, e, n) {
  const s = Nd(i.options.borderRadius),
    o = (e - t) / 2,
    a = Math.min(o, (n * t) / 2),
    r = (l) => {
      const c = ((e - Math.min(o, l)) * n) / 2;
      return st(l, 0, Math.min(o, c));
    };
  return {
    outerStart: r(s.outerStart),
    outerEnd: r(s.outerEnd),
    innerStart: st(s.innerStart, 0, a),
    innerEnd: st(s.innerEnd, 0, a),
  };
}
function Ce(i, t, e, n) {
  return { x: e + i * Math.cos(t), y: n + i * Math.sin(t) };
}
function cn(i, t, e, n, s, o) {
  const { x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: h } = t,
    u = Math.max(t.outerRadius + n + e - c, 0),
    d = h > 0 ? h + n + e + c : 0;
  let f = 0;
  const m = s - l;
  if (n) {
    const z = h > 0 ? h - n : 0,
      $ = u > 0 ? u - n : 0,
      Y = (z + $) / 2,
      ht = Y !== 0 ? (m * Y) / (Y + n) : m;
    f = (m - ht) / 2;
  }
  const b = Math.max(0.001, m * u - e / U) / u,
    x = (m - b) / 2,
    _ = l + x + f,
    w = s - x - f,
    { outerStart: P, outerEnd: v, innerStart: S, innerEnd: M } = zd(t, d, u, w - _),
    A = u - P,
    k = u - v,
    T = _ + P / A,
    O = w - v / k,
    I = d + S,
    R = d + M,
    j = _ + S / I,
    X = w - M / R;
  if ((i.beginPath(), o)) {
    const z = (T + O) / 2;
    if ((i.arc(a, r, u, T, z), i.arc(a, r, u, z, O), v > 0)) {
      const Q = Ce(k, O, a, r);
      i.arc(Q.x, Q.y, v, O, w + tt);
    }
    const $ = Ce(R, w, a, r);
    if ((i.lineTo($.x, $.y), M > 0)) {
      const Q = Ce(R, X, a, r);
      i.arc(Q.x, Q.y, M, w + tt, X + Math.PI);
    }
    const Y = (w - M / d + (_ + S / d)) / 2;
    if ((i.arc(a, r, d, w - M / d, Y, !0), i.arc(a, r, d, Y, _ + S / d, !0), S > 0)) {
      const Q = Ce(I, j, a, r);
      i.arc(Q.x, Q.y, S, j + Math.PI, _ - tt);
    }
    const ht = Ce(A, _, a, r);
    if ((i.lineTo(ht.x, ht.y), P > 0)) {
      const Q = Ce(A, T, a, r);
      i.arc(Q.x, Q.y, P, _ - tt, T);
    }
  } else {
    i.moveTo(a, r);
    const z = Math.cos(T) * u + a,
      $ = Math.sin(T) * u + r;
    i.lineTo(z, $);
    const Y = Math.cos(O) * u + a,
      ht = Math.sin(O) * u + r;
    i.lineTo(Y, ht);
  }
  i.closePath();
}
function Bd(i, t, e, n, s) {
  const { fullCircles: o, startAngle: a, circumference: r } = t;
  let l = t.endAngle;
  if (o) {
    cn(i, t, e, n, l, s);
    for (let c = 0; c < o; ++c) i.fill();
    isNaN(r) || (l = a + (r % q || q));
  }
  return (cn(i, t, e, n, l, s), i.fill(), l);
}
function Hd(i, t, e, n, s) {
  const { fullCircles: o, startAngle: a, circumference: r, options: l } = t,
    { borderWidth: c, borderJoinStyle: h, borderDash: u, borderDashOffset: d, borderRadius: f } = l,
    m = l.borderAlign === 'inner';
  if (!c) return;
  (i.setLineDash(u || []),
    (i.lineDashOffset = d),
    m
      ? ((i.lineWidth = c * 2), (i.lineJoin = h || 'round'))
      : ((i.lineWidth = c), (i.lineJoin = h || 'bevel')));
  let b = t.endAngle;
  if (o) {
    cn(i, t, e, n, b, s);
    for (let x = 0; x < o; ++x) i.stroke();
    isNaN(r) || (b = a + (r % q || q));
  }
  (m && Fd(i, t, b),
    l.selfJoin && b - a >= U && f === 0 && h !== 'miter' && Rd(i, t, b),
    o || (cn(i, t, e, n, b, s), i.stroke()));
}
class Ke extends At {
  constructor(e) {
    super();
    D(this, 'circumference');
    D(this, 'endAngle');
    D(this, 'fullCircles');
    D(this, 'innerRadius');
    D(this, 'outerRadius');
    D(this, 'pixelMargin');
    D(this, 'startAngle');
    ((this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      e && Object.assign(this, e));
  }
  inRange(e, n, s) {
    const o = this.getProps(['x', 'y'], s),
      { angle: a, distance: r } = ar(o, { x: e, y: n }),
      {
        startAngle: l,
        endAngle: c,
        innerRadius: h,
        outerRadius: u,
        circumference: d,
      } = this.getProps(
        ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
        s
      ),
      f = (this.options.spacing + this.options.borderWidth) / 2,
      m = N(d, c - l),
      b = hi(a, l, c) && l !== c,
      x = m >= q || b,
      _ = jt(r, h + f, u + f);
    return x && _;
  }
  getCenterPoint(e) {
    const {
        x: n,
        y: s,
        startAngle: o,
        endAngle: a,
        innerRadius: r,
        outerRadius: l,
      } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], e),
      { offset: c, spacing: h } = this.options,
      u = (o + a) / 2,
      d = (r + l + h + c) / 2;
    return { x: n + Math.cos(u) * d, y: s + Math.sin(u) * d };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: n, circumference: s } = this,
      o = (n.offset || 0) / 4,
      a = (n.spacing || 0) / 2,
      r = n.circular;
    if (
      ((this.pixelMargin = n.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = s > q ? Math.floor(s / q) : 0),
      s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(U, s || 0)),
      h = o * c;
    ((e.fillStyle = n.backgroundColor),
      (e.strokeStyle = n.borderColor),
      Bd(e, this, h, a, r),
      Hd(e, this, h, a, r),
      e.restore());
  }
}
(D(Ke, 'id', 'arc'),
  D(Ke, 'defaults', {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
    selfJoin: !1,
  }),
  D(Ke, 'defaultRoutes', { backgroundColor: 'backgroundColor' }),
  D(Ke, 'descriptors', { _scriptable: !0, _indexable: (e) => e !== 'borderDash' }));
function Hr(i, t, e = t) {
  ((i.lineCap = N(e.borderCapStyle, t.borderCapStyle)),
    i.setLineDash(N(e.borderDash, t.borderDash)),
    (i.lineDashOffset = N(e.borderDashOffset, t.borderDashOffset)),
    (i.lineJoin = N(e.borderJoinStyle, t.borderJoinStyle)),
    (i.lineWidth = N(e.borderWidth, t.borderWidth)),
    (i.strokeStyle = N(e.borderColor, t.borderColor)));
}
function Vd(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Wd(i) {
  return i.stepped ? hh : i.tension || i.cubicInterpolationMode === 'monotone' ? uh : Vd;
}
function Vr(i, t, e = {}) {
  const n = i.length,
    { start: s = 0, end: o = n - 1 } = e,
    { start: a, end: r } = t,
    l = Math.max(s, a),
    c = Math.min(o, r),
    h = (s < a && o < a) || (s > r && o > r);
  return { count: n, start: l, loop: t.loop, ilen: c < l && !h ? n + c - l : c - l };
}
function $d(i, t, e, n) {
  const { points: s, options: o } = t,
    { count: a, start: r, loop: l, ilen: c } = Vr(s, e, n),
    h = Wd(o);
  let { move: u = !0, reverse: d } = n || {},
    f,
    m,
    b;
  for (f = 0; f <= c; ++f)
    ((m = s[(r + (d ? c - f : f)) % a]),
      !m.skip && (u ? (i.moveTo(m.x, m.y), (u = !1)) : h(i, b, m, d, o.stepped), (b = m)));
  return (l && ((m = s[(r + (d ? c : 0)) % a]), h(i, b, m, d, o.stepped)), !!l);
}
function jd(i, t, e, n) {
  const s = t.points,
    { count: o, start: a, ilen: r } = Vr(s, e, n),
    { move: l = !0, reverse: c } = n || {};
  let h = 0,
    u = 0,
    d,
    f,
    m,
    b,
    x,
    _;
  const w = (v) => (a + (c ? r - v : v)) % o,
    P = () => {
      b !== x && (i.lineTo(h, x), i.lineTo(h, b), i.lineTo(h, _));
    };
  for (l && ((f = s[w(0)]), i.moveTo(f.x, f.y)), d = 0; d <= r; ++d) {
    if (((f = s[w(d)]), f.skip)) continue;
    const v = f.x,
      S = f.y,
      M = v | 0;
    (M === m
      ? (S < b ? (b = S) : S > x && (x = S), (h = (u * h + v) / ++u))
      : (P(), i.lineTo(v, S), (m = M), (u = 0), (b = x = S)),
      (_ = S));
  }
  P();
}
function ls(i) {
  const t = i.options,
    e = t.borderDash && t.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !e
    ? jd
    : $d;
}
function Ud(i) {
  return i.stepped ? $h : i.tension || i.cubicInterpolationMode === 'monotone' ? jh : pe;
}
function Yd(i, t, e, n) {
  let s = t._path;
  (s || ((s = t._path = new Path2D()), t.path(s, e, n) && s.closePath()),
    Hr(i, t.options),
    i.stroke(s));
}
function Xd(i, t, e, n) {
  const { segments: s, options: o } = t,
    a = ls(t);
  for (const r of s)
    (Hr(i, o, r.style),
      i.beginPath(),
      a(i, t, r, { start: e, end: e + n - 1 }) && i.closePath(),
      i.stroke());
}
const qd = typeof Path2D == 'function';
function Kd(i, t, e, n) {
  qd && !t.options.segment ? Yd(i, t, e, n) : Xd(i, t, e, n);
}
class Jt extends At {
  constructor(t) {
    (super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t));
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if (
      (n.tension || n.cubicInterpolationMode === 'monotone') &&
      !n.stepped &&
      !this._pointsUpdated
    ) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      (Rh(this._points, n, t, s, e), (this._pointsUpdated = !0));
    }
  }
  set points(t) {
    ((this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1));
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Gh(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments,
      e = this.points,
      n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options,
      s = t[e],
      o = this.points,
      a = Pr(this, { property: e, start: s, end: s });
    if (!a.length) return;
    const r = [],
      l = Ud(n);
    let c, h;
    for (c = 0, h = a.length; c < h; ++c) {
      const { start: u, end: d } = a[c],
        f = o[u],
        m = o[d];
      if (f === m) {
        r.push(f);
        continue;
      }
      const b = Math.abs((s - f[e]) / (m[e] - f[e])),
        x = l(f, m, b, n.stepped);
      ((x[e] = t[e]), r.push(x));
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, n) {
    return ls(this)(t, this, e, n);
  }
  path(t, e, n) {
    const s = this.segments,
      o = ls(this);
    let a = this._loop;
    ((e = e || 0), (n = n || this.points.length - e));
    for (const r of s) a &= o(t, this, r, { start: e, end: e + n - 1 });
    return !!a;
  }
  draw(t, e, n, s) {
    const o = this.options || {};
    ((this.points || []).length && o.borderWidth && (t.save(), Kd(t, this, n, s), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
  }
}
(D(Jt, 'id', 'line'),
  D(Jt, 'defaults', {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  }),
  D(Jt, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
  D(Jt, 'descriptors', { _scriptable: !0, _indexable: (t) => t !== 'borderDash' && t !== 'fill' }));
function ha(i, t, e, n) {
  const s = i.options,
    { [e]: o } = i.getProps([e], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Qi extends At {
  constructor(e) {
    super();
    D(this, 'parsed');
    D(this, 'skip');
    D(this, 'stop');
    ((this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e));
  }
  inRange(e, n, s) {
    const o = this.options,
      { x: a, y: r } = this.getProps(['x', 'y'], s);
    return Math.pow(e - a, 2) + Math.pow(n - r, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(e, n) {
    return ha(this, e, 'x', n);
  }
  inYRange(e, n) {
    return ha(this, e, 'y', n);
  }
  getCenterPoint(e) {
    const { x: n, y: s } = this.getProps(['x', 'y'], e);
    return { x: n, y: s };
  }
  size(e) {
    e = e || this.options || {};
    let n = e.radius || 0;
    n = Math.max(n, (n && e.hoverRadius) || 0);
    const s = (n && e.borderWidth) || 0;
    return (n + s) * 2;
  }
  draw(e, n) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Ft(this, n, this.size(s) / 2) ||
      ((e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      (e.fillStyle = s.backgroundColor),
      ss(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
(D(Qi, 'id', 'point'),
  D(Qi, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  }),
  D(Qi, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }));
function Wr(i, t) {
  const {
    x: e,
    y: n,
    base: s,
    width: o,
    height: a,
  } = i.getProps(['x', 'y', 'base', 'width', 'height'], t);
  let r, l, c, h, u;
  return (
    i.horizontal
      ? ((u = a / 2), (r = Math.min(e, s)), (l = Math.max(e, s)), (c = n - u), (h = n + u))
      : ((u = o / 2), (r = e - u), (l = e + u), (c = Math.min(n, s)), (h = Math.max(n, s))),
    { left: r, top: c, right: l, bottom: h }
  );
}
function Qt(i, t, e, n) {
  return i ? 0 : st(t, e, n);
}
function Gd(i, t, e) {
  const n = i.options.borderWidth,
    s = i.borderSkipped,
    o = pr(n);
  return {
    t: Qt(s.top, o.top, 0, e),
    r: Qt(s.right, o.right, 0, t),
    b: Qt(s.bottom, o.bottom, 0, e),
    l: Qt(s.left, o.left, 0, t),
  };
}
function Zd(i, t, e) {
  const { enableBorderRadius: n } = i.getProps(['enableBorderRadius']),
    s = i.options.borderRadius,
    o = ye(s),
    a = Math.min(t, e),
    r = i.borderSkipped,
    l = n || W(s);
  return {
    topLeft: Qt(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: Qt(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: Qt(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: Qt(!l || r.bottom || r.right, o.bottomRight, 0, a),
  };
}
function Jd(i) {
  const t = Wr(i),
    e = t.right - t.left,
    n = t.bottom - t.top,
    s = Gd(i, e / 2, n / 2),
    o = Zd(i, e / 2, n / 2);
  return {
    outer: { x: t.left, y: t.top, w: e, h: n, radius: o },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r)),
      },
    },
  };
}
function jn(i, t, e, n) {
  const s = t === null,
    o = e === null,
    r = i && !(s && o) && Wr(i, n);
  return r && (s || jt(t, r.left, r.right)) && (o || jt(e, r.top, r.bottom));
}
function Qd(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function tf(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function Un(i, t, e = {}) {
  const n = i.x !== e.x ? -t : 0,
    s = i.y !== e.y ? -t : 0,
    o = (i.x + i.w !== e.x + e.w ? t : 0) - n,
    a = (i.y + i.h !== e.y + e.h ? t : 0) - s;
  return { x: i.x + n, y: i.y + s, w: i.w + o, h: i.h + a, radius: i.radius };
}
class tn extends At {
  constructor(t) {
    (super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t));
  }
  draw(t) {
    const {
        inflateAmount: e,
        options: { borderColor: n, backgroundColor: s },
      } = this,
      { inner: o, outer: a } = Jd(this),
      r = Qd(a.radius) ? ui : tf;
    (t.save(),
      (a.w !== o.w || a.h !== o.h) &&
        (t.beginPath(),
        r(t, Un(a, e, o)),
        t.clip(),
        r(t, Un(o, -e, a)),
        (t.fillStyle = n),
        t.fill('evenodd')),
      t.beginPath(),
      r(t, Un(o, e)),
      (t.fillStyle = s),
      t.fill(),
      t.restore());
  }
  inRange(t, e, n) {
    return jn(this, t, e, n);
  }
  inXRange(t, e) {
    return jn(this, t, null, e);
  }
  inYRange(t, e) {
    return jn(this, null, t, e);
  }
  getCenterPoint(t) {
    const {
      x: e,
      y: n,
      base: s,
      horizontal: o,
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t);
    return { x: o ? (e + s) / 2 : e, y: o ? n : (n + s) / 2 };
  }
  getRange(t) {
    return t === 'x' ? this.width / 2 : this.height / 2;
  }
}
(D(tn, 'id', 'bar'),
  D(tn, 'defaults', {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: void 0,
  }),
  D(tn, 'defaultRoutes', { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }));
var ef = Object.freeze({
  __proto__: null,
  ArcElement: Ke,
  BarElement: tn,
  LineElement: Jt,
  PointElement: Qi,
});
const cs = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
  ],
  ua = cs.map((i) => i.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function $r(i) {
  return cs[i % cs.length];
}
function jr(i) {
  return ua[i % ua.length];
}
function nf(i, t) {
  return ((i.borderColor = $r(t)), (i.backgroundColor = jr(t)), ++t);
}
function sf(i, t) {
  return ((i.backgroundColor = i.data.map(() => $r(t++))), t);
}
function of(i, t) {
  return ((i.backgroundColor = i.data.map(() => jr(t++))), t);
}
function af(i) {
  let t = 0;
  return (e, n) => {
    const s = i.getDatasetMeta(n).controller;
    s instanceof me ? (t = sf(e, t)) : s instanceof ii ? (t = of(e, t)) : s && (t = nf(e, t));
  };
}
function da(i) {
  let t;
  for (t in i) if (i[t].borderColor || i[t].backgroundColor) return !0;
  return !1;
}
function rf(i) {
  return i && (i.borderColor || i.backgroundColor);
}
function lf() {
  return G.borderColor !== 'rgba(0,0,0,0.1)' || G.backgroundColor !== 'rgba(0,0,0,0.1)';
}
var cf = {
  id: 'colors',
  defaults: { enabled: !0, forceOverride: !1 },
  beforeLayout(i, t, e) {
    if (!e.enabled) return;
    const {
        data: { datasets: n },
        options: s,
      } = i.config,
      { elements: o } = s,
      a = da(n) || rf(s) || (o && da(o)) || lf();
    if (!e.forceOverride && a) return;
    const r = af(i);
    n.forEach(r);
  },
};
function hf(i, t, e, n, s) {
  const o = s.samples || n;
  if (o >= e) return i.slice(t, t + e);
  const a = [],
    r = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t,
    u,
    d,
    f,
    m,
    b;
  for (a[l++] = i[h], u = 0; u < o - 2; u++) {
    let x = 0,
      _ = 0,
      w;
    const P = Math.floor((u + 1) * r) + 1 + t,
      v = Math.min(Math.floor((u + 2) * r) + 1, e) + t,
      S = v - P;
    for (w = P; w < v; w++) ((x += i[w].x), (_ += i[w].y));
    ((x /= S), (_ /= S));
    const M = Math.floor(u * r) + 1 + t,
      A = Math.min(Math.floor((u + 1) * r) + 1, e) + t,
      { x: k, y: T } = i[h];
    for (f = m = -1, w = M; w < A; w++)
      ((m = 0.5 * Math.abs((k - x) * (i[w].y - T) - (k - i[w].x) * (_ - T))),
        m > f && ((f = m), (d = i[w]), (b = w)));
    ((a[l++] = d), (h = b));
  }
  return ((a[l++] = i[c]), a);
}
function uf(i, t, e, n) {
  let s = 0,
    o = 0,
    a,
    r,
    l,
    c,
    h,
    u,
    d,
    f,
    m,
    b;
  const x = [],
    _ = t + e - 1,
    w = i[t].x,
    v = i[_].x - w;
  for (a = t; a < t + e; ++a) {
    ((r = i[a]), (l = ((r.x - w) / v) * n), (c = r.y));
    const S = l | 0;
    if (S === h)
      (c < m ? ((m = c), (u = a)) : c > b && ((b = c), (d = a)), (s = (o * s + r.x) / ++o));
    else {
      const M = a - 1;
      if (!V(u) && !V(d)) {
        const A = Math.min(u, d),
          k = Math.max(u, d);
        (A !== f && A !== M && x.push({ ...i[A], x: s }),
          k !== f && k !== M && x.push({ ...i[k], x: s }));
      }
      (a > 0 && M !== f && x.push(i[M]), x.push(r), (h = S), (o = 0), (m = b = c), (u = d = f = a));
    }
  }
  return x;
}
function Ur(i) {
  if (i._decimated) {
    const t = i._data;
    (delete i._decimated,
      delete i._data,
      Object.defineProperty(i, 'data', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: t,
      }));
  }
}
function fa(i) {
  i.data.datasets.forEach((t) => {
    Ur(t);
  });
}
function df(i, t) {
  const e = t.length;
  let n = 0,
    s;
  const { iScale: o } = i,
    { min: a, max: r, minDefined: l, maxDefined: c } = o.getUserBounds();
  return (
    l && (n = st(Ut(t, o.axis, a).lo, 0, e - 1)),
    c ? (s = st(Ut(t, o.axis, r).hi + 1, n, e) - n) : (s = e - n),
    { start: n, count: s }
  );
}
var ff = {
  id: 'decimation',
  defaults: { algorithm: 'min-max', enabled: !1 },
  beforeElementsUpdate: (i, t, e) => {
    if (!e.enabled) {
      fa(i);
      return;
    }
    const n = i.width;
    i.data.datasets.forEach((s, o) => {
      const { _data: a, indexAxis: r } = s,
        l = i.getDatasetMeta(o),
        c = a || s.data;
      if (Xe([r, i.options.indexAxis]) === 'y' || !l.controller.supportsDecimation) return;
      const h = i.scales[l.xAxisID];
      if ((h.type !== 'linear' && h.type !== 'time') || i.options.parsing) return;
      let { start: u, count: d } = df(l, c);
      const f = e.threshold || 4 * n;
      if (d <= f) {
        Ur(s);
        return;
      }
      V(a) &&
        ((s._data = c),
        delete s.data,
        Object.defineProperty(s, 'data', {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return this._decimated;
          },
          set: function (b) {
            this._data = b;
          },
        }));
      let m;
      switch (e.algorithm) {
        case 'lttb':
          m = hf(c, u, d, n, e);
          break;
        case 'min-max':
          m = uf(c, u, d, n);
          break;
        default:
          throw new Error("Unsupported decimation algorithm '".concat(e.algorithm, "'"));
      }
      s._decimated = m;
    });
  },
  destroy(i) {
    fa(i);
  },
};
function gf(i, t, e) {
  const n = i.segments,
    s = i.points,
    o = t.points,
    a = [];
  for (const r of n) {
    let { start: l, end: c } = r;
    c = yn(l, c, s);
    const h = hs(e, s[l], s[c], r.loop);
    if (!t.segments) {
      a.push({ source: r, target: h, start: s[l], end: s[c] });
      continue;
    }
    const u = Pr(t, h);
    for (const d of u) {
      const f = hs(e, o[d.start], o[d.end], d.loop),
        m = kr(r, s, f);
      for (const b of m)
        a.push({
          source: b,
          target: d,
          start: { [e]: ga(h, f, 'start', Math.max) },
          end: { [e]: ga(h, f, 'end', Math.min) },
        });
    }
  }
  return a;
}
function hs(i, t, e, n) {
  if (n) return;
  let s = t[i],
    o = e[i];
  return (i === 'angle' && ((s = rt(s)), (o = rt(o))), { property: i, start: s, end: o });
}
function pf(i, t) {
  const { x: e = null, y: n = null } = i || {},
    s = t.points,
    o = [];
  return (
    t.segments.forEach(({ start: a, end: r }) => {
      r = yn(a, r, s);
      const l = s[a],
        c = s[r];
      n !== null
        ? (o.push({ x: l.x, y: n }), o.push({ x: c.x, y: n }))
        : e !== null && (o.push({ x: e, y: l.y }), o.push({ x: e, y: c.y }));
    }),
    o
  );
}
function yn(i, t, e) {
  for (; t > i; t--) {
    const n = e[t];
    if (!isNaN(n.x) && !isNaN(n.y)) break;
  }
  return t;
}
function ga(i, t, e, n) {
  return i && t ? n(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Yr(i, t) {
  let e = [],
    n = !1;
  return (
    K(i) ? ((n = !0), (e = i)) : (e = pf(i, t)),
    e.length ? new Jt({ points: e, options: { tension: 0 }, _loop: n, _fullLoop: n }) : null
  );
}
function pa(i) {
  return i && i.fill !== !1;
}
function mf(i, t, e) {
  let s = i[t].fill;
  const o = [t];
  let a;
  if (!e) return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!J(s)) return s;
    if (((a = i[s]), !a)) return !1;
    if (a.visible) return s;
    (o.push(s), (s = a.fill));
  }
  return !1;
}
function bf(i, t, e) {
  const n = vf(i);
  if (W(n)) return isNaN(n.value) ? !1 : n;
  let s = parseFloat(n);
  return J(s) && Math.floor(s) === s
    ? yf(n[0], t, s, e)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(n) >= 0 && n;
}
function yf(i, t, e, n) {
  return ((i === '-' || i === '+') && (e = t + e), e === t || e < 0 || e >= n ? !1 : e);
}
function xf(i, t) {
  let e = null;
  return (
    i === 'start'
      ? (e = t.bottom)
      : i === 'end'
        ? (e = t.top)
        : W(i)
          ? (e = t.getPixelForValue(i.value))
          : t.getBasePixel && (e = t.getBasePixel()),
    e
  );
}
function _f(i, t, e) {
  let n;
  return (
    i === 'start'
      ? (n = e)
      : i === 'end'
        ? (n = t.options.reverse ? t.min : t.max)
        : W(i)
          ? (n = i.value)
          : (n = t.getBaseValue()),
    n
  );
}
function vf(i) {
  const t = i.options,
    e = t.fill;
  let n = N(e && e.target, e);
  return (
    n === void 0 && (n = !!t.backgroundColor),
    n === !1 || n === null ? !1 : n === !0 ? 'origin' : n
  );
}
function Sf(i) {
  const { scale: t, index: e, line: n } = i,
    s = [],
    o = n.segments,
    a = n.points,
    r = wf(t, e);
  r.push(Yr({ x: null, y: t.bottom }, n));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++) Mf(s, a[h], r);
  }
  return new Jt({ points: s, options: {} });
}
function wf(i, t) {
  const e = [],
    n = i.getMatchingVisibleMetas('line');
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (o.index === t) break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function Mf(i, t, e) {
  const n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      { first: a, last: r, point: l } = kf(o, t, 'x');
    if (!(!l || (a && r))) {
      if (a) n.unshift(l);
      else if ((i.push(l), !r)) break;
    }
  }
  i.push(...n);
}
function kf(i, t, e) {
  const n = i.interpolate(t, e);
  if (!n) return {};
  const s = n[e],
    o = i.segments,
    a = i.points;
  let r = !1,
    l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c],
      u = a[h.start][e],
      d = a[h.end][e];
    if (jt(s, u, d)) {
      ((r = s === u), (l = s === d));
      break;
    }
  }
  return { first: r, last: l, point: n };
}
class Xr {
  constructor(t) {
    ((this.x = t.x), (this.y = t.y), (this.radius = t.radius));
  }
  pathSegment(t, e, n) {
    const { x: s, y: o, radius: a } = this;
    return ((e = e || { start: 0, end: q }), t.arc(s, o, a, e.end, e.start, !0), !n.bounds);
  }
  interpolate(t) {
    const { x: e, y: n, radius: s } = this,
      o = t.angle;
    return { x: e + Math.cos(o) * s, y: n + Math.sin(o) * s, angle: o };
  }
}
function Pf(i) {
  const { chart: t, fill: e, line: n } = i;
  if (J(e)) return Cf(t, e);
  if (e === 'stack') return Sf(i);
  if (e === 'shape') return !0;
  const s = Af(i);
  return s instanceof Xr ? s : Yr(s, n);
}
function Cf(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function Af(i) {
  return (i.scale || {}).getPointPositionForValue ? Ef(i) : Tf(i);
}
function Tf(i) {
  const { scale: t = {}, fill: e } = i,
    n = xf(e, t);
  if (J(n)) {
    const s = t.isHorizontal();
    return { x: s ? n : null, y: s ? null : n };
  }
  return null;
}
function Ef(i) {
  const { scale: t, fill: e } = i,
    n = t.options,
    s = t.getLabels().length,
    o = n.reverse ? t.max : t.min,
    a = _f(e, t, o),
    r = [];
  if (n.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Xr({ x: l.x, y: l.y, radius: t.getDistanceFromCenterForValue(a) });
  }
  for (let l = 0; l < s; ++l) r.push(t.getPointPositionForValue(l, a));
  return r;
}
function Yn(i, t, e) {
  const n = Pf(t),
    { chart: s, index: o, line: a, scale: r, axis: l } = t,
    c = a.options,
    h = c.fill,
    u = c.backgroundColor,
    { above: d = u, below: f = u } = h || {},
    m = s.getDatasetMeta(o),
    b = Cr(s, m);
  n &&
    a.points.length &&
    (fn(i, e),
    Df(i, { line: a, target: n, above: d, below: f, area: e, scale: r, axis: l, clip: b }),
    gn(i));
}
function Df(i, t) {
  const { line: e, target: n, above: s, below: o, area: a, scale: r, clip: l } = t,
    c = e._loop ? 'angle' : t.axis;
  i.save();
  let h = o;
  (o !== s &&
    (c === 'x'
      ? (ma(i, n, a.top),
        Xn(i, { line: e, target: n, color: s, scale: r, property: c, clip: l }),
        i.restore(),
        i.save(),
        ma(i, n, a.bottom))
      : c === 'y' &&
        (ba(i, n, a.left),
        Xn(i, { line: e, target: n, color: o, scale: r, property: c, clip: l }),
        i.restore(),
        i.save(),
        ba(i, n, a.right),
        (h = s))),
    Xn(i, { line: e, target: n, color: h, scale: r, property: c, clip: l }),
    i.restore());
}
function ma(i, t, e) {
  const { segments: n, points: s } = t;
  let o = !0,
    a = !1;
  i.beginPath();
  for (const r of n) {
    const { start: l, end: c } = r,
      h = s[l],
      u = s[yn(l, c, s)];
    (o ? (i.moveTo(h.x, h.y), (o = !1)) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)),
      (a = !!t.pathSegment(i, r, { move: a })),
      a ? i.closePath() : i.lineTo(u.x, e));
  }
  (i.lineTo(t.first().x, e), i.closePath(), i.clip());
}
function ba(i, t, e) {
  const { segments: n, points: s } = t;
  let o = !0,
    a = !1;
  i.beginPath();
  for (const r of n) {
    const { start: l, end: c } = r,
      h = s[l],
      u = s[yn(l, c, s)];
    (o ? (i.moveTo(h.x, h.y), (o = !1)) : (i.lineTo(e, h.y), i.lineTo(h.x, h.y)),
      (a = !!t.pathSegment(i, r, { move: a })),
      a ? i.closePath() : i.lineTo(e, u.y));
  }
  (i.lineTo(e, t.first().y), i.closePath(), i.clip());
}
function Xn(i, t) {
  const { line: e, target: n, property: s, color: o, scale: a, clip: r } = t,
    l = gf(e, n, s);
  for (const { source: c, target: h, start: u, end: d } of l) {
    const { style: { backgroundColor: f = o } = {} } = c,
      m = n !== !0;
    (i.save(), (i.fillStyle = f), Of(i, a, r, m && hs(s, u, d)), i.beginPath());
    const b = !!e.pathSegment(i, c);
    let x;
    if (m) {
      b ? i.closePath() : ya(i, n, d, s);
      const _ = !!n.pathSegment(i, h, { move: b, reverse: !0 });
      ((x = b && _), x || ya(i, n, u, s));
    }
    (i.closePath(), i.fill(x ? 'evenodd' : 'nonzero'), i.restore());
  }
}
function Of(i, t, e, n) {
  const s = t.chart.chartArea,
    { property: o, start: a, end: r } = n || {};
  if (o === 'x' || o === 'y') {
    let l, c, h, u;
    (o === 'x'
      ? ((l = a), (c = s.top), (h = r), (u = s.bottom))
      : ((l = s.left), (c = a), (h = s.right), (u = r)),
      i.beginPath(),
      e &&
        ((l = Math.max(l, e.left)),
        (h = Math.min(h, e.right)),
        (c = Math.max(c, e.top)),
        (u = Math.min(u, e.bottom))),
      i.rect(l, c, h - l, u - c),
      i.clip());
  }
}
function ya(i, t, e, n) {
  const s = t.interpolate(e, n);
  s && i.lineTo(s.x, s.y);
}
var If = {
  id: 'filler',
  afterDatasetsUpdate(i, t, e) {
    const n = (i.data.datasets || []).length,
      s = [];
    let o, a, r, l;
    for (a = 0; a < n; ++a)
      ((o = i.getDatasetMeta(a)),
        (r = o.dataset),
        (l = null),
        r &&
          r.options &&
          r instanceof Jt &&
          (l = {
            visible: i.isDatasetVisible(a),
            index: a,
            fill: bf(r, a, n),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: r,
          }),
        (o.$filler = l),
        s.push(l));
    for (a = 0; a < n; ++a)
      ((l = s[a]), !(!l || l.fill === !1) && (l.fill = mf(s, a, e.propagate)));
  },
  beforeDraw(i, t, e) {
    const n = e.drawTime === 'beforeDraw',
      s = i.getSortedVisibleDatasetMetas(),
      o = i.chartArea;
    for (let a = s.length - 1; a >= 0; --a) {
      const r = s[a].$filler;
      r && (r.line.updateControlPoints(o, r.axis), n && r.fill && Yn(i.ctx, r, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== 'beforeDatasetsDraw') return;
    const n = i.getSortedVisibleDatasetMetas();
    for (let s = n.length - 1; s >= 0; --s) {
      const o = n[s].$filler;
      pa(o) && Yn(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const n = t.meta.$filler;
    !pa(n) || e.drawTime !== 'beforeDatasetDraw' || Yn(i.ctx, n, i.chartArea);
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const xa = (i, t) => {
    let { boxHeight: e = t, boxWidth: n = t } = i;
    return (
      i.usePointStyle && ((e = Math.min(e, t)), (n = i.pointStyleWidth || Math.min(n, t))),
      { boxWidth: n, boxHeight: e, itemHeight: Math.max(t, e) }
    );
  },
  Lf = (i, t) =>
    i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class _a extends At {
  constructor(t) {
    (super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(t, e, n) {
    ((this.maxWidth = t),
      (this.maxHeight = e),
      (this._margins = n),
      this.setDimensions(),
      this.buildLabels(),
      this.fit());
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = F(t.generateLabels, [this.chart], this) || [];
    (t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))),
      t.sort && (e = e.sort((n, s) => t.sort(n, s, this.chart.data))),
      this.options.reverse && e.reverse(),
      (this.legendItems = e));
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels,
      s = it(n.font),
      o = s.size,
      a = this._computeTitleHeight(),
      { boxWidth: r, itemHeight: l } = xa(n, o);
    let c, h;
    ((e.font = s.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (h = this._fitRows(a, o, r, l) + 10))
        : ((h = this.maxHeight), (c = this._fitCols(a, s, r, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(h, t.maxHeight || this.maxHeight)));
  }
  _fitRows(t, e, n, s) {
    const {
        ctx: o,
        maxWidth: a,
        options: {
          labels: { padding: r },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      h = s + r;
    let u = t;
    ((o.textAlign = 'left'), (o.textBaseline = 'middle'));
    let d = -1,
      f = -h;
    return (
      this.legendItems.forEach((m, b) => {
        const x = n + e / 2 + o.measureText(m.text).width;
        ((b === 0 || c[c.length - 1] + x + 2 * r > a) &&
          ((u += h), (c[c.length - (b > 0 ? 0 : 1)] = 0), (f += h), d++),
          (l[b] = { left: 0, top: f, row: d, width: x, height: s }),
          (c[c.length - 1] += x + r));
      }),
      u
    );
  }
  _fitCols(t, e, n, s) {
    const {
        ctx: o,
        maxHeight: a,
        options: {
          labels: { padding: r },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      h = a - t;
    let u = r,
      d = 0,
      f = 0,
      m = 0,
      b = 0;
    return (
      this.legendItems.forEach((x, _) => {
        const { itemWidth: w, itemHeight: P } = Rf(n, e, o, x, s);
        (_ > 0 &&
          f + P + 2 * r > h &&
          ((u += d + r), c.push({ width: d, height: f }), (m += d + r), b++, (d = f = 0)),
          (l[_] = { left: m, top: f, col: b, width: w, height: P }),
          (d = Math.max(d, w)),
          (f += P + r));
      }),
      (u += d),
      c.push({ width: d, height: f }),
      u
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: e,
        options: {
          align: n,
          labels: { padding: s },
          rtl: o,
        },
      } = this,
      a = Te(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0,
        l = at(n, this.left + s, this.right - this.lineWidths[r]);
      for (const c of e)
        (r !== c.row && ((r = c.row), (l = at(n, this.left + s, this.right - this.lineWidths[r]))),
          (c.top += this.top + t + s),
          (c.left = a.leftForLtr(a.x(l), c.width)),
          (l += c.width + s));
    } else {
      let r = 0,
        l = at(n, this.top + t + s, this.bottom - this.columnSizes[r].height);
      for (const c of e)
        (c.col !== r &&
          ((r = c.col), (l = at(n, this.top + t + s, this.bottom - this.columnSizes[r].height))),
          (c.top = l),
          (c.left += this.left + s),
          (c.left = a.leftForLtr(a.x(c.left), c.width)),
          (l += c.height + s));
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      (fn(t, this), this._draw(), gn(t));
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: s } = this,
      { align: o, labels: a } = t,
      r = G.color,
      l = Te(t.rtl, this.left, this.width),
      c = it(a.font),
      { padding: h } = a,
      u = c.size,
      d = u / 2;
    let f;
    (this.drawTitle(),
      (s.textAlign = l.textAlign('left')),
      (s.textBaseline = 'middle'),
      (s.lineWidth = 0.5),
      (s.font = c.string));
    const { boxWidth: m, boxHeight: b, itemHeight: x } = xa(a, u),
      _ = function (M, A, k) {
        if (isNaN(m) || m <= 0 || isNaN(b) || b < 0) return;
        s.save();
        const T = N(k.lineWidth, 1);
        if (
          ((s.fillStyle = N(k.fillStyle, r)),
          (s.lineCap = N(k.lineCap, 'butt')),
          (s.lineDashOffset = N(k.lineDashOffset, 0)),
          (s.lineJoin = N(k.lineJoin, 'miter')),
          (s.lineWidth = T),
          (s.strokeStyle = N(k.strokeStyle, r)),
          s.setLineDash(N(k.lineDash, [])),
          a.usePointStyle)
        ) {
          const O = {
              radius: (b * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: T,
            },
            I = l.xPlus(M, m / 2),
            R = A + d;
          gr(s, O, I, R, a.pointStyleWidth && m);
        } else {
          const O = A + Math.max((u - b) / 2, 0),
            I = l.leftForLtr(M, m),
            R = ye(k.borderRadius);
          (s.beginPath(),
            Object.values(R).some((j) => j !== 0)
              ? ui(s, { x: I, y: O, w: m, h: b, radius: R })
              : s.rect(I, O, m, b),
            s.fill(),
            T !== 0 && s.stroke());
        }
        s.restore();
      },
      w = function (M, A, k) {
        ve(s, k.text, M, A + x / 2, c, {
          strikethrough: k.hidden,
          textAlign: l.textAlign(k.textAlign),
        });
      },
      P = this.isHorizontal(),
      v = this._computeTitleHeight();
    (P
      ? (f = { x: at(o, this.left + h, this.right - n[0]), y: this.top + h + v, line: 0 })
      : (f = { x: this.left + h, y: at(o, this.top + v + h, this.bottom - e[0].height), line: 0 }),
      Sr(this.ctx, t.textDirection));
    const S = x + h;
    (this.legendItems.forEach((M, A) => {
      ((s.strokeStyle = M.fontColor), (s.fillStyle = M.fontColor));
      const k = s.measureText(M.text).width,
        T = l.textAlign(M.textAlign || (M.textAlign = a.textAlign)),
        O = m + d + k;
      let I = f.x,
        R = f.y;
      (l.setWidth(this.width),
        P
          ? A > 0 &&
            I + O + h > this.right &&
            ((R = f.y += S), f.line++, (I = f.x = at(o, this.left + h, this.right - n[f.line])))
          : A > 0 &&
            R + S > this.bottom &&
            ((I = f.x = I + e[f.line].width + h),
            f.line++,
            (R = f.y = at(o, this.top + v + h, this.bottom - e[f.line].height))));
      const j = l.x(I);
      if ((_(j, R, M), (I = Qc(T, I + m + d, P ? I + O : this.right, t.rtl)), w(l.x(I), R, M), P))
        f.x += O + h;
      else if (typeof M.text != 'string') {
        const X = c.lineHeight;
        f.y += qr(M, X) + h;
      } else f.y += S;
    }),
      wr(this.ctx, t.textDirection));
  }
  drawTitle() {
    const t = this.options,
      e = t.title,
      n = it(e.font),
      s = ct(e.padding);
    if (!e.display) return;
    const o = Te(t.rtl, this.left, this.width),
      a = this.ctx,
      r = e.position,
      l = n.size / 2,
      c = s.top + l;
    let h,
      u = this.left,
      d = this.width;
    if (this.isHorizontal())
      ((d = Math.max(...this.lineWidths)),
        (h = this.top + c),
        (u = at(t.align, u, this.right - d)));
    else {
      const m = this.columnSizes.reduce((b, x) => Math.max(b, x.height), 0);
      h =
        c + at(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const f = at(r, u, u + d);
    ((a.textAlign = o.textAlign(Es(r))),
      (a.textBaseline = 'middle'),
      (a.strokeStyle = e.color),
      (a.fillStyle = e.color),
      (a.font = n.string),
      ve(a, e.text, f, h, n));
  }
  _computeTitleHeight() {
    const t = this.options.title,
      e = it(t.font),
      n = ct(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, s, o;
    if (jt(t, this.left, this.right) && jt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (((s = o[n]), jt(t, s.left, s.left + s.width) && jt(e, s.top, s.top + s.height)))
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!zf(t.type, e)) return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const s = this._hoveredItem,
        o = Lf(s, n);
      (s && !o && F(e.onLeave, [t, s, this], this),
        (this._hoveredItem = n),
        n && !o && F(e.onHover, [t, n, this], this));
    } else n && F(e.onClick, [t, n, this], this);
  }
}
function Rf(i, t, e, n, s) {
  const o = Ff(n, i, t, e),
    a = Nf(s, n, t.lineHeight);
  return { itemWidth: o, itemHeight: a };
}
function Ff(i, t, e, n) {
  let s = i.text;
  return (
    s && typeof s != 'string' && (s = s.reduce((o, a) => (o.length > a.length ? o : a))),
    t + e.size / 2 + n.measureText(s).width
  );
}
function Nf(i, t, e) {
  let n = i;
  return (typeof t.text != 'string' && (n = qr(t, e)), n);
}
function qr(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function zf(i, t) {
  return !!(
    ((i === 'mousemove' || i === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (i === 'click' || i === 'mouseup'))
  );
}
var Bf = {
  id: 'legend',
  _element: _a,
  start(i, t, e) {
    const n = (i.legend = new _a({ ctx: i.ctx, options: e, chart: i }));
    (lt.configure(i, n, e), lt.addBox(i, n));
  },
  stop(i) {
    (lt.removeBox(i, i.legend), delete i.legend);
  },
  beforeUpdate(i, t, e) {
    const n = i.legend;
    (lt.configure(i, n, e), (n.options = e));
  },
  afterUpdate(i) {
    const t = i.legend;
    (t.buildLabels(), t.adjustHitBoxes());
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const n = t.datasetIndex,
        s = e.chart;
      s.isDatasetVisible(n) ? (s.hide(n), (t.hidden = !0)) : (s.show(n), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets,
          {
            labels: {
              usePointStyle: e,
              pointStyle: n,
              textAlign: s,
              color: o,
              useBorderRadius: a,
              borderRadius: r,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0),
            h = ct(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: a && (r || c.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: { color: (i) => i.chart.options.color, display: !1, position: 'center', text: '' },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith('on'),
    labels: { _scriptable: (i) => !['generateLabels', 'filter', 'sort'].includes(i) },
  },
};
class Bs extends At {
  constructor(t) {
    (super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(t, e) {
    const n = this.options;
    if (((this.left = 0), (this.top = 0), !n.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    ((this.width = this.right = t), (this.height = this.bottom = e));
    const s = K(n.text) ? n.text.length : 1;
    this._padding = ct(n.padding);
    const o = s * it(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === 'top' || t === 'bottom';
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: s, right: o, options: a } = this,
      r = a.align;
    let l = 0,
      c,
      h,
      u;
    return (
      this.isHorizontal()
        ? ((h = at(r, n, o)), (u = e + t), (c = o - n))
        : (a.position === 'left'
            ? ((h = n + t), (u = at(r, s, e)), (l = U * -0.5))
            : ((h = o - t), (u = at(r, e, s)), (l = U * 0.5)),
          (c = s - e)),
      { titleX: h, titleY: u, maxWidth: c, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      e = this.options;
    if (!e.display) return;
    const n = it(e.font),
      o = n.lineHeight / 2 + this._padding.top,
      { titleX: a, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(o);
    ve(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Es(e.align),
      textBaseline: 'middle',
      translation: [a, r],
    });
  }
}
function Hf(i, t) {
  const e = new Bs({ ctx: i.ctx, options: t, chart: i });
  (lt.configure(i, e, t), lt.addBox(i, e), (i.titleBlock = e));
}
var Vf = {
  id: 'title',
  _element: Bs,
  start(i, t, e) {
    Hf(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    (lt.removeBox(i, t), delete i.titleBlock);
  },
  beforeUpdate(i, t, e) {
    const n = i.titleBlock;
    (lt.configure(i, n, e), (n.options = e));
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Wi = new WeakMap();
var Wf = {
  id: 'subtitle',
  start(i, t, e) {
    const n = new Bs({ ctx: i.ctx, options: e, chart: i });
    (lt.configure(i, n, e), lt.addBox(i, n), Wi.set(i, n));
  },
  stop(i) {
    (lt.removeBox(i, Wi.get(i)), Wi.delete(i));
  },
  beforeUpdate(i, t, e) {
    const n = Wi.get(i);
    (lt.configure(i, n, e), (n.options = e));
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'normal' },
    fullSize: !0,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ge = {
  average(i) {
    if (!i.length) return !1;
    let t,
      e,
      n = new Set(),
      s = 0,
      o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const r = i[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        (n.add(l.x), (s += l.y), ++o);
      }
    }
    return o === 0 || n.size === 0 ? !1 : { x: [...n].reduce((r, l) => r + l) / n.size, y: s / o };
  },
  nearest(i, t) {
    if (!i.length) return !1;
    let e = t.x,
      n = t.y,
      s = Number.POSITIVE_INFINITY,
      o,
      a,
      r;
    for (o = 0, a = i.length; o < a; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          h = is(t, c);
        h < s && ((s = h), (r = l));
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      ((e = l.x), (n = l.y));
    }
    return { x: e, y: n };
  },
};
function It(i, t) {
  return (t && (K(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i);
}
function Wt(i) {
  return (typeof i == 'string' || i instanceof String) && i.indexOf('\n') > -1 ? i.split('\n') : i;
}
function $f(i, t) {
  const { element: e, datasetIndex: n, index: s } = t,
    o = i.getDatasetMeta(n).controller,
    { label: a, value: r } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: a,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e,
  };
}
function va(i, t) {
  const e = i.chart.ctx,
    { body: n, footer: s, title: o } = i,
    { boxWidth: a, boxHeight: r } = t,
    l = it(t.bodyFont),
    c = it(t.titleFont),
    h = it(t.footerFont),
    u = o.length,
    d = s.length,
    f = n.length,
    m = ct(t.padding);
  let b = m.height,
    x = 0,
    _ = n.reduce((v, S) => v + S.before.length + S.lines.length + S.after.length, 0);
  if (
    ((_ += i.beforeBody.length + i.afterBody.length),
    u && (b += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom),
    _)
  ) {
    const v = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    b += f * v + (_ - f) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  d && (b += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let w = 0;
  const P = function (v) {
    x = Math.max(x, e.measureText(v).width + w);
  };
  return (
    e.save(),
    (e.font = c.string),
    H(i.title, P),
    (e.font = l.string),
    H(i.beforeBody.concat(i.afterBody), P),
    (w = t.displayColors ? a + 2 + t.boxPadding : 0),
    H(n, (v) => {
      (H(v.before, P), H(v.lines, P), H(v.after, P));
    }),
    (w = 0),
    (e.font = h.string),
    H(i.footer, P),
    e.restore(),
    (x += m.width),
    { width: x, height: b }
  );
}
function jf(i, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? 'top' : e > i.height - n / 2 ? 'bottom' : 'center';
}
function Uf(i, t, e, n) {
  const { x: s, width: o } = n,
    a = e.caretSize + e.caretPadding;
  if ((i === 'left' && s + o + a > t.width) || (i === 'right' && s - o - a < 0)) return !0;
}
function Yf(i, t, e, n) {
  const { x: s, width: o } = e,
    {
      width: a,
      chartArea: { left: r, right: l },
    } = i;
  let c = 'center';
  return (
    n === 'center'
      ? (c = s <= (r + l) / 2 ? 'left' : 'right')
      : s <= o / 2
        ? (c = 'left')
        : s >= a - o / 2 && (c = 'right'),
    Uf(c, i, t, e) && (c = 'center'),
    c
  );
}
function Sa(i, t, e) {
  const n = e.yAlign || t.yAlign || jf(i, e);
  return { xAlign: e.xAlign || t.xAlign || Yf(i, t, e, n), yAlign: n };
}
function Xf(i, t) {
  let { x: e, width: n } = i;
  return (t === 'right' ? (e -= n) : t === 'center' && (e -= n / 2), e);
}
function qf(i, t, e) {
  let { y: n, height: s } = i;
  return (t === 'top' ? (n += e) : t === 'bottom' ? (n -= s + e) : (n -= s / 2), n);
}
function wa(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = i,
    { xAlign: r, yAlign: l } = e,
    c = s + o,
    { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = ye(a);
  let m = Xf(t, r);
  const b = qf(t, l, c);
  return (
    l === 'center'
      ? r === 'left'
        ? (m += c)
        : r === 'right' && (m -= c)
      : r === 'left'
        ? (m -= Math.max(h, d) + s)
        : r === 'right' && (m += Math.max(u, f) + s),
    { x: st(m, 0, n.width - t.width), y: st(b, 0, n.height - t.height) }
  );
}
function $i(i, t, e) {
  const n = ct(e.padding);
  return t === 'center'
    ? i.x + i.width / 2
    : t === 'right'
      ? i.x + i.width - n.right
      : i.x + n.left;
}
function Ma(i) {
  return It([], Wt(i));
}
function Kf(i, t, e) {
  return se(i, { tooltip: t, tooltipItems: e, type: 'tooltip' });
}
function ka(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Kr = {
  beforeTitle: Ht,
  title(i) {
    if (i.length > 0) {
      const t = i[0],
        e = t.chart.data.labels,
        n = e ? e.length : 0;
      if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || '';
      if (t.label) return t.label;
      if (n > 0 && t.dataIndex < n) return e[t.dataIndex];
    }
    return '';
  },
  afterTitle: Ht,
  beforeBody: Ht,
  beforeLabel: Ht,
  label(i) {
    if (this && this.options && this.options.mode === 'dataset')
      return i.label + ': ' + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || '';
    t && (t += ': ');
    const e = i.formattedValue;
    return (V(e) || (t += e), t);
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return { pointStyle: e.pointStyle, rotation: e.rotation };
  },
  afterLabel: Ht,
  afterBody: Ht,
  beforeFooter: Ht,
  footer: Ht,
  afterFooter: Ht,
};
function gt(i, t, e, n) {
  const s = i[t].call(e, n);
  return typeof s > 'u' ? Kr[t].call(e, n) : s;
}
class us extends At {
  constructor(t) {
    (super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0));
  }
  initialize(t) {
    ((this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0));
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const e = this.chart,
      n = this.options.setContext(this.getContext()),
      s = n.enabled && e.options.animation && n.animations,
      o = new Ar(this.chart, s);
    return (s._cacheable && (this._cachedAnimations = Object.freeze(o)), o);
  }
  getContext() {
    return this.$context || (this.$context = Kf(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: n } = e,
      s = gt(n, 'beforeTitle', this, t),
      o = gt(n, 'title', this, t),
      a = gt(n, 'afterTitle', this, t);
    let r = [];
    return ((r = It(r, Wt(s))), (r = It(r, Wt(o))), (r = It(r, Wt(a))), r);
  }
  getBeforeBody(t, e) {
    return Ma(gt(e.callbacks, 'beforeBody', this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e,
      s = [];
    return (
      H(t, (o) => {
        const a = { before: [], lines: [], after: [] },
          r = ka(n, o);
        (It(a.before, Wt(gt(r, 'beforeLabel', this, o))),
          It(a.lines, gt(r, 'label', this, o)),
          It(a.after, Wt(gt(r, 'afterLabel', this, o))),
          s.push(a));
      }),
      s
    );
  }
  getAfterBody(t, e) {
    return Ma(gt(e.callbacks, 'afterBody', this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e,
      s = gt(n, 'beforeFooter', this, t),
      o = gt(n, 'footer', this, t),
      a = gt(n, 'afterFooter', this, t);
    let r = [];
    return ((r = It(r, Wt(s))), (r = It(r, Wt(o))), (r = It(r, Wt(a))), r);
  }
  _createItems(t) {
    const e = this._active,
      n = this.chart.data,
      s = [],
      o = [],
      a = [];
    let r = [],
      l,
      c;
    for (l = 0, c = e.length; l < c; ++l) r.push($f(this.chart, e[l]));
    return (
      t.filter && (r = r.filter((h, u, d) => t.filter(h, u, d, n))),
      t.itemSort && (r = r.sort((h, u) => t.itemSort(h, u, n))),
      H(r, (h) => {
        const u = ka(t.callbacks, h);
        (s.push(gt(u, 'labelColor', this, h)),
          o.push(gt(u, 'labelPointStyle', this, h)),
          a.push(gt(u, 'labelTextColor', this, h)));
      }),
      (this.labelColors = s),
      (this.labelPointStyles = o),
      (this.labelTextColors = a),
      (this.dataPoints = r),
      r
    );
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()),
      s = this._active;
    let o,
      a = [];
    if (!s.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const r = Ge[n.position].call(this, s, this._eventPosition);
      ((a = this._createItems(n)),
        (this.title = this.getTitle(a, n)),
        (this.beforeBody = this.getBeforeBody(a, n)),
        (this.body = this.getBody(a, n)),
        (this.afterBody = this.getAfterBody(a, n)),
        (this.footer = this.getFooter(a, n)));
      const l = (this._size = va(this, n)),
        c = Object.assign({}, r, l),
        h = Sa(this.chart, n, c),
        u = wa(n, c, h, this.chart);
      ((this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (o = {
          opacity: 1,
          x: u.x,
          y: u.y,
          width: l.width,
          height: l.height,
          caretX: r.x,
          caretY: r.y,
        }));
    }
    ((this._tooltipItems = a),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t && n.external && n.external.call(this, { chart: this.chart, tooltip: this, replay: e }));
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    (e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3));
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this,
      { caretSize: a, cornerRadius: r } = n,
      { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = ye(r),
      { x: d, y: f } = t,
      { width: m, height: b } = e;
    let x, _, w, P, v, S;
    return (
      o === 'center'
        ? ((v = f + b / 2),
          s === 'left'
            ? ((x = d), (_ = x - a), (P = v + a), (S = v - a))
            : ((x = d + m), (_ = x + a), (P = v - a), (S = v + a)),
          (w = x))
        : (s === 'left'
            ? (_ = d + Math.max(l, h) + a)
            : s === 'right'
              ? (_ = d + m - Math.max(c, u) - a)
              : (_ = this.caretX),
          o === 'top'
            ? ((P = f), (v = P - a), (x = _ - a), (w = _ + a))
            : ((P = f + b), (v = P + a), (x = _ + a), (w = _ - a)),
          (S = P)),
      { x1: x, x2: _, x3: w, y1: P, y2: v, y3: S }
    );
  }
  drawTitle(t, e, n) {
    const s = this.title,
      o = s.length;
    let a, r, l;
    if (o) {
      const c = Te(n.rtl, this.x, this.width);
      for (
        t.x = $i(this, n.titleAlign, n),
          e.textAlign = c.textAlign(n.titleAlign),
          e.textBaseline = 'middle',
          a = it(n.titleFont),
          r = n.titleSpacing,
          e.fillStyle = n.titleColor,
          e.font = a.string,
          l = 0;
        l < o;
        ++l
      )
        (e.fillText(s[l], c.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + r),
          l + 1 === o && (t.y += n.titleMarginBottom - r));
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const a = this.labelColors[n],
      r = this.labelPointStyles[n],
      { boxHeight: l, boxWidth: c } = o,
      h = it(o.bodyFont),
      u = $i(this, 'left', o),
      d = s.x(u),
      f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
      m = e.y + f;
    if (o.usePointStyle) {
      const b = {
          radius: Math.min(c, l) / 2,
          pointStyle: r.pointStyle,
          rotation: r.rotation,
          borderWidth: 1,
        },
        x = s.leftForLtr(d, c) + c / 2,
        _ = m + l / 2;
      ((t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        ss(t, b, x, _),
        (t.strokeStyle = a.borderColor),
        (t.fillStyle = a.backgroundColor),
        ss(t, b, x, _));
    } else {
      ((t.lineWidth = W(a.borderWidth)
        ? Math.max(...Object.values(a.borderWidth))
        : a.borderWidth || 1),
        (t.strokeStyle = a.borderColor),
        t.setLineDash(a.borderDash || []),
        (t.lineDashOffset = a.borderDashOffset || 0));
      const b = s.leftForLtr(d, c),
        x = s.leftForLtr(s.xPlus(d, 1), c - 2),
        _ = ye(a.borderRadius);
      Object.values(_).some((w) => w !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          ui(t, { x: b, y: m, w: c, h: l, radius: _ }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = a.backgroundColor),
          t.beginPath(),
          ui(t, { x, y: m + 1, w: c - 2, h: l - 2, radius: _ }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(b, m, c, l),
          t.strokeRect(b, m, c, l),
          (t.fillStyle = a.backgroundColor),
          t.fillRect(x, m + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this,
      {
        bodySpacing: o,
        bodyAlign: a,
        displayColors: r,
        boxHeight: l,
        boxWidth: c,
        boxPadding: h,
      } = n,
      u = it(n.bodyFont);
    let d = u.lineHeight,
      f = 0;
    const m = Te(n.rtl, this.x, this.width),
      b = function (k) {
        (e.fillText(k, m.x(t.x + f), t.y + d / 2), (t.y += d + o));
      },
      x = m.textAlign(a);
    let _, w, P, v, S, M, A;
    for (
      e.textAlign = a,
        e.textBaseline = 'middle',
        e.font = u.string,
        t.x = $i(this, x, n),
        e.fillStyle = n.bodyColor,
        H(this.beforeBody, b),
        f = r && x !== 'right' ? (a === 'center' ? c / 2 + h : c + 2 + h) : 0,
        v = 0,
        M = s.length;
      v < M;
      ++v
    ) {
      for (
        _ = s[v],
          w = this.labelTextColors[v],
          e.fillStyle = w,
          H(_.before, b),
          P = _.lines,
          r && P.length && (this._drawColorBox(e, t, v, m, n), (d = Math.max(u.lineHeight, l))),
          S = 0,
          A = P.length;
        S < A;
        ++S
      )
        (b(P[S]), (d = u.lineHeight));
      H(_.after, b);
    }
    ((f = 0), (d = u.lineHeight), H(this.afterBody, b), (t.y -= o));
  }
  drawFooter(t, e, n) {
    const s = this.footer,
      o = s.length;
    let a, r;
    if (o) {
      const l = Te(n.rtl, this.x, this.width);
      for (
        t.x = $i(this, n.footerAlign, n),
          t.y += n.footerMarginTop,
          e.textAlign = l.textAlign(n.footerAlign),
          e.textBaseline = 'middle',
          a = it(n.footerFont),
          e.fillStyle = n.footerColor,
          e.font = a.string,
          r = 0;
        r < o;
        ++r
      )
        (e.fillText(s[r], l.x(t.x), t.y + a.lineHeight / 2),
          (t.y += a.lineHeight + n.footerSpacing));
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: a } = this,
      { x: r, y: l } = t,
      { width: c, height: h } = n,
      { topLeft: u, topRight: d, bottomLeft: f, bottomRight: m } = ye(s.cornerRadius);
    ((e.fillStyle = s.backgroundColor),
      (e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      e.beginPath(),
      e.moveTo(r + u, l),
      a === 'top' && this.drawCaret(t, e, n, s),
      e.lineTo(r + c - d, l),
      e.quadraticCurveTo(r + c, l, r + c, l + d),
      a === 'center' && o === 'right' && this.drawCaret(t, e, n, s),
      e.lineTo(r + c, l + h - m),
      e.quadraticCurveTo(r + c, l + h, r + c - m, l + h),
      a === 'bottom' && this.drawCaret(t, e, n, s),
      e.lineTo(r + f, l + h),
      e.quadraticCurveTo(r, l + h, r, l + h - f),
      a === 'center' && o === 'left' && this.drawCaret(t, e, n, s),
      e.lineTo(r, l + u),
      e.quadraticCurveTo(r, l, r + u, l),
      e.closePath(),
      e.fill(),
      s.borderWidth > 0 && e.stroke());
  }
  _updateAnimationTarget(t) {
    const e = this.chart,
      n = this.$animations,
      s = n && n.x,
      o = n && n.y;
    if (s || o) {
      const a = Ge[t.position].call(this, this._active, this._eventPosition);
      if (!a) return;
      const r = (this._size = va(this, t)),
        l = Object.assign({}, a, this._size),
        c = Sa(e, t, l),
        h = wa(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = r.width),
        (this.height = r.height),
        (this.caretX = a.x),
        (this.caretY = a.y),
        this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n) return;
    this._updateAnimationTarget(e);
    const s = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    n = Math.abs(n) < 0.001 ? 0 : n;
    const a = ct(e.padding),
      r =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    e.enabled &&
      r &&
      (t.save(),
      (t.globalAlpha = n),
      this.drawBackground(o, t, s, e),
      Sr(t, e.textDirection),
      (o.y += a.top),
      this.drawTitle(o, t, e),
      this.drawBody(o, t, e),
      this.drawFooter(o, t, e),
      wr(t, e.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active,
      s = t.map(({ datasetIndex: r, index: l }) => {
        const c = this.chart.getDatasetMeta(r);
        if (!c) throw new Error('Cannot find a dataset at index ' + r);
        return { datasetIndex: r, element: c.data[l], index: l };
      }),
      o = !nn(n, s),
      a = this._positionChanged(s, e);
    (o || a) &&
      ((this._active = s),
      (this._eventPosition = e),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options,
      o = this._active || [],
      a = this._getActiveElements(t, o, e, n),
      r = this._positionChanged(a, t),
      l = e || !nn(a, o) || r;
    return (
      l &&
        ((this._active = a),
        (s.enabled || s.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
      l
    );
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === 'mouseout') return [];
    if (!s)
      return e.filter(
        (r) =>
          this.chart.data.datasets[r.datasetIndex] &&
          this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0
      );
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return (o.reverse && a.reverse(), a);
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this,
      a = Ge[o.position].call(this, t, e);
    return a !== !1 && (n !== a.x || s !== a.y);
  }
}
D(us, 'positioners', Ge);
var Gf = {
    id: 'tooltip',
    _element: us,
    positioners: Ge,
    afterInit(i, t, e) {
      e && (i.tooltip = new us({ chart: i, options: e }));
    },
    beforeUpdate(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    reset(i, t, e) {
      i.tooltip && i.tooltip.initialize(e);
    },
    afterDraw(i) {
      const t = i.tooltip;
      if (t && t._willRender()) {
        const e = { tooltip: t };
        if (i.notifyPlugins('beforeTooltipDraw', { ...e, cancelable: !0 }) === !1) return;
        (t.draw(i.ctx), i.notifyPlugins('afterTooltipDraw', e));
      }
    },
    afterEvent(i, t) {
      if (i.tooltip) {
        const e = t.replay;
        i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: 'average',
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      titleFont: { weight: 'bold' },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: 'left',
      bodyColor: '#fff',
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: 'left',
      footerColor: '#fff',
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: { weight: 'bold' },
      footerAlign: 'left',
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (i, t) => t.bodyFont.size,
      boxWidth: (i, t) => t.bodyFont.size,
      multiKeyBackground: '#fff',
      displayColors: !0,
      boxPadding: 0,
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      animation: { duration: 400, easing: 'easeOutQuart' },
      animations: {
        numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
        opacity: { easing: 'linear', duration: 200 },
      },
      callbacks: Kr,
    },
    defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
    descriptors: {
      _scriptable: (i) => i !== 'filter' && i !== 'itemSort' && i !== 'external',
      _indexable: !1,
      callbacks: { _scriptable: !1, _indexable: !1 },
      animation: { _fallback: !1 },
      animations: { _fallback: 'animation' },
    },
    additionalOptionScopes: ['interaction'],
  },
  Zf = Object.freeze({
    __proto__: null,
    Colors: cf,
    Decimation: ff,
    Filler: If,
    Legend: Bf,
    SubTitle: Wf,
    Title: Vf,
    Tooltip: Gf,
  });
const Jf = (i, t, e, n) => (
  typeof t == 'string'
    ? ((e = i.push(t) - 1), n.unshift({ index: e, label: t }))
    : isNaN(t) && (e = null),
  e
);
function Qf(i, t, e, n) {
  const s = i.indexOf(t);
  if (s === -1) return Jf(i, t, e, n);
  const o = i.lastIndexOf(t);
  return s !== o ? e : s;
}
const tg = (i, t) => (i === null ? null : st(Math.round(i), 0, t));
function Pa(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class ds extends Se {
  constructor(t) {
    (super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []));
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of e) n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (V(t)) return null;
    const n = this.getLabels();
    return (
      (e = isFinite(e) && n[e] === t ? e : Qf(n, t, N(e, t), this._addedLabels)),
      tg(e, n.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    (this.options.bounds === 'ticks' && (t || (n = 0), e || (s = this.getLabels().length - 1)),
      (this.min = n),
      (this.max = s));
  }
  buildTicks() {
    const t = this.min,
      e = this.max,
      n = this.options.offset,
      s = [];
    let o = this.getLabels();
    ((o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1)),
      (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)),
      (this._startValue = this.min - (n ? 0.5 : 0)));
    for (let a = t; a <= e; a++) s.push({ value: a });
    return s;
  }
  getLabelForValue(t) {
    return Pa.call(this, t);
  }
  configure() {
    (super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels));
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
(D(ds, 'id', 'category'), D(ds, 'defaults', { ticks: { callback: Pa } }));
function eg(i, t) {
  const e = [],
    {
      bounds: s,
      step: o,
      min: a,
      max: r,
      precision: l,
      count: c,
      maxTicks: h,
      maxDigits: u,
      includeBounds: d,
    } = i,
    f = o || 1,
    m = h - 1,
    { min: b, max: x } = t,
    _ = !V(a),
    w = !V(r),
    P = !V(c),
    v = (x - b) / (u + 1);
  let S = vo((x - b) / m / f) * f,
    M,
    A,
    k,
    T;
  if (S < 1e-14 && !_ && !w) return [{ value: b }, { value: x }];
  ((T = Math.ceil(x / S) - Math.floor(b / S)),
    T > m && (S = vo((T * S) / m / f) * f),
    V(l) || ((M = Math.pow(10, l)), (S = Math.ceil(S * M) / M)),
    s === 'ticks' ? ((A = Math.floor(b / S) * S), (k = Math.ceil(x / S) * S)) : ((A = b), (k = x)),
    _ && w && o && Yc((r - a) / o, S / 1e3)
      ? ((T = Math.round(Math.min((r - a) / S, h))), (S = (r - a) / T), (A = a), (k = r))
      : P
        ? ((A = _ ? a : A), (k = w ? r : k), (T = c - 1), (S = (k - A) / T))
        : ((T = (k - A) / S),
          be(T, Math.round(T), S / 1e3) ? (T = Math.round(T)) : (T = Math.ceil(T))));
  const O = Math.max(So(S), So(A));
  ((M = Math.pow(10, V(l) ? O : l)), (A = Math.round(A * M) / M), (k = Math.round(k * M) / M));
  let I = 0;
  for (
    _ &&
    (d && A !== a
      ? (e.push({ value: a }),
        A < a && I++,
        be(Math.round((A + I * S) * M) / M, a, Ca(a, v, i)) && I++)
      : A < a && I++);
    I < T;
    ++I
  ) {
    const R = Math.round((A + I * S) * M) / M;
    if (w && R > r) break;
    e.push({ value: R });
  }
  return (
    w && d && k !== r
      ? e.length && be(e[e.length - 1].value, r, Ca(r, v, i))
        ? (e[e.length - 1].value = r)
        : e.push({ value: r })
      : (!w || k === r) && e.push({ value: k }),
    e
  );
}
function Ca(i, t, { horizontal: e, minRotation: n }) {
  const s = Pt(n),
    o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
    a = 0.75 * t * ('' + i).length;
  return Math.min(t / o, a);
}
class hn extends Se {
  constructor(t) {
    (super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0));
  }
  parse(t, e) {
    return V(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const a = (l) => (s = e ? s : l),
      r = (l) => (o = n ? o : l);
    if (t) {
      const l = St(s),
        c = St(o);
      l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      (r(o + l), t || a(s - l));
    }
    ((this.min = s), (this.max = o));
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t,
      s;
    return (
      n
        ? ((s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1),
          s > 1e3 &&
            (console.warn(
              'scales.'
                .concat(this.id, '.ticks.stepSize: ')
                .concat(n, ' would result generating up to ')
                .concat(s, ' ticks. Limiting to 1000.')
            ),
            (s = 1e3)))
        : ((s = this.computeTickLimit()), (e = e || 11)),
      e && (s = Math.min(e, s)),
      s
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
        maxTicks: n,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: e.precision,
        step: e.stepSize,
        count: e.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: e.minRotation || 0,
        includeBounds: e.includeBounds !== !1,
      },
      o = this._range || this,
      a = eg(s, o);
    return (
      t.bounds === 'ticks' && or(a, this, 'value'),
      t.reverse
        ? (a.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      a
    );
  }
  configure() {
    const t = this.ticks;
    let e = this.min,
      n = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      ((e -= s), (n += s));
    }
    ((this._startValue = e), (this._endValue = n), (this._valueRange = n - e));
  }
  getLabelForValue(t) {
    return bi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class fs extends hn {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    ((this.min = J(t) ? t : 0), (this.max = J(e) ? e : 1), this.handleTickRangeOptions());
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      e = t ? this.width : this.height,
      n = Pt(this.options.ticks.minRotation),
      s = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
(D(fs, 'id', 'linear'), D(fs, 'defaults', { ticks: { callback: dn.formatters.numeric } }));
const fi = (i) => Math.floor(Zt(i)),
  ge = (i, t) => Math.pow(10, fi(i) + t);
function Aa(i) {
  return i / Math.pow(10, fi(i)) === 1;
}
function Ta(i, t, e) {
  const n = Math.pow(10, e),
    s = Math.floor(i / n);
  return Math.ceil(t / n) - s;
}
function ig(i, t) {
  const e = t - i;
  let n = fi(e);
  for (; Ta(i, t, n) > 10; ) n++;
  for (; Ta(i, t, n) < 10; ) n--;
  return Math.min(n, fi(i));
}
function ng(i, { min: t, max: e }) {
  t = bt(i.min, t);
  const n = [],
    s = fi(t);
  let o = ig(t, e),
    a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const r = Math.pow(10, o),
    l = s > o ? Math.pow(10, s) : 0,
    c = Math.round((t - l) * a) / a,
    h = Math.floor((t - l) / r / 10) * r * 10;
  let u = Math.floor((c - h) / Math.pow(10, o)),
    d = bt(i.min, Math.round((l + h + u * Math.pow(10, o)) * a) / a);
  for (; d < e; )
    (n.push({ value: d, major: Aa(d), significand: u }),
      u >= 10 ? (u = u < 15 ? 15 : 20) : u++,
      u >= 20 && (o++, (u = 2), (a = o >= 0 ? 1 : a)),
      (d = Math.round((l + h + u * Math.pow(10, o)) * a) / a));
  const f = bt(i.max, d);
  return (n.push({ value: f, major: Aa(f), significand: u }), n);
}
class gs extends Se {
  constructor(t) {
    (super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0));
  }
  parse(t, e) {
    const n = hn.prototype.parse.apply(this, [t, e]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return J(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    ((this.min = J(t) ? Math.max(0, t) : null),
      (this.max = J(e) ? Math.max(0, e) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !J(this._userMin) &&
        (this.min = t === ge(this.min, 0) ? ge(this.min, -1) : ge(this.min, 0)),
      this.handleTickRangeOptions());
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let n = this.min,
      s = this.max;
    const o = (r) => (n = t ? n : r),
      a = (r) => (s = e ? s : r);
    (n === s && (n <= 0 ? (o(1), a(10)) : (o(ge(n, -1)), a(ge(s, 1)))),
      n <= 0 && o(ge(s, -1)),
      s <= 0 && a(ge(n, 1)),
      (this.min = n),
      (this.max = s));
  }
  buildTicks() {
    const t = this.options,
      e = { min: this._userMin, max: this._userMax },
      n = ng(e, this);
    return (
      t.bounds === 'ticks' && or(n, this, 'value'),
      t.reverse
        ? (n.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      n
    );
  }
  getLabelForValue(t) {
    return t === void 0 ? '0' : bi(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    (super.configure(), (this._startValue = Zt(t)), (this._valueRange = Zt(this.max) - Zt(t)));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Zt(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
(D(gs, 'id', 'logarithmic'),
  D(gs, 'defaults', { ticks: { callback: dn.formatters.logarithmic, major: { enabled: !0 } } }));
function ps(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = ct(t.backdropPadding);
    return N(t.font && t.font.size, G.font.size) + e.height;
  }
  return 0;
}
function sg(i, t, e) {
  return ((e = K(e) ? e : [e]), { w: ch(i, t.string, e), h: e.length * t.lineHeight });
}
function Ea(i, t, e, n, s) {
  return i === n || i === s
    ? { start: t - e / 2, end: t + e / 2 }
    : i < n || i > s
      ? { start: t - e, end: t }
      : { start: t, end: t + e };
}
function og(i) {
  const t = {
      l: i.left + i._padding.left,
      r: i.right - i._padding.right,
      t: i.top + i._padding.top,
      b: i.bottom - i._padding.bottom,
    },
    e = Object.assign({}, t),
    n = [],
    s = [],
    o = i._pointLabels.length,
    a = i.options.pointLabels,
    r = a.centerPointLabels ? U / o : 0;
  for (let l = 0; l < o; l++) {
    const c = a.setContext(i.getPointLabelContext(l));
    s[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + s[l], r),
      u = it(c.font),
      d = sg(i.ctx, u, i._pointLabels[l]);
    n[l] = d;
    const f = rt(i.getIndexAngle(l) + r),
      m = Math.round(As(f)),
      b = Ea(m, h.x, d.w, 0, 180),
      x = Ea(m, h.y, d.h, 90, 270);
    ag(e, t, f, b, x);
  }
  (i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    (i._pointLabelItems = cg(i, n, s)));
}
function ag(i, t, e, n, s) {
  const o = Math.abs(Math.sin(e)),
    a = Math.abs(Math.cos(e));
  let r = 0,
    l = 0;
  (n.start < t.l
    ? ((r = (t.l - n.start) / o), (i.l = Math.min(i.l, t.l - r)))
    : n.end > t.r && ((r = (n.end - t.r) / o), (i.r = Math.max(i.r, t.r + r))),
    s.start < t.t
      ? ((l = (t.t - s.start) / a), (i.t = Math.min(i.t, t.t - l)))
      : s.end > t.b && ((l = (s.end - t.b) / a), (i.b = Math.max(i.b, t.b + l))));
}
function rg(i, t, e) {
  const n = i.drawingArea,
    { extra: s, additionalAngle: o, padding: a, size: r } = e,
    l = i.getPointPosition(t, n + s + a, o),
    c = Math.round(As(rt(l.angle + tt))),
    h = dg(l.y, r.h, c),
    u = hg(c),
    d = ug(l.x, r.w, u);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: u,
    left: d,
    top: h,
    right: d + r.w,
    bottom: h + r.h,
  };
}
function lg(i, t) {
  if (!t) return !0;
  const { left: e, top: n, right: s, bottom: o } = i;
  return !(
    Ft({ x: e, y: n }, t) ||
    Ft({ x: e, y: o }, t) ||
    Ft({ x: s, y: n }, t) ||
    Ft({ x: s, y: o }, t)
  );
}
function cg(i, t, e) {
  const n = [],
    s = i._pointLabels.length,
    o = i.options,
    { centerPointLabels: a, display: r } = o.pointLabels,
    l = { extra: ps(o) / 2, additionalAngle: a ? U / s : 0 };
  let c;
  for (let h = 0; h < s; h++) {
    ((l.padding = e[h]), (l.size = t[h]));
    const u = rg(i, h, l);
    (n.push(u), r === 'auto' && ((u.visible = lg(u, c)), u.visible && (c = u)));
  }
  return n;
}
function hg(i) {
  return i === 0 || i === 180 ? 'center' : i < 180 ? 'left' : 'right';
}
function ug(i, t, e) {
  return (e === 'right' ? (i -= t) : e === 'center' && (i -= t / 2), i);
}
function dg(i, t, e) {
  return (e === 90 || e === 270 ? (i -= t / 2) : (e > 270 || e < 90) && (i -= t), i);
}
function fg(i, t, e) {
  const { left: n, top: s, right: o, bottom: a } = e,
    { backdropColor: r } = t;
  if (!V(r)) {
    const l = ye(t.borderRadius),
      c = ct(t.backdropPadding);
    i.fillStyle = r;
    const h = n - c.left,
      u = s - c.top,
      d = o - n + c.width,
      f = a - s + c.height;
    Object.values(l).some((m) => m !== 0)
      ? (i.beginPath(), ui(i, { x: h, y: u, w: d, h: f, radius: l }), i.fill())
      : i.fillRect(h, u, d, f);
  }
}
function gg(i, t) {
  const {
    ctx: e,
    options: { pointLabels: n },
  } = i;
  for (let s = t - 1; s >= 0; s--) {
    const o = i._pointLabelItems[s];
    if (!o.visible) continue;
    const a = n.setContext(i.getPointLabelContext(s));
    fg(e, a, o);
    const r = it(a.font),
      { x: l, y: c, textAlign: h } = o;
    ve(e, i._pointLabels[s], l, c + r.lineHeight / 2, r, {
      color: a.color,
      textAlign: h,
      textBaseline: 'middle',
    });
  }
}
function Gr(i, t, e, n) {
  const { ctx: s } = i;
  if (e) s.arc(i.xCenter, i.yCenter, t, 0, q);
  else {
    let o = i.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let a = 1; a < n; a++) ((o = i.getPointPosition(a, t)), s.lineTo(o.x, o.y));
  }
}
function pg(i, t, e, n, s) {
  const o = i.ctx,
    a = t.circular,
    { color: r, lineWidth: l } = t;
  (!a && !n) ||
    !r ||
    !l ||
    e < 0 ||
    (o.save(),
    (o.strokeStyle = r),
    (o.lineWidth = l),
    o.setLineDash(s.dash || []),
    (o.lineDashOffset = s.dashOffset),
    o.beginPath(),
    Gr(i, e, a, n),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function mg(i, t, e) {
  return se(i, { label: e, index: t, type: 'pointLabel' });
}
class Ze extends hn {
  constructor(t) {
    (super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []));
  }
  setDimensions() {
    const t = (this._padding = ct(ps(this.options) / 2)),
      e = (this.width = this.maxWidth - t.width),
      n = (this.height = this.maxHeight - t.height);
    ((this.xCenter = Math.floor(this.left + e / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(e, n) / 2)));
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    ((this.min = J(t) && !isNaN(t) ? t : 0),
      (this.max = J(e) && !isNaN(e) ? e : 0),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ps(this.options));
  }
  generateTickLabels(t) {
    (hn.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((e, n) => {
          const s = F(this.options.pointLabels.callback, [e, n], this);
          return s || s === 0 ? s : '';
        })
        .filter((e, n) => this.chart.getDataVisibility(n))));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? og(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, n, s) {
    ((this.xCenter += Math.floor((t - e) / 2)),
      (this.yCenter += Math.floor((n - s) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, s))));
  }
  getIndexAngle(t) {
    const e = q / (this._pointLabels.length || 1),
      n = this.options.startAngle || 0;
    return rt(t * e + Pt(n));
  }
  getDistanceFromCenterForValue(t) {
    if (V(t)) return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (V(t)) return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return mg(this.getContext(), t, n);
    }
  }
  getPointPosition(t, e, n = 0) {
    const s = this.getIndexAngle(t) - tt + n;
    return { x: Math.cos(s) * e + this.xCenter, y: Math.sin(s) * e + this.yCenter, angle: s };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return { left: e, top: n, right: s, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: e },
    } = this.options;
    if (t) {
      const n = this.ctx;
      (n.save(),
        n.beginPath(),
        Gr(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
        n.closePath(),
        (n.fillStyle = t),
        n.fill(),
        n.restore());
    }
  }
  drawGrid() {
    const t = this.ctx,
      e = this.options,
      { angleLines: n, grid: s, border: o } = e,
      a = this._pointLabels.length;
    let r, l, c;
    if (
      (e.pointLabels.display && gg(this, a),
      s.display &&
        this.ticks.forEach((h, u) => {
          if (u !== 0 || (u === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(h.value);
            const d = this.getContext(u),
              f = s.setContext(d),
              m = o.setContext(d);
            pg(this, f, l, a, m);
          }
        }),
      n.display)
    ) {
      for (t.save(), r = a - 1; r >= 0; r--) {
        const h = n.setContext(this.getPointLabelContext(r)),
          { color: u, lineWidth: d } = h;
        !d ||
          !u ||
          ((t.lineWidth = d),
          (t.strokeStyle = u),
          t.setLineDash(h.borderDash),
          (t.lineDashOffset = h.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max)),
          (c = this.getPointPosition(r, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(c.x, c.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      e = this.options,
      n = e.ticks;
    if (!n.display) return;
    const s = this.getIndexAngle(0);
    let o, a;
    (t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(s),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((r, l) => {
        if (l === 0 && this.min >= 0 && !e.reverse) return;
        const c = n.setContext(this.getContext(l)),
          h = it(c.font);
        if (((o = this.getDistanceFromCenterForValue(this.ticks[l].value)), c.showLabelBackdrop)) {
          ((t.font = h.string),
            (a = t.measureText(r.label).width),
            (t.fillStyle = c.backdropColor));
          const u = ct(c.backdropPadding);
          t.fillRect(-a / 2 - u.left, -o - h.size / 2 - u.top, a + u.width, h.size + u.height);
        }
        ve(t, r.label, 0, -o, h, {
          color: c.color,
          strokeColor: c.textStrokeColor,
          strokeWidth: c.textStrokeWidth,
        });
      }),
      t.restore());
  }
  drawTitle() {}
}
(D(Ze, 'id', 'radialLinear'),
  D(Ze, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: dn.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  }),
  D(Ze, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color',
  }),
  D(Ze, 'descriptors', { angleLines: { _fallback: 'grid' } }));
const xn = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  mt = Object.keys(xn);
function Da(i, t) {
  return i - t;
}
function Oa(i, t) {
  if (V(t)) return null;
  const e = i._adapter,
    { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let a = t;
  return (
    typeof n == 'function' && (a = n(a)),
    J(a) || (a = typeof n == 'string' ? e.parse(a, n) : e.parse(a)),
    a === null
      ? null
      : (s &&
          (a = s === 'week' && (Ee(o) || o === !0) ? e.startOf(a, 'isoWeek', o) : e.startOf(a, s)),
        +a)
  );
}
function Ia(i, t, e, n) {
  const s = mt.length;
  for (let o = mt.indexOf(i); o < s - 1; ++o) {
    const a = xn[mt[o]],
      r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= n) return mt[o];
  }
  return mt[s - 1];
}
function bg(i, t, e, n, s) {
  for (let o = mt.length - 1; o >= mt.indexOf(e); o--) {
    const a = mt[o];
    if (xn[a].common && i._adapter.diff(s, n, a) >= t - 1) return a;
  }
  return mt[e ? mt.indexOf(e) : 0];
}
function yg(i) {
  for (let t = mt.indexOf(i) + 1, e = mt.length; t < e; ++t) if (xn[mt[t]].common) return mt[t];
}
function La(i, t, e) {
  if (!e) i[t] = !0;
  else if (e.length) {
    const { lo: n, hi: s } = Ts(e, t),
      o = e[n] >= t ? e[n] : e[s];
    i[o] = !0;
  }
}
function xg(i, t, e, n) {
  const s = i._adapter,
    o = +s.startOf(t[0].value, n),
    a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +s.add(r, 1, n)) ((l = e[r]), l >= 0 && (t[l].major = !0));
  return t;
}
function Ra(i, t, e) {
  const n = [],
    s = {},
    o = t.length;
  let a, r;
  for (a = 0; a < o; ++a) ((r = t[a]), (s[r] = a), n.push({ value: r, major: !1 }));
  return o === 0 || !e ? n : xg(i, n, s, e);
}
class gi extends Se {
  constructor(t) {
    (super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0));
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}),
      s = (this._adapter = new Pu._date(t.adapters.date));
    (s.init(e),
      Qe(n.displayFormats, s.formats()),
      (this._parseOpts = { parser: n.parser, round: n.round, isoWeekday: n.isoWeekday }),
      super.init(t),
      (this._normalized = e.normalized));
  }
  parse(t, e) {
    return t === void 0 ? null : Oa(this, t);
  }
  beforeLayout() {
    (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
  }
  determineDataLimits() {
    const t = this.options,
      e = this._adapter,
      n = t.time.unit || 'day';
    let { min: s, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(c) {
      (!a && !isNaN(c.min) && (s = Math.min(s, c.min)),
        !r && !isNaN(c.max) && (o = Math.max(o, c.max)));
    }
    ((!a || !r) &&
      (l(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && l(this.getMinMax(!1))),
      (s = J(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n)),
      (o = J(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
      (this.min = Math.min(s, o - 1)),
      (this.max = Math.max(s + 1, o)));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY,
      n = Number.NEGATIVE_INFINITY;
    return (t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n });
  }
  buildTicks() {
    const t = this.options,
      e = t.time,
      n = t.ticks,
      s = n.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    t.bounds === 'ticks' &&
      s.length &&
      ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
    const o = this.min,
      a = this.max,
      r = Gc(s, o, a);
    return (
      (this._unit =
        e.unit ||
        (n.autoSkip
          ? Ia(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : bg(this, r.length, e.minUnit, this.min, this.max))),
      (this._majorUnit = !n.major.enabled || this._unit === 'year' ? void 0 : yg(this._unit)),
      this.initOffsets(s),
      t.reverse && r.reverse(),
      Ra(this, r, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0,
      n = 0,
      s,
      o;
    this.options.offset &&
      t.length &&
      ((s = this.getDecimalForValue(t[0])),
      t.length === 1 ? (e = 1 - s) : (e = (this.getDecimalForValue(t[1]) - s) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1 ? (n = o) : (n = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const a = t.length < 3 ? 0.5 : 0.25;
    ((e = st(e, 0, a)),
      (n = st(n, 0, a)),
      (this._offsets = { start: e, end: n, factor: 1 / (e + 1 + n) }));
  }
  _generate() {
    const t = this._adapter,
      e = this.min,
      n = this.max,
      s = this.options,
      o = s.time,
      a = o.unit || Ia(o.minUnit, e, n, this._getLabelCapacity(e)),
      r = N(s.ticks.stepSize, 1),
      l = a === 'week' ? o.isoWeekday : !1,
      c = Ee(l) || l === !0,
      h = {};
    let u = e,
      d,
      f;
    if (
      (c && (u = +t.startOf(u, 'isoWeek', l)),
      (u = +t.startOf(u, c ? 'day' : a)),
      t.diff(n, e, a) > 1e5 * r)
    )
      throw new Error(e + ' and ' + n + ' are too far apart with stepSize of ' + r + ' ' + a);
    const m = s.ticks.source === 'data' && this.getDataTimestamps();
    for (d = u, f = 0; d < n; d = +t.add(d, r, a), f++) La(h, d, m);
    return (
      (d === n || s.bounds === 'ticks' || f === 1) && La(h, d, m),
      Object.keys(h)
        .sort(Da)
        .map((b) => +b)
    );
  }
  getLabelForValue(t) {
    const e = this._adapter,
      n = this.options.time;
    return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats,
      o = this._unit,
      a = e || s[o];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options,
      a = o.ticks.callback;
    if (a) return F(a, [t, e, n], this);
    const r = o.time.displayFormats,
      l = this._unit,
      c = this._majorUnit,
      h = l && r[l],
      u = c && r[c],
      d = n[e],
      f = c && u && d && d.major;
    return this._adapter.format(t, s || (f ? u : h));
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      ((s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t)));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets,
      n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks,
      n = this.ctx.measureText(t).width,
      s = Pt(this.isHorizontal() ? e.maxRotation : e.minRotation),
      o = Math.cos(s),
      a = Math.sin(s),
      r = this._resolveTickFontOptions(0).size;
    return { w: n * o + r * a, h: n * a + r * o };
  }
  _getLabelCapacity(t) {
    const e = this.options.time,
      n = e.displayFormats,
      s = n[e.unit] || n.millisecond,
      o = this._tickFormatFunction(t, 0, Ra(this, [t], this._majorUnit), s),
      a = this._getLabelSize(o),
      r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      e,
      n;
    if (t.length) return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return (this._cache.data = s[0].controller.getAllParsedValues(this));
    for (e = 0, n = s.length; e < n; ++e) t = t.concat(s[e].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length) return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e) t.push(Oa(this, s[e]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return lr(t.sort(Da));
  }
}
(D(gi, 'id', 'time'),
  D(gi, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  }));
function ji(i, t, e) {
  let n = 0,
    s = i.length - 1,
    o,
    a,
    r,
    l;
  e
    ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = Ut(i, 'pos', t)),
      ({ pos: o, time: r } = i[n]),
      ({ pos: a, time: l } = i[s]))
    : (t >= i[n].time && t <= i[s].time && ({ lo: n, hi: s } = Ut(i, 'time', t)),
      ({ time: o, pos: r } = i[n]),
      ({ time: a, pos: l } = i[s]));
  const c = a - o;
  return c ? r + ((l - r) * (t - o)) / c : r;
}
class ms extends gi {
  constructor(t) {
    (super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0));
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      e = (this._table = this.buildLookupTable(t));
    ((this._minPos = ji(e, this.min)),
      (this._tableRange = ji(e, this.max) - this._minPos),
      super.initOffsets(t));
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this,
      s = [],
      o = [];
    let a, r, l, c, h;
    for (a = 0, r = t.length; a < r; ++a) ((c = t[a]), c >= e && c <= n && s.push(c));
    if (s.length < 2)
      return [
        { time: e, pos: 0 },
        { time: n, pos: 1 },
      ];
    for (a = 0, r = s.length; a < r; ++a)
      ((h = s[a + 1]),
        (l = s[a - 1]),
        (c = s[a]),
        Math.round((h + l) / 2) !== c && o.push({ time: c, pos: a / (r - 1) }));
    return o;
  }
  _generate() {
    const t = this.min,
      e = this.max;
    let n = super.getDataTimestamps();
    return (
      (!n.includes(t) || !n.length) && n.splice(0, 0, t),
      (!n.includes(e) || n.length === 1) && n.push(e),
      n.sort((s, o) => s - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const e = this.getDataTimestamps(),
      n = this.getLabelTimestamps();
    return (
      e.length && n.length ? (t = this.normalize(e.concat(n))) : (t = e.length ? e : n),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (ji(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets,
      n = this.getDecimalForPixel(t) / e.factor - e.end;
    return ji(this._table, n * this._tableRange + this._minPos, !0);
  }
}
(D(ms, 'id', 'timeseries'), D(ms, 'defaults', gi.defaults));
var _g = Object.freeze({
  __proto__: null,
  CategoryScale: ds,
  LinearScale: fs,
  LogarithmicScale: gs,
  RadialLinearScale: Ze,
  TimeScale: gi,
  TimeSeriesScale: ms,
});
const vg = [ku, ef, Zf, _g];
bn.register(...vg);
function Sg(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default') ? i.default : i;
}
var qn = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */ var Fa;
function wg() {
  return (
    Fa ||
      ((Fa = 1),
      (function (i) {
        (function (t, e, n, s) {
          var o = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
            a = e.createElement('div'),
            r = 'function',
            l = Math.round,
            c = Math.abs,
            h = Date.now;
          function u(g, p, y) {
            return setTimeout(P(g, y), p);
          }
          function d(g, p, y) {
            return Array.isArray(g) ? (f(g, y[p], y), !0) : !1;
          }
          function f(g, p, y) {
            var C;
            if (g)
              if (g.forEach) g.forEach(p, y);
              else if (g.length !== s) for (C = 0; C < g.length; ) (p.call(y, g[C], C, g), C++);
              else for (C in g) g.hasOwnProperty(C) && p.call(y, g[C], C, g);
          }
          function m(g, p, y) {
            var C = 'DEPRECATED METHOD: ' + p + '\n' + y + ' AT \n';
            return function () {
              var E = new Error('get-stack-trace'),
                L =
                  E && E.stack
                    ? E.stack
                        .replace(/^[^\(]+?[\n$]/gm, '')
                        .replace(/^\s+at\s+/gm, '')
                        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                    : 'Unknown Stack Trace',
                B = t.console && (t.console.warn || t.console.log);
              return (B && B.call(t.console, C, L), g.apply(this, arguments));
            };
          }
          var b;
          typeof Object.assign != 'function'
            ? (b = function (p) {
                if (p === s || p === null)
                  throw new TypeError('Cannot convert undefined or null to object');
                for (var y = Object(p), C = 1; C < arguments.length; C++) {
                  var E = arguments[C];
                  if (E !== s && E !== null) for (var L in E) E.hasOwnProperty(L) && (y[L] = E[L]);
                }
                return y;
              })
            : (b = Object.assign);
          var x = m(
              function (p, y, C) {
                for (var E = Object.keys(y), L = 0; L < E.length; )
                  ((!C || (C && p[E[L]] === s)) && (p[E[L]] = y[E[L]]), L++);
                return p;
              },
              'extend',
              'Use `assign`.'
            ),
            _ = m(
              function (p, y) {
                return x(p, y, !0);
              },
              'merge',
              'Use `assign`.'
            );
          function w(g, p, y) {
            var C = p.prototype,
              E;
            ((E = g.prototype = Object.create(C)),
              (E.constructor = g),
              (E._super = C),
              y && b(E, y));
          }
          function P(g, p) {
            return function () {
              return g.apply(p, arguments);
            };
          }
          function v(g, p) {
            return typeof g == r ? g.apply((p && p[0]) || s, p) : g;
          }
          function S(g, p) {
            return g === s ? p : g;
          }
          function M(g, p, y) {
            f(O(p), function (C) {
              g.addEventListener(C, y, !1);
            });
          }
          function A(g, p, y) {
            f(O(p), function (C) {
              g.removeEventListener(C, y, !1);
            });
          }
          function k(g, p) {
            for (; g; ) {
              if (g == p) return !0;
              g = g.parentNode;
            }
            return !1;
          }
          function T(g, p) {
            return g.indexOf(p) > -1;
          }
          function O(g) {
            return g.trim().split(/\s+/g);
          }
          function I(g, p, y) {
            if (g.indexOf && !y) return g.indexOf(p);
            for (var C = 0; C < g.length; ) {
              if ((y && g[C][y] == p) || (!y && g[C] === p)) return C;
              C++;
            }
            return -1;
          }
          function R(g) {
            return Array.prototype.slice.call(g, 0);
          }
          function j(g, p, y) {
            for (var C = [], E = [], L = 0; L < g.length; ) {
              var B = g[L][p];
              (I(E, B) < 0 && C.push(g[L]), (E[L] = B), L++);
            }
            return (
              (C = C.sort(function (ot, dt) {
                return ot[p] > dt[p];
              })),
              C
            );
          }
          function X(g, p) {
            for (var y, C, E = p[0].toUpperCase() + p.slice(1), L = 0; L < o.length; ) {
              if (((y = o[L]), (C = y ? y + E : p), C in g)) return C;
              L++;
            }
            return s;
          }
          var z = 1;
          function $() {
            return z++;
          }
          function Y(g) {
            var p = g.ownerDocument || g;
            return p.defaultView || p.parentWindow || t;
          }
          var ht = /mobile|tablet|ip(ad|hone|od)|android/i,
            Q = 'ontouchstart' in t,
            Tt = X(t, 'PointerEvent') !== s,
            Me = Q && ht.test(navigator.userAgent),
            yt = 'touch',
            oe = 'pen',
            Mt = 'mouse',
            ae = 'kinect',
            Nt = 25,
            ut = 1,
            re = 2,
            et = 4,
            ft = 8,
            yi = 1,
            Le = 2,
            Re = 4,
            Fe = 8,
            Ne = 16,
            Et = Le | Re,
            le = Fe | Ne,
            Ws = Et | le,
            $s = ['x', 'y'],
            xi = ['clientX', 'clientY'];
          function xt(g, p) {
            var y = this;
            ((this.manager = g),
              (this.callback = p),
              (this.element = g.element),
              (this.target = g.options.inputTarget),
              (this.domHandler = function (C) {
                v(g.options.enable, [g]) && y.handler(C);
              }),
              this.init());
          }
          xt.prototype = {
            handler: function () {},
            init: function () {
              (this.evEl && M(this.element, this.evEl, this.domHandler),
                this.evTarget && M(this.target, this.evTarget, this.domHandler),
                this.evWin && M(Y(this.element), this.evWin, this.domHandler));
            },
            destroy: function () {
              (this.evEl && A(this.element, this.evEl, this.domHandler),
                this.evTarget && A(this.target, this.evTarget, this.domHandler),
                this.evWin && A(Y(this.element), this.evWin, this.domHandler));
            },
          };
          function dl(g) {
            var p,
              y = g.options.inputClass;
            return (
              y ? (p = y) : Tt ? (p = wn) : Me ? (p = Si) : Q ? (p = Mn) : (p = vi),
              new p(g, fl)
            );
          }
          function fl(g, p, y) {
            var C = y.pointers.length,
              E = y.changedPointers.length,
              L = p & ut && C - E === 0,
              B = p & (et | ft) && C - E === 0;
            ((y.isFirst = !!L),
              (y.isFinal = !!B),
              L && (g.session = {}),
              (y.eventType = p),
              gl(g, y),
              g.emit('hammer.input', y),
              g.recognize(y),
              (g.session.prevInput = y));
          }
          function gl(g, p) {
            var y = g.session,
              C = p.pointers,
              E = C.length;
            (y.firstInput || (y.firstInput = js(p)),
              E > 1 && !y.firstMultiple
                ? (y.firstMultiple = js(p))
                : E === 1 && (y.firstMultiple = !1));
            var L = y.firstInput,
              B = y.firstMultiple,
              nt = B ? B.center : L.center,
              ot = (p.center = Us(C));
            ((p.timeStamp = h()),
              (p.deltaTime = p.timeStamp - L.timeStamp),
              (p.angle = Sn(nt, ot)),
              (p.distance = _i(nt, ot)),
              pl(y, p),
              (p.offsetDirection = Xs(p.deltaX, p.deltaY)));
            var dt = Ys(p.deltaTime, p.deltaX, p.deltaY);
            ((p.overallVelocityX = dt.x),
              (p.overallVelocityY = dt.y),
              (p.overallVelocity = c(dt.x) > c(dt.y) ? dt.x : dt.y),
              (p.scale = B ? yl(B.pointers, C) : 1),
              (p.rotation = B ? bl(B.pointers, C) : 0),
              (p.maxPointers = y.prevInput
                ? p.pointers.length > y.prevInput.maxPointers
                  ? p.pointers.length
                  : y.prevInput.maxPointers
                : p.pointers.length),
              ml(y, p));
            var Ot = g.element;
            (k(p.srcEvent.target, Ot) && (Ot = p.srcEvent.target), (p.target = Ot));
          }
          function pl(g, p) {
            var y = p.center,
              C = g.offsetDelta || {},
              E = g.prevDelta || {},
              L = g.prevInput || {};
            ((p.eventType === ut || L.eventType === et) &&
              ((E = g.prevDelta = { x: L.deltaX || 0, y: L.deltaY || 0 }),
              (C = g.offsetDelta = { x: y.x, y: y.y })),
              (p.deltaX = E.x + (y.x - C.x)),
              (p.deltaY = E.y + (y.y - C.y)));
          }
          function ml(g, p) {
            var y = g.lastInterval || p,
              C = p.timeStamp - y.timeStamp,
              E,
              L,
              B,
              nt;
            if (p.eventType != ft && (C > Nt || y.velocity === s)) {
              var ot = p.deltaX - y.deltaX,
                dt = p.deltaY - y.deltaY,
                Ot = Ys(C, ot, dt);
              ((L = Ot.x),
                (B = Ot.y),
                (E = c(Ot.x) > c(Ot.y) ? Ot.x : Ot.y),
                (nt = Xs(ot, dt)),
                (g.lastInterval = p));
            } else ((E = y.velocity), (L = y.velocityX), (B = y.velocityY), (nt = y.direction));
            ((p.velocity = E), (p.velocityX = L), (p.velocityY = B), (p.direction = nt));
          }
          function js(g) {
            for (var p = [], y = 0; y < g.pointers.length; )
              ((p[y] = { clientX: l(g.pointers[y].clientX), clientY: l(g.pointers[y].clientY) }),
                y++);
            return {
              timeStamp: h(),
              pointers: p,
              center: Us(p),
              deltaX: g.deltaX,
              deltaY: g.deltaY,
            };
          }
          function Us(g) {
            var p = g.length;
            if (p === 1) return { x: l(g[0].clientX), y: l(g[0].clientY) };
            for (var y = 0, C = 0, E = 0; E < p; ) ((y += g[E].clientX), (C += g[E].clientY), E++);
            return { x: l(y / p), y: l(C / p) };
          }
          function Ys(g, p, y) {
            return { x: p / g || 0, y: y / g || 0 };
          }
          function Xs(g, p) {
            return g === p ? yi : c(g) >= c(p) ? (g < 0 ? Le : Re) : p < 0 ? Fe : Ne;
          }
          function _i(g, p, y) {
            y || (y = $s);
            var C = p[y[0]] - g[y[0]],
              E = p[y[1]] - g[y[1]];
            return Math.sqrt(C * C + E * E);
          }
          function Sn(g, p, y) {
            y || (y = $s);
            var C = p[y[0]] - g[y[0]],
              E = p[y[1]] - g[y[1]];
            return (Math.atan2(E, C) * 180) / Math.PI;
          }
          function bl(g, p) {
            return Sn(p[1], p[0], xi) + Sn(g[1], g[0], xi);
          }
          function yl(g, p) {
            return _i(p[0], p[1], xi) / _i(g[0], g[1], xi);
          }
          var xl = { mousedown: ut, mousemove: re, mouseup: et },
            _l = 'mousedown',
            vl = 'mousemove mouseup';
          function vi() {
            ((this.evEl = _l), (this.evWin = vl), (this.pressed = !1), xt.apply(this, arguments));
          }
          w(vi, xt, {
            handler: function (p) {
              var y = xl[p.type];
              (y & ut && p.button === 0 && (this.pressed = !0),
                y & re && p.which !== 1 && (y = et),
                this.pressed &&
                  (y & et && (this.pressed = !1),
                  this.callback(this.manager, y, {
                    pointers: [p],
                    changedPointers: [p],
                    pointerType: Mt,
                    srcEvent: p,
                  })));
            },
          });
          var Sl = {
              pointerdown: ut,
              pointermove: re,
              pointerup: et,
              pointercancel: ft,
              pointerout: ft,
            },
            wl = { 2: yt, 3: oe, 4: Mt, 5: ae },
            qs = 'pointerdown',
            Ks = 'pointermove pointerup pointercancel';
          t.MSPointerEvent &&
            !t.PointerEvent &&
            ((qs = 'MSPointerDown'), (Ks = 'MSPointerMove MSPointerUp MSPointerCancel'));
          function wn() {
            ((this.evEl = qs),
              (this.evWin = Ks),
              xt.apply(this, arguments),
              (this.store = this.manager.session.pointerEvents = []));
          }
          w(wn, xt, {
            handler: function (p) {
              var y = this.store,
                C = !1,
                E = p.type.toLowerCase().replace('ms', ''),
                L = Sl[E],
                B = wl[p.pointerType] || p.pointerType,
                nt = B == yt,
                ot = I(y, p.pointerId, 'pointerId');
              (L & ut && (p.button === 0 || nt)
                ? ot < 0 && (y.push(p), (ot = y.length - 1))
                : L & (et | ft) && (C = !0),
                !(ot < 0) &&
                  ((y[ot] = p),
                  this.callback(this.manager, L, {
                    pointers: y,
                    changedPointers: [p],
                    pointerType: B,
                    srcEvent: p,
                  }),
                  C && y.splice(ot, 1)));
            },
          });
          var Ml = { touchstart: ut, touchmove: re, touchend: et, touchcancel: ft },
            kl = 'touchstart',
            Pl = 'touchstart touchmove touchend touchcancel';
          function Gs() {
            ((this.evTarget = kl),
              (this.evWin = Pl),
              (this.started = !1),
              xt.apply(this, arguments));
          }
          w(Gs, xt, {
            handler: function (p) {
              var y = Ml[p.type];
              if ((y === ut && (this.started = !0), !!this.started)) {
                var C = Cl.call(this, p, y);
                (y & (et | ft) && C[0].length - C[1].length === 0 && (this.started = !1),
                  this.callback(this.manager, y, {
                    pointers: C[0],
                    changedPointers: C[1],
                    pointerType: yt,
                    srcEvent: p,
                  }));
              }
            },
          });
          function Cl(g, p) {
            var y = R(g.touches),
              C = R(g.changedTouches);
            return (p & (et | ft) && (y = j(y.concat(C), 'identifier')), [y, C]);
          }
          var Al = { touchstart: ut, touchmove: re, touchend: et, touchcancel: ft },
            Tl = 'touchstart touchmove touchend touchcancel';
          function Si() {
            ((this.evTarget = Tl), (this.targetIds = {}), xt.apply(this, arguments));
          }
          w(Si, xt, {
            handler: function (p) {
              var y = Al[p.type],
                C = El.call(this, p, y);
              C &&
                this.callback(this.manager, y, {
                  pointers: C[0],
                  changedPointers: C[1],
                  pointerType: yt,
                  srcEvent: p,
                });
            },
          });
          function El(g, p) {
            var y = R(g.touches),
              C = this.targetIds;
            if (p & (ut | re) && y.length === 1) return ((C[y[0].identifier] = !0), [y, y]);
            var E,
              L,
              B = R(g.changedTouches),
              nt = [],
              ot = this.target;
            if (
              ((L = y.filter(function (dt) {
                return k(dt.target, ot);
              })),
              p === ut)
            )
              for (E = 0; E < L.length; ) ((C[L[E].identifier] = !0), E++);
            for (E = 0; E < B.length; )
              (C[B[E].identifier] && nt.push(B[E]),
                p & (et | ft) && delete C[B[E].identifier],
                E++);
            if (nt.length) return [j(L.concat(nt), 'identifier'), nt];
          }
          var Dl = 2500,
            Zs = 25;
          function Mn() {
            xt.apply(this, arguments);
            var g = P(this.handler, this);
            ((this.touch = new Si(this.manager, g)),
              (this.mouse = new vi(this.manager, g)),
              (this.primaryTouch = null),
              (this.lastTouches = []));
          }
          w(Mn, xt, {
            handler: function (p, y, C) {
              var E = C.pointerType == yt,
                L = C.pointerType == Mt;
              if (!(L && C.sourceCapabilities && C.sourceCapabilities.firesTouchEvents)) {
                if (E) Ol.call(this, y, C);
                else if (L && Il.call(this, C)) return;
                this.callback(p, y, C);
              }
            },
            destroy: function () {
              (this.touch.destroy(), this.mouse.destroy());
            },
          });
          function Ol(g, p) {
            g & ut
              ? ((this.primaryTouch = p.changedPointers[0].identifier), Js.call(this, p))
              : g & (et | ft) && Js.call(this, p);
          }
          function Js(g) {
            var p = g.changedPointers[0];
            if (p.identifier === this.primaryTouch) {
              var y = { x: p.clientX, y: p.clientY };
              this.lastTouches.push(y);
              var C = this.lastTouches,
                E = function () {
                  var L = C.indexOf(y);
                  L > -1 && C.splice(L, 1);
                };
              setTimeout(E, Dl);
            }
          }
          function Il(g) {
            for (
              var p = g.srcEvent.clientX, y = g.srcEvent.clientY, C = 0;
              C < this.lastTouches.length;
              C++
            ) {
              var E = this.lastTouches[C],
                L = Math.abs(p - E.x),
                B = Math.abs(y - E.y);
              if (L <= Zs && B <= Zs) return !0;
            }
            return !1;
          }
          var Qs = X(a.style, 'touchAction'),
            to = Qs !== s,
            eo = 'compute',
            io = 'auto',
            kn = 'manipulation',
            ce = 'none',
            ze = 'pan-x',
            Be = 'pan-y',
            wi = Rl();
          function Pn(g, p) {
            ((this.manager = g), this.set(p));
          }
          Pn.prototype = {
            set: function (g) {
              (g == eo && (g = this.compute()),
                to && this.manager.element.style && wi[g] && (this.manager.element.style[Qs] = g),
                (this.actions = g.toLowerCase().trim()));
            },
            update: function () {
              this.set(this.manager.options.touchAction);
            },
            compute: function () {
              var g = [];
              return (
                f(this.manager.recognizers, function (p) {
                  v(p.options.enable, [p]) && (g = g.concat(p.getTouchAction()));
                }),
                Ll(g.join(' '))
              );
            },
            preventDefaults: function (g) {
              var p = g.srcEvent,
                y = g.offsetDirection;
              if (this.manager.session.prevented) {
                p.preventDefault();
                return;
              }
              var C = this.actions,
                E = T(C, ce) && !wi[ce],
                L = T(C, Be) && !wi[Be],
                B = T(C, ze) && !wi[ze];
              if (E) {
                var nt = g.pointers.length === 1,
                  ot = g.distance < 2,
                  dt = g.deltaTime < 250;
                if (nt && ot && dt) return;
              }
              if (!(B && L) && (E || (L && y & Et) || (B && y & le))) return this.preventSrc(p);
            },
            preventSrc: function (g) {
              ((this.manager.session.prevented = !0), g.preventDefault());
            },
          };
          function Ll(g) {
            if (T(g, ce)) return ce;
            var p = T(g, ze),
              y = T(g, Be);
            return p && y ? ce : p || y ? (p ? ze : Be) : T(g, kn) ? kn : io;
          }
          function Rl() {
            if (!to) return !1;
            var g = {},
              p = t.CSS && t.CSS.supports;
            return (
              ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(
                function (y) {
                  g[y] = p ? t.CSS.supports('touch-action', y) : !0;
                }
              ),
              g
            );
          }
          var Mi = 1,
            _t = 2,
            ke = 4,
            Yt = 8,
            zt = Yt,
            He = 16,
            Dt = 32;
          function Bt(g) {
            ((this.options = b({}, this.defaults, g || {})),
              (this.id = $()),
              (this.manager = null),
              (this.options.enable = S(this.options.enable, !0)),
              (this.state = Mi),
              (this.simultaneous = {}),
              (this.requireFail = []));
          }
          Bt.prototype = {
            defaults: {},
            set: function (g) {
              return (b(this.options, g), this.manager && this.manager.touchAction.update(), this);
            },
            recognizeWith: function (g) {
              if (d(g, 'recognizeWith', this)) return this;
              var p = this.simultaneous;
              return ((g = ki(g, this)), p[g.id] || ((p[g.id] = g), g.recognizeWith(this)), this);
            },
            dropRecognizeWith: function (g) {
              return d(g, 'dropRecognizeWith', this)
                ? this
                : ((g = ki(g, this)), delete this.simultaneous[g.id], this);
            },
            requireFailure: function (g) {
              if (d(g, 'requireFailure', this)) return this;
              var p = this.requireFail;
              return (
                (g = ki(g, this)),
                I(p, g) === -1 && (p.push(g), g.requireFailure(this)),
                this
              );
            },
            dropRequireFailure: function (g) {
              if (d(g, 'dropRequireFailure', this)) return this;
              g = ki(g, this);
              var p = I(this.requireFail, g);
              return (p > -1 && this.requireFail.splice(p, 1), this);
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (g) {
              return !!this.simultaneous[g.id];
            },
            emit: function (g) {
              var p = this,
                y = this.state;
              function C(E) {
                p.manager.emit(E, g);
              }
              (y < Yt && C(p.options.event + no(y)),
                C(p.options.event),
                g.additionalEvent && C(g.additionalEvent),
                y >= Yt && C(p.options.event + no(y)));
            },
            tryEmit: function (g) {
              if (this.canEmit()) return this.emit(g);
              this.state = Dt;
            },
            canEmit: function () {
              for (var g = 0; g < this.requireFail.length; ) {
                if (!(this.requireFail[g].state & (Dt | Mi))) return !1;
                g++;
              }
              return !0;
            },
            recognize: function (g) {
              var p = b({}, g);
              if (!v(this.options.enable, [this, p])) {
                (this.reset(), (this.state = Dt));
                return;
              }
              (this.state & (zt | He | Dt) && (this.state = Mi),
                (this.state = this.process(p)),
                this.state & (_t | ke | Yt | He) && this.tryEmit(p));
            },
            process: function (g) {},
            getTouchAction: function () {},
            reset: function () {},
          };
          function no(g) {
            return g & He ? 'cancel' : g & Yt ? 'end' : g & ke ? 'move' : g & _t ? 'start' : '';
          }
          function so(g) {
            return g == Ne ? 'down' : g == Fe ? 'up' : g == Le ? 'left' : g == Re ? 'right' : '';
          }
          function ki(g, p) {
            var y = p.manager;
            return y ? y.get(g) : g;
          }
          function kt() {
            Bt.apply(this, arguments);
          }
          w(kt, Bt, {
            defaults: { pointers: 1 },
            attrTest: function (g) {
              var p = this.options.pointers;
              return p === 0 || g.pointers.length === p;
            },
            process: function (g) {
              var p = this.state,
                y = g.eventType,
                C = p & (_t | ke),
                E = this.attrTest(g);
              return C && (y & ft || !E)
                ? p | He
                : C || E
                  ? y & et
                    ? p | Yt
                    : p & _t
                      ? p | ke
                      : _t
                  : Dt;
            },
          });
          function Pi() {
            (kt.apply(this, arguments), (this.pX = null), (this.pY = null));
          }
          w(Pi, kt, {
            defaults: { event: 'pan', threshold: 10, pointers: 1, direction: Ws },
            getTouchAction: function () {
              var g = this.options.direction,
                p = [];
              return (g & Et && p.push(Be), g & le && p.push(ze), p);
            },
            directionTest: function (g) {
              var p = this.options,
                y = !0,
                C = g.distance,
                E = g.direction,
                L = g.deltaX,
                B = g.deltaY;
              return (
                E & p.direction ||
                  (p.direction & Et
                    ? ((E = L === 0 ? yi : L < 0 ? Le : Re),
                      (y = L != this.pX),
                      (C = Math.abs(g.deltaX)))
                    : ((E = B === 0 ? yi : B < 0 ? Fe : Ne),
                      (y = B != this.pY),
                      (C = Math.abs(g.deltaY)))),
                (g.direction = E),
                y && C > p.threshold && E & p.direction
              );
            },
            attrTest: function (g) {
              return (
                kt.prototype.attrTest.call(this, g) &&
                (this.state & _t || (!(this.state & _t) && this.directionTest(g)))
              );
            },
            emit: function (g) {
              ((this.pX = g.deltaX), (this.pY = g.deltaY));
              var p = so(g.direction);
              (p && (g.additionalEvent = this.options.event + p), this._super.emit.call(this, g));
            },
          });
          function Cn() {
            kt.apply(this, arguments);
          }
          w(Cn, kt, {
            defaults: { event: 'pinch', threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return [ce];
            },
            attrTest: function (g) {
              return (
                this._super.attrTest.call(this, g) &&
                (Math.abs(g.scale - 1) > this.options.threshold || this.state & _t)
              );
            },
            emit: function (g) {
              if (g.scale !== 1) {
                var p = g.scale < 1 ? 'in' : 'out';
                g.additionalEvent = this.options.event + p;
              }
              this._super.emit.call(this, g);
            },
          });
          function An() {
            (Bt.apply(this, arguments), (this._timer = null), (this._input = null));
          }
          w(An, Bt, {
            defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return [io];
            },
            process: function (g) {
              var p = this.options,
                y = g.pointers.length === p.pointers,
                C = g.distance < p.threshold,
                E = g.deltaTime > p.time;
              if (((this._input = g), !C || !y || (g.eventType & (et | ft) && !E))) this.reset();
              else if (g.eventType & ut)
                (this.reset(),
                  (this._timer = u(
                    function () {
                      ((this.state = zt), this.tryEmit());
                    },
                    p.time,
                    this
                  )));
              else if (g.eventType & et) return zt;
              return Dt;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (g) {
              this.state === zt &&
                (g && g.eventType & et
                  ? this.manager.emit(this.options.event + 'up', g)
                  : ((this._input.timeStamp = h()),
                    this.manager.emit(this.options.event, this._input)));
            },
          });
          function Tn() {
            kt.apply(this, arguments);
          }
          w(Tn, kt, {
            defaults: { event: 'rotate', threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return [ce];
            },
            attrTest: function (g) {
              return (
                this._super.attrTest.call(this, g) &&
                (Math.abs(g.rotation) > this.options.threshold || this.state & _t)
              );
            },
          });
          function En() {
            kt.apply(this, arguments);
          }
          w(En, kt, {
            defaults: {
              event: 'swipe',
              threshold: 10,
              velocity: 0.3,
              direction: Et | le,
              pointers: 1,
            },
            getTouchAction: function () {
              return Pi.prototype.getTouchAction.call(this);
            },
            attrTest: function (g) {
              var p = this.options.direction,
                y;
              return (
                p & (Et | le)
                  ? (y = g.overallVelocity)
                  : p & Et
                    ? (y = g.overallVelocityX)
                    : p & le && (y = g.overallVelocityY),
                this._super.attrTest.call(this, g) &&
                  p & g.offsetDirection &&
                  g.distance > this.options.threshold &&
                  g.maxPointers == this.options.pointers &&
                  c(y) > this.options.velocity &&
                  g.eventType & et
              );
            },
            emit: function (g) {
              var p = so(g.offsetDirection);
              (p && this.manager.emit(this.options.event + p, g),
                this.manager.emit(this.options.event, g));
            },
          });
          function Ci() {
            (Bt.apply(this, arguments),
              (this.pTime = !1),
              (this.pCenter = !1),
              (this._timer = null),
              (this._input = null),
              (this.count = 0));
          }
          w(Ci, Bt, {
            defaults: {
              event: 'tap',
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return [kn];
            },
            process: function (g) {
              var p = this.options,
                y = g.pointers.length === p.pointers,
                C = g.distance < p.threshold,
                E = g.deltaTime < p.time;
              if ((this.reset(), g.eventType & ut && this.count === 0)) return this.failTimeout();
              if (C && E && y) {
                if (g.eventType != et) return this.failTimeout();
                var L = this.pTime ? g.timeStamp - this.pTime < p.interval : !0,
                  B = !this.pCenter || _i(this.pCenter, g.center) < p.posThreshold;
                ((this.pTime = g.timeStamp),
                  (this.pCenter = g.center),
                  !B || !L ? (this.count = 1) : (this.count += 1),
                  (this._input = g));
                var nt = this.count % p.taps;
                if (nt === 0)
                  return this.hasRequireFailures()
                    ? ((this._timer = u(
                        function () {
                          ((this.state = zt), this.tryEmit());
                        },
                        p.interval,
                        this
                      )),
                      _t)
                    : zt;
              }
              return Dt;
            },
            failTimeout: function () {
              return (
                (this._timer = u(
                  function () {
                    this.state = Dt;
                  },
                  this.options.interval,
                  this
                )),
                Dt
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              this.state == zt &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          });
          function Xt(g, p) {
            return (
              (p = p || {}),
              (p.recognizers = S(p.recognizers, Xt.defaults.preset)),
              new Dn(g, p)
            );
          }
          ((Xt.VERSION = '2.0.7'),
            (Xt.defaults = {
              domEvents: !1,
              touchAction: eo,
              enable: !0,
              inputTarget: null,
              inputClass: null,
              preset: [
                [Tn, { enable: !1 }],
                [Cn, { enable: !1 }, ['rotate']],
                [En, { direction: Et }],
                [Pi, { direction: Et }, ['swipe']],
                [Ci],
                [Ci, { event: 'doubletap', taps: 2 }, ['tap']],
                [An],
              ],
              cssProps: {
                userSelect: 'none',
                touchSelect: 'none',
                touchCallout: 'none',
                contentZooming: 'none',
                userDrag: 'none',
                tapHighlightColor: 'rgba(0,0,0,0)',
              },
            }));
          var Fl = 1,
            oo = 2;
          function Dn(g, p) {
            ((this.options = b({}, Xt.defaults, p || {})),
              (this.options.inputTarget = this.options.inputTarget || g),
              (this.handlers = {}),
              (this.session = {}),
              (this.recognizers = []),
              (this.oldCssProps = {}),
              (this.element = g),
              (this.input = dl(this)),
              (this.touchAction = new Pn(this, this.options.touchAction)),
              ao(this, !0),
              f(
                this.options.recognizers,
                function (y) {
                  var C = this.add(new y[0](y[1]));
                  (y[2] && C.recognizeWith(y[2]), y[3] && C.requireFailure(y[3]));
                },
                this
              ));
          }
          Dn.prototype = {
            set: function (g) {
              return (
                b(this.options, g),
                g.touchAction && this.touchAction.update(),
                g.inputTarget &&
                  (this.input.destroy(), (this.input.target = g.inputTarget), this.input.init()),
                this
              );
            },
            stop: function (g) {
              this.session.stopped = g ? oo : Fl;
            },
            recognize: function (g) {
              var p = this.session;
              if (!p.stopped) {
                this.touchAction.preventDefaults(g);
                var y,
                  C = this.recognizers,
                  E = p.curRecognizer;
                (!E || (E && E.state & zt)) && (E = p.curRecognizer = null);
                for (var L = 0; L < C.length; )
                  ((y = C[L]),
                    p.stopped !== oo && (!E || y == E || y.canRecognizeWith(E))
                      ? y.recognize(g)
                      : y.reset(),
                    !E && y.state & (_t | ke | Yt) && (E = p.curRecognizer = y),
                    L++);
              }
            },
            get: function (g) {
              if (g instanceof Bt) return g;
              for (var p = this.recognizers, y = 0; y < p.length; y++)
                if (p[y].options.event == g) return p[y];
              return null;
            },
            add: function (g) {
              if (d(g, 'add', this)) return this;
              var p = this.get(g.options.event);
              return (
                p && this.remove(p),
                this.recognizers.push(g),
                (g.manager = this),
                this.touchAction.update(),
                g
              );
            },
            remove: function (g) {
              if (d(g, 'remove', this)) return this;
              if (((g = this.get(g)), g)) {
                var p = this.recognizers,
                  y = I(p, g);
                y !== -1 && (p.splice(y, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (g, p) {
              if (g !== s && p !== s) {
                var y = this.handlers;
                return (
                  f(O(g), function (C) {
                    ((y[C] = y[C] || []), y[C].push(p));
                  }),
                  this
                );
              }
            },
            off: function (g, p) {
              if (g !== s) {
                var y = this.handlers;
                return (
                  f(O(g), function (C) {
                    p ? y[C] && y[C].splice(I(y[C], p), 1) : delete y[C];
                  }),
                  this
                );
              }
            },
            emit: function (g, p) {
              this.options.domEvents && Nl(g, p);
              var y = this.handlers[g] && this.handlers[g].slice();
              if (!(!y || !y.length)) {
                ((p.type = g),
                  (p.preventDefault = function () {
                    p.srcEvent.preventDefault();
                  }));
                for (var C = 0; C < y.length; ) (y[C](p), C++);
              }
            },
            destroy: function () {
              (this.element && ao(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null));
            },
          };
          function ao(g, p) {
            var y = g.element;
            if (y.style) {
              var C;
              (f(g.options.cssProps, function (E, L) {
                ((C = X(y.style, L)),
                  p
                    ? ((g.oldCssProps[C] = y.style[C]), (y.style[C] = E))
                    : (y.style[C] = g.oldCssProps[C] || ''));
              }),
                p || (g.oldCssProps = {}));
            }
          }
          function Nl(g, p) {
            var y = e.createEvent('Event');
            (y.initEvent(g, !0, !0), (y.gesture = p), p.target.dispatchEvent(y));
          }
          b(Xt, {
            INPUT_START: ut,
            INPUT_MOVE: re,
            INPUT_END: et,
            INPUT_CANCEL: ft,
            STATE_POSSIBLE: Mi,
            STATE_BEGAN: _t,
            STATE_CHANGED: ke,
            STATE_ENDED: Yt,
            STATE_RECOGNIZED: zt,
            STATE_CANCELLED: He,
            STATE_FAILED: Dt,
            DIRECTION_NONE: yi,
            DIRECTION_LEFT: Le,
            DIRECTION_RIGHT: Re,
            DIRECTION_UP: Fe,
            DIRECTION_DOWN: Ne,
            DIRECTION_HORIZONTAL: Et,
            DIRECTION_VERTICAL: le,
            DIRECTION_ALL: Ws,
            Manager: Dn,
            Input: xt,
            TouchAction: Pn,
            TouchInput: Si,
            MouseInput: vi,
            PointerEventInput: wn,
            TouchMouseInput: Mn,
            SingleTouchInput: Gs,
            Recognizer: Bt,
            AttrRecognizer: kt,
            Tap: Ci,
            Pan: Pi,
            Swipe: En,
            Pinch: Cn,
            Rotate: Tn,
            Press: An,
            on: M,
            off: A,
            each: f,
            merge: _,
            extend: x,
            assign: b,
            inherit: w,
            bindFn: P,
            prefixed: X,
          });
          var zl = typeof t < 'u' ? t : typeof self < 'u' ? self : {};
          ((zl.Hammer = Xt), i.exports ? (i.exports = Xt) : (t[n] = Xt));
        })(window, document, 'Hammer');
      })(qn)),
    qn.exports
  );
}
var Mg = wg();
const ni = Sg(Mg);
/*!
 * chartjs-plugin-zoom v2.2.0
 * https://www.chartjs.org/chartjs-plugin-zoom/2.2.0/
 * (c) 2016-2024 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */ const pi = (i) => i && i.enabled && i.modifierKey,
  Zr = (i, t) => i && t[i + 'Key'],
  Hs = (i, t) => i && !t[i + 'Key'];
function ne(i, t, e) {
  return i === void 0
    ? !0
    : typeof i == 'string'
      ? i.indexOf(t) !== -1
      : typeof i == 'function'
        ? i({ chart: e }).indexOf(t) !== -1
        : !1;
}
function Kn(i, t) {
  return (
    typeof i == 'function' && (i = i({ chart: t })),
    typeof i == 'string' ? { x: i.indexOf('x') !== -1, y: i.indexOf('y') !== -1 } : { x: !1, y: !1 }
  );
}
function kg(i, t) {
  let e;
  return function () {
    return (clearTimeout(e), (e = setTimeout(i, t)), t);
  };
}
function Pg({ x: i, y: t }, e) {
  const n = e.scales,
    s = Object.keys(n);
  for (let o = 0; o < s.length; o++) {
    const a = n[s[o]];
    if (t >= a.top && t <= a.bottom && i >= a.left && i <= a.right) return a;
  }
  return null;
}
function Jr(i, t, e) {
  const { mode: n = 'xy', scaleMode: s, overScaleMode: o } = i || {},
    a = Pg(t, e),
    r = Kn(n, e),
    l = Kn(s, e);
  if (o) {
    const h = Kn(o, e);
    for (const u of ['x', 'y']) h[u] && ((l[u] = r[u]), (r[u] = !1));
  }
  if (a && l[a.axis]) return [a];
  const c = [];
  return (
    H(e.scales, function (h) {
      r[h.axis] && c.push(h);
    }),
    c
  );
}
const bs = new WeakMap();
function Z(i) {
  let t = bs.get(i);
  return (
    t ||
      ((t = {
        originalScaleLimits: {},
        updatedScaleLimits: {},
        handlers: {},
        panDelta: {},
        dragging: !1,
        panning: !1,
      }),
      bs.set(i, t)),
    t
  );
}
function Cg(i) {
  bs.delete(i);
}
function Qr(i, t, e, n) {
  const s = Math.max(0, Math.min(1, (i - t) / e || 0)),
    o = 1 - s;
  return { min: n * s, max: n * o };
}
function tl(i, t) {
  const e = i.isHorizontal() ? t.x : t.y;
  return i.getValueForPixel(e);
}
function el(i, t, e) {
  const n = i.max - i.min,
    s = n * (t - 1),
    o = tl(i, e);
  return Qr(o, i.min, n, s);
}
function Ag(i, t, e) {
  const n = tl(i, e);
  if (n === void 0) return { min: i.min, max: i.max };
  const s = Math.log10(i.min),
    o = Math.log10(i.max),
    a = Math.log10(n),
    r = o - s,
    l = r * (t - 1),
    c = Qr(a, s, r, l);
  return { min: Math.pow(10, s + c.min), max: Math.pow(10, o - c.max) };
}
function Tg(i, t) {
  return (t && (t[i.id] || t[i.axis])) || {};
}
function Na(i, t, e, n, s) {
  let o = e[n];
  if (o === 'original') {
    const a = i.originalScaleLimits[t.id][n];
    o = N(a.options, a.scale);
  }
  return N(o, s);
}
function Eg(i, t, e) {
  const n = i.getValueForPixel(t),
    s = i.getValueForPixel(e);
  return { min: Math.min(n, s), max: Math.max(n, s) };
}
function Dg(i, { min: t, max: e, minLimit: n, maxLimit: s }, o) {
  var h, u;
  const a = (i - e + t) / 2;
  ((t -= a), (e += a));
  const r = (h = o.min.options) != null ? h : o.min.scale,
    l = (u = o.max.options) != null ? u : o.max.scale,
    c = i / 1e6;
  return (
    be(t, r, c) && (t = r),
    be(e, l, c) && (e = l),
    t < n ? ((t = n), (e = Math.min(n + i, s))) : e > s && ((e = s), (t = Math.max(s - i, n))),
    { min: t, max: e }
  );
}
function we(i, { min: t, max: e }, n, s = !1) {
  const o = Z(i.chart),
    { options: a } = i,
    r = Tg(i, n),
    { minRange: l = 0 } = r,
    c = Na(o, i, r, 'min', -1 / 0),
    h = Na(o, i, r, 'max', 1 / 0);
  if (s === 'pan' && (t < c || e > h)) return !0;
  const u = i.max - i.min,
    d = s ? Math.max(e - t, l) : u;
  if (s && d === l && u <= l) return !0;
  const f = Dg(d, { min: t, max: e, minLimit: c, maxLimit: h }, o.originalScaleLimits[i.id]);
  return (
    (a.min = f.min),
    (a.max = f.max),
    (o.updatedScaleLimits[i.id] = f),
    i.parse(f.min) !== i.min || i.parse(f.max) !== i.max
  );
}
function Og(i, t, e, n) {
  const s = el(i, t, e),
    o = { min: i.min + s.min, max: i.max - s.max };
  return we(i, o, n, !0);
}
function Ig(i, t, e, n) {
  const s = Ag(i, t, e);
  return we(i, s, n, !0);
}
function Lg(i, t, e, n) {
  we(i, Eg(i, t, e), n, !0);
}
const za = (i) =>
  i === 0 || isNaN(i) ? 0 : i < 0 ? Math.min(Math.round(i), -1) : Math.max(Math.round(i), 1);
function Rg(i) {
  const e = i.getLabels().length - 1;
  (i.min > 0 && (i.min -= 1), i.max < e && (i.max += 1));
}
function Fg(i, t, e, n) {
  const s = el(i, t, e);
  i.min === i.max && t < 1 && Rg(i);
  const o = { min: i.min + za(s.min), max: i.max - za(s.max) };
  return we(i, o, n, !0);
}
function Ng(i) {
  return i.isHorizontal() ? i.width : i.height;
}
function zg(i, t, e) {
  const s = i.getLabels().length - 1;
  let { min: o, max: a } = i;
  const r = Math.max(a - o, 1),
    l = Math.round(Ng(i) / Math.max(r, 10)),
    c = Math.round(Math.abs(t / l));
  let h;
  return (
    t < -l
      ? ((a = Math.min(a + c, s)), (o = r === 1 ? a : a - r), (h = a === s))
      : t > l && ((o = Math.max(0, o - c)), (a = r === 1 ? o : o + r), (h = o === 0)),
    we(i, { min: o, max: a }, e) || h
  );
}
const Bg = {
  second: 500,
  minute: 30 * 1e3,
  hour: 1800 * 1e3,
  day: 720 * 60 * 1e3,
  week: 3.5 * 24 * 60 * 60 * 1e3,
  month: 360 * 60 * 60 * 1e3,
  quarter: 1440 * 60 * 60 * 1e3,
  year: 4368 * 60 * 60 * 1e3,
};
function il(i, t, e, n = !1) {
  const { min: s, max: o, options: a } = i,
    r = a.time && a.time.round,
    l = Bg[r] || 0,
    c = i.getValueForPixel(i.getPixelForValue(s + l) - t),
    h = i.getValueForPixel(i.getPixelForValue(o + l) - t);
  return isNaN(c) || isNaN(h) ? !0 : we(i, { min: c, max: h }, e, n ? 'pan' : !1);
}
function Ba(i, t, e) {
  return il(i, t, e, !0);
}
const ys = { category: Fg, default: Og, logarithmic: Ig },
  xs = { default: Lg },
  _s = { category: zg, default: il, logarithmic: Ba, timeseries: Ba };
function Hg(i, t, e) {
  const {
    id: n,
    options: { min: s, max: o },
  } = i;
  if (!t[n] || !e[n]) return !0;
  const a = e[n];
  return a.min !== s || a.max !== o;
}
function Ha(i, t) {
  H(i, (e, n) => {
    t[n] || delete i[n];
  });
}
function Ie(i, t) {
  const { scales: e } = i,
    { originalScaleLimits: n, updatedScaleLimits: s } = t;
  return (
    H(e, function (o) {
      Hg(o, n, s) &&
        (n[o.id] = {
          min: { scale: o.min, options: o.options.min },
          max: { scale: o.max, options: o.options.max },
        });
    }),
    Ha(n, e),
    Ha(s, e),
    n
  );
}
function Va(i, t, e, n) {
  const s = ys[i.type] || ys.default;
  F(s, [i, t, e, n]);
}
function Wa(i, t, e, n) {
  const s = xs[i.type] || xs.default;
  F(s, [i, t, e, n]);
}
function Vg(i) {
  const t = i.chartArea;
  return { x: (t.left + t.right) / 2, y: (t.top + t.bottom) / 2 };
}
function Vs(i, t, e = 'none', n = 'api') {
  const { x: s = 1, y: o = 1, focalPoint: a = Vg(i) } = typeof t == 'number' ? { x: t, y: t } : t,
    r = Z(i),
    {
      options: { limits: l, zoom: c },
    } = r;
  Ie(i, r);
  const h = s !== 1,
    u = o !== 1,
    d = Jr(c, a, i);
  (H(d || i.scales, function (f) {
    f.isHorizontal() && h ? Va(f, s, a, l) : !f.isHorizontal() && u && Va(f, o, a, l);
  }),
    i.update(e),
    F(c.onZoom, [{ chart: i, trigger: n }]));
}
function nl(i, t, e, n = 'none', s = 'api') {
  const o = Z(i),
    {
      options: { limits: a, zoom: r },
    } = o,
    { mode: l = 'xy' } = r;
  Ie(i, o);
  const c = ne(l, 'x', i),
    h = ne(l, 'y', i);
  (H(i.scales, function (u) {
    u.isHorizontal() && c ? Wa(u, t.x, e.x, a) : !u.isHorizontal() && h && Wa(u, t.y, e.y, a);
  }),
    i.update(n),
    F(r.onZoom, [{ chart: i, trigger: s }]));
}
function Wg(i, t, e, n = 'none', s = 'api') {
  var r;
  const o = Z(i);
  Ie(i, o);
  const a = i.scales[t];
  (we(a, e, void 0, !0),
    i.update(n),
    F((r = o.options.zoom) == null ? void 0 : r.onZoom, [{ chart: i, trigger: s }]));
}
function $g(i, t = 'default') {
  const e = Z(i),
    n = Ie(i, e);
  (H(i.scales, function (s) {
    const o = s.options;
    (n[s.id]
      ? ((o.min = n[s.id].min.options), (o.max = n[s.id].max.options))
      : (delete o.min, delete o.max),
      delete e.updatedScaleLimits[s.id]);
  }),
    i.update(t),
    F(e.options.zoom.onZoomComplete, [{ chart: i }]));
}
function jg(i, t) {
  const e = i.originalScaleLimits[t];
  if (!e) return;
  const { min: n, max: s } = e;
  return N(s.options, s.scale) - N(n.options, n.scale);
}
function Ug(i) {
  const t = Z(i);
  let e = 1,
    n = 1;
  return (
    H(i.scales, function (s) {
      const o = jg(t, s.id);
      if (o) {
        const a = Math.round((o / (s.max - s.min)) * 100) / 100;
        ((e = Math.min(e, a)), (n = Math.max(n, a)));
      }
    }),
    e < 1 ? e : n
  );
}
function $a(i, t, e, n) {
  const { panDelta: s } = n,
    o = s[i.id] || 0;
  St(o) === St(t) && (t += o);
  const a = _s[i.type] || _s.default;
  F(a, [i, t, e]) ? (s[i.id] = 0) : (s[i.id] = t);
}
function sl(i, t, e, n = 'none') {
  const { x: s = 0, y: o = 0 } = typeof t == 'number' ? { x: t, y: t } : t,
    a = Z(i),
    {
      options: { pan: r, limits: l },
    } = a,
    { onPan: c } = r || {};
  Ie(i, a);
  const h = s !== 0,
    u = o !== 0;
  (H(e || i.scales, function (d) {
    d.isHorizontal() && h ? $a(d, s, l, a) : !d.isHorizontal() && u && $a(d, o, l, a);
  }),
    i.update(n),
    F(c, [{ chart: i }]));
}
function ol(i) {
  const t = Z(i);
  Ie(i, t);
  const e = {};
  for (const n of Object.keys(i.scales)) {
    const { min: s, max: o } = t.originalScaleLimits[n] || { min: {}, max: {} };
    e[n] = { min: s.scale, max: o.scale };
  }
  return e;
}
function Yg(i) {
  const t = Z(i),
    e = {};
  for (const n of Object.keys(i.scales)) e[n] = t.updatedScaleLimits[n];
  return e;
}
function Xg(i) {
  const t = ol(i);
  for (const e of Object.keys(i.scales)) {
    const { min: n, max: s } = t[e];
    if ((n !== void 0 && i.scales[e].min !== n) || (s !== void 0 && i.scales[e].max !== s))
      return !0;
  }
  return !1;
}
function ja(i) {
  const t = Z(i);
  return t.panning || t.dragging;
}
const Ua = (i, t, e) => Math.min(e, Math.max(t, i));
function pt(i, t) {
  const { handlers: e } = Z(i),
    n = e[t];
  n && n.target && (n.target.removeEventListener(t, n), delete e[t]);
}
function si(i, t, e, n) {
  const { handlers: s, options: o } = Z(i),
    a = s[e];
  if (a && a.target === t) return;
  (pt(i, e), (s[e] = (l) => n(i, l, o)), (s[e].target = t));
  const r = e === 'wheel' ? !1 : void 0;
  t.addEventListener(e, s[e], { passive: r });
}
function qg(i, t) {
  const e = Z(i);
  e.dragStart && ((e.dragging = !0), (e.dragEnd = t), i.update('none'));
}
function Kg(i, t) {
  const e = Z(i);
  !e.dragStart ||
    t.key !== 'Escape' ||
    (pt(i, 'keydown'), (e.dragging = !1), (e.dragStart = e.dragEnd = null), i.update('none'));
}
function vs(i, t) {
  if (i.target !== t.canvas) {
    const e = t.canvas.getBoundingClientRect();
    return { x: i.clientX - e.left, y: i.clientY - e.top };
  }
  return Rt(i, t);
}
function al(i, t, e) {
  const { onZoomStart: n, onZoomRejected: s } = e;
  if (n) {
    const o = vs(t, i);
    if (F(n, [{ chart: i, event: t, point: o }]) === !1)
      return (F(s, [{ chart: i, event: t }]), !1);
  }
}
function Gg(i, t) {
  if (i.legend) {
    const o = Rt(t, i);
    if (Ft(o, i.legend)) return;
  }
  const e = Z(i),
    { pan: n, zoom: s = {} } = e.options;
  if (t.button !== 0 || Zr(pi(n), t) || Hs(pi(s.drag), t))
    return F(s.onZoomRejected, [{ chart: i, event: t }]);
  al(i, t, s) !== !1 &&
    ((e.dragStart = t),
    si(i, i.canvas.ownerDocument, 'mousemove', qg),
    si(i, window.document, 'keydown', Kg));
}
function Zg({ begin: i, end: t }, e) {
  let n = t.x - i.x,
    s = t.y - i.y;
  const o = Math.abs(n / s);
  (o > e ? (n = Math.sign(n) * Math.abs(s * e)) : o < e && (s = Math.sign(s) * Math.abs(n / e)),
    (t.x = i.x + n),
    (t.y = i.y + s));
}
function Ya(i, t, e, { min: n, max: s, prop: o }) {
  ((i[n] = Ua(Math.min(e.begin[o], e.end[o]), t[n], t[s])),
    (i[s] = Ua(Math.max(e.begin[o], e.end[o]), t[n], t[s])));
}
function Jg(i, t, e) {
  const n = { begin: vs(t.dragStart, i), end: vs(t.dragEnd, i) };
  if (e) {
    const s = i.chartArea.width / i.chartArea.height;
    Zg(n, s);
  }
  return n;
}
function rl(i, t, e, n) {
  const s = ne(t, 'x', i),
    o = ne(t, 'y', i),
    { top: a, left: r, right: l, bottom: c, width: h, height: u } = i.chartArea,
    d = { top: a, left: r, right: l, bottom: c },
    f = Jg(i, e, n && s && o);
  (s && Ya(d, i.chartArea, f, { min: 'left', max: 'right', prop: 'x' }),
    o && Ya(d, i.chartArea, f, { min: 'top', max: 'bottom', prop: 'y' }));
  const m = d.right - d.left,
    b = d.bottom - d.top;
  return {
    ...d,
    width: m,
    height: b,
    zoomX: s && m ? 1 + (h - m) / h : 1,
    zoomY: o && b ? 1 + (u - b) / u : 1,
  };
}
function Qg(i, t) {
  const e = Z(i);
  if (!e.dragStart) return;
  pt(i, 'mousemove');
  const {
      mode: n,
      onZoomComplete: s,
      drag: { threshold: o = 0, maintainAspectRatio: a },
    } = e.options.zoom,
    r = rl(i, n, { dragStart: e.dragStart, dragEnd: t }, a),
    l = ne(n, 'x', i) ? r.width : 0,
    c = ne(n, 'y', i) ? r.height : 0,
    h = Math.sqrt(l * l + c * c);
  if (((e.dragStart = e.dragEnd = null), h <= o)) {
    ((e.dragging = !1), i.update('none'));
    return;
  }
  (nl(i, { x: r.left, y: r.top }, { x: r.right, y: r.bottom }, 'zoom', 'drag'),
    (e.dragging = !1),
    (e.filterNextClick = !0),
    F(s, [{ chart: i }]));
}
function tp(i, t, e) {
  if (Hs(pi(e.wheel), t)) {
    F(e.onZoomRejected, [{ chart: i, event: t }]);
    return;
  }
  if (al(i, t, e) !== !1 && (t.cancelable && t.preventDefault(), t.deltaY !== void 0)) return !0;
}
function ep(i, t) {
  const {
    handlers: { onZoomComplete: e },
    options: { zoom: n },
  } = Z(i);
  if (!tp(i, t, n)) return;
  const s = t.target.getBoundingClientRect(),
    o = n.wheel.speed,
    a = t.deltaY >= 0 ? 2 - 1 / (1 - o) : 1 + o,
    r = { x: a, y: a, focalPoint: { x: t.clientX - s.left, y: t.clientY - s.top } };
  (Vs(i, r, 'zoom', 'wheel'), F(e, [{ chart: i }]));
}
function ip(i, t, e, n) {
  e && (Z(i).handlers[t] = kg(() => F(e, [{ chart: i }]), n));
}
function np(i, t) {
  const e = i.canvas,
    { wheel: n, drag: s, onZoomComplete: o } = t.zoom;
  (n.enabled ? (si(i, e, 'wheel', ep), ip(i, 'onZoomComplete', o, 250)) : pt(i, 'wheel'),
    s.enabled
      ? (si(i, e, 'mousedown', Gg), si(i, e.ownerDocument, 'mouseup', Qg))
      : (pt(i, 'mousedown'), pt(i, 'mousemove'), pt(i, 'mouseup'), pt(i, 'keydown')));
}
function sp(i) {
  (pt(i, 'mousedown'),
    pt(i, 'mousemove'),
    pt(i, 'mouseup'),
    pt(i, 'wheel'),
    pt(i, 'click'),
    pt(i, 'keydown'));
}
function op(i, t) {
  return function (e, n) {
    const { pan: s, zoom: o = {} } = t.options;
    if (!s || !s.enabled) return !1;
    const a = n && n.srcEvent;
    return a && !t.panning && n.pointerType === 'mouse' && (Hs(pi(s), a) || Zr(pi(o.drag), a))
      ? (F(s.onPanRejected, [{ chart: i, event: n }]), !1)
      : !0;
  };
}
function ap(i, t) {
  const e = Math.abs(i.clientX - t.clientX),
    n = Math.abs(i.clientY - t.clientY),
    s = e / n;
  let o, a;
  return (s > 0.3 && s < 1.7 ? (o = a = !0) : e > n ? (o = !0) : (a = !0), { x: o, y: a });
}
function ll(i, t, e) {
  if (t.scale) {
    const { center: n, pointers: s } = e,
      o = (1 / t.scale) * e.scale,
      a = e.target.getBoundingClientRect(),
      r = ap(s[0], s[1]),
      l = t.options.zoom.mode,
      c = {
        x: r.x && ne(l, 'x', i) ? o : 1,
        y: r.y && ne(l, 'y', i) ? o : 1,
        focalPoint: { x: n.x - a.left, y: n.y - a.top },
      };
    (Vs(i, c, 'zoom', 'pinch'), (t.scale = e.scale));
  }
}
function rp(i, t, e) {
  if (t.options.zoom.pinch.enabled) {
    const n = Rt(e, i);
    F(t.options.zoom.onZoomStart, [{ chart: i, event: e, point: n }]) === !1
      ? ((t.scale = null), F(t.options.zoom.onZoomRejected, [{ chart: i, event: e }]))
      : (t.scale = 1);
  }
}
function lp(i, t, e) {
  t.scale && (ll(i, t, e), (t.scale = null), F(t.options.zoom.onZoomComplete, [{ chart: i }]));
}
function cl(i, t, e) {
  const n = t.delta;
  n &&
    ((t.panning = !0),
    sl(i, { x: e.deltaX - n.x, y: e.deltaY - n.y }, t.panScales),
    (t.delta = { x: e.deltaX, y: e.deltaY }));
}
function cp(i, t, e) {
  const { enabled: n, onPanStart: s, onPanRejected: o } = t.options.pan;
  if (!n) return;
  const a = e.target.getBoundingClientRect(),
    r = { x: e.center.x - a.left, y: e.center.y - a.top };
  if (F(s, [{ chart: i, event: e, point: r }]) === !1) return F(o, [{ chart: i, event: e }]);
  ((t.panScales = Jr(t.options.pan, r, i)), (t.delta = { x: 0, y: 0 }), cl(i, t, e));
}
function hp(i, t) {
  ((t.delta = null),
    t.panning &&
      ((t.panning = !1), (t.filterNextClick = !0), F(t.options.pan.onPanComplete, [{ chart: i }])));
}
const Ss = new WeakMap();
function Xa(i, t) {
  const e = Z(i),
    n = i.canvas,
    { pan: s, zoom: o } = t,
    a = new ni.Manager(n);
  (o &&
    o.pinch.enabled &&
    (a.add(new ni.Pinch()),
    a.on('pinchstart', (r) => rp(i, e, r)),
    a.on('pinch', (r) => ll(i, e, r)),
    a.on('pinchend', (r) => lp(i, e, r))),
    s &&
      s.enabled &&
      (a.add(new ni.Pan({ threshold: s.threshold, enable: op(i, e) })),
      a.on('panstart', (r) => cp(i, e, r)),
      a.on('panmove', (r) => cl(i, e, r)),
      a.on('panend', () => hp(i, e))),
    Ss.set(i, a));
}
function qa(i) {
  const t = Ss.get(i);
  t &&
    (t.remove('pinchstart'),
    t.remove('pinch'),
    t.remove('pinchend'),
    t.remove('panstart'),
    t.remove('pan'),
    t.remove('panend'),
    t.destroy(),
    Ss.delete(i));
}
function up(i, t) {
  var a, r, l, c;
  const { pan: e, zoom: n } = i,
    { pan: s, zoom: o } = t;
  return (
    ((r = (a = n == null ? void 0 : n.zoom) == null ? void 0 : a.pinch) == null
      ? void 0
      : r.enabled) !==
      ((c = (l = o == null ? void 0 : o.zoom) == null ? void 0 : l.pinch) == null
        ? void 0
        : c.enabled) ||
    (e == null ? void 0 : e.enabled) !== (s == null ? void 0 : s.enabled) ||
    (e == null ? void 0 : e.threshold) !== (s == null ? void 0 : s.threshold)
  );
}
var dp = '2.2.0';
function Ui(i, t, e) {
  const n = e.zoom.drag,
    { dragStart: s, dragEnd: o } = Z(i);
  if (n.drawTime !== t || !o) return;
  const {
      left: a,
      top: r,
      width: l,
      height: c,
    } = rl(i, e.zoom.mode, { dragStart: s, dragEnd: o }, n.maintainAspectRatio),
    h = i.ctx;
  (h.save(),
    h.beginPath(),
    (h.fillStyle = n.backgroundColor || 'rgba(225,225,225,0.3)'),
    h.fillRect(a, r, l, c),
    n.borderWidth > 0 &&
      ((h.lineWidth = n.borderWidth),
      (h.strokeStyle = n.borderColor || 'rgba(225,225,225)'),
      h.strokeRect(a, r, l, c)),
    h.restore());
}
var fp = {
  id: 'zoom',
  version: dp,
  defaults: {
    pan: { enabled: !1, mode: 'xy', threshold: 10, modifierKey: null },
    zoom: {
      wheel: { enabled: !1, speed: 0.1, modifierKey: null },
      drag: { enabled: !1, drawTime: 'beforeDatasetsDraw', modifierKey: null },
      pinch: { enabled: !1 },
      mode: 'xy',
    },
  },
  start: function (i, t, e) {
    const n = Z(i);
    ((n.options = e),
      Object.prototype.hasOwnProperty.call(e.zoom, 'enabled') &&
        console.warn(
          'The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`.'
        ),
      (Object.prototype.hasOwnProperty.call(e.zoom, 'overScaleMode') ||
        Object.prototype.hasOwnProperty.call(e.pan, 'overScaleMode')) &&
        console.warn(
          'The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired).'
        ),
      ni && Xa(i, e),
      (i.pan = (s, o, a) => sl(i, s, o, a)),
      (i.zoom = (s, o) => Vs(i, s, o)),
      (i.zoomRect = (s, o, a) => nl(i, s, o, a)),
      (i.zoomScale = (s, o, a) => Wg(i, s, o, a)),
      (i.resetZoom = (s) => $g(i, s)),
      (i.getZoomLevel = () => Ug(i)),
      (i.getInitialScaleBounds = () => ol(i)),
      (i.getZoomedScaleBounds = () => Yg(i)),
      (i.isZoomedOrPanned = () => Xg(i)),
      (i.isZoomingOrPanning = () => ja(i)));
  },
  beforeEvent(i, { event: t }) {
    if (ja(i)) return !1;
    if (t.type === 'click' || t.type === 'mouseup') {
      const e = Z(i);
      if (e.filterNextClick) return ((e.filterNextClick = !1), !1);
    }
  },
  beforeUpdate: function (i, t, e) {
    const n = Z(i),
      s = n.options;
    ((n.options = e), up(s, e) && (qa(i), Xa(i, e)), np(i, e));
  },
  beforeDatasetsDraw(i, t, e) {
    Ui(i, 'beforeDatasetsDraw', e);
  },
  afterDatasetsDraw(i, t, e) {
    Ui(i, 'afterDatasetsDraw', e);
  },
  beforeDraw(i, t, e) {
    Ui(i, 'beforeDraw', e);
  },
  afterDraw(i, t, e) {
    Ui(i, 'afterDraw', e);
  },
  stop: function (i) {
    (sp(i), ni && qa(i), Cg(i));
  },
  panFunctions: _s,
  zoomFunctions: ys,
  zoomRectFunctions: xs,
};
bn.register(fp);
const _n = bn;
function vn() {
  return {
    pan: { enabled: !0, mode: 'xy' },
    zoom: { wheel: { enabled: !0 }, pinch: { enabled: !0 }, drag: { enabled: !1 }, mode: 'xy' },
  };
}
function gp({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = document.getElementById('quotes-form'),
    o = document.getElementById('quotes-symbol'),
    a = document.getElementById('quotes-list'),
    r = document.getElementById('quotes-filter'),
    l = document.getElementById('price-chart');
  let c = i.state.watchlist[0] || i.state.settings.defaultSymbol || 'AAPL',
    h = n,
    u;
  (s.addEventListener('submit', async (_) => {
    _.preventDefault();
    const w = o.value.trim().toUpperCase();
    w &&
      (i.state.watchlist.includes(w) || (i.state.watchlist.push(w), i.persist()),
      (c = w),
      s.reset(),
      await d());
  }),
    r.addEventListener('input', () => f()),
    a.addEventListener('click', async (_) => {
      const w = _.target.closest('button[data-action="remove"]'),
        P = _.target.closest('.card[data-symbol]');
      if (w) {
        const v = w.dataset.symbol;
        ((i.state.watchlist = i.state.watchlist.filter((S) => S !== v)),
          i.persist(),
          c === v && (c = i.state.watchlist[0] || i.state.settings.defaultSymbol || 'AAPL'),
          await d());
        return;
      }
      P && ((c = P.dataset.symbol), f(), await m(c));
    }));
  async function d() {
    (i.state.watchlist.includes(c) ||
      (c = i.state.watchlist[0] || i.state.settings.defaultSymbol || 'AAPL'),
      await f(),
      await m(c));
  }
  async function f() {
    if (!i.state.watchlist.length) {
      ((a.innerHTML = '<p class="small-text">'.concat(e.t('quotes.empty'), '</p>')),
        u && (u.destroy(), (u = null)));
      return;
    }
    const _ = r.value.trim().toUpperCase(),
      w = _ ? i.state.watchlist.filter((v) => v.toUpperCase().includes(_)) : [...i.state.watchlist],
      P = await Promise.all(
        w.map(async (v) => {
          const S = await t.getQuote(v);
          return { symbol: v, quote: S };
        })
      );
    a.innerHTML = P.map(({ symbol: v, quote: S }) => {
      const M = S.change >= 0 ? 'positive' : 'negative',
        A = v === c ? 'active' : '';
      return '<div class="card '
        .concat(A, '" data-symbol="')
        .concat(
          v,
          '">\n          <div class="card-header">\n            <div>\n              <strong>'
        )
        .concat(v, '</strong>\n              <div class="small-text">')
        .concat(e.t('quotes.card.last'), ': ')
        .concat(
          h.currency(S.price),
          '</div>\n            </div>\n            <button data-action="remove" data-symbol="'
        )
        .concat(v, '" aria-label="')
        .concat(e.t('common.remove'), ' ')
        .concat(v, '">✕</button>\n          </div>\n          <div class="card-body ')
        .concat(M, '">\n            ')
        .concat(h.currency(S.change), ' (')
        .concat(h.percent(S.changePercent / 100), ')\n          </div>\n        </div>');
    }).join('');
  }
  async function m(_) {
    const P = (await t.getSeries(_, 'daily')).slice(-180),
      v = P.map((k) => k.date),
      S = P.map((k) => k.close);
    u && u.destroy();
    const M = Ka(S, 20),
      A = Ka(S, 50);
    u = new _n(l, {
      type: 'line',
      data: {
        labels: v,
        datasets: [
          {
            label: e.t('quotes.chart.close', { symbol: _ }),
            data: S,
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.2)',
            tension: 0.15,
            fill: !1,
          },
          {
            label: e.t('quotes.chart.sma20'),
            data: M,
            borderColor: '#22c55e',
            borderDash: [4, 4],
            tension: 0.15,
            fill: !1,
          },
          {
            label: e.t('quotes.chart.sma50'),
            data: A,
            borderColor: '#f97316',
            borderDash: [6, 6],
            tension: 0.15,
            fill: !1,
          },
        ],
      },
      options: {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
          tooltip: {
            callbacks: {
              label: (k) => ''.concat(k.dataset.label, ': ').concat(h.currency(k.parsed.y)),
            },
          },
          zoom: vn(),
        },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
        },
      },
    });
  }
  async function b(_) {
    ((h = _), await d());
  }
  function x(_) {
    c = _.toUpperCase();
  }
  return { render: d, setFormatters: b, setActiveSymbol: x };
}
function Ka(i, t) {
  const e = [],
    n = [];
  let s = 0;
  return (
    i.forEach((o) => {
      (n.push(o),
        (s += o),
        n.length > t && (s -= n.shift()),
        e.push(n.length === t ? s / t : null));
    }),
    e
  );
}
function un(i, t) {
  const e = new Array(i.length).fill(null),
    n = [];
  let s = 0;
  return (
    i.forEach((o, a) => {
      Number.isFinite(o) &&
        (n.push(o), (s += o), n.length > t && (s -= n.shift()), n.length === t && (e[a] = s / t));
    }),
    e
  );
}
function oi(i, t) {
  const e = new Array(i.length).fill(null),
    n = 2 / (t + 1);
  let s;
  return (
    i.forEach((o, a) => {
      Number.isFinite(o) &&
        (s === void 0 ? (s = o) : (s = o * n + s * (1 - n)), a >= t - 1 && (e[a] = s));
    }),
    e
  );
}
function hl(i, t = 14) {
  const e = new Array(i.length).fill(null);
  let n = 0,
    s = 0;
  for (let o = 1; o < i.length; o++) {
    const a = i[o] - i[o - 1],
      r = Math.max(0, a),
      l = Math.max(0, -a);
    if (o <= t) {
      if (((n += r), (s += l), o === t)) {
        const c = n / t,
          h = s / t,
          u = h === 0 ? 100 : c / h;
        e[o] = 100 - 100 / (1 + u);
      }
    } else {
      ((n = (n * (t - 1) + r) / t), (s = (s * (t - 1) + l) / t));
      const c = s === 0 ? 100 : n / s;
      e[o] = 100 - 100 / (1 + c);
    }
  }
  return e;
}
function pp(i, t = 12, e = 26, n = 9) {
  const s = oi(i, t),
    o = oi(i, e),
    a = i.map((h, u) => (s[u] === null || o[u] === null ? null : s[u] - o[u])),
    l = oi(
      a.map((h) => (h === null ? 0 : h)),
      n
    ).map((h, u) => (a[u] === null ? null : h)),
    c = a.map((h, u) => (h === null || l[u] === null ? null : h - l[u]));
  return { macdLine: a, signalLine: l, histogram: c };
}
function ul(i, t, e) {
  const n = i.map((r) => r.close),
    s = un(n, t),
    o = un(n, e),
    a = [];
  for (let r = 1; r < i.length; r++) {
    const l = s[r - 1],
      c = o[r - 1],
      h = s[r],
      u = o[r];
    [l, c, h, u].some((d) => d === null) ||
      (l <= c && h > u && a.push({ type: 'buy', index: r, date: i[r].date, price: i[r].close }),
      l >= c && h < u && a.push({ type: 'sell', index: r, date: i[r].date, price: i[r].close }));
  }
  return { shortMA: s, longMA: o, signals: a };
}
function mp({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = document.getElementById('technicals-form'),
    o = document.getElementById('technicals-symbol'),
    a = document.getElementById('technicals-interval'),
    r = document.getElementById('technicals-chart'),
    l = document.getElementById('technicals-signals'),
    c = document.getElementById('technicals-reset-zoom'),
    h = document.querySelector('.indicator-toggles');
  let u,
    d = null,
    f = { price: !0, sma20: !0, sma50: !0, ema12: !1, ema26: !1, rsi: !0, macd: !0 };
  (s.addEventListener('submit', async (M) => {
    (M.preventDefault(), await m());
  }),
    c.addEventListener('click', () => {
      u != null && u.resetZoom && u.resetZoom();
    }),
    h.addEventListener('change', (M) => {
      const A = M.target.closest('input[type="checkbox"][data-indicator]');
      if (!A) return;
      const k = A.dataset.indicator;
      ((f[k] = A.checked), x(), w());
    }));
  async function m() {
    const M = (o.value || i.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
      A = a.value;
    o.value = M;
    const k = await t.getSeries(M, A);
    if (!k.length) return;
    const T = k.map((Y) => Y.close),
      O = un(T, 20),
      I = un(T, 50),
      R = oi(T, 12),
      j = oi(T, 26),
      X = hl(T, 14),
      z = pp(T),
      $ = ul(k, 20, 50);
    ((d = { series: k, closes: T, rsi14: X, macdResult: z, signals: $.signals }),
      b(M, k, { sma20: O, sma50: I, ema12: R, ema26: j, rsi14: X, macdResult: z }),
      w());
  }
  function b(M, A, k) {
    const T = A.map((I) => I.date),
      O = A.map((I) => I.close);
    (u && u.destroy(),
      (u = new _n(r, {
        type: 'line',
        data: {
          labels: T,
          datasets: [
            {
              label: e.t('technicals.chart.close', { symbol: M }),
              data: O,
              borderColor: '#38bdf8',
              backgroundColor: 'rgba(56, 189, 248, 0.2)',
              tension: 0.15,
              yAxisID: 'price',
            },
            {
              label: e.t('technicals.toggles.sma20'),
              data: k.sma20,
              borderColor: '#22c55e',
              borderDash: [5, 3],
              tension: 0.15,
              yAxisID: 'price',
            },
            {
              label: e.t('technicals.toggles.sma50'),
              data: k.sma50,
              borderColor: '#f97316',
              borderDash: [6, 4],
              tension: 0.15,
              yAxisID: 'price',
            },
            {
              label: e.t('technicals.toggles.ema12'),
              data: k.ema12,
              borderColor: '#c084fc',
              borderDash: [3, 3],
              tension: 0.15,
              yAxisID: 'price',
            },
            {
              label: e.t('technicals.toggles.ema26'),
              data: k.ema26,
              borderColor: '#facc15',
              borderDash: [3, 6],
              tension: 0.15,
              yAxisID: 'price',
            },
            {
              label: 'RSI (14)',
              data: k.rsi14,
              borderColor: '#34d399',
              borderDash: [2, 2],
              yAxisID: 'rsi',
            },
            { label: 'MACD', data: k.macdResult.macdLine, borderColor: '#60a5fa', yAxisID: 'macd' },
            {
              label: 'MACD Signal',
              data: k.macdResult.signalLine,
              borderColor: '#fb7185',
              borderDash: [4, 2],
              yAxisID: 'macd',
            },
            {
              label: 'MACD Hist',
              type: 'bar',
              data: k.macdResult.histogram,
              backgroundColor: k.macdResult.histogram.map((I) =>
                I >= 0 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(248, 113, 113, 0.5)'
              ),
              yAxisID: 'macd',
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          interaction: { mode: 'index', intersect: !1 },
          plugins: {
            legend: { labels: { color: '#e2e8f0' } },
            tooltip: {
              callbacks: {
                label(I) {
                  const R = I.parsed.y;
                  return I.dataset.yAxisID === 'rsi'
                    ? 'RSI: '.concat(n.number(R))
                    : I.dataset.yAxisID === 'macd'
                      ? ''.concat(I.dataset.label, ': ').concat(n.number(R))
                      : ''.concat(I.dataset.label, ': ').concat(n.currency(R));
                },
              },
            },
            zoom: { ...vn() },
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
            macd: { position: 'right', ticks: { color: '#94a3b8' }, grid: { display: !1 } },
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
          },
        },
      })),
      x());
  }
  function x() {
    u &&
      (u.data.datasets.forEach((M) => {
        const A = _(M.label);
        A && (M.hidden = !f[A]);
      }),
      u.update('none'));
  }
  function _(M) {
    return M.includes('Price')
      ? 'price'
      : M.includes('SMA 20')
        ? 'sma20'
        : M.includes('SMA 50')
          ? 'sma50'
          : M.includes('EMA 12')
            ? 'ema12'
            : M.includes('EMA 26')
              ? 'ema26'
              : M.includes('RSI')
                ? 'rsi'
                : M.includes('MACD Hist') || M.includes('MACD Signal') || M.includes('MACD')
                  ? 'macd'
                  : null;
  }
  function w() {
    if (!d) {
      l.innerHTML = '';
      return;
    }
    const { closes: M, rsi14: A, macdResult: k, signals: T } = d,
      O = M.length - 1,
      I = M[O],
      R = A[O],
      j = k.macdLine[O],
      X = k.signalLine[O],
      z = T.at(-1),
      $ = z ? O - z.index : null,
      Y = z ? (z.type === 'buy' ? 'bullish' : 'bearish') : 'neutral',
      ht = z ? e.t('technicals.bias.'.concat(Y), { bars: $ }) : e.t('technicals.bias.neutral'),
      Q = f.rsi,
      Tt = f.macd;
    l.innerHTML = '\n      <div class="summary-card">\n        <h3>'
      .concat(e.t('technicals.summary.price'), '</h3>\n        <p>')
      .concat(n.currency(I), '</p>\n      </div>\n      ')
      .concat(
        Q
          ? '<div class="summary-card">\n              <h3>'
              .concat(e.t('technicals.summary.rsi'), '</h3>\n              <p>')
              .concat(n.number(R), '</p>\n            </div>')
          : '',
        '\n      '
      )
      .concat(
        Tt
          ? '<div class="summary-card">\n              <h3>'
              .concat(e.t('technicals.summary.macd'), '</h3>\n              <p>')
              .concat(n.number(j), ' / ')
              .concat(n.number(X), '</p>\n            </div>')
          : '',
        '\n      <div class="summary-card">\n        <h3>'
      )
      .concat(e.t('technicals.summary.bias'), '</h3>\n        <p>')
      .concat(ht, '</p>\n      </div>\n      <div class="signals">\n        <h3>')
      .concat(e.t('technicals.signals.title'), '</h3>\n        ')
      .concat(P(T), '\n      </div>');
  }
  function P(M) {
    return M.length
      ? M.slice(-5)
          .reverse()
          .map((A) => {
            const k = A.type === 'buy' ? 'signal' : 'signal sell';
            return '<div class="'
              .concat(k, '">\n          <strong>')
              .concat(e.t('common.signal.'.concat(A.type)), ' • ')
              .concat(A.date, '</strong>\n          <div>')
              .concat(e.t('common.price'), ': ')
              .concat(n.currency(A.price), '</div>\n        </div>');
          })
          .join('')
      : '<p class="small-text">'.concat(e.t('technicals.signals.empty'), '</p>');
  }
  function v(M) {
    return ((n = M), m());
  }
  function S(M) {
    o.value = M;
  }
  return { render: m, setFormatters: v, populateDefaults: S };
}
function bp(i) {
  let t = -1 / 0,
    e = 0;
  return (
    i.forEach(({ value: n }) => {
      n > t && (t = n);
      const s = (t - n) / t;
      s > e && (e = s);
    }),
    e
  );
}
function yp(i, { shortPeriod: t, longPeriod: e, capital: n = 1e4 }) {
  if (!Array.isArray(i) || i.length === 0) throw new Error('Series data required');
  if (t >= e) throw new Error('Short period must be less than long period');
  const { signals: s } = ul(i, t, e);
  let o = n,
    a = 0;
  const r = [],
    l = [];
  if (
    (i.forEach((k, T) => {
      const O = s.find((R) => R.index === T);
      O && O.type === 'buy' && a === 0
        ? ((a = o / k.close), (o = 0), l.push({ type: 'buy', date: k.date, price: k.close }))
        : O &&
          O.type === 'sell' &&
          a > 0 &&
          ((o += a * k.close), l.push({ type: 'sell', date: k.date, price: k.close }), (a = 0));
      const I = o + a * k.close;
      r.push({ date: k.date, value: I });
    }),
    a > 0)
  ) {
    const k = i.at(-1);
    ((o += a * k.close), l.push({ type: 'sell', date: k.date, price: k.close }), (a = 0));
  }
  const c = o,
    h = n / i[0].close,
    u = i.map((k) => ({ date: k.date, value: h * k.close })),
    d = u.at(-1).value,
    f = (c - n) / n,
    m = (d - n) / n,
    b = new Date(i[0].date),
    x = new Date(i.at(-1).date),
    _ = Math.max(1 / 365, (x - b) / (1e3 * 60 * 60 * 24 * 365)),
    w = Math.pow(c / n, 1 / _) - 1,
    P = Math.pow(d / n, 1 / _) - 1,
    v = l.filter((k) => k.type === 'sell').length,
    S = l.filter((k, T) => {
      if (k.type !== 'sell') return !1;
      const O = l
        .slice(0, T)
        .reverse()
        .find((I) => I.type === 'buy');
      return O ? k.price > O.price : !1;
    }).length,
    M = v > 0 ? S / v : 0,
    A = bp(r);
  return {
    equityCurve: r,
    buyHoldCurve: u,
    trades: l,
    stats: {
      totalReturn: f,
      buyHoldReturn: m,
      cagr: w,
      buyHoldCagr: P,
      completedTrades: v,
      winRate: M,
      maxDrawdown: A,
    },
  };
}
function xp({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = document.getElementById('backtest-form'),
    o = document.getElementById('backtest-symbol'),
    a = document.getElementById('backtest-short'),
    r = document.getElementById('backtest-long'),
    l = document.getElementById('backtest-results'),
    c = document.getElementById('backtest-chart'),
    h = document.getElementById('backtest-export-csv');
  let u,
    d = null,
    f = n;
  (s.addEventListener('submit', async (P) => {
    (P.preventDefault(), await m());
  }),
    h.addEventListener('click', () => {
      if (!d) return;
      const P = ['Date,Strategy,BuyHold'];
      (d.equityCurve.forEach((v, S) => {
        const M = d.buyHoldCurve[S];
        P.push(''.concat(v.date, ',').concat(v.value, ',').concat(M.value));
      }),
        en('backtest-equity.csv', P.join('\n'), 'text/csv'));
    }));
  async function m() {
    const P = (o.value || i.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
      v = Number.parseInt(a.value, 10) || 50,
      S = Number.parseInt(r.value, 10) || 200;
    if (v >= S) {
      alert(e.t('backtest.form.invalid'));
      return;
    }
    const M = await t.getSeries(P, 'daily'),
      A = yp(M, { shortPeriod: v, longPeriod: S, capital: 1e4 });
    ((d = A), b(A.stats), x(P, A));
  }
  function b(P) {
    l.innerHTML = '\n      <div class="summary-card">\n        <h3>'
      .concat(e.t('backtest.summary.strategyReturn'), '</h3>\n        <p>')
      .concat(
        f.percent(P.totalReturn),
        '</p>\n      </div>\n      <div class="summary-card">\n        <h3>'
      )
      .concat(e.t('backtest.summary.strategyCagr'), '</h3>\n        <p>')
      .concat(
        f.percent(P.cagr),
        '</p>\n      </div>\n      <div class="summary-card">\n        <h3>'
      )
      .concat(e.t('backtest.summary.buyHoldReturn'), '</h3>\n        <p>')
      .concat(
        f.percent(P.buyHoldReturn),
        '</p>\n      </div>\n      <div class="summary-card">\n        <h3>'
      )
      .concat(e.t('backtest.summary.buyHoldCagr'), '</h3>\n        <p>')
      .concat(
        f.percent(P.buyHoldCagr),
        '</p>\n      </div>\n      <div class="summary-card">\n        <h3>'
      )
      .concat(e.t('backtest.summary.completedTrades'), '</h3>\n        <p>')
      .concat(
        e.t('backtest.summary.tradeStats', {
          count: P.completedTrades,
          winRate: f.percent(P.winRate),
        }),
        '</p>\n      </div>\n      <div class="summary-card">\n        <h3>'
      )
      .concat(e.t('backtest.summary.maxDrawdown'), '</h3>\n        <p>')
      .concat(f.percent(P.maxDrawdown), '</p>\n      </div>');
  }
  function x(P, v) {
    const S = v.equityCurve.map((k) => k.date),
      M = v.equityCurve.map((k) => k.value),
      A = v.buyHoldCurve.map((k) => k.value);
    (u && u.destroy(),
      (u = new _n(c, {
        type: 'line',
        data: {
          labels: S,
          datasets: [
            {
              label: e.t('backtest.chart.strategy'),
              data: M,
              borderColor: '#38bdf8',
              fill: !1,
              tension: 0.1,
            },
            {
              label: e.t('backtest.chart.buyHold'),
              data: A,
              borderColor: '#22c55e',
              fill: !1,
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            legend: { labels: { color: '#e2e8f0' } },
            tooltip: {
              callbacks: {
                label: (k) => ''.concat(k.dataset.label, ': ').concat(f.currency(k.parsed.y)),
              },
            },
            zoom: vn(),
          },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
          },
        },
      })));
  }
  function _(P) {
    return ((f = P), d && (b(d.stats), x(o.value.toUpperCase(), d)), Promise.resolve());
  }
  function w(P) {
    o.value = P;
  }
  return { render: m, setFormatters: _, populateDefaults: w };
}
function _p({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = document.getElementById('dca-form'),
    o = document.getElementById('dca-symbol'),
    a = document.getElementById('dca-amount'),
    r = document.getElementById('dca-months'),
    l = document.getElementById('dca-results'),
    c = document.getElementById('dca-chart'),
    h = document.getElementById('dca-export-csv');
  let u,
    d = null,
    f = null,
    m = n;
  (s.addEventListener('submit', async (v) => {
    (v.preventDefault(), await b());
  }),
    h.addEventListener('click', () => {
      if (!d) return;
      const v = 'Date,Invested,Shares,Value',
        S = d.map((M) =>
          ''.concat(M.date, ',').concat(M.invested, ',').concat(M.shares, ',').concat(M.value)
        );
      en('dca-progress.csv', [v, ...S].join('\n'), 'text/csv');
    }));
  async function b() {
    const v = (o.value || i.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
      S = Number.parseFloat(a.value),
      M = Number.parseInt(r.value, 10);
    if (!v || !Number.isFinite(S) || S <= 0 || !Number.isFinite(M) || M <= 0) {
      alert(e.t('dca.form.invalid'));
      return;
    }
    const A = await t.getSeries(v, 'daily'),
      k = vp(A, M);
    if (!k.length) {
      ((l.innerHTML = '<p class="small-text">'.concat(e.t('dca.empty'), '</p>')),
        u && (u.destroy(), (u = null)));
      return;
    }
    let T = 0,
      O = 0;
    const I = k.map(($) => {
        T += S;
        const Y = S / $.price;
        return ((O += Y), { date: $.date, invested: T, shares: O, value: O * $.price });
      }),
      R = A.at(-1).close,
      j = O * R,
      X = j - T,
      z = T === 0 ? 0 : X / T;
    ((d = I),
      (f = { invested: T, shares: O, currentValue: j, gain: X, gainPercent: z }),
      x(),
      _(I));
  }
  function x() {
    if (!f) return;
    const { invested: v, shares: S, currentValue: M, gain: A, gainPercent: k } = f;
    l.innerHTML = '\n      <div class="summary-card">\n        <h3>'
      .concat(e.t('dca.summary.invested'), '</h3>\n        <p>')
      .concat(m.currency(v), '</p>\n      </div>\n      <div class="summary-card">\n        <h3>')
      .concat(e.t('dca.summary.shares'), '</h3>\n        <p>')
      .concat(m.number(S), '</p>\n      </div>\n      <div class="summary-card">\n        <h3>')
      .concat(e.t('dca.summary.value'), '</h3>\n        <p>')
      .concat(m.currency(M), '</p>\n      </div>\n      <div class="summary-card">\n        <h3>')
      .concat(e.t('dca.summary.gain'), '</h3>\n        <p>')
      .concat(m.currency(A), ' (')
      .concat(m.percent(k), ')</p>\n      </div>');
  }
  function _(v) {
    const S = v.map((k) => k.date),
      M = v.map((k) => k.invested),
      A = v.map((k) => k.value);
    (u && u.destroy(),
      (u = new _n(c, {
        type: 'line',
        data: {
          labels: S,
          datasets: [
            {
              label: e.t('dca.chart.invested'),
              data: M,
              borderColor: '#94a3b8',
              tension: 0.1,
              fill: !1,
            },
            {
              label: e.t('dca.chart.value'),
              data: A,
              borderColor: '#38bdf8',
              tension: 0.1,
              fill: !1,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          plugins: {
            legend: { labels: { color: '#e2e8f0' } },
            tooltip: {
              callbacks: {
                label: (k) => ''.concat(k.dataset.label, ': ').concat(m.currency(k.parsed.y)),
              },
            },
            zoom: vn(),
          },
          scales: {
            x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
            y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
          },
        },
      })));
  }
  function w(v) {
    return ((m = v), x(), d && _(d), Promise.resolve());
  }
  function P(v) {
    o.value = v;
  }
  return { render: b, setFormatters: w, populateDefaults: P };
}
function vp(i, t) {
  const e = new Map();
  for (let n = i.length - 1; n >= 0 && e.size < t; n--) {
    const s = i[n],
      o = s.date.slice(0, 7);
    e.has(o) || e.set(o, { date: s.date, price: s.close });
  }
  return Array.from(e.values()).sort((n, s) => new Date(n.date) - new Date(s.date));
}
function Sp({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = document.getElementById('alerts-form'),
    o = document.getElementById('alerts-symbol'),
    a = document.getElementById('alerts-rsi-low'),
    r = document.getElementById('alerts-rsi-high'),
    l = document.getElementById('alerts-list');
  (s.addEventListener('submit', async (d) => {
    d.preventDefault();
    const f = o.value.trim().toUpperCase(),
      m = Number.parseFloat(a.value),
      b = Number.parseFloat(r.value);
    if (!f || !Number.isFinite(m) || !Number.isFinite(b) || m >= b) {
      alert(e.t('alerts.form.invalid'));
      return;
    }
    (i.state.alerts.push({
      id: ''.concat(Date.now(), '-').concat(Math.random().toString(36).slice(2, 7)),
      symbol: f,
      rsiLow: m,
      rsiHigh: b,
    }),
      i.persist(),
      s.reset(),
      (o.value = f),
      await c());
  }),
    l.addEventListener('click', async (d) => {
      const f = d.target.closest('button[data-action="remove"]');
      if (!f) return;
      const m = f.dataset.id;
      ((i.state.alerts = i.state.alerts.filter((b) => b.id !== m)), i.persist(), await c());
    }));
  async function c() {
    if (!i.state.alerts.length) {
      l.innerHTML = '<p class="small-text">'.concat(e.t('alerts.empty'), '</p>');
      return;
    }
    const d = await Promise.all(
      i.state.alerts.map(async (f) => {
        const b = (await t.getSeries(f.symbol, 'daily')).map((v) => v.close),
          _ = hl(b, 14).at(-1),
          w = b.at(-1);
        let P = 'neutral';
        return (
          _ <= f.rsiLow ? (P = 'oversold') : _ >= f.rsiHigh && (P = 'overbought'),
          { alert: f, lastPrice: w, latestRsi: _, statusKey: P }
        );
      })
    );
    l.innerHTML = d
      .map((f) => {
        const m =
            f.statusKey === 'oversold'
              ? 'card signal'
              : f.statusKey === 'overbought'
                ? 'card signal sell'
                : 'card',
          b = e.t('alerts.status.'.concat(f.statusKey));
        return '<div class="'
          .concat(m, '" data-id="')
          .concat(
            f.alert.id,
            '">\n          <div class="card-header">\n            <div>\n              <strong>'
          )
          .concat(f.alert.symbol, '</strong>\n              <div class="small-text">')
          .concat(e.t('quotes.card.last'), ': ')
          .concat(
            n.currency(f.lastPrice),
            '</div>\n            </div>\n            <button data-action="remove" data-id="'
          )
          .concat(f.alert.id, '" aria-label="')
          .concat(e.t('common.remove'), ' ')
          .concat(
            f.alert.symbol,
            '">✕</button>\n          </div>\n          <div class="card-body">\n            '
          )
          .concat(e.t('alerts.card.rsi', { value: n.number(f.latestRsi) }), '<br />\n            ')
          .concat(
            e.t('alerts.card.thresholds', {
              low: n.number(f.alert.rsiLow),
              high: n.number(f.alert.rsiHigh),
            }),
            '<br />\n            '
          )
          .concat(e.t('alerts.card.status', { status: b }), '\n          </div>\n        </div>');
      })
      .join('');
  }
  function h(d) {
    o.value = d;
  }
  function u(d) {
    ((n = d), c());
  }
  return { render: c, populateDefaults: h, setFormatters: u };
}
function wp({ store: i, translator: t, dataProvider: e, onSettingsChanged: n, onReset: s }) {
  const o = document.getElementById('settings-form'),
    a = document.getElementById('settings-api-key'),
    r = document.getElementById('settings-default-symbol'),
    l = document.getElementById('settings-netlify-proxy'),
    c = document.getElementById('settings-reset');
  function h() {
    const { settings: u } = i.state;
    ((a.value = u.apiKey || ''),
      (r.value = u.defaultSymbol || 'AAPL'),
      (l.checked = !!u.useNetlifyProxy));
  }
  (h(),
    o.addEventListener('submit', (u) => {
      u.preventDefault();
      const d = i.state.settings;
      ((d.apiKey = a.value.trim()),
        (d.defaultSymbol = (r.value || 'AAPL').toUpperCase()),
        (d.useNetlifyProxy = l.checked),
        i.persist(),
        e.clearCache(),
        n(),
        alert(t.t('settings.saveSuccess')));
    }),
    c.addEventListener('click', () => {
      confirm(t.t('settings.resetConfirm')) &&
        (i.reset(), e.clearCache(), h(), s(), alert(t.t('settings.resetDone')));
    }));
}
const Mp = window.__ENV__ || window.env || {};
async function kp() {
  const i = $l();
  (Pp(i, Mp), Gn(i));
  const t = new Yl();
  t.setLocale(i.state.settings.language);
  const e = oc(t);
  let n = { status: Zn(i) ? 'unknown' : 'mock', message: '' };
  e.update(n.status, n.message);
  const s = sc(i, (r, l = '') => {
    ((n = { status: r, message: l }), e.update(r, l));
  });
  let o = Ai(Kt[i.state.settings.language], i.state.settings.currency);
  (ac(), t.applyTranslations());
  const a = Ap({ store: i, dataProvider: s, translator: t, formatters: o });
  (Cp(i, t, {
    onLanguageChange: async (r) => {
      ((i.state.settings.language = r),
        i.persist(),
        t.setLocale(r),
        t.applyTranslations(),
        (o = Ai(Kt[r], i.state.settings.currency)),
        await a.setFormatters(o),
        e.update(n.status, n.message));
    },
    onCurrencyChange: async (r) => {
      ((i.state.settings.currency = r),
        i.persist(),
        (o = Ai(Kt[i.state.settings.language], r)),
        await a.setFormatters(o));
    },
  }),
    wp({
      store: i,
      translator: t,
      dataProvider: s,
      onSettingsChanged: async () => {
        (Gn(i),
          a.populateDefaults(i.state.settings.defaultSymbol),
          await a.renderAll(),
          (n = { status: Zn(i) ? 'unknown' : 'mock', message: '' }),
          e.update(n.status, n.message));
      },
      onReset: async () => {
        (t.setLocale(i.state.settings.language),
          t.applyTranslations(),
          (o = Ai(Kt[i.state.settings.language], i.state.settings.currency)),
          await a.setFormatters(o),
          Gn(i),
          a.populateDefaults(i.state.settings.defaultSymbol),
          await a.renderAll(),
          (n = { status: Zn(i) ? 'unknown' : 'mock', message: '' }),
          e.update(n.status, n.message));
      },
    }),
    a.populateDefaults(i.state.settings.defaultSymbol),
    await a.renderAll(),
    t.applyTranslations());
}
function Pp(i, t) {
  (t.ALPHA_VANTAGE_API_KEY && (i.state.settings.apiKey = t.ALPHA_VANTAGE_API_KEY),
    typeof t.USE_NETLIFY_PROXY == 'boolean' &&
      (i.state.settings.useNetlifyProxy = t.USE_NETLIFY_PROXY),
    t.DEFAULT_SYMBOL && (i.state.settings.defaultSymbol = String(t.DEFAULT_SYMBOL).toUpperCase()),
    i.persist());
}
function Gn(i) {
  const t = (i.state.settings.defaultSymbol || 'AAPL').toUpperCase(),
    e = i.state.watchlist;
  (e.includes(t) || e.unshift(t), e.length === 0 && e.push(t), i.persist());
}
function Zn(i) {
  const { apiKey: t, useNetlifyProxy: e } = i.state.settings;
  return !!(t || e);
}
function Cp(i, t, { onLanguageChange: e, onCurrencyChange: n }) {
  const s = document.getElementById('global-language'),
    o = document.getElementById('global-currency');
  (Object.entries(Kt).forEach(([a, r]) => {
    const l = document.createElement('option');
    ((l.value = a), (l.textContent = r.label), s.appendChild(l));
  }),
    Xl.forEach((a) => {
      const r = document.createElement('option');
      ((r.value = a.code), (r.textContent = a.label), o.appendChild(r));
    }),
    (s.value = i.state.settings.language),
    (o.value = i.state.settings.currency),
    s.addEventListener('change', async (a) => {
      await e(a.target.value);
    }),
    o.addEventListener('change', async (a) => {
      await n(a.target.value);
    }));
}
function Ap({ store: i, dataProvider: t, translator: e, formatters: n }) {
  const s = {},
    o = dc({ store: i, dataProvider: t, translator: e, formatters: n }),
    a = gp({ store: i, dataProvider: t, translator: e, formatters: n }),
    r = mp({ store: i, dataProvider: t, translator: e, formatters: n }),
    l = xp({ store: i, dataProvider: t, translator: e, formatters: n }),
    c = _p({ store: i, dataProvider: t, translator: e, formatters: n }),
    h = Sp({ store: i, dataProvider: t, translator: e, formatters: n });
  return (
    (s.renderAll = async () => {
      (await o.render(),
        await a.render(),
        await r.render(),
        await l.render(),
        await c.render(),
        await h.render());
    }),
    (s.setFormatters = (u) => {
      var d, f;
      return Promise.all([
        o.setFormatters(u),
        (d = a.setFormatters) == null ? void 0 : d.call(a, u),
        r.setFormatters(u),
        l.setFormatters(u),
        c.setFormatters(u),
        (f = h.setFormatters) == null ? void 0 : f.call(h, u),
      ]);
    }),
    (s.populateDefaults = (u) => {
      (o.populateDefaults(u),
        a.setActiveSymbol(u),
        r.populateDefaults(u),
        l.populateDefaults(u),
        c.populateDefaults(u),
        h.populateDefaults(u));
    }),
    s
  );
}
kp();
export { Ep as __vite_legacy_guard };
//# sourceMappingURL=index-KNRjdQgr.js.map
