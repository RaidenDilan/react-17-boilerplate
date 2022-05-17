/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Page } from '../../types/Page';
import isBrowser from '../../functions/isBrowser/isBrowser';
import brandLogo from '../../assets/images/tmdb_logo.svg';

import './SimpleHeader.scss';

const SimpleHeader = () => {
  const navigateToHome = (url: string) => {
    if (isBrowser()) window.location.href = `/${url}`;
  };
  return (
    <header className="SimpleHeader">
      <div className="Container has-background-white">
        <div className="navbar">
          <div className="menu-left">
            <div className="brand-logo">
              <a onClick={() => navigateToHome(Page.main)}>
                <img data-testid="brand-logo-img" className="brand-logo-img" src={brandLogo} alt="TMDB Logo" />
              </a>
            </div>
          </div>
          <div className="menu-right">
            <div className="menu-item" />
            <div className="menu-item" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
