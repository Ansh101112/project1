import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <>
      <nav>
        <Link to="/about" className="navbaritem">
          About
        </Link>
        <Link to="/Location" className="navbaritem">
          Location
        </Link>
        <Link to="/contact" className="navbaritem">
          Contact
        </Link>
        <button className="btn">LogIn</button>
      </nav>
    </>
  );
}

export default Nav;
