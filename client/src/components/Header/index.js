import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

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
      <div className="navbar-start">
          <Link onClick={updateAppState} className="logo-box" to="/">
            <img src={logo} className='logo-img'></img>
          </Link>
          <Link onClick={updateAppState} className="logo-box" to="/">
            <h1 className="logo">TOTAL TICKET</h1>
          </Link>
      </div>
        <div className='navbar-end'>
          {Auth.loggedIn() ? (
            <>
              <Link onClick={updateAppState} className="m-2 profile-name" to="/me">
                {Auth.getProfile().data.firstName}'s profile
              </Link>
              <button className="m-2 logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <Link onClick={updateAppState} className="m-2 nav-link home" to="/">
                Home
              </Link>
              
              <Link onClick={updateAppState} className="m-2 nav-link" to="/login">
                Login
              </Link>
              <Link onClick={updateAppState} className="m-2 nav-link" to="/signup">
                Signup
              </Link>
            </>
          )}
      </div>
    </header>
  );
};

export default Header;
