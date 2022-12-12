import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav role="navigation" className="navbar">
      <ul className="wrapper-links">
        <li className="nav-link">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="nav-link nav-projects">
          <Link to={'/projects'}>Projects</Link>
          <ul className="dropdown">
            <li className="dropdown-link">
              <Link to={'/projects/calculator'}>Calculator</Link>
            </li>
            <li className="dropdown-link">
              <Link to={'/projects/drumMachine'}>Drum Machine</Link>
            </li>
            <li className="dropdown-link">
              <Link to={'/projects'}>Quote Block</Link>
            </li>
            <li className="dropdown-link">
              <Link to={'/projects'}>Timer</Link>
            </li>
            <li className="dropdown-link">
              <Link to={'/projects'}>Markdown Previewer</Link>
            </li>
          </ul>
        </li>
        <li className="nav-link">
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
