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

  const [wasSubmitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const password = formValues.password;
    try {
      setLoading(true);
      setSubmitted(true);
      await auth!.signUp(email, password).then(() => {
        navigate('/browse');
        setLoading(false);
      });
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        setError(error);
        
      }
    }
  };

  if (loading) return <Loader />;

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
        {error && <ErrorInput>{error.message}</ErrorInput>}
      </LoginContainer>
    </HeroContainer>
  );
};

export default SignUp;
