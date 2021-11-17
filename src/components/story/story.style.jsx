import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Story = styled.div`
  background: #000000;
  margin: 0;
  border-top: #222222 8px solid;
  border-bottom: #222222 8px solid;
  color: white;
  padding: 5%;
  text-align: center;
  line-height: 1.5;

  @media only screen and (min-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: start;
    align-items: center;
    padding: 5% 8%;
  }
`;

export const StoryHeader = styled.h2`
  margin-top: 5vh;

  font-weight: 800;
  @media only screen and (min-width: 40em) {
    font-size: clamp(2rem, 20vw, 3rem);
    margin-top: 0;
    width: 80%;
    line-height: 1.25;
  }
`;
export const StoryParagraph = styled.p`
  margin: 20px 10px;
  font-weight: 400;
  font-size: 1.125rem;
  margin: 0 auto;
  font-family: Netflix Sans Thin;

  @media only screen and (min-width: 40em) {
    font-size: clamp(1.25rem, 20vw, 1.5rem);
    margin: 20px 0;
  }
`;
export const StoryLink = styled(Link)`
  text-decoration: none;
  color: white;
  @media only screen and (min-width: 40em) {
    font-size: clamp(1.25rem, 20vw, 1.35rem);
  }
`;

export const StoryImage = styled.img`
  max-width: 100%;
  margin: 20px 0;
`;
