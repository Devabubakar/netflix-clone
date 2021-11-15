import React from 'react';
import {
  Story,
  StoryHeader,
  StoryLink,
  StoryParagraph,
  StoryImage,
} from './story.style';
import StoryImageLink from '../../assets/phone.png';

function StorySection() {
  return (
    <div>
      <Story>
        <div>
          <StoryHeader>Have an Android Phone? Get our Free Plan!</StoryHeader>
          <StoryParagraph>
            Watch a selection of new movies and Tv shows without adding any
            payment details!
          </StoryParagraph>
          <StoryLink to='/download'>Get the app </StoryLink>
        </div>
        <StoryImage src={StoryImageLink} />
      </Story>
    </div>
  );
}

export default StorySection;
