import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 0 none;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 5px 10px ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.font};
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  min-width: 250px;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms linear;
  width: 50%;

  :hover {
    opacity: 0.85;
  }

  :active {
    opacity: 0.75;
  }

  :focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export { Button };
