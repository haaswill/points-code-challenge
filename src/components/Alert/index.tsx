import styled, { css } from 'styled-components';

import { P } from '@/components/Layout/Typography';

interface IAlert {
  // Could be expanded in the future
  variant?: 'error';
}

interface IAlertParams extends IAlert {
  message: string;
}

const errorStyles = css`
  border-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
`;

const StyledAlert = styled.div<IAlert>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  text-align: left;

  ${P} {
    font-size: 2rem;
    margin: 0;
  }

  ${({ variant }) => variant === 'error' && errorStyles}
`;

function Alert({ message, variant }: IAlertParams) {
  return (
    <StyledAlert variant={variant}>
      <P>{message}</P>
    </StyledAlert>
  );
}

export { Alert };
