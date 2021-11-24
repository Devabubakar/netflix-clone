import styled from 'styled-components';

export const RowContainer = styled.div`
  background: rgba(0, 0, 0, 1);

  padding-bottom: 3vh;
  padding-left: 20px;

  @media only screen and (min-width: 40em) {
    padding-left: 40px;
  }
`;

export const RowSlider = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: grid;
  grid-auto-flow: column;
  ::-webkit-scrollbar {
    background: transparent;
  }

  gap: 5px;
  transition: transform 450ms;
`;
export const RowItem = styled.img`
  height: 200px;
  background: url(${(props) => props.img});
  width: auto;
  display: block;
  object-fit: contain;

  background-repeat: no-repeat;
  border-radius: 6px;

  &:hover {
    transform: scale(1.3);
  }
`;
export const RowHeader = styled.h1`
  color: white;
  padding-top: 2vh;
  padding-bottom: 1vh;
  font-size: 1rem;
`;
