import en from './en.js';
import th from './th.js';

export const locales = {
  en: {
    label: 'English',
    locale: 'en-US',
    htmlLang: 'en',
    messages: en,
  },
  th: {
    label: 'ไทย',
    locale: 'th-TH',
    htmlLang: 'th',
    messages: th,
  },
};

export const defaultLocale = 'en';
