import './styles.css';

import { createStore } from './state/store.js';
import { Translator } from './i18n/translator.js';
import { locales } from './i18n/index.js';
import { currencyOptions } from './config/currencies.js';
import { createFormatters } from './utils/formatters.js';
import { createDataProvider } from './services/dataProvider.js';
import { createStatusManager } from './ui/status.js';
import { initNavigation } from './ui/navigation.js';
import { createPortfolioModule } from './ui/portfolio.js';
import { createQuotesModule } from './ui/quotes.js';
import { createTechnicalsModule } from './ui/technicals.js';
import { createBacktestModule } from './ui/backtest.js';
import { createDcaModule } from './ui/dca.js';
import { createAlertsModule } from './ui/alerts.js';
import { initSettings } from './ui/settings.js';

const runtimeConfig = window.__ENV__ || window.env || {};

async function bootstrap() {
  const store = createStore();
  applyRuntimeConfig(store, runtimeConfig);
  ensureDefaultSymbolInWatchlist(store);

  const translator = new Translator();
  translator.setLocale(store.state.settings.language);

  const statusManager = createStatusManager(translator);
  let currentApiStatus = { status: shouldUseAlpha(store) ? 'unknown' : 'mock', message: '' };
  statusManager.update(currentApiStatus.status, currentApiStatus.message);

  const dataProvider = createDataProvider(store, (status, message = '') => {
    currentApiStatus = { status, message };
    statusManager.update(status, message);
  });

  let formatters = createFormatters(
    locales[store.state.settings.language],
    store.state.settings.currency
  );

  initNavigation();
  translator.applyTranslations();
  const modules = createModules({ store, dataProvider, translator, formatters });

  populateGlobalSelectors(store, translator, {
    onLanguageChange: async (language) => {
      store.state.settings.language = language;
      store.persist();
      translator.setLocale(language);
      translator.applyTranslations();
      formatters = createFormatters(locales[language], store.state.settings.currency);
      await modules.setFormatters(formatters);
      statusManager.update(currentApiStatus.status, currentApiStatus.message);
    },
    onCurrencyChange: async (currency) => {
      store.state.settings.currency = currency;
      store.persist();
      formatters = createFormatters(locales[store.state.settings.language], currency);
      await modules.setFormatters(formatters);
    },
  });

  initSettings({
    store,
    translator,
    dataProvider,
    onSettingsChanged: async () => {
      ensureDefaultSymbolInWatchlist(store);
      modules.populateDefaults(store.state.settings.defaultSymbol);
      await modules.renderAll();
      currentApiStatus = { status: shouldUseAlpha(store) ? 'unknown' : 'mock', message: '' };
      statusManager.update(currentApiStatus.status, currentApiStatus.message);
    },
    onReset: async () => {
      translator.setLocale(store.state.settings.language);
      translator.applyTranslations();
      formatters = createFormatters(
        locales[store.state.settings.language],
        store.state.settings.currency
      );
      await modules.setFormatters(formatters);
      ensureDefaultSymbolInWatchlist(store);
      modules.populateDefaults(store.state.settings.defaultSymbol);
      await modules.renderAll();
      currentApiStatus = { status: shouldUseAlpha(store) ? 'unknown' : 'mock', message: '' };
      statusManager.update(currentApiStatus.status, currentApiStatus.message);
    },
  });

  modules.populateDefaults(store.state.settings.defaultSymbol);
  await modules.renderAll();
  translator.applyTranslations();
}

function applyRuntimeConfig(store, config) {
  if (config.ALPHA_VANTAGE_API_KEY) {
    store.state.settings.apiKey = config.ALPHA_VANTAGE_API_KEY;
  }
  if (typeof config.USE_NETLIFY_PROXY === 'boolean') {
    store.state.settings.useNetlifyProxy = config.USE_NETLIFY_PROXY;
  }
  if (config.DEFAULT_SYMBOL) {
    store.state.settings.defaultSymbol = String(config.DEFAULT_SYMBOL).toUpperCase();
  }
  store.persist();
}

function ensureDefaultSymbolInWatchlist(store) {
  const defaultSymbol = (store.state.settings.defaultSymbol || 'AAPL').toUpperCase();
  const watchlist = store.state.watchlist;
  if (!watchlist.includes(defaultSymbol)) {
    watchlist.unshift(defaultSymbol);
  }
  if (watchlist.length === 0) {
    watchlist.push(defaultSymbol);
  }
  store.persist();
}

function shouldUseAlpha(store) {
  const { apiKey, useNetlifyProxy } = store.state.settings;
  return Boolean(apiKey || useNetlifyProxy);
}

function populateGlobalSelectors(store, translator, { onLanguageChange, onCurrencyChange }) {
  const languageSelect = document.getElementById('global-language');
  const currencySelect = document.getElementById('global-currency');

  Object.entries(locales).forEach(([key, meta]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = meta.label;
    languageSelect.appendChild(option);
  });

  currencyOptions.forEach((option) => {
    const element = document.createElement('option');
    element.value = option.code;
    element.textContent = option.label;
    currencySelect.appendChild(element);
  });

  languageSelect.value = store.state.settings.language;
  currencySelect.value = store.state.settings.currency;

  languageSelect.addEventListener('change', async (event) => {
    await onLanguageChange(event.target.value);
  });

  currencySelect.addEventListener('change', async (event) => {
    await onCurrencyChange(event.target.value);
  });
}

function createModules({ store, dataProvider, translator, formatters }) {
  const modules = {};

  const portfolioModule = createPortfolioModule({ store, dataProvider, translator, formatters });
  const quotesModule = createQuotesModule({ store, dataProvider, translator, formatters });
  const technicalsModule = createTechnicalsModule({ store, dataProvider, translator, formatters });
  const backtestModule = createBacktestModule({ store, dataProvider, translator, formatters });
  const dcaModule = createDcaModule({ store, dataProvider, translator, formatters });
  const alertsModule = createAlertsModule({ store, dataProvider, translator, formatters });

  modules.renderAll = async () => {
    await portfolioModule.render();
    await quotesModule.render();
    await technicalsModule.render();
    await backtestModule.render();
    await dcaModule.render();
    await alertsModule.render();
  };

  modules.setFormatters = (nextFormatters) =>
    Promise.all([
      portfolioModule.setFormatters(nextFormatters),
      quotesModule.setFormatters?.(nextFormatters),
      technicalsModule.setFormatters(nextFormatters),
      backtestModule.setFormatters(nextFormatters),
      dcaModule.setFormatters(nextFormatters),
      alertsModule.setFormatters?.(nextFormatters),
    ]);

  modules.populateDefaults = (defaultSymbol) => {
    portfolioModule.populateDefaults(defaultSymbol);
    quotesModule.setActiveSymbol(defaultSymbol);
    technicalsModule.populateDefaults(defaultSymbol);
    backtestModule.populateDefaults(defaultSymbol);
    dcaModule.populateDefaults(defaultSymbol);
    alertsModule.populateDefaults(defaultSymbol);
  };

  return modules;
}

bootstrap();
