import React from 'react';

import {
  HeroContainer,
  HeroHeader,
  HeroContent,
  HeroParagraph,
} from './hero.style';

const CTAInput = React.lazy(() => import('../input/input.component'));

function HeroSection() {
  return (
    <>
      <HeroContainer>
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
    </>
  );
}

export default HeroSection;
