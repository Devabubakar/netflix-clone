import React, { useState } from 'react';
import { HeroContainer } from '../hero/hero.style';

import {
  LoginContainer,
  LoginHeader,
  FormContainer,
  LoginInput,
  LoginButton,
  ErrorInput,
} from '../login/login.style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.tsx';
import Loader from '../loader/loader.component';

const SignUp = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const email = auth.email;

  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await auth.signUp(email, password).then(() => {
        navigate('/browse');
        setLoading(false);
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <HeroContainer>
      <LoginContainer>
        <LoginHeader>Sign Up</LoginHeader>
        <FormContainer onSubmit={handleSubmit}>
          <LoginInput
            type='email'
            label='Email Address'
            placeholder='Email Address'
            name='email'
            value={email}
            required={true}
            readOnly={true}
          />
          <LoginInput
            type='password'
            label='Password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            required={true}
          />

          {error && <ErrorInput>{error.message}</ErrorInput>}

          <LoginButton type='submit'>Sign Up</LoginButton>
        </FormContainer>
      </LoginContainer>
    </HeroContainer>
  );
};

export default SignUp;
