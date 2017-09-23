import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import '../dropdownmenu.css';

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let menu;
    if (this.props.menuActive) {
      menu = <div>
               <ul>
                 <li><Link to='/' className='menu-link' onClick={ this.props.toggleMenu }>Essentials</Link></li>
                 <li><Link to='/methodology' className='menu-link' onClick={ this.props.toggleMenu }>Methodology</Link></li>
                 <li><Link to='/specs' className='menu-link' onClick={ this.props.toggleMenu }>Specs</Link></li>
                 <li><Link to='/profile' className='menu-link' onClick={ this.props.toggleMenu }>Profile</Link></li>
                 <li><Link to='/equipment' className='menu-link' onClick={ this.props.toggleMenu }>Equipment</Link></li>
                 <li><Link to='/technologies' className='menu-link' onClick={ this.props.toggleMenu }>Technologies</Link></li>
                 <li><Link to='/other' className='menu-link' onClick={ this.props.toggleMenu }>Other</Link></li>
               </ul>
             </div>
    } else {
      menu = '';
    }
    return (
      <div id='menu'>
        <CSSTransitionGroup
          transitionName='menu'
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          {menu}
        </CSSTransitionGroup>
      </div>
    )
  }
};

export default DropDownMenu;
