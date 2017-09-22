import React from 'react';
import logo from '../images/logo-circle.png';
import { Link } from 'react-router-dom';
import essentialsCover from '../images/essentials-cover.jpg';
import essentialsPanel from '../images/essentials-panel.jpg';
import methodologyCover from '../images/methodology-cover.jpg';
import specsCover from '../images/specs-cover.jpg';
import profileCover from '../images/profile-cover.jpg';
import equipmentCover from '../images/equipment-cover.jpg';
import technologiesCover from '../images/technologies-cover.jpg';

const Header = () => (
  <header>
    <div className='img-container'>
      <img src={logo} className='logo' />
    </div>
    <div className='header-top'></div>
    <div className='nav-backing'>
      <div className='header-nav'>
        <div className='header-panel'>
          <Link to='/'>
            <img src={essentialsPanel} className='panelImg' />
          </Link>
        </div>
        <div className='header-panel'>
          <Link to='/methodology'>
            <img src={methodologyCover} className='panelImg' />
          </Link>
        </div>
        <div className='header-panel'>
          <img src={specsCover} className='panelImg' />
        </div>
        <div className='header-panel'>
          <img src={profileCover} className='panelImg' />
        </div>
        <div className='header-panel'>
          <img src={equipmentCover} className='panelImg' />
        </div>
        <div className='header-panel'>
          <img src={technologiesCover} className='panelImg' />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
