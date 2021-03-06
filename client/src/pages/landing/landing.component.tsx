import React from 'react';

const HeroSection = React.lazy(
  () => import('../../components/hero/hero.component')
);
const StorySection = React.lazy(
  () => import('../../components/story/story.component')
);

const QAItem = React.lazy(
  () => import('../../components/qaitem/qaitem.component')
);

const Footer = React.lazy(
  () => import('../../components/footer/footer.component')
);

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StorySection />
      <QAItem />
      <Footer />
    </>
  );
};

export default LandingPage;
