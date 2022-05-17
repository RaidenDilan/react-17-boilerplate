import React from 'react';

import brandLogo from '../../assets/images/tmdb_logo.svg';

import './SimpleFooter.scss';

const SimpleFooter = () => {
  return (
    <footer className="SimpleFooter">
      <div className="container">
        <div className="brand-logo">
          <img data-testid="brand-logo-img" src={brandLogo} alt="Brand Logo" />
        </div>
        {/* <div className="social-icons"></div> */}
      </div>
    </footer>
  );
};

export default SimpleFooter;
