import styled from 'styled-components';
export const HeroInput = styled.input.attrs((props) => ({
  type: props,
  required: 'true',
}))`
  margin: 2rem auto;
  width: 15em;
  height: 3em;
  text-align: start;
  border: none;
  position: relative;
  padding: 18px;
  &:focus {
    outline: yellow 1px solid;
  }
  &:focus + #label,
  &:not(focus):valid ~ #label {
    top: 30%;
    font-size: 14px;
  }
  &:valid {
    background: white;
  }

  @media only screen and (min-width: 50em) {
    width: 30em;
    height: 4.9em;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const FloatingLabel = styled.span`
  position: absolute;
  color: gray;
  pointer-events: none;
  top: 45%;
  left: 5%;
  transition: 0.1s;
`;
