import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <section className="context">
      <h1>Home page</h1>
      <div className="home-wrapper">
        <Link to={'/calculator'} className="item">
          Calculator
        </Link>
        <Link to={'/drumMachine'} className="item">
          Drum Machine
        </Link>
        <Link to={'/timer'} className="item">
          Count Down Timer
        </Link>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </section>
  );
}

export default Home;
