import React from 'react';
import logo from '../Images/lglogo.jpg';
import { Link } from 'react-router-dom'
import '../App.css';

function Land() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Link to="/home" classname={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
        Click to Enter
        </Link> 
        </p>
        <a
          className="App-link"
          href="https://www.lathropgpm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Land;
