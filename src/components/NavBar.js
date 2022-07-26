import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  return (
    <div>
      <div className="foo">
        {/* <ul>
          <li>  <NavLink 
            to="/home"
            exact
          >
            Home
          </NavLink> </li>
          <li>
            <NavLink
            to="/about"
            
          >
            About
          </NavLink> </li>
          <li><NavLink
            to="/contact"
            
          >
            contact
          </NavLink></li>
        </ul> */}

        <div>
          <NavLink
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            exact
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar