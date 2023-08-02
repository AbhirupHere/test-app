import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0"
        style={{ backgroundColor: "#ffede7" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Test App
          </a>
          <button
            className="navbar-toggler ps-0"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="d-flex justify-content-start align-items-center">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link px-3" href="#!">
                  menu1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
                  menu2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
                  menu3
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link px-3" href="#!">
                  about us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
                  contact us
                </a>
              </li>
            </ul>

            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <Link to='/itemform' className="nav-link pe-3" href="#!">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3416/3416075.png"
                    style={{ width: "25px" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;