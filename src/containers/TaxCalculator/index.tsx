import { MouseEvent, useState } from 'react';

import { Container } from '@/components/Layout/Container';
import { Row } from '@/components/Layout/Row';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Option, Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Card } from '@/components/Layout/Card';
import { ITaxBracket } from '@/apiConfig/TaxBrackets';
import { Title } from '@/components/Layout/Typography';
import { TaxBracket } from '@/components/TaxBracket';

// could possibly come from the API instead
const YEARS = ['2019', '2020', '2021', '2022'];
const DEFAULT_YEAR = '2022';

function TaxCalculator() {
  const [year, setYear] = useState<string>(DEFAULT_YEAR);
  const [salary, setSalary] = useState<string>('');
  const [taxBrackets, setTaxBrackets] = useState<ITaxBracket[]>([]);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const renderOptions = (value: string, index: number) => {
    return (
      <Option value={value} key={index}>
        {value}
      </Option>
    );
  };

  const renderTaxBrackets = (taxBracket: ITaxBracket, index: number) => {
    return (
      <TaxBracket
        max={taxBracket.max}
        min={taxBracket.min}
        rate={taxBracket.rate}
        key={index}
      />
    );
  };

  return (
    <Container width="600px">
      <Row>
        <Title>Calculate Your Income Tax</Title>
        <Form>
          <Row>
            <Label label="Select the tax year:" name="year">
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                name="year"
              >
                {YEARS.map(renderOptions)}
              </Select>
            </Label>
            <Label label="Enter your Salary:" name="salary">
              <Input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                name="salary"
                type="number"
              />
            </Label>
          </Row>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
      </Row>
      <Row>
        {taxBrackets.length > 0 && <Title>Tax Brackets</Title>}
        {taxBrackets.map(renderTaxBrackets)}
      </Row>
    </Container>
  );
}

export { TaxCalculator };
