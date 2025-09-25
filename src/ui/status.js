export function createStatusManager(translator) {
  const badge = document.getElementById('api-status');

  function update(status, message = '') {
    if (!badge) return;
    badge.dataset.status = status;
    badge.textContent = translator.t(`status.api.${status}`);
    if (message) {
      badge.title = message;
    } else {
      badge.removeAttribute('title');
    }
  }

  translator.onChange(() => {
    if (!badge) return;
    const current = badge.dataset.status || 'unknown';
    badge.textContent = translator.t(`status.api.${current}`);
  });

  return { update };
}
