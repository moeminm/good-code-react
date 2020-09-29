import React from "react";

function Navbar (){
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-white">
        <a className="navbar-brand" href="#">
          <img
            src="https://moeminm.github.io/goodcode/images/logo@2x.png"
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#substack">
                Newsletter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;