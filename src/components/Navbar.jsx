import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav role="navigation" id="main-menu" className="navbar">
      <div className="desktop-menu">
        <div className="desktop-links">
          <Link to={'/'} className="nav-link">
            Home
          </Link>
          <Link to={'/about'} className="nav-link">
            About
          </Link>
          <Link to={'/projects'} className="nav-link">
            Projects
          </Link>
        </div>
        <div className="contacts">
          <Link to={'/contact'} className="nav-link">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="drop-menu menu-open">
          <Link to={'/'} className="nav-link mob-animation">
            Home
          </Link>
          <Link to={'/about'} className="nav-link mob-animation">
            About
          </Link>
          <Link to={'/projects'} className="nav-link mob-animation">
            Projects
          </Link>
          <Link to={'/contact'} className="nav-link mob-animation">
            Get in touch
          </Link>
        </div>
        <Link to={'/'} className="nav-link">
          <span className="logo">Logo</span>
        </Link>
        <button className="hamburger-bn" type="button">
          X
        </button>
      </div>
      {/* <ul className="wrapper-links">
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
          <Link to={'/contact'}>Get in touch</Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
