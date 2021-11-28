import React from 'react';

import {
  HeroContainer,
  HeroHeader,
  HeroContent,
  HeroParagraph,
} from './hero.style';
import CTAInput from '../input/input.component';
import Navigation from '../navigation/navigation.component';

function HeroSection() {
  return (
    <div>
      <HeroContainer>
        {/* !TODO:use the navigation component */}
        <Navigation />

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
