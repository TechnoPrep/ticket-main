import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Auth from '../../utils/auth';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;
  color: white;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #25282a;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    z-index: 1
  }
`;

const RightNav = ({ open, heroImage, displayHero }) => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    
      const updateAppState = () => {
        heroImage();
        displayHero(true)
      }
  return (
    <Ul open={open}>
      {Auth.loggedIn() ? (
            <>
              <li><Link onClick={updateAppState} className="nav-link home" to="/">
                Home
              </Link></li>
              <li><Link onClick={updateAppState} className="nav-link" to="/me">
                {Auth.getProfile().data.firstName}'s Profile
              </Link></li>
              <li><button className="logout-btn" onClick={logout}>
                Logout
              </button></li>
            </>
          ) : (
            <>
            <li><Link onClick={updateAppState} className="nav-link home" to="/">
                Home
              </Link></li>
              
              <li><Link onClick={updateAppState} className="nav-link" to="/login">
                Login
              </Link></li>
              <li><Link onClick={updateAppState} className="nav-link" to="/signup">
                Signup
              </Link></li>
            </>
          )}
    </Ul>
  )
}

export default RightNav