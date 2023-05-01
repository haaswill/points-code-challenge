import { render } from '@/test-utils';
import { IncomeTax } from './index';
import { getIncomeTax } from '@/__mocks__';

describe('TaxBracket', () => {
  it('renders with the proper roles', () => {
    const incomeTax = getIncomeTax();
    const { getByRole } = render(
      <IncomeTax incomeTax={incomeTax} year="2022" />
    );

    expect(
      getByRole('heading', { name: `Total Income Taxes in 2022: $9,000.00` })
    );
  });
});
