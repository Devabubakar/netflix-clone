import React from 'react';

import { CustomButton } from '../button/button.style';
import { LogoContainer, NavigationContainer } from './navigation.style';

function Navigation() {
  return (
    <NavigationContainer>
      <LogoContainer />
      <CustomButton>Sign In</CustomButton>
    </NavigationContainer>
  );
}

export default Navigation;
