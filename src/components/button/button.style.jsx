import styled from 'styled-components';
export const CustomButton = styled.button`
  padding: ${(props) => (props.large ? '.6rem 2rem' : '.6rem 1.5rem')};
  background-color: #e6322f;
  color: white;
  border: none;
  border-radius: ${(props) => (props.large ? '4px' : '5px')};
  font-size: ${(props) => (props.large ? '1.2rem' : '1rem')};
  font-weight: ${(props) => (props.large ? '100' : '500')};

  @media only screen and (min-width: 50em) {
    padding: ${(props) => (props.large ? '1.4rem 3rem' : '.6rem 1.5rem')};
  }
`;
