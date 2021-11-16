import React from 'react';
import {
  HeroInput,
  FloatingLabel,
  InputContainer,
  CtaContainer,
} from './input.style';
import { CustomButton } from '../button/button.style';

const handleClick = (event) => {
  event.preventDefault();
};
function Input() {
  return (
    <form>
      <InputContainer>
        <HeroInput onClick={handleClick} />
        <FloatingLabel id='label'>Email Address</FloatingLabel>
      </InputContainer>
    </form>
  );
}

export function CTAInput() {
  return (
    <CtaContainer>
      <Input type='email' />
      <CustomButton id='btn' large>
        Get Started
      </CustomButton>
    </CtaContainer>
  );
}

export default CTAInput;
