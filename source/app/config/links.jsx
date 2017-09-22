import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const createLinks = (basePath) => (
	<Navbar fixedTop inverse>
		<Navbar.Header>
			<Navbar.Brand>
        		<a className="navbar-brand" href=".">Test</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
		  <LinkContainer exact to={`${basePath}/`} activeClassName="active">
		    <NavItem eventKey={1}>one</NavItem>
		  </LinkContainer>
		  <LinkContainer exact to={`${basePath}/about`} activeClassName="active">
		    <NavItem eventKey={2}>two</NavItem>
		  </LinkContainer>
		  <LinkContainer exact to={`${basePath}/position`} activeClassName="active">
		    <NavItem eventKey={3}>three</NavItem>
		  </LinkContainer>
		</Nav>
	</Navbar>
);

export default createLinks;