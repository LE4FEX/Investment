export default {
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
  header: {
    controls: {
      language: 'Language',
      currency: 'Currency',
      apiStatus: 'API Status',
    },
  },
  placeholders: {
    symbol: 'e.g. AAPL',
    apiKey: 'Enter API key',
  },
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
    summary: {
      value: 'Portfolio Value',
      cost: 'Total Cost Basis',
      pl: 'Unrealized P/L',
    },
  },
  quotes: {
    heading: 'Quotes & Watchlist',
    form: {
      symbol: 'Symbol',
      submit: 'Add to Watchlist',
    },
    search: {
      placeholder: 'Filter symbols...',
    },
    hint: 'Uses Alpha Vantage if API key is saved, otherwise falls back to mock data.',
    empty: 'No symbols yet. Add one to start tracking quotes.',
    card: {
      last: 'Last',
      change: 'Change',
    },
    chart: {
      close: '{symbol} Close',
      sma20: 'SMA 20',
      sma50: 'SMA 50',
    },
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
    zoom: {
      reset: 'Reset Zoom',
    },
    summary: {
      price: 'Last Price',
      rsi: 'RSI (14)',
      macd: 'MACD',
      bias: 'Bias',
    },
    bias: {
      neutral: 'Neutral',
      bullish: 'Bullish (signal {bars} bars ago)',
      bearish: 'Bearish (signal {bars} bars ago)',
    },
    signals: {
      title: 'Recent Signals',
      empty: 'No crossover signals yet.',
    },
    chart: {
      close: '{symbol} Close',
      sma20: 'SMA 20',
      sma50: 'SMA 50',
    },
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
    chart: {
      strategy: 'Strategy Equity',
      buyHold: 'Buy & Hold',
    },
    export: {
      csv: 'Export Equity CSV',
    },
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
    chart: {
      invested: 'Invested',
      value: 'Value',
    },
    export: {
      csv: 'Export DCA CSV',
    },
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
    status: {
      neutral: 'Neutral',
      oversold: 'Oversold',
      overbought: 'Overbought',
    },
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
  footer: {
    disclaimer: 'Educational use only. Not financial advice.',
  },
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
    signal: {
      buy: 'BUY',
      sell: 'SELL',
    },
  },
};
