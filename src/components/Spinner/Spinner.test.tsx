import { render } from '@/test-utils';
import { Spinner } from './index';

describe('Spinner', () => {
  it('should render with proper role', () => {
    const { getByRole } = render(<Spinner />);

    expect(getByRole('status')).toBeInTheDocument();
  });
});
