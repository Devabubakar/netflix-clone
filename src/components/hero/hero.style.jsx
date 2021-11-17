import styled from 'styled-components';
import HeroImage from '../../assets/hero-image.jpeg';
export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;

    background-image: linear-gradient(
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );

    min-height: 100vh;
    width: 100%;
    border: none;
    overflow: hidden;
  }
  //iphone 5 only
  @media screen and (device-aspect-ratio: 40/71) {
    height: 115vh;

    &::before {
      height: 115vh;
    }
  }

  @media only screen and (min-width: 50em) {
    height: 100vh;
    &::before {
      height: 100vh;
    }
  }
`;

export const HeroHeader = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
  margin: 0 auto;
  

  @media only screen and (min-width: 50em) {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    width: 90%;
    letter-spacing: 2px;
  }
`;

export const HeroParagraph = styled.p`
  opacity: 0.9;
  font-weight: 100;
  margin-top: 16px;
  font-size: 1.125rem;
  line-height: normal;
  font-weight: 400;

  :first-of-type {
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 50em) {
    :last-of-type {
      white-space: nowrap;
    }
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  position: absolute;
  margin: 20vh 5%;

  @media only screen and (min-width: 40em) {
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
`;
