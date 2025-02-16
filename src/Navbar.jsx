import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          Shresta
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <FaHome className="nav-icon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FaInfoCircle className="nav-icon" />
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <FaPhone className="nav-icon" />
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
