import React from 'react';
import { NavLink } from 'react-router-dom';

const createLinks = () => (
        <ul>
          <li><NavLink to="/" activeClassName="active">Welcome</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>
);

export default createLinks;


