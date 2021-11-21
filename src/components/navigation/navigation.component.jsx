import React from 'react';

// import { ButtonLink } from '../button/button.style';
import {
  LogoContainer,
  NavigationContainer,
  NavItem,
  NavIcons,
} from './navigation.style';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell } from 'react-icons/fa';

function Navigation() {
  return (
    <NavigationContainer>
      <Link to='/'>
        <LogoContainer to='/' />
      </Link>
      <NavItem>Home</NavItem>
      <NavItem>Tv Shows</NavItem>
      <NavItem>Movies</NavItem>
      <NavItem>New and Popular</NavItem>
      <NavItem>My List</NavItem>
      <NavIcons>
        <FaSearch size={20} id='icons' />
        <FaBell size={20} id='icons' />
      </NavIcons>

      {/* <ButtonLink to='/login'>Sign In</ButtonLink> */}
    </NavigationContainer>
  );
}

export default Navigation;
