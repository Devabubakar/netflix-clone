import React from 'react';
import { HeroInput, InputContainer, CtaContainer } from './input.style';
import { CustomButton } from '../button/button.style';

const handleClick = (event) => {
  event.preventDefault();
};
export function Input({ placeholder, type, login }) {
  return (
    <InputContainer>
      <HeroInput type={type} onClick={handleClick} placeholder={placeholder} />
    </InputContainer>
  );
}

function CTAInput({ placeholder }) {
  return (
    <CtaContainer>
      <Input type='email' placeholder={placeholder} />
      <CustomButton id='btn' large>
        Get Started
      </CustomButton>
    </CtaContainer>
  );
}

export default CTAInput;
