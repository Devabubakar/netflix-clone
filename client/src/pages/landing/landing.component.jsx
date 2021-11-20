import React from 'react';
import HeroSection from '../../components/hero/hero.component';
import StorySection from '../../components/story/story.component';
import QAItem from '../../components/qaitem/qaitem.component';
import Footer from '../../components/footer/footer.component';

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <QAItem />
      <Footer />
    </div>
  );
}

export default LandingPage;
