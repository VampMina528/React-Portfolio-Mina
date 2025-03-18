import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">About Me</Link> | 
        <Link to="/portfolio">Portfolio</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
}

export default Header;
