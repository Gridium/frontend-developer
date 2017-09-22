import React from 'react';
import logo from '../images/logo-circle.png';
import { Link } from 'react-router-dom';
import '../header.css'
import essentialsCover from '../images/essentials-cover.jpg';
import essentialsPanel from '../images/essentials-panel.jpg';
import methodologyCover from '../images/methodology-cover.jpg';
import specsCover from '../images/specs-cover.jpg';
import profileCover from '../images/profile-cover.jpg';
import equipmentCover from '../images/equipment-cover.jpg';
import technologiesCover from '../images/technologies-cover.jpg';

const Header = () => (
  <header>

    <img src={logo} className='logo' />
    
    <div className='header-top'></div>
    <div className='nav-backing'>
      <div className='header-nav'>
        <div className='header-panel'>
          <Link to='/'>
            <img src={essentialsPanel} className='panel-img' />
          </Link>
        </div>
        <div className='header-panel'>
          <Link to='/methodology'>
            <img src={methodologyCover} className='panel-img' />
          </Link>
        </div>
        <div className='header-panel'>
          <img src={specsCover} className='panel-img' />
        </div>
        <div className='header-panel'>
          <img src={profileCover} className='panel-img' />
        </div>
        <div className='header-panel'>
          <img src={equipmentCover} className='panel-img' />
        </div>
        <div className='header-panel'>
          <img src={technologiesCover} className='panel-img' />
        </div>
      </div>
      <div className='header-nav-mobile'></div>
    </div>
  </header>
);

export default Header;
