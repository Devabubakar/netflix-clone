import styled from 'styled-components';
export const HeroInput = styled.input`
  margin: 2rem auto;
  padding: .7rem 20vw;
  ::placeholder {
    position: absolute;
    left: 0;
    padding-left: 10px;
  }
  &:focus {
    ::placeholder {
      padding-bottom: 50px;
    }
  }
  @media only screen and (min-width:50em) {
    padding: 1.5rem 10vw;
  }
`;
