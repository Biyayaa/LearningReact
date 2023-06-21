import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="/start">Start</a> */}
          <Link class="nav-link" to="/start">Start</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="/continue">Continue</a> */}
          <Link class="nav-link" to="/continue">Continue</Link>

        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
