import { FormHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Form({ children, ...rest }: IForm) {
  return (
    <StyledForm role="form" {...rest}>
      {children}
    </StyledForm>
  );
}

export { Form };
