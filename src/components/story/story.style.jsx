import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StoryImageLink from '../../assets/phone.png';

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
  }
`;

export const StoryHeader = styled.h2`
  margin-top: 5vh;

  @media only screen and (min-width: 40em) {
    font-size: clamp(2rem, 20vw, 2.5rem);
    margin-top: 0;
  }
`;
export const StoryParagraph = styled.p`
  margin: 20px 10px;
  font-weight: 400;
  font-size: 1.125rem;

  @media only screen and (min-width: 40em) {
    font-size: clamp(1.25rem, 20vw, 1.5rem);
    margin: 20px 0;
  }
`;
export const StoryLink = styled(Link)`
  text-decoration: none;
  color: white;
  @media only screen and (min-width:40em){
    font-size: clamp(1.25rem, 20vw, 1.35rem);
  }
`;

export const StoryImage = styled.img`
  max-width: 100%;
  margin: 20px 0;
`;
