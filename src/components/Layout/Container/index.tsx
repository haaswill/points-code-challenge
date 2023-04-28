import styled from 'styled-components';

interface IContainer {
  align?: 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  justify?: 'space-around' | 'space-between';
}

const Container = styled.div<IContainer>`
  align-items: ${({ align = 'center' }) => align};
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'space-around' }) => justify};
  width: 100%;
`;

export { Container };
