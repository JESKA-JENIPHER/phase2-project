
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navigation">
      <section className="header">
        <nav>
          {/* <header>
            <span className="animkingdom">Random</span>
            <span className="animkingdom">Quotes</span>
          </header> */}
          <div className="moveEnd">
            <ul>
              <NavLink to="/" exact="true">
                Home
              </NavLink>
              <NavLink to="/about" exact="true">
                About
              </NavLink>
              {/* <NavLink to="/NewBlog" exact="true">
                New Blog
              </NavLink> */}
              <NavLink to="/contact" exact="true">
                contact
              </NavLink>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
