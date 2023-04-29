import { ReactNode } from 'react';
import styled from 'styled-components';

interface IForm {
  children?: ReactNode;
}

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Form({ children }: IForm) {
  return <StyledForm role="form">{children}</StyledForm>;
}

export { Form };
