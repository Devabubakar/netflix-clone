import React from 'react';
import HeroSection from '../../components/hero/hero.component';
import StorySection from '../../components/story/story.component';
import QAItem from '../../components/qaitem/qaitem.component';

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <QAItem />
    </div>
  );
}

export default LandingPage;
