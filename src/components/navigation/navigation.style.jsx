import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
export const LogoContainer = styled(Logo)`
  height: 25px;
  cursor: pointer;

  @media only screen and (min-width: 50em) {
    height: 35px;
  }
`;

export const NavItem = styled(Link)`
  display: none;
  color: white;
  text-decoration: none;

  margin-left: 40px;

    display: flex;
    padding: clamp(10px, 20vh, 15px);
  
`;

export const NavIcons = styled.div`
  margin-left: auto;
  #icons {
    margin: 10px;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  color: white;
  text-shadow: 0 1px 0 black;

  align-items: center;
  padding: 5% 5%;
  position: relative;
  z-index: 10;

  @media only screen and (min-width: 40em) {
    padding: 2% 4.5%;
  }
`;
