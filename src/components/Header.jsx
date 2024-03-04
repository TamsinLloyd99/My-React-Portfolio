import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  console.log("Header", props);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#"
              onClick={() => props.handlepageChange("home")}
              className={
                props.currentPage === "home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={() => props.handlepageChange("projects")}
              className={
                props.currentPage === "projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              onClick={() => props.handlepageChange("contact")}
              className={
                props.currentPage === "contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
