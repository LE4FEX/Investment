export function initSettings({ store, translator, dataProvider, onSettingsChanged, onReset }) {
  const form = document.getElementById('settings-form');
  const apiKeyInput = document.getElementById('settings-api-key');
  const defaultSymbolInput = document.getElementById('settings-default-symbol');
  const proxyCheckbox = document.getElementById('settings-netlify-proxy');
  const resetButton = document.getElementById('settings-reset');

  function populate() {
    const { settings } = store.state;
    apiKeyInput.value = settings.apiKey || '';
    defaultSymbolInput.value = settings.defaultSymbol || 'AAPL';
    proxyCheckbox.checked = Boolean(settings.useNetlifyProxy);
  }

  populate();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nextSettings = store.state.settings;
    nextSettings.apiKey = apiKeyInput.value.trim();
    nextSettings.defaultSymbol = (defaultSymbolInput.value || 'AAPL').toUpperCase();
    nextSettings.useNetlifyProxy = proxyCheckbox.checked;

    store.persist();
    dataProvider.clearCache();
    onSettingsChanged();
    alert(translator.t('settings.saveSuccess'));
  });

  resetButton.addEventListener('click', () => {
    if (!confirm(translator.t('settings.resetConfirm'))) {
      return;
    }
    store.reset();
    dataProvider.clearCache();
    populate();
    onReset();
    alert(translator.t('settings.resetDone'));
  });
}
