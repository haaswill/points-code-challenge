import axios, { AxiosError, AxiosResponse } from 'axios';

export interface ITaxBracket {
  max?: number;
  min: number;
  rate: number;
}

interface IGetTaxBrackets {
  tax_brackets: ITaxBracket[];
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 500) {
      throw new Error(
        'Something went wrong on our side, please refresh the page or contact support.'
      );
    }
    throw error;
  }
);

const responseBody = (response: AxiosResponse) => response.data;

const taxBracketsRequests = {
  get: (url: string) => instance.get<ITaxBracket>(url).then(responseBody),
  // other methods can be added, for instance POST, DELETE, ETC
};

const TaxBrackets = {
  getTaxBrackets: (year: string): Promise<IGetTaxBrackets> =>
    taxBracketsRequests.get(`/tax-calculator/tax-year/${year}`),
  // other functions can be added to use the available methods
};

export { TaxBrackets };
