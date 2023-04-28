import axios, { AxiosResponse } from 'axios';

interface TaxBracket {
  max: number;
  min: number;
  rate: number;
}

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const taxBracketsRequests = {
  get: (url: string) => instance.get<TaxBracket>(url).then(responseBody),
  // other methods can be added, for instance POST, DELETE, ETC
};

export const TaxBrackets = {
  getTaxBrackets: (year: string): Promise<TaxBracket> =>
    taxBracketsRequests.get(`/tax-calculator/tax-year/${year}`),
  // other functions can be added to use the available methods
};
