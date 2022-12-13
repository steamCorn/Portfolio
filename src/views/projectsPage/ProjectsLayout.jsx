import React from 'react';
import { Outlet } from 'react-router-dom';

function ProjectsLayout() {
  return (
    <>
      <section className="middle-wrapper">
        <p>Projects Layout</p>
        <Outlet />
      </section>
    </>
  );
}

export default ProjectsLayout;
