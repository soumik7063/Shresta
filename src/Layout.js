import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file for styling
import 'react-toastify/dist/ReactToastify.css';
import background from './home.avif';
const Layout = ({ children }) => {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="top-right-buttons">
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/register" className="register-button">Register</Link>
        <Link to="/aboutus" className="about-us-button">About Us</Link>
      </div>
      <div className="content-container">
        {children} {/* Render page content */}
      </div>
    </div>
  );
};

export default Layout;
