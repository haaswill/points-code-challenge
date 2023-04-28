import { useCallback } from 'react';

import { ITaxBracket } from '@/apiConfig/TaxBrackets';
import { formatCurrency } from '@/formatters';

type UseCalculateIncomeTax = (taxBrackets: ITaxBracket[]) => {
  calculateIncomeTax: (salary: string) => string;
};

const useCalculateIncomeTax: UseCalculateIncomeTax = (taxBrackets) => {
  const calculateIncomeTax = useCallback(
    (salary: string) => {
      let taxableIncome = Number(salary);
      let marginalTax = 0;

      for (let i = 0; i < taxBrackets.length; i++) {
        const { min, max, rate } = taxBrackets[i];

        // Makes sure taxable income is bigger than min
        if (taxableIncome <= min) {
          break;
        }

        // If no max, it's the last bracket
        if (!max) {
          marginalTax += (taxableIncome - min) * rate;
          break;
        }

        // Calculates income in brackets and assigns the lowest value
        const incomeInBracket = Math.min(taxableIncome - min, max - min);
        // Calculates tax
        const taxInBracket = incomeInBracket * rate;

        // Decrements income & Increments tax
        taxableIncome -= incomeInBracket;
        marginalTax += taxInBracket;
      }

      return formatCurrency(marginalTax);
    },
    [taxBrackets]
  );

  return { calculateIncomeTax };
};

export { useCalculateIncomeTax };
