import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="navbar">
      <div className="navbar-start">
          <Link className="text-light" to="/">
            <h1 className="logo">Logo // TOTAL TICKET</h1>
          </Link>
        <div className='navbar-end'>
          {Auth.loggedIn() ? (
            <>
              <Link className="m-2 profile-name" to="/me">
                {Auth.getProfile().data.firstName}'s profile
              </Link>
              <button className="m-2 logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <Link className="m-2 nav-link" to="/">
                Home
              </Link>
              
              <Link className="m-2 nav-link" to="/login">
                Login
              </Link>
              <Link className="m-2 nav-link" to="/signup">
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
