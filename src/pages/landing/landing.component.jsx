import React from 'react';
import { CustomButton } from '../../components/button/button.style';
import Navigation from '../../components/navigation/navigation.component';
import {
  HeroContainer,
  HeroHeader,
  HeroContent,
  HeroParagraph,
  CtaContainer,
} from './landing.style';
import Input from '../../components/input/input.component';

function LandingPage() {
  return (
    <HeroContainer>
      <Navigation />
      <HeroContent>
        <HeroHeader>Unlimited movies, TV Shows and more.</HeroHeader>
        <HeroParagraph>Watch Anywhere , Cancel Anytime</HeroParagraph>
        <HeroParagraph>
          Ready to watch ? , Enter your email to create or restart your
          membership
        </HeroParagraph>
        <CtaContainer>
          <Input type='email'  />
          <CustomButton id='btn' large>Get Started</CustomButton>
        </CtaContainer>
      </HeroContent>
    </HeroContainer>
  );
}

export default LandingPage;
