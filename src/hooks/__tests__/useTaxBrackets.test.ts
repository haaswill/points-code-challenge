import { renderHook, waitFor } from '@testing-library/react';
import { useTaxBrackets } from '../useTaxBrackets';
import { getTaxBrackets } from '@/__mocks__';
import { ITaxBracket, TaxBrackets } from '../../apiConfig/TaxBrackets';

jest.mock('../../apiConfig/TaxBrackets');

describe('useTaxBrackets', () => {
  let mockTaxBrackets: ITaxBracket[];
  const year = '2022';

  beforeAll(() => {
    mockTaxBrackets = getTaxBrackets(Number(year));

    TaxBrackets.getTaxBrackets = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ tax_brackets: mockTaxBrackets })
      );
  });

  it('returns the initial state', async () => {
    const { result, unmount } = renderHook(() => useTaxBrackets(year));

    expect(result.current).toStrictEqual({
      loading: true,
      taxBrackets: [],
      error: null,
    });

    unmount();
  });

  it('returns data and loading is set to false', async () => {
    const { result, unmount } = renderHook(() => useTaxBrackets(year));

    await waitFor(() => result.current.loading === false);

    expect(result.current.taxBrackets).toBe(mockTaxBrackets);

    unmount();
  });
});
