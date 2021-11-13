import React from 'react';
import { HeroInput, FloatingLabel, InputContainer } from './input.style';

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

export default Input;
