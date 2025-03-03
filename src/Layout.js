import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file for styling
import 'react-toastify/dist/ReactToastify.css';
import { IoReorderThreeSharp } from "react-icons/io5";

const Layout = ({ children }) => {

    const [isNav, setIsNav] = useState(false);
  
    function toggle() {
      setIsNav((prev) => !prev); // Correct toggle function
    }
  return (
<<<<<<< HEAD
    <div className="app-container">
      <button classname="toggle-btn" onClick={toggle}><IoReorderThreeSharp /></button>
      <div className="top-right-buttons">
        
        {isNav?
        <div>
        <div className='navbar-mobile'>
        <Link to="/login" className="login-button-mobile">Login</Link>
        <Link to="/register" className="register-button-moible">Register</Link>
        <Link to="/aboutus" className="about-us-button-mobile">About Us</Link>
        </div>
      </div>:''}
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/register" className="register-button">Register</Link>
        <Link to="/aboutus" className="about-us-button">About Us</Link>
      </div>
=======
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      
>>>>>>> 8cf1c36d4c522542bc3b718d1eb1380d03d0e72d
      <div className="content-container">
        {children} {/* Render page content */}
      </div>
    </div>
  );
};

export default Layout;
