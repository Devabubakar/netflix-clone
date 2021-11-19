import React from 'react';
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
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <HeroContainer>
      <Link to='/'>
        <LogoTop to='/' />
      </Link>

      <LoginContainer>
        <LoginHeader>Sign In</LoginHeader>
        <FormContainer>
          <LoginInput
            type='email'
            label='Email Address'
            placeholder='Email or phone Number'
          />
          <LoginInput type='password' label='Password' placeholder='Password' />
          <Link to='/browse'>
            <LoginButton to='browse'>Sign In</LoginButton>
          </Link>
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
