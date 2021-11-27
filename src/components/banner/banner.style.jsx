import styled from 'styled-components';

export const BannerContainer = styled.div`
  object-fit: contain;

  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.img});
`;

export const BannerContent = styled.div`
  margin-top: 20vh;
  padding: 20px;
  text-align: start;
  color: white;
  line-height: 1.5;

  @media only screen and (min-width: 40em) {
    width: 70%;
    margin-left: 50px;
    margin-top: 10vh;
  }
`;
export const BannerHeader = styled.h1`
  font-size: 1.5rem;
  width: 60%;
  @media only screen and (min-width: 40em) {
    font-size: 3rem;
  }
`;
export const BannerParagraph = styled.p`
  margin: 3vh 0;
  font-size: 1rem;
  width: 80%;
  @media only screen and (min-width: 40em) {
    width: 60%;
    margin: 2vh 0;
    font-size: 1rem;
  }
  @media only screen and (min-width: 50em) {
    width: 50%;
  }
`;
export const BannerButton = styled.button`
  width: ${(props) => (props.info ? '120px' : '80px')};
  height: 35px;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  font-family: Netflix Sans Medium;
  gap: 10px;

  background-color: ${(props) => (props.info ? 'grey' : null)};
  color: ${(props) => (props.info ? 'white' : null)};
`;

export const BannerCta = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 40em) {
    width: 48%;
    margin-bottom: 20vh;
  }
  @media only screen and (min-width: 50em) {
    width: 40%;
  }
`;
