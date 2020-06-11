import React from 'react'
import './jumbotron.css'
import { Link } from "react-router-dom"
function Jumbotron() {
  return (
    <div class="container">
      <div class='box'>
        <h1 class="display-4">Welcome!</h1>
        <p class="lead">What sounds good today? Choose one of the following options and find recipes submitted by coworkers throughout the Lathrop Gage network!</p>
        <hr class="my-4" />

        <Link to="/apps" classname={window.location.pathname === "/apps" ? "nav-link active" : "nav-link"}>
          <h2>Starters</h2>
        </Link>
        <Link to="/breakfast" classname={window.location.pathname === "/breakfast" ? "nav-link active" : "nav-link"}>
          <h2>Breakfast</h2>
        </Link>

        <Link to="/lunch" classname={window.location.pathname === "/lunch" ? "nav-link active" : "nav-link"}>
          <h2>Lunch</h2>
        </Link>

        <Link to="/dinner" classname={window.location.pathname === "/dinner" ? "nav-link active" : "nav-link"}>
          <h2>Dinner</h2>
        </Link>

        <Link to="/desserts" classname={window.location.pathname === "/desserts" ? "nav-link active" : "nav-link"}>
          <h2> Desserts </h2>
        </Link>

      </div>
    </div>
  )
}

export default Jumbotron