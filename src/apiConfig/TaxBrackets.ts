import axios, { AxiosResponse } from 'axios';

export interface ITaxBracket {
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
  get: (url: string) => instance.get<ITaxBracket>(url).then(responseBody),
  // other methods can be added, for instance POST, DELETE, ETC
};

const TaxBrackets = {
  getTaxBrackets: (year: string): Promise<ITaxBracket> =>
    taxBracketsRequests.get(`/tax-calculator/tax-year/${year}`),
  // other functions can be added to use the available methods
};

export { TaxBrackets };
