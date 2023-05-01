import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: 0 none;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 2px 5px 10px ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.font};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
  min-width: 250px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms linear;
  width: 50%;

  :hover {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.85)};
  }

  :active {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 0.75)};
  }

  :focus {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

function Button({
  children,
  disabled,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton aria-disabled={disabled} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
}

export { Button };
