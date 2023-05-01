import { ITaxBracket } from '@/apiConfig/TaxBrackets';
import { IIncomeTax } from '@/hooks/useCalculateIncomeTax';

export const getTaxBrackets = (year: number): ITaxBracket[] => {
  switch (year) {
    case 2022:
      return [
        { max: 60000, min: 0, rate: 0.15 },
        { max: 85000, min: 60001, rate: 0.205 },
        { max: 100000, min: 85001, rate: 0.26 },
        { max: 150000, min: 100001, rate: 0.29 },
        { min: 150001, rate: 0.33 },
      ];
    case 2021:
      return [
        { max: 40000, min: 0, rate: 0.15 },
        { max: 67000, min: 40001, rate: 0.205 },
        { max: 97000, min: 67001, rate: 0.26 },
        { max: 140000, min: 97001, rate: 0.29 },
        { min: 140001, rate: 0.33 },
      ];
    default:
      return [
        { max: 10000, min: 0, rate: 0.15 },
        { max: 25000, min: 10001, rate: 0.205 },
        { max: 50000, min: 25001, rate: 0.26 },
        { max: 100000, min: 50001, rate: 0.29 },
        { min: 100001, rate: 0.33 },
      ];
  }
};

export const getIncomeTax = (): IIncomeTax => {
  return {
    total: '$9,000.00',
    taxesPerBracket: [
      {
        amount: '$9,000.00',
        rate: '15.00%',
      },
    ],
    effectiveTaxRate: '15.00',
  };
};
