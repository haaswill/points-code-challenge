import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.font};
  font-size: 1.5rem;
  width: 100%;
`;

const TableHead = styled.thead`
  font-size: 1.75rem;
  text-transform: uppercase;
`;

const TableBody = styled.tbody`
  font-size: 1.5rem;
`;

const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.background};

  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
`;

const TableCell = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;

  :last-of-type {
    text-align: right;
  }
`;

export { Table, TableHead, TableBody, TableRow, TableHeader, TableCell };
