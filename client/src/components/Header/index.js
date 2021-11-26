import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="navbar text-light flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Name & Logo</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <Link className="m-2" to="/">
                Home
              </Link>
              
              <Link className="m-2" to="/login">
                Login
              </Link>
              <Link className="m-2" to="/signup">
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
