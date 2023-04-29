import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface IStyledLabel {
  hasError?: boolean;
}

interface ILabel extends IStyledLabel {
  children: ReactElement;
  label: string;
  name: string;
}

const errorStyles = css`
  color: ${({ theme }) => theme.colors.error};
`;

const StyledLabel = styled.label<IStyledLabel>`
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0;
  min-width: 250px;
  width: 50%;

  ${({ hasError = false }) => hasError && errorStyles}
`;

function Label({ children, label, hasError, name }: ILabel) {
  return (
    <StyledLabel htmlFor={name} hasError={hasError}>
      {label}
      {children}
    </StyledLabel>
  );
}

export { Label };
