import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/horse.png";

const Navbar = () => {
  return (
    <div className="bg-dark shadow navbar-dark">
      <nav className="navbar navbar-expand-lg navbar-dark py-3">
        <div className="container">
          <a href="/#" className="navbar-brand">
            <img
              className="img-fluid"
              height="50"
              width="50"
              src={img}
              alt=""
            />{" "}
            Chess Data
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <Link exact to="/">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
              </Link>

              <Link exact to="/dailypuzzle">
                <li className="nav-item">
                  <a href="#puzzle" className="nav-link">
                    Daily Puzzle
                  </a>
                </li>
              </Link>
              <Link exact to="/streamers">
                <li className="nav-item">
                  <a href="#puzzle" className="nav-link">
                    Stremers
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
