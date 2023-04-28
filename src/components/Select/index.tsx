import styled, { css } from 'styled-components';

interface ISelect {
  hasError?: boolean;
}

const errorStyles = css`
  border-color: ${({ theme }) => theme.colors.error};
`;

const Select = styled.select<ISelect>`
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

export { Select, Option };
