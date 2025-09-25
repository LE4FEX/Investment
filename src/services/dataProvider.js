import { getCache, setCache, clearCache as clearResponseCache } from './cache.js';
import { AlphaVantageAdapter, RateLimitError } from './adapters/alphaVantageAdapter.js';
import { MockAdapter } from './adapters/mockAdapter.js';

const TTL = {
  quote: 60 * 1000,
  series: 5 * 60 * 1000,
};

export function createDataProvider(store, updateStatus) {
  const getSettings = () => store.state.settings;
  const alphaAdapter = new AlphaVantageAdapter({ getSettings, updateStatus });
  const mockAdapter = new MockAdapter();

  function shouldUseAlpha() {
    const settings = getSettings();
    return Boolean(settings.apiKey || settings.useNetlifyProxy);
  }

  async function getQuote(symbol) {
    const cacheKey = `quote:${symbol.toUpperCase()}`;
    const cached = getCache(cacheKey);
    if (cached) {
      return cached;
    }

    if (shouldUseAlpha()) {
      try {
        const result = await alphaAdapter.getQuote(symbol);
        setCache(cacheKey, result.data, TTL.quote);
        return result.data;
      } catch (error) {
        if (error instanceof RateLimitError) {
          console.warn('Alpha Vantage rate limit reached. Falling back to mock data.');
          updateStatus('error', error.message);
        } else {
          console.warn('Alpha Vantage quote error', error);
          updateStatus('error', error.message);
        }
      }
    }

    const fallback = await mockAdapter.getQuote(symbol);
    updateStatus('mock');
    setCache(cacheKey, fallback.data, TTL.quote);
    return fallback.data;
  }

  async function getSeries(symbol, interval = 'daily') {
    const cacheKey = `series:${symbol.toUpperCase()}:${interval}`;
    const cached = getCache(cacheKey);
    if (cached) {
      return cached;
    }

    if (shouldUseAlpha()) {
      try {
        const result = await alphaAdapter.getSeries(symbol, interval);
        setCache(cacheKey, result.data, TTL.series);
        return result.data;
      } catch (error) {
        if (error instanceof RateLimitError) {
          console.warn('Alpha Vantage rate limit reached for series. Falling back to mock data.');
          updateStatus('error', error.message);
        } else {
          console.warn('Alpha Vantage series error', error);
          updateStatus('error', error.message);
        }
      }
    }

    const fallback = await mockAdapter.getSeries(symbol, interval);
    updateStatus('mock');
    setCache(cacheKey, fallback.data, TTL.series);
    return fallback.data;
  }

  function clearCache() {
    clearResponseCache();
  }

  return {
    getQuote,
    getSeries,
    clearCache,
  };
}
