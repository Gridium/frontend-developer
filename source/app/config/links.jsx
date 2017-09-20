import React from 'react';
import { NavLink } from 'react-router-dom';

const createLinks = () => (

	<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
	<div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Wew</a>
      </div>
		<div className="collapse navbar-collapse">
	        <ul className="nav navbar-nav">
	          <li><NavLink to="/" activeClassName="active">One</NavLink></li>
	          <li><NavLink to="/about" activeClassName="active">Two</NavLink></li>
	          <li><NavLink to="/about" activeClassName="active">Three</NavLink></li>
	        </ul>
	     </div>
	 </div>
	</nav>
);

export default createLinks;