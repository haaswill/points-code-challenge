import { render } from '@/test-utils';
import { Label } from './index';
import { Input } from '../Input';

describe('Label', () => {
  it('renders with the correct props', () => {
    const { getByLabelText } = render(
      <Label name="name" label="label">
        Label
        <Input name="name" label="label" />
      </Label>
    );

    expect(getByLabelText(/label/i));
  });
});
