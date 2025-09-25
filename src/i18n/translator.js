import { locales, defaultLocale } from './index.js';

function resolve(path, object) {
  return path
    .split('.')
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), object);
}

export class Translator {
  constructor() {
    this.localeKey = defaultLocale;
    this.listeners = new Set();
  }

  get locale() {
    return locales[this.localeKey];
  }

  setLocale(newLocale) {
    if (!locales[newLocale]) {
      console.warn(`Locale ${newLocale} not found, falling back to default`);
      this.localeKey = defaultLocale;
    } else {
      this.localeKey = newLocale;
    }
    this.listeners.forEach((listener) => listener());
  }

  onChange(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  t(key, params = {}) {
    const messages = this.locale.messages;
    let template = resolve(key, messages) ?? resolve(key, locales[defaultLocale].messages);
    if (template === undefined) return key;
    if (typeof template !== 'string') return template;
    return template.replace(/\{(\w+)}/g, (match, token) =>
      params[token] !== undefined ? params[token] : match
    );
  }

  applyTranslations(root = document) {
    root.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (key) {
        element.textContent = this.t(key);
      }
    });

    root.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (key) {
        element.setAttribute('placeholder', this.t(key));
      }
    });

    document.title = this.t('app.title');
    document.documentElement.lang = this.locale.htmlLang;
  }
}
