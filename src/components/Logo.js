import React from 'react';

const Logo = ({ imgSrc, toggleMenu, logoClass }) => (
  <img src={imgSrc} onClick={toggleMenu} className={logoClass} alt='logo' />
);

export default Logo;
