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
  );
};

export default Header;
