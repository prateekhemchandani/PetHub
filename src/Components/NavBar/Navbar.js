import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>PetHub</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
          <li>
            <Link to="/">Pets</Link>
          </li>
          <li>
            <Link to="/">Donation</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/">
          <button className="Navbar-button">Login or signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
