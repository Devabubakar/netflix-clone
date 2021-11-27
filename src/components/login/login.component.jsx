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
} from './login.style';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  

  const auth = useAuth();
  const [input, setInput] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signIn(input.email, input.password).then(() => {
        navigate('/browse');
      });

      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  return (
    <HeroContainer>
      <Link to='/'>
        <LogoTop to='/' />
      </Link>

      <LoginContainer>
        <LoginHeader>Sign In</LoginHeader>
        <FormContainer onSubmit={handleSubmit}>
          <LoginInput
            type='email'
            label='Email Address'
            placeholder='Email Address'
            onChange={handleChange}
            name='email'
            required={true}
          />
          <LoginInput
            type='password'
            label='Password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            required={true}
          />

          <LoginButton type='submit'>Sign In</LoginButton>
        </FormContainer>
        <LoginCTA>
          <FaFacebookSquare size={30} />
          <Link to='#' style={{ textDecoration: 'none', color: 'white' }}>
            Login with Facebook
          </Link>
        </LoginCTA>
      </LoginContainer>
    </HeroContainer>
  );
};

export default Login;
