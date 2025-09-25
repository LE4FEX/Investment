import { RequestQueue } from '../requestQueue.js';

const RATE_LIMIT_MESSAGES = ['frequency', 'Thank you for using Alpha Vantage'];

export class RateLimitError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RateLimitError';
  }
}

export class AlphaVantageAdapter {
  constructor({ getSettings, updateStatus }) {
    this.getSettings = getSettings;
    this.updateStatus = updateStatus;
    this.queue = new RequestQueue({ initialDelay: 0, maxDelay: 60000 });
  }

  async getQuote(symbol) {
    return this.queue.enqueue(() => this.#fetchQuote(symbol));
  }

  async getSeries(symbol, interval) {
    return this.queue.enqueue(() => this.#fetchSeries(symbol, interval));
  }

  async #fetchQuote(symbol) {
    const { apiKey, useNetlifyProxy } = this.getSettings();
    if (!apiKey && !useNetlifyProxy) {
      throw new Error('Missing API credentials');
    }

    const params = new URLSearchParams({
      function: 'GLOBAL_QUOTE',
      symbol: symbol.toUpperCase(),
    });

    const payload = await this.#request(params);
    const raw = payload['Global Quote'] || {};
    const price = Number.parseFloat(raw['05. price']);
    const prevClose =
      Number.parseFloat(raw['08. previous close']) || Number.parseFloat(raw['02. open']);
    const change = Number.parseFloat(raw['09. change']);
    const changePercentRaw = raw['10. change percent'];
    const changePercent = changePercentRaw
      ? Number.parseFloat(changePercentRaw.replace('%', ''))
      : prevClose
        ? ((price - prevClose) / prevClose) * 100
        : 0;

    if (!Number.isFinite(price)) {
      throw new Error('Invalid quote response');
    }

    this.queue.reset();
    this.updateStatus('live');

    return {
      status: 'live',
      data: {
        symbol: symbol.toUpperCase(),
        price,
        previousClose: prevClose || price,
        change: Number.isFinite(change) ? change : price - (prevClose || price),
        changePercent,
      },
    };
  }

  async #fetchSeries(symbol, interval) {
    const { apiKey, useNetlifyProxy } = this.getSettings();
    if (!apiKey && !useNetlifyProxy) {
      throw new Error('Missing API credentials');
    }

    const fn = interval === 'weekly' ? 'TIME_SERIES_WEEKLY_ADJUSTED' : 'TIME_SERIES_DAILY_ADJUSTED';
    const params = new URLSearchParams({
      function: fn,
      symbol: symbol.toUpperCase(),
      outputsize: 'full',
    });

    const payload = await this.#request(params);
    const rawKey = interval === 'weekly' ? 'Weekly Adjusted Time Series' : 'Time Series (Daily)';
    const rawSeries = payload[rawKey];
    if (!rawSeries) {
      throw new Error('Missing time series data');
    }

    const series = Object.entries(rawSeries)
      .map(([date, values]) => ({
        date,
        open: Number.parseFloat(values['1. open']),
        high: Number.parseFloat(values['2. high']),
        low: Number.parseFloat(values['3. low']),
        close: Number.parseFloat(values['4. close']),
        adjustedClose:
          Number.parseFloat(values['5. adjusted close']) || Number.parseFloat(values['4. close']),
        volume: Number.parseFloat(values['6. volume']),
      }))
      .filter((item) => Number.isFinite(item.close))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    this.queue.reset();
    this.updateStatus('live');

    return {
      status: 'live',
      data: series,
    };
  }

  async #request(params) {
    const { apiKey, useNetlifyProxy } = this.getSettings();
    let response;

    if (useNetlifyProxy) {
      response = await fetch(`/.netlify/functions/alphavantage?${params.toString()}`);
      if (!response.ok) {
        if (response.status === 429) {
          this.queue.backoff();
          throw new RateLimitError('Alpha Vantage proxy rate limit');
        }
        throw new Error(`Proxy HTTP ${response.status}`);
      }
      const data = await response.json();
      const message = this.#extractMessage(data);
      if (message) {
        this.queue.backoff();
        throw new RateLimitError(message);
      }
      return data;
    }

    params.set('apikey', apiKey);
    response = await fetch(`https://www.alphavantage.co/query?${params.toString()}`);
    if (!response.ok) {
      if (response.status === 429) {
        this.queue.backoff();
        throw new RateLimitError('Alpha Vantage rate limit');
      }
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const message = this.#extractMessage(data);
    if (message) {
      this.queue.backoff();
      throw new RateLimitError(message);
    }

    return data;
  }

  #extractMessage(data) {
    const candidate = data?.Note || data?.['Error Message'];
    if (!candidate) return null;
    const lower = candidate.toLowerCase();
    const matchesLimit = RATE_LIMIT_MESSAGES.some((phrase) => lower.includes(phrase));
    return matchesLimit ? candidate : null;
  }
}
