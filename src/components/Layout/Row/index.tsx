import styled from 'styled-components';

interface IRow {
  align?: 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  justify?: 'space-around' | 'space-between';
  width?: string;
}

const Row = styled.div<IRow>`
  align-items: ${({ align = 'center' }) => align};
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify = 'space-around' }) => justify};
  margin-bottom: 6rem;
  width: ${({ width = '100%' }) => width};

  :last-of-type {
    margin-bottom: 0;
  }
`;

export { Row };
