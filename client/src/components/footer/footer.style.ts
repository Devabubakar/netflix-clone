import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #000000;
  color: gray;
  padding: 10%;
  border-top: #222222 6px solid;

  @media only screen and (min-width: 40em) {
    padding: 5% 12%;
    margin: 0 auto;
  }
`;

export const FooterContent = styled.div`
  margin: 40px 0;
  gap: 10px;
  display: grid;
  padding: 0;
  font-size: 12px;
  font-family: Netflix Sans Thin;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  @media only screen and (min-width: 40em) {
    font-size: 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  }
  /* grid-template-columns: repeat(auto-fill, minmax(9rem, 2fr)); */
`;

export const FooterHeader = styled.h3`
  font-size: '.985rem';
`;
