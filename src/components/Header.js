import React, { Component } from 'react';
import logo from '../images/logo-circle.png';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';
import '../header.css';
import essentialsCover from '../images/essentials-cover.jpg';
import essentialsPanel from '../images/essentials-panel.jpg';
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

        <img src={logo} onClick={ this.toggleMenu } className='logo' />

        <div className='header-top'></div>
        <DropDownMenu menuActive={this.state.menuActive} toggleMenu={ this.toggleMenu } />
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
              <Link to='/specs'>
                <img src={specsCover} className='panel-img' />
              </Link>
            </div>
            <div className='header-panel'>
              <Link to='/profile'>
                <img src={profileCover} className='panel-img' />
              </Link>
            </div>
            <div className='header-panel'>
              <Link to='/equipment'>
                <img src={equipmentCover} className='panel-img' />
              </Link>
            </div>
            <div className='header-panel'>
              <Link to='/technologies'>
                <img src={technologiesCover} className='panel-img' />
              </Link>
            </div>
          </div>
          <div className='header-nav-mobile'></div>
        </div>
      </header>
    )
  }
};

export default Header;
