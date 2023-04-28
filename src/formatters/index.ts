function formatCurrency(value: number, locale = 'en-CA', currency = 'CAD') {
  return value.toLocaleString(locale, { style: 'currency', currency });
}

export { formatCurrency };
