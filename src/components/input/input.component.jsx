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
export function Input({ label, type , login }) {
  return (
    <InputContainer>
      <HeroInput type={type} onClick={handleClick}  />
      <FloatingLabel id='label'>{label}</FloatingLabel>
    </InputContainer>
  );
}

function CTAInput() {
  return (
    <CtaContainer>
      <Input type='email' label='Email Address' />
      <CustomButton id='btn' large>
        Get Started
      </CustomButton>
    </CtaContainer>
  );
}

export default CTAInput;
