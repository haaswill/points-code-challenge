import { formatCurrency } from './index';

describe('Formatters', () => {
  describe('formatCurrency', () => {
    const value = 6000;
    const formattedValue = '$6,000.00';

    it('returns the correct formatted value', () => {
      const formattedCurrency = formatCurrency(value);

      expect(formattedCurrency).toEqual(formattedValue);
    });
  });
});
