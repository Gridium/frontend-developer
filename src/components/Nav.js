import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const linkStyle = "link navy dim navy f3 f4-ns dib mr3";

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
            </div>
        </nav>
    );
}

export default Nav;