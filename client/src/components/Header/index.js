import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link onClick={updateAppState} className="text-light" to="/">
            <h1 className="logo">Logo // TOTAL TICKET</h1>
          </Link>
        <div className='navbar-end'>
          {Auth.loggedIn() ? (
            <>
              <Link onClick={updateAppState} className="m-2" to="/me">
                {Auth.getProfile().data.firstName}'s profile
              </Link>
              <button className="m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <Link onClick={updateAppState} className="m-2 nav-link" to="/">
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
      </div>
    </header>
  );
};

export default Header;
