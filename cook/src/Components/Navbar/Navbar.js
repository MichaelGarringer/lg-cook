import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
      <nav class="navbar navbar-dark bg-danger">
        <Link to="home"><a class="navbar-brand" href="#">Lathrop Gage</a></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="breakfast"><a class="nav-link" href="#">Breakfast<span class="sr-only">(current)</span></a></Link>
            </li>
            <li class="nav-item">
              <Link to="lunch"><a class="nav-link" href="#">Lunch</a></Link>
            </li>
            <li class="nav-item">
              <Link to="dinner"><a class="nav-link" href="#">Dinner</a></Link>
            </li>
            <li class="nav-item">
              <Link to="apps"><a class="nav-link" href="#">Starters</a> </Link>
            </li>
            <li class="nav-item">
             <Link to="desserts"> <a class="nav-link" href="#">Desserts</a> </Link>
            </li>
          </ul>
        </div>
      </nav>

    
  )

}

export default Navbar