import styled from 'styled-components';

interface IHeading {
  marginTop?: string;
}

const Title = styled.h1`
  font-size: 4rem;
  margin: 0 0 4rem;
  text-align: center;
  text-transform: uppercase;
`;

const Heading = styled.h2<IHeading>`
  font-size: 3rem;
  margin: 0 0 3rem;
  margin-top: ${({ marginTop = '0' }) => marginTop};
  text-align: center;
`;

const SubHeading = styled.h4`
  font-size: 2rem;
  margin: 0 0 2rem;
`;

const P = styled.p`
  font-size: 1rem;
  margin: 0 0 1rem;
`;

export { Title, Heading, SubHeading, P };
