import styled from 'styled-components';

interface ICard {
  align?: 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  justify?: 'space-around' | 'space-between';
  width?: string;
}

const Card = styled.div<ICard>`
  align-items: ${({ align = 'center' }) => align};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 5px 10px ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify = 'space-around' }) => justify};
  padding: 2rem;
  width: ${({ width = '100%' }) => width};
`;

export { Card };
