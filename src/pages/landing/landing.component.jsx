import React, { useState } from 'react';
import HeroSection from '../../components/hero/hero.component';
import StorySection from '../../components/story/story.component';

function LandingPage() {
  const [visibility, setVisibility] = useState(true);
  
  return (
    <div>
      <HeroSection />
      <StorySection />
    </div>
  );
}

export default LandingPage;
