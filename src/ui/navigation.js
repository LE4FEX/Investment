export function initNavigation() {
  const panels = Array.from(document.querySelectorAll('.panel'));
  const buttons = Array.from(document.querySelectorAll('.nav-btn'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      buttons.forEach((btn) => btn.classList.toggle('active', btn === button));
      panels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
      const activePanel = panels.find((panel) => panel.id === target);
      if (activePanel) {
        activePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
