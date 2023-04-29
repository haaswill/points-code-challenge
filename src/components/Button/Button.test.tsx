import { render, fireEvent } from '@/test-utils';
import { Button } from './index';

describe('Button', () => {
  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(<Button onClick={handleClick}>Test</Button>);
    fireEvent.click(getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
