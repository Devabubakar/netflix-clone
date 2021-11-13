import styled from 'styled-components';
import HeroImage from '../../assets/hero-image.jpeg';
export const HeroContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      radial-gradient(50% 120%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);

    height: 90vh;
    width: 100%;
    border: none;
    overflow: hidden;
  }
  @media only screen and (min-width: 50em) {
    height: 100vh;
    &::before {
      height: 100vh;
    }
  }
`;

export const HeroHeader = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.1;
  margin: 0 auto;
  width: 80%;

  @media only screen and (min-width: 50em) {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 530;
    width: 80%;
  }
`;

export const HeroParagraph = styled.p`
  opacity: 0.9;
  font-weight: 100;
  margin-top: 16px;
  font-size: 1.125rem;
  line-height: normal;
  font-weight: 300;

  :first-of-type {
    margin-bottom: 20px;
    font-weight: 400;
  }
  @media only screen and (min-width: 50em) {
    font-size: 1.3rem;

    :last-of-type {
      white-space: nowrap;
    }
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  z-index: 1;
  position: absolute;
  margin: 20vh auto;
  padding: 5%;

  @media only screen and (min-width: 40em) {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 50em) {
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const CtaContainer = styled.div`
  @media only screen and (min-width: 50em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
