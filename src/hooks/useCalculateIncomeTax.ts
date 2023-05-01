import { useCallback } from 'react';

import { ITaxBracket } from '@/apiConfig/TaxBrackets';
import { formatCurrency } from '@/formatters';

export interface ITaxPerBracket {
  rate: string;
  amount: string;
}

export interface IIncomeTax {
  total: string;
  taxesPerBracket: ITaxPerBracket[];
  effectiveTaxRate: string;
}

interface IUseCalculateIncomeTaxReturn {
  calculateIncomeTax: (salary: number) => IIncomeTax | null;
}

const useCalculateIncomeTax = (
  taxBrackets: ITaxBracket[]
): IUseCalculateIncomeTaxReturn => {
  const calculateIncomeTax = useCallback(
    (salary: number): IIncomeTax | null => {
      if (!salary || salary <= 0) {
        return null;
      }

      let taxOwned = 0;
      let tempSalary = salary;
      const taxesPerBracket: ITaxPerBracket[] = [];

      for (let i = 0; i < taxBrackets.length; i++) {
        const max = taxBrackets[i].max ?? Infinity;
        const bracketIncome = Math.min(max - taxBrackets[i].min, tempSalary);
        const bracketTax = bracketIncome * taxBrackets[i].rate;

        taxesPerBracket.push({
          amount: formatCurrency(bracketTax),
          rate: `${(taxBrackets[i].rate * 100).toFixed(2)}%`,
        });

        taxOwned += bracketTax;
        tempSalary -= bracketIncome;

        if (salary <= max) {
          break;
        }
      }

      return {
        total: formatCurrency(taxOwned),
        taxesPerBracket,
        effectiveTaxRate: ((taxOwned / salary) * 100 || 0).toFixed(2),
      };
    },
    [taxBrackets]
  );

  return { calculateIncomeTax };
};

export { useCalculateIncomeTax };
