import React from 'react';

import { ButtonLink } from '../button/button.style';
import { LogoContainer, NavigationContainer } from './navigation.style';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <NavigationContainer>
      <Link to='/'>
        <LogoContainer to='/' />
      </Link>

      <ButtonLink to='/login'>Sign In</ButtonLink>
    </NavigationContainer>
  );
}

export default Navigation;
