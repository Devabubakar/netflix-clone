import React from 'react';
import { HeroInput } from './input.style';

const handleClick = (event) => {
  event.preventDefault();
};
function Input({ type, placeholder }) {
  return (
    <form>
      <HeroInput type={type} placeholder={placeholder} onClick={handleClick} />
    </form>
  );
}

export default Input;
