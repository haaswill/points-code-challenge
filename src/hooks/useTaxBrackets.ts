import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { ITaxBracket, TaxBrackets } from '@/apiConfig/TaxBrackets';

interface IUseTaxBracketsError {
  message: string;
}

type UseTaxBrackets = (year: string) => {
  taxBrackets: ITaxBracket[];
  loading: boolean;
  error: IUseTaxBracketsError | null;
};

type TaxBracketsState =
  | { loading: false; taxBrackets: ITaxBracket[]; error: null }
  | { loading: false; taxBrackets: []; error: IUseTaxBracketsError }
  | { loading: true; taxBrackets: []; error: null };

const useTaxBrackets: UseTaxBrackets = (year) => {
  const [state, setState] = useState<TaxBracketsState>({
    loading: true,
    taxBrackets: [],
    error: null,
  });

  useEffect(() => {
    const fetchTaxBrackets = async (): Promise<void> => {
      try {
        const response = await TaxBrackets.getTaxBrackets(year);
        setState({
          loading: false,
          error: null,
          taxBrackets: response.tax_brackets,
        });
      } catch (error: any) {
        // Must be any or unknown since TS can't verify that the only error
        // thrown is an instance of Error
        if (error instanceof AxiosError) {
          setState({
            loading: false,
            error: { message: error.message },
            taxBrackets: [],
          });
        }
      }
    };

    fetchTaxBrackets();
  }, [year]);

  return { ...state };
};

export { useTaxBrackets };
