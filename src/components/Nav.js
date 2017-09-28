import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const linkStyle = "link white dim white f3 f4-ns dib mr3";

    return (
        <nav className="pa3 pa4-ns">
            <div className="tc pb3">
                <NavLink to="/home/essentials"
                    className={linkStyle} 
                    activeClassName="underline">
                    Essential Info
                </NavLink>
                <NavLink to="/home/methodology"
                    className={linkStyle} 
                    activeClassName="underline">
                    Methodology
                </NavLink>
                <NavLink to="/home/specs"
                    className={linkStyle} 
                    activeClassName="underline">
                    Specs
                </NavLink>
                <NavLink to="/home/profile"
                    className={linkStyle} 
                    activeClassName="underline">
                    Profile
                </NavLink>
                <NavLink to="/home/equipment"
                    className={linkStyle} 
                    activeClassName="underline">
                    Equipment
                </NavLink>
                <NavLink to="/home/technology"
                    className={linkStyle} 
                    activeClassName="underline">
                    Technologies
                </NavLink>
                <NavLink to="/home/other"
                    className={linkStyle} 
                    activeClassName="underline">
                    Other
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;