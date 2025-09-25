const STORAGE_KEY = 'investment-toolkit-state-v2';

const defaultState = {
  settings: {
    apiKey: '',
    defaultSymbol: 'AAPL',
    currency: 'USD',
    language: 'en',
    useNetlifyProxy: false,
  },
  portfolio: [],
  watchlist: [],
  alerts: [],
};

function clone(value) {
  if (typeof window !== 'undefined' && typeof window.structuredClone === 'function') {
    return window.structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
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
      alerts: parsed.alerts ?? [],
    };
  } catch (error) {
    console.error('Failed to load state', error);
    return clone(defaultState);
  }
}

function persist(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function createStore() {
  const state = loadState();
  const listeners = new Map();

  function emit(event, payload) {
    const handlers = listeners.get(event);
    if (!handlers) return;
    handlers.forEach((handler) => {
      try {
        handler(payload);
      } catch (error) {
        console.error('Event handler error', error);
      }
    });
  }

  return {
    state,
    defaultState,
    persist() {
      persist(state);
    },
    reset() {
      Object.assign(state, clone(defaultState));
      persist(state);
      emit('store:reset', state);
    },
    on(event, handler) {
      const handlers = listeners.get(event) ?? new Set();
      handlers.add(handler);
      listeners.set(event, handlers);
      return () => {
        handlers.delete(handler);
      };
    },
    emit,
  };
}
