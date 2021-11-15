import styled from 'styled-components';
export const QASection = styled.div`
  background: #000000;
  color: white;
`;
export const QAHeader = styled.h3`
  font-size: 1.5rem;
  padding: 20px;
  text-align: center;
  @media only screen and (min-width: 40em) {
    font-size: clamp(1.5rem, 20vh, 3rem);
    padding: 40px;
  }
`;

export const QAItems = styled.div`
  padding: 3%;
  background: #303030;
  text-align: center;
  position: relative;

  @media only screen and (min-width: 40em) {
    width: 65vw;
    padding: 20px;
    margin: 10px auto auto auto;
  }
`;
export const QAContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QAItemHeader = styled.h4`
  font-weight: 400;
  padding: 0 15px;
  @media only screen and (min-width: 40em) {
    font-size: clamp(1rem, 20vh, 1.5rem);
  }
`;

export const QAItemParagraph = styled(QAItems)`
  height: max-content;
  padding: 3%;
  text-align: start;
  margin-top: 2px;
  font-weight: 300;
  transition: max-height 2s ease;
  @media only screen and (min-width: 40em) {
    font-size: clamp(1rem, 20vh, 1.5rem);
  }
`;
