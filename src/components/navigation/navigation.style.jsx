import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const LogoContainer = styled(Logo)`
  height: 25px;
  color: 'green';

  @media only screen and (min-width: 50em) {
    height: 35px;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 5%;
  position: relative;
`;
