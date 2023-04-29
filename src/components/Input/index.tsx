import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface IStyledInput {
  hasError?: boolean;
}

interface IInput extends IStyledInput, InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const errorStyles = css`
  border-color: ${({ theme }) => theme.colors.error};
`;

const StyledInput = styled.input<IStyledInput>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.font};
  font-size: 2rem;
  margin: 1rem 0 0;
  padding: 1rem;
  transition: all 150ms linear;
  width: 100%;

  :focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline-color: ${({ theme }) => theme.colors.primary};
    outline-offset: 1px;
  }

  ${({ hasError = false }) => hasError && errorStyles}
`;

function Input({ label, hasError, name, ...rest }: IInput) {
  return (
    <StyledInput
      name={name}
      hasError={hasError}
      aria-label={name}
      aria-labelledby={label}
      {...rest}
    />
  );
}

export { Input };
