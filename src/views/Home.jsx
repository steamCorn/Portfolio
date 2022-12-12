import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <section className="context">
      <h1>Home page</h1>
      <div className="home-wrapper">
        <div className="item"></div>
        <Link to={'/calculator'} className="item">
          Calculator
        </Link>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </section>
  );
}

export default Home;
