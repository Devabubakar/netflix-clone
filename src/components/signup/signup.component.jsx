import React, { useState } from 'react';
import { HeroContainer } from '../hero/hero.style';
import { FaFacebookSquare } from 'react-icons/fa';

import {
  LoginContainer,
  LogoTop,
  LoginHeader,
  FormContainer,
  LoginInput,
  LoginButton,
  LoginCTA,
  ErrorInput,
} from '../login/login.style';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../loader/loader.component';

const SignUp = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const email = auth.email;

  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    console.log(email, password);
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
      <Link to='/'>
        <LogoTop to='/' />
      </Link>

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

          <LoginButton type='submit'>Sign In</LoginButton>
        </FormContainer>
        <LoginCTA>
          <FaFacebookSquare size={30} />
          <Link to='#' style={{ textDecoration: 'none', color: 'white' }}>
            Sign Up with Facebook
          </Link>
        </LoginCTA>
      </LoginContainer>
    </HeroContainer>
  );
};

export default SignUp;
