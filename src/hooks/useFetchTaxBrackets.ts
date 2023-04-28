import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { ITaxBracket, TaxBrackets } from '@/apiConfig/TaxBrackets';

interface IUseFetchTaxBracketsError {
  message: string;
}

type UseFetchTaxBrackets = (year: string) => {
  taxBrackets: ITaxBracket[];
  loading: boolean;
  error: IUseFetchTaxBracketsError | null;
};

const useFetchTaxBrackets: UseFetchTaxBrackets = (year) => {
  const [taxBrackets, setTaxBrackets] = useState<ITaxBracket[]>([]);
  const [error, setError] = useState<IUseFetchTaxBracketsError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    TaxBrackets.getTaxBrackets(year)
      .then((data) => {
        setTaxBrackets(data.tax_brackets);
        setError(null);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError({ message: error.message });
        setTaxBrackets([]);
        setLoading(false);
      });
  }, [year]);

  return { taxBrackets, loading, error };
};

export { useFetchTaxBrackets };
