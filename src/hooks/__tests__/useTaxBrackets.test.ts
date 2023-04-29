import { renderHook, waitFor } from '@testing-library/react';
import { useTaxBrackets } from '../useTaxBrackets';
import { getTaxBrackets } from '@/__mocks__';
import { ITaxBracket, TaxBrackets } from '../../apiConfig/TaxBrackets';

jest.mock('../../apiConfig/TaxBrackets');

describe('useTaxBrackets', () => {
  let mockTaxBrackets: ITaxBracket[];

  beforeAll(() => {
    mockTaxBrackets = getTaxBrackets(2022);

    TaxBrackets.getTaxBrackets = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ tax_brackets: mockTaxBrackets })
      );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns the initial state loading', async () => {
    const { result } = renderHook(() => useTaxBrackets('2022'));

    expect(result.current).toStrictEqual({
      loading: true,
      taxBrackets: [],
      error: null,
    });
  });

  // TODO: Fix act() warning
  it('returns data and loading is set to false', async () => {
    const { result } = renderHook(() => useTaxBrackets('2022'));

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.taxBrackets).toBe(mockTaxBrackets);
  });
});
