import { render, fireEvent } from '@/test-utils';
import { Input } from './index';

describe('Input', () => {
  it('renders with the correct props', () => {
    const { getByLabelText } = render(
      <Input name="Test" onChange={() => {}} />
    );

    expect(getByLabelText('Test')).toBeValid();
  });

  it('calls onChange function when changed', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <Input name="Test" label="Label" onChange={handleChange} />
    );
    fireEvent.change(getByLabelText('Test'), { target: { value: '60000' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
