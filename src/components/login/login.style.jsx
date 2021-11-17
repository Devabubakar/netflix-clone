import styled from 'styled-components';
import { LogoContainer } from '../navigation/navigation.style';
import { CustomButton } from '../button/button.style';

export const LoginContainer = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  padding: 20% 6%;
  position: absolute;

  @media (min-width: 40em) {
    width: 480px;
    height: 80vh;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5% 5%;
  }
`;

export const LogoTop = styled(LogoContainer)`
  margin: 20px;
  position: absolute;
  z-index: 10;
  cursor: pointer;

  @media (min-width: 40em) {
    margin: 2% 5%;
    height: 45px;
  }
`;
export const LoginHeader = styled.h3`
  font-size: 1.7rem;
  font-weight: 800;
`;
export const FormContainer = styled.form`
  margin-bottom: 5em;
`;
export const LoginInput = styled.input`
  height: 3.8em;
  width: 90vw;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 10px;
  font-weight: 800;
  background: #333333;
  margin: 1em 0;
  color: white;

  &:focus {
    ::placeholder {
      position: absolute;
      font-size: 10px;
    }
  }
  @media (min-width: 40em) {
    width: 350px;
  }
`;

export const LoginLabel = styled.span`
  position: absolute;
  left: 35px;
  top: 23%;
  color: #575757;
  font-weight: 800;

  
`;

export const LoginButton = styled.button`
  background-color: #e6322f;
  color: white;
  border: none;
  width: 90vw;
  font-size: 1rem;
  height: 50px;
  margin-top: 10vh;
  border-radius: 6px;
  cursor: pointer;

  @media (min-width: 40em) {
    width: 350px;
  }
`;

export const LoginCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
