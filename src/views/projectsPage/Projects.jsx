import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './projects.css';

function Projects() {
  return (
    <section className="context">
      <h1>Projects page</h1>
      <div className="projects-wrapper">
        <Link to={'calculator'} className="item">
          Calculator
        </Link>
        <Link to={'drumMachine'} className="item">
          Drum Machine
        </Link>
        <Link to={'timer'} className="item">
          Count Down Timer
        </Link>
        <Link to={'quoteMachine'} className="item">
          Quote Machine
        </Link>
      </div>
      {/* <Outlet /> */}
    </section>
  );
}

export default Projects;
