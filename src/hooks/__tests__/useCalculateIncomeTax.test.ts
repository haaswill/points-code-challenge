import { renderHook } from '@testing-library/react';
import { useCalculateIncomeTax } from '../useCalculateIncomeTax';
import { getIncomeTax, getTaxBrackets } from '@/__mocks__';
import { ITaxBracket } from '../../apiConfig/TaxBrackets';

describe('useTaxBrackets', () => {
  let mockTaxBrackets: ITaxBracket[];
  const salary = 60000;
  const correctIncomeTax = getIncomeTax();

  beforeAll(() => {
    mockTaxBrackets = getTaxBrackets(2022);
  });

  it('returns the correct income tax', () => {
    const { result } = renderHook(() => useCalculateIncomeTax(mockTaxBrackets));

    const incomeTax = result.current.calculateIncomeTax(salary);

    expect(incomeTax).toEqual(correctIncomeTax);
  });
});
