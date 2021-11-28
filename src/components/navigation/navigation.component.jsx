import React from 'react';

// import { ButtonLink } from '../button/button.style';
import {
  LogoContainer,
  NavigationContainer,
  NavIcons,
  NavItem,
} from './navigation.style';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ButtonLink, CustomButton } from '../button/button.style';
import Loader from '../loader/loader.component';
import { useLocation } from 'react-router';

function Navigation() {
  const auth = useAuth();
  const location = useLocation();

  return auth.loading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Link to='/'>
        <LogoContainer to='/' />
      </Link>
      {location.pathname === '/' ? (
        <NavItem to='/browse'>Browse</NavItem>
      ) : null}

      <NavIcons>
        {auth.user ? (
          <CustomButton signout onClick={() => auth.signOut()}>
            Logout
          </CustomButton>
        ) : (
          <ButtonLink to='/login'>Login</ButtonLink>
        )}
      </NavIcons>

      {/* <ButtonLink to='/login'>Sign In</ButtonLink> */}
    </NavigationContainer>
  );
}

export default Navigation;
