import React from 'react';
import { HeroInput, InputContainer, CtaContainer } from './input.style';
import { CustomButton } from '../button/button.style';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

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
  const auth = useAuth();
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    auth.setEmail(email);

    navigate('/signup');
    try {
    } catch (error) {
      console.log(error);
      auth.setEmail('');
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <CtaContainer onSubmit={handleSubmit}>
      <InputContainer>
        <HeroInput
          type='email'
          onChange={handleChange}
          placeholder={placeholder}
        />
      </InputContainer>

      <CustomButton id='btn' large type='submit'>
        Get Started
      </CustomButton>
    </CtaContainer>
  );
}

export default CTAInput;
