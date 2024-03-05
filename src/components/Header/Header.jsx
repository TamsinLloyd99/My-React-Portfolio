import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="nav-link logo-link">
            Tamsin Lloyd
          </Link>
          <div className ="ml-auto">
          <Link to="/projects" className="nav-link custom-link">
            Projects
          </Link>
          <Link to="/contact" className="nav-link custom-link">
            Contact Me
          </Link>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
