import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/nav-logo.png'

import Auth from '../../utils/auth';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  background-color: black;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color: white;
  }
`

const Navbar = ({heroImage, displayHero}) => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    
      const updateAppState = () => {
        heroImage();
        displayHero(true)
      }

  return (
    <Nav>
      <Link onClick={updateAppState} className="logo-box navbar-start" to="/">
            <img src={logo} className='logo-img'></img>
          </Link>
      <Burger displayHero={displayHero} heroImage={heroImage} />
    </Nav>
  )
}

export default Navbar