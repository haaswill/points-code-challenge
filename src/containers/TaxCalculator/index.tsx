import { ChangeEvent, MouseEvent, useState } from 'react';

import { useTaxBrackets } from '@/hooks/useTaxBrackets';

import { Container } from '@/components/Layout/Container';
import { Row } from '@/components/Layout/Row';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Option, Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Title } from '@/components/Layout/Typography';
import { IncomeTax } from '@/components/IncomeTax';
import { Spinner } from '@/components/Spinner';
import { Alert } from '@/components/Alert';
import {
  IIncomeTax,
  useCalculateIncomeTax,
} from '@/hooks/useCalculateIncomeTax';

// could possibly come from the API instead
const YEARS = ['2019', '2020', '2021', '2022'];
const DEFAULT_YEAR = '2022';

function TaxCalculator() {
  const [year, setYear] = useState<string>(DEFAULT_YEAR);
  const [salary, setSalary] = useState<string>('');
  const [incomeTax, setIncomeTax] = useState<IIncomeTax | null>(null);

  const { taxBrackets, loading, error } = useTaxBrackets(year);
  const { calculateIncomeTax } = useCalculateIncomeTax(taxBrackets);

  const handleOnChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  const handleOnClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = calculateIncomeTax(Number(salary));
    setIncomeTax(value);
  };

  const renderOptions = (value: string, index: number) => {
    return (
      <Option value={value} key={index}>
        {value}
      </Option>
    );
  };

  const renderIncomeTax = () => {
    if (!incomeTax) {
      return null;
    }

    return <IncomeTax incomeTax={incomeTax} year={year} />;
  };

  const renderStatus = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Alert variant="error" message={error.message} />;
    }
  };

  const salaryHasError = !!salary && Number(salary) <= 0;

  return (
    <Container width="600px">
      <Title>Calculate Your Income Tax</Title>
      <Row>
        <Form>
          <Row>
            <Label label="salary-label" name="salary" hasError={salaryHasError}>
              Enter your salary:
              <Input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                name="salary"
                label="salary-label"
                type="number"
                min={0}
                required
                hasError={salaryHasError}
              />
            </Label>
            <Label label="year-label" name="year">
              Select the tax year:
              <Select
                value={year}
                onChange={handleOnChangeYear}
                name="year"
                label="year-label"
              >
                {YEARS.map(renderOptions)}
              </Select>
            </Label>
          </Row>
          <Button
            type="button"
            onClick={handleOnClickSubmit}
            disabled={!salary || salaryHasError || error !== null || loading}
          >
            Submit
          </Button>
        </Form>
        {renderStatus()}
      </Row>
      {renderIncomeTax()}
    </Container>
  );
}

export { TaxCalculator };
