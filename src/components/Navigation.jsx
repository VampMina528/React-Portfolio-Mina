import { Link, useLocation } from "react-router-dom";
import React from "react";

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <Link className={location.pathname === "/" ? "active" : ""} to="/">
        About Me
      </Link>
      <Link className={location.pathname === "/portfolio" ? "active" : ""} to="/portfolio">
        Portfolio
      </Link>
      <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">
        Contact
      </Link>
      <Link className={location.pathname === "/resume" ? "active" : ""} to="/resume">
        Resume
      </Link>
    </nav>
  );
}

export default Navigation;
