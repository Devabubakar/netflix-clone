import React from 'react';

import {
  LogoContainer,
  NavigationContainer,
  NavIcons,
  NavItem,
} from './navigation.style';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.tsx';
import { ButtonLink, CustomButton } from '../button/button.style';

import { useLocation } from 'react-router';

function Navigation() {
  const auth = useAuth();
  const location = useLocation();

  return (
    <NavigationContainer>
      <Link to='/'>
        <LogoContainer to='/' />
      </Link>
      {location.pathname === '/' ? (
        <NavItem to='/browse'>Browse</NavItem>
      ) : null}

      {location.pathname === '/login' ||
      location.pathname === '/signup' ? null : (
        <NavIcons>
          {auth.user ? (
            <CustomButton signout onClick={() => auth.signOut()}>
              Logout
            </CustomButton>
          ) : (
            <ButtonLink to='/login'>Login</ButtonLink>
          )}
        </NavIcons>
      )}
    </NavigationContainer>
  );
}

export default Navigation;
