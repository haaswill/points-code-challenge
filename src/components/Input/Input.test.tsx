import { render, fireEvent } from '@/test-utils';
import { Input } from './index';

describe('Input', () => {
  it('renders with the correct props', () => {
    const { getByRole } = render(
      <Input name="name" label="label" onChange={() => {}} type="text" />
    );

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('calls onChange function when changed', () => {
    const handleChange = jest.fn();

    const { getByRole } = render(
      <Input name="name" label="Label" onChange={handleChange} type="text" />
    );
    fireEvent.change(getByRole('textbox'), { target: { value: '60000' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
