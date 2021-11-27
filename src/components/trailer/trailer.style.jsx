import styled from 'styled-components';

export const TrailerContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 100%;

  width: 100%;
  @media only screen and (min-width: 40em) {
    padding: 10vh;
    width: 90vw;
    margin: 0 auto;
  }
`;

export const TrailerIframe = styled.iframe`
  height: 60vh;
`;
export const TrailerWrapper = styled.div`
  background: #000000;
  margin: 0;
  color: white;
  text-align: center;
`;
