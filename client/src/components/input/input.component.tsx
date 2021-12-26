import React from 'react';
import { HeroInput, InputContainer, CtaContainer } from './input.style';
import { CustomButton } from '../button/button.style';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const handleClick = (event: Event) => {
  event.preventDefault();
};

interface Props {
  placeholder: string;
  type: string;
  login: string;
}
export const Input = ({ placeholder, type, login }: Props) => {
  return (
    <InputContainer>
      <HeroInput type={type} onClick={handleClick} placeholder={placeholder} />
    </InputContainer>
  );
};

const CTAInput = ({ placeholder }: { placeholder: string }) => {
  const auth = useAuth();
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      await auth!.setEmail(email);
      navigate('/signup');
    } catch (error) {
      console.log(error);
      auth!.setEmail('');
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
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
};

export default React.memo(CTAInput);
