import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  console.log("Header", props);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
              <Link
              to="/home"
              className={
                props.currentPage === "home" ? "nav-link active" : "nav-link"}
                onClick={() => props.handlePageChange("home")}
            >
            Tamsin Lloyd
         </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link
                to="/projects"
                className={
                  props.currentPage === "projects"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => props.handlePageChange("projects")}
              >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/contact"
                className={
                  props.currentPage === "contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => props.handlePageChange("contact")}
              >
                Contact
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
