import React from 'react';

import {
  HeroContainer,
  HeroHeader,
  HeroContent,
  HeroParagraph,
  LogoContainer,
  NavigationContainer,
} from './hero.style';
import CTAInput from '../input/input.component';
import { ButtonLink } from '../button/button.style';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div>
      <HeroContainer>
        {/* !TODO:use the navigation component */}
        <NavigationContainer>
          <Link to='/'>
            <LogoContainer to='/' />
          </Link>

          <ButtonLink to='/login'>Sign In</ButtonLink>
        </NavigationContainer>
        <HeroContent>
          <HeroHeader>Unlimited movies, TV shows and more.</HeroHeader>
          <HeroParagraph>Watch Anywhere , Cancel Anytime</HeroParagraph>
          <HeroParagraph>
            Ready to watch ? , Enter your email to create or restart your
            membership
          </HeroParagraph>
          <CTAInput placeholder='Email Address' />
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;
