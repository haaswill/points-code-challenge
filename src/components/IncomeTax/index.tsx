import { IIncomeTax, ITaxPerBracket } from '@/hooks/useCalculateIncomeTax';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';
import { Heading, SubHeading } from '../Layout/Typography';
import { Row } from '../Layout/Row';

interface IIncomeTaxParams {
  year: string;
  incomeTax: IIncomeTax;
}

function IncomeTax({ year, incomeTax }: IIncomeTaxParams) {
  const renderRows = (incomeTax: ITaxPerBracket, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>{incomeTax.amount}</TableCell>
        <TableCell>{incomeTax.rate}</TableCell>
      </TableRow>
    );
  };

  return (
    <Row>
      <Heading>{`Total Income Taxes in ${year}: ${incomeTax.total}`}</Heading>
      <SubHeading>{`Effective Tax Rate:  ${incomeTax.effectiveTaxRate}%`}</SubHeading>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Taxes Owned Per Bracket</TableHeader>
            <TableHeader>Tax Rate</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>{incomeTax.taxesPerBracket.map(renderRows)}</TableBody>
      </Table>
    </Row>
  );
}

export { IncomeTax };
