import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <section className="middle-wrapper">
        <Outlet />
      </section>
    </>
  );
}

export default Layout;
