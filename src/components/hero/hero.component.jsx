import React from 'react';

import Navigation from '../../components/navigation/navigation.component';
import {
  HeroContainer,
  HeroHeader,
  HeroContent,
  HeroParagraph,
} from './hero.style';
import CTAInput from '../input/input.component';

function HeroSection() {
  return (
    <div>
      <HeroContainer>
        <Navigation />
        <HeroContent>
          <HeroHeader>Unlimited movies, TV shows and more.</HeroHeader>
          <HeroParagraph>Watch Anywhere , Cancel Anytime</HeroParagraph>
          <HeroParagraph>
            Ready to watch ? , Enter your email to create or restart your
            membership
          </HeroParagraph>
          <CTAInput />
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;
