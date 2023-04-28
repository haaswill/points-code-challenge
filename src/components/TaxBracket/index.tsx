import { ITaxBracket } from '@/apiConfig/TaxBrackets';

import { Card } from '@/components/Layout/Card';
import { P, SubHeading } from '@/components/Layout/Typography';

function TaxBracket({ max, min, rate }: ITaxBracket) {
  return (
    <Card>
      <SubHeading>Max:</SubHeading>
      <P>{max}</P>
      <br />
      <SubHeading>Min:</SubHeading>
      <P>{min}</P>
      <br />
      <SubHeading>Rate:</SubHeading>
      <P>{rate}</P>
    </Card>
  );
}

export { TaxBracket };
