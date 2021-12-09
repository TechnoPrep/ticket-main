import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = ({displayHero}) => {
  const location = useLocation();
  const history = useHistory();

  const handleOnClick = () => {
    displayHero(true)
    history.goBack()
  }

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn go-back-btn mb-3"
            onClick={handleOnClick}
          >
            &larr; Go Back
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
