import { ChangeEvent, MouseEvent, useState } from 'react';

import { ITaxBracket } from '@/apiConfig/TaxBrackets';
import { useFetchTaxBrackets } from '@/hooks/useFetchTaxBrackets';

import { Container } from '@/components/Layout/Container';
import { Row } from '@/components/Layout/Row';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Option, Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Heading, Title } from '@/components/Layout/Typography';
import { TaxBracket } from '@/components/TaxBracket';
import { Spinner } from '@/components/Spinner';
import { Alert } from '@/components/Alert';
import { useCalculateIncomeTax } from '@/hooks/useCalculateIncomeTax';

// could possibly come from the API instead
const YEARS = ['2019', '2020', '2021', '2022'];
const DEFAULT_YEAR = '2022';

function TaxCalculator() {
  const [year, setYear] = useState<string>(DEFAULT_YEAR);
  const [salary, setSalary] = useState<string>('');
  const [incomeTax, setIncomeTax] = useState<string | null>(null);

  const { taxBrackets, loading, error } = useFetchTaxBrackets(year);
  const { calculateIncomeTax } = useCalculateIncomeTax(taxBrackets);

  const handleOnChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
  };

  const handleOnClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = calculateIncomeTax(salary);
    setIncomeTax(value);
  };

  const renderOptions = (value: string, index: number) => {
    return (
      <Option value={value} key={index}>
        {value}
      </Option>
    );
  };

  const renderBrackets = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Alert variant="error" message={error.message} />;
    }

    if (taxBrackets.length === 0) {
      return null;
    }

    return (
      <>
        <Heading>Tax Brackets</Heading>
        <Row direction="row">
          <TaxBracket taxBrackets={taxBrackets} year={year} />
        </Row>
      </>
    );
  };

  const renderIncomeTax = () => {
    if (!incomeTax) {
      return null;
    }

    return (
      <Heading marginTop={'3rem'}>{`Your income tax is ${incomeTax}`}</Heading>
    );
  };

  return (
    <Container width="600px">
      <Title>Calculate Your Income Tax</Title>
      <Row>
        <Form>
          <Row>
            <Label label="Enter your Salary:" name="salary">
              <Input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                name="salary"
                type="number"
              />
            </Label>
            <Label label="Select the tax year:" name="year">
              <Select value={year} onChange={handleOnChangeYear} name="year">
                {YEARS.map(renderOptions)}
              </Select>
            </Label>
          </Row>
          <Button type="button" onClick={handleOnClickSubmit}>
            Submit
          </Button>
        </Form>
        {renderIncomeTax()}
      </Row>
      {renderBrackets()}
    </Container>
  );
}

export { TaxCalculator };
