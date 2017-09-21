import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const createLinks = () => (
	<Navbar fixedTop inverse>
		<Navbar.Header>
			<Navbar.Brand>
        		<a className="navbar-brand" href=".">Wew</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
		  <LinkContainer exact to="/" activeClassName="active">
		    <NavItem eventKey={1}>One</NavItem>
		  </LinkContainer>
		  <LinkContainer exact to="/about" activeClassName="active">
		    <NavItem eventKey={1}>Two</NavItem>
		  </LinkContainer>
		  <LinkContainer exact to="/position" activeClassName="active">
		    <NavItem eventKey={1}>Three</NavItem>
		  </LinkContainer>
		</Nav>
	</Navbar>
);

export default createLinks;
