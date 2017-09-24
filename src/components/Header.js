import React, { Component } from 'react';
import logo from '../images/logo-circle.png';
import logo2 from '../images/logo-circle-2.png';
import DropDownMenu from './DropDownMenu';
import HeaderPanel from './HeaderPanel';
import Logo from './Logo';
import '../css/header.css';
import essentialsCover from '../images/essentials-cover.jpg';
import methodologyCover from '../images/methodology-cover.jpg';
import specsCover from '../images/specs-cover.jpg';
import profileCover from '../images/profile-cover.jpg';
import equipmentCover from '../images/equipment-cover.jpg';
import technologiesCover from '../images/technologies-cover.jpg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  };

  toggleMenu() {
    const menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    return (
      <header>
      
        <Logo imgSrc={ logo } toggleMenu={ this.toggleMenu } logoClass={'logo'} />
        <Logo imgSrc={ logo2 } toggleMenu={ this.toggleMenu } logoClass={'logo-2'} />

        <div className='header-top'></div>
        <DropDownMenu menuActive={this.state.menuActive} toggleMenu={ this.toggleMenu } />
        <div className='nav-backing'>
          <div className='header-nav'>
            <HeaderPanel linkPath={'/'} imgCover={essentialsCover} />
            <HeaderPanel linkPath={'/methodology'} imgCover={methodologyCover} />
            <HeaderPanel linkPath={'/specs'} imgCover={specsCover} />
            <HeaderPanel linkPath={'/profile'} imgCover={profileCover} />
            <HeaderPanel linkPath={'/equipment'} imgCover={equipmentCover} />
            <HeaderPanel linkPath={'/technologies'} imgCover={technologiesCover} />
          </div>
          <div className='header-nav-mobile'></div>
        </div>
      </header>
    )
  }
};

export default Header;
