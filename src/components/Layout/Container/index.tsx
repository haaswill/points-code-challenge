import styled from 'styled-components';

interface IContainer {
  align?: 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  justify?: 'space-around' | 'space-between' | 'none';
  width?: string;
}

const Container = styled.div<IContainer>`
  align-items: ${({ align = 'center' }) => align};
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify = 'none' }) => justify};
  padding: 2rem;
  width: ${({ width = '100%' }) => width};
`;

export { Container };
