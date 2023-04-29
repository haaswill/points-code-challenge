import { render } from '@/test-utils';
import { Alert } from './index';

describe('Alert', () => {
  it('renders with the correct props', () => {
    const message = 'Testing Error Alert';
    const { getByRole } = render(<Alert message={message} variant="error" />);

    expect(getByRole('alert')).toHaveTextContent(message);
  });
});
