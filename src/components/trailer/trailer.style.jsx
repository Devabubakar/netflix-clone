import styled from 'styled-components';

export const TrailerContainer = styled.div`
  overflow: hidden;
  
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


export const TrailerError = styled.div`
  align-items: center;
  img {
    display: block;
    width: 100%;
    max-height: 400px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const TrailerErrorHeader = styled.h1`
  font-size: 16px;
  font-family: Netflix Sans Thin;
  text-align: start;
  padding: 10%;

  @media (min-width: 40em) {
    width: 50%;
    padding: 5%;
    margin: 0 auto;
  }
`;
