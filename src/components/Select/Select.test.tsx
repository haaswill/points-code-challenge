import { render, fireEvent } from '@/test-utils';
import { Option, Select } from './index';

describe('Select', () => {
  it('renders with the correct props', () => {
    const { getByRole } = render(
      <Select label="label" name="name">
        <Option>Test 1</Option>
        <Option>Test 2</Option>
        <Option>Test 3</Option>
      </Select>
    );

    expect(getByRole('combobox')).toBeInTheDocument();
  });

  it('should handle on change', () => {
    const handleChange = jest.fn();

    const { getByRole } = render(
      <Select
        label="label"
        name="name"
        onChange={handleChange}
        defaultValue={2}
      >
        <Option value={1}>Test 1</Option>
        <Option value={2}>Test 2</Option>
        <Option value={3}>Test 3</Option>
      </Select>
    );
    fireEvent.change(getByRole('combobox'), { target: { value: 1 } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
