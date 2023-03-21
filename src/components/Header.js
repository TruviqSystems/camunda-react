import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <header className="header">
          <nav class="navbar navbar-expand-lg bg-body-primary bg-primary">
            <div class="container-fluid">
              <Link class="navbar-brand text-white" to="/" >LandAllotment</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link active  text-white" aria-current="page" to="/">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </header>
    )
  }
}
