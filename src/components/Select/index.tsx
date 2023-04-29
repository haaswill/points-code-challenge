import { SelectHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface IStyledSelect {
  hasError?: boolean;
}

interface ISelect
  extends IStyledSelect,
    SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
}

const errorStyles = css`
  border-color: ${({ theme }) => theme.colors.error};
`;

const StyledSelect = styled.select<IStyledSelect>`
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

const Option = styled.option`
  color: inherit;
  font-size: inherit;
`;

function Select({ children, label, hasError, name, ...rest }: ISelect) {
  return (
    <StyledSelect
      name={name}
      hasError={hasError}
      aria-labelledby={label}
      {...rest}
    >
      {children}
    </StyledSelect>
  );
}

export { Select, Option };
