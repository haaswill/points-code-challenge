import { useEffect, useState, useRef } from 'react';

import { ITaxBracket, TaxBrackets } from '@/apiConfig/TaxBrackets';

interface IUseTaxBracketsError {
  message: string;
}

type UseTaxBracketsResult = {
  taxBrackets: ITaxBracket[];
  loading: boolean;
  error: IUseTaxBracketsError | null;
};

type TaxBracketsState =
  | { loading: false; taxBrackets: ITaxBracket[]; error: null }
  | { loading: false; taxBrackets: []; error: IUseTaxBracketsError }
  | { loading: true; taxBrackets: []; error: null };

const useTaxBrackets = (year: string): UseTaxBracketsResult => {
  const mountedRef = useRef(true);
  const [state, setState] = useState<TaxBracketsState>({
    loading: true,
    taxBrackets: [],
    error: null,
  });

  useEffect(() => {
    const fetchTaxBrackets = async (): Promise<void> => {
      setState({ loading: true, error: null, taxBrackets: [] });
      TaxBrackets.getTaxBrackets(year)
        .then((response) => {
          if (mountedRef.current) {
            setState({
              loading: false,
              error: null,
              taxBrackets: response.tax_brackets,
            });
          }
        })
        .catch((error) => {
          setState({
            loading: false,
            error: { message: error.message },
            taxBrackets: [],
          });
        });
    };

    fetchTaxBrackets();
  }, [year]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return { ...state };
};

export { useTaxBrackets };
