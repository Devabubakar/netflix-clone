import React, { useState } from 'react';
import { HeroContainer } from '../hero/hero.style';
import { Input } from '../input/input.component';

import {
  LoginContainer,
  LoginHeader,
  FormContainer,
  LoginInput,
  LoginButton,
  ErrorInput,
} from '../login/login.style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../loader/loader.component';

const SignUp = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const email = auth!.email;

  const [password, setPassword] = useState('');
  const [wasSubmitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      setSubmitted(true);
      await auth!.signUp(email, password).then(() => {
        navigate('/browse');
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loader />;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <HeroContainer>
      <LoginContainer>
        <LoginHeader>Sign Up</LoginHeader>
        <FormContainer onSubmit={handleSubmit}>
          <LoginInput
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required={true}
            readOnly={true}
          />
          <Input
            name='password'
            type='password'
            placeholder='Your Password'
            wasSubmitted={wasSubmitted}
          />

          <LoginButton type='submit'>Sign Up</LoginButton>
        </FormContainer>
      </LoginContainer>
    </HeroContainer>
  );
};

export default SignUp;
