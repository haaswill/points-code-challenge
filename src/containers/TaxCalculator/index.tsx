import { useState } from 'react';

import { Container } from '@/components/Layout/Container';
import { Form } from '@/components/Form';
import { Input } from '@/components/Input';
import { Option, Select } from '@/components/Select';
import { Button } from '@/components/Button';

// could possibly come from the API instead
const YEARS = ['2019', '2020', '2021', '2022'];
const DEFAULT_YEAR = '2022';

function TaxCalculator() {
  const [year, setYear] = useState<string>(DEFAULT_YEAR);
  const [salary, setSalary] = useState<string>('');

  const renderOptions = (value: string, index: number) => {
    return (
      <Option key={index} value={value} selected={year === value}>
        {value}
      </Option>
    );
  };

  return (
    <Container>
      <Form>
        <Select onChange={(e) => setYear(e.target.value)}>
          {YEARS.map(renderOptions)}
        </Select>
        <Input value={salary} onChange={(e) => setSalary(e.target.value)} />
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

export { TaxCalculator };
