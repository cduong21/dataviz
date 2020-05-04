import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase ml-5" exact to="/data" activeClassName="active">
                    Visualization
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase ml-5" exact to="/resources" activeClassName="active">
                    Resources
                </NavLink>
            </li>
          </ul>

      </nav>
    );
}

export default Navbar
