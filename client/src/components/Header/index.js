import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import smLogo from '../../img/total-ticket-logo-smaller.png'
import Media from 'react-media'

import Auth from '../../utils/auth';

const Header = ({heroImage}) => {
  
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const updateAppState = () => {
    heroImage();
  }

  return (
    <div>
      <Media query="(min-width: 1116px)">
        {matches => {
          return matches ?
          <header className="navbar">
          <Link onClick={updateAppState} className="logo-box navbar-start" to="/">
            <img src={smLogo} className='logo-img'></img>
          </Link>
          <Link onClick={updateAppState} className="logo-box navbar-start" to="/">
            <h1 className="logo-text">TOTAL TICKET</h1>
          </Link>
        <div className='navbar-end'>
          {Auth.loggedIn() ? (
            <>
              <Link onClick={updateAppState} className="nav-link home" to="/">
                Home
              </Link>
              <Link onClick={updateAppState} className="nav-link" to="/me">
                {Auth.getProfile().data.firstName}'s Profile
              </Link>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <Link onClick={updateAppState} className="nav-link home" to="/">
                Home
              </Link>
              
              <Link onClick={updateAppState} className="nav-link" to="/login">
                Login
              </Link>
              <Link onClick={updateAppState} className="nav-link" to="/signup">
                Signup
              </Link>
            </>
          )}
      </div>
    </header>
    :
    <div class="topnav">
      <a href="#home" class="active">Logo</a>
      
      <div id="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars">click</i>
      </a>
    </div>

        }}
    
    </Media>
    </div>
  );
};

export default Header;






