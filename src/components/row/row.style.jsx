import styled from 'styled-components';

export const RowContainer = styled.div`
  height: 100vh;
  padding-left: 10vw;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: transform 450ms;

  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 1) 100%);
`;
export const RowItem = styled.div`
  height: 120px;
  background: red;
  width: 130px;

  &:hover {
    transform: scale(1.2);
  }
`;
