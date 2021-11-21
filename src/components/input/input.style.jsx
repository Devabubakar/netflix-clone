import styled from 'styled-components';
export const HeroInput = styled.input.attrs((props) => ({
  type: props,
  required: true,
}))`
  margin: 2rem auto;
  width: ${(props) => (props.login ? '200em' : '15em')};
  height: 4em;
  text-align: start;
  border: none;
  position: relative;
  padding: 18px;
  ::placeholder {
    color: black;
  }
  &:focus {
    outline: yellow 1px solid;

    ::placeholder {
      position: absolute;
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 50em) {
    width: 29em;
    height: 4.8em;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const CtaContainer = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
  @media only screen and (min-width: 50em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
