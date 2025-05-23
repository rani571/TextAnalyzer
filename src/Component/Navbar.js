import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types' //impt --- short term


export default function Navbar({ title, aboutText, mode, togglemode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
          <div className={`form-check form-switch text-${mode === "light"? "dark" : "light"}`}>
            <input className="form-check-input" type="checkbox" onClick = {togglemode} role="switch" id="switchCheckDefault"/>
              <label className="form-check-label" htmlFor="switchCheckDefault">{`Enable ${mode === "light"? "Dark" : "Light"} Mode`}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     abouttext: PropTypes.string
// }
