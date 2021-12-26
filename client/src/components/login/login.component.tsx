import React, { useState } from 'react';
import { HeroContainer } from '../hero/hero.style';

import {
  LoginContainer,
  LoginHeader,
  FormContainer,
  LoginInput,
  LoginButton,
  ErrorInput,
} from './login.style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../loader/loader.component';

const Login = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await auth!.signIn(input.email, input.password).then(() => {
        navigate('/browse');
        setLoading(false);
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
        setLoading(false);
      }
    }
  };

  if (loading) return <Loader />;

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setInput({ ...input, [name]: value });
  };

  return (
    <HeroContainer>
      <LoginContainer>
        <LoginHeader>Sign In</LoginHeader>
        <FormContainer onSubmit={handleSubmit}>
          <LoginInput
            type='email'
            placeholder='Email Address'
            onChange={handleChange}
            name='email'
            required={true}
          />
          <LoginInput
            type='password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            required={true}
          />

          {error && <ErrorInput>{error.message}</ErrorInput>}

          <LoginButton type='submit'>Sign In</LoginButton>
        </FormContainer>
      </LoginContainer>
    </HeroContainer>
  );
};

export default Login;
