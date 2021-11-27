import styled from 'styled-components';

export const Modal = styled.div`
  width: 80%;
  height: 80%;
  overflow: auto;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000000;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;
export const CloseContainer = styled.div`
  position: absolute;
  padding: 10px;
  top: 0;
  #icon {
    color: white;
  }
`;
