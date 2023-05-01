import { getByLabelText, render } from '@/test-utils';
import { TaxBracket } from './index';
import { getTaxBrackets } from '@/__mocks__';

describe('TaxBracket', () => {
  it('renders with the proper roles', () => {
    const taxBrackets = getTaxBrackets(2022);
    const { getByRole } = render(
      <TaxBracket taxBrackets={taxBrackets} year="2022" />
    );

    expect(
      getByRole('columnheader', { name: `Taxable Income - 2022 Brackets` })
    );
  });
});
