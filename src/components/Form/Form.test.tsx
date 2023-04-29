import { render } from '@/test-utils';
import { Form } from './index';

describe('Form', () => {
  it('renders with the correct props', () => {
    const { getByRole } = render(<Form></Form>);

    expect(getByRole('form')).toBeValid();
  });
});
