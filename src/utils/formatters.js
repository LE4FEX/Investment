export function createFormatters(languageMeta, currencyCode) {
  const locale = languageMeta.locale;
  let currencyFormatter;
  try {
    currencyFormatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 2,
    });
  } catch (error) {
    console.warn('Falling back to USD currency formatter', error);
    currencyFormatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    });
  }

  const numberFormatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 4,
  });

  const percentFormatter = new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return {
    locale,
    currency(value) {
      return Number.isFinite(value) ? currencyFormatter.format(value) : 'N/A';
    },
    number(value) {
      return Number.isFinite(value) ? numberFormatter.format(value) : 'N/A';
    },
    percent(value) {
      return Number.isFinite(value) ? percentFormatter.format(value) : 'N/A';
    },
  };
}
