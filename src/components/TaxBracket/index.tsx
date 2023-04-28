import { ITaxBracket } from '@/apiConfig/TaxBrackets';
import { formatCurrency } from '@/formatters';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';

interface ITaxBracketParams {
  year: string;
  taxBrackets: ITaxBracket[];
}

function TaxBracket({ year, taxBrackets }: ITaxBracketParams) {
  const renderBracket = (min: number, max?: number) => {
    if (min === 0) {
      return `${formatCurrency(max!)} or less`;
    }

    if (!max) {
      return `More than ${formatCurrency(min)}`;
    }

    return `${formatCurrency(min)} to ${formatCurrency(max)}`;
  };

  const renderRows = (taxBracket: ITaxBracket, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>{renderBracket(taxBracket.min, taxBracket.max)}</TableCell>
        <TableCell>{`${(taxBracket.rate * 100).toFixed(2)}%`}</TableCell>
      </TableRow>
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Taxable Income - {year} Brackets</TableHeader>
          <TableHeader>Tax Rate</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>{taxBrackets.map(renderRows)}</TableBody>
    </Table>
  );
}

export { TaxBracket };
