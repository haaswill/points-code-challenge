import { render } from '@/test-utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './index';

describe('Table', () => {
  it('renders with the proper role', () => {
    const { getByRole } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Test Header</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(getByRole('table')).toBeInTheDocument();
  });
});
