import { renderHook } from '@testing-library/react';
import { useCalculateIncomeTax } from '../useCalculateIncomeTax';
import { getTaxBrackets } from '@/__mocks__';
import { ITaxBracket } from '../../apiConfig/TaxBrackets';

describe('useTaxBrackets', () => {
  let mockTaxBrackets: ITaxBracket[];
  const salary = '60000';
  const correctIncomeTax = '$6,000.00';

  beforeAll(() => {
    mockTaxBrackets = getTaxBrackets(2021);
  });

  it('returns the correct income tax', () => {
    const { result } = renderHook(() => useCalculateIncomeTax(mockTaxBrackets));

    const incomeTax = result.current.calculateIncomeTax(salary);

    expect(incomeTax).toEqual(correctIncomeTax);
  });
});
