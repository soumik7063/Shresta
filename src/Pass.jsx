import React, { useState } from 'react';
import firebase from './firebase'; // Import firebase initialization
import './login.css';
import { useNavigate } from 'react-router-dom';
import background from './otp1.jpg';

const Pass = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = () => {
    // Retrieve verification ID from local storage
    const verificationId = localStorage.getItem('verificationId');
    if (!verificationId) {
      console.log("Verification ID not found.");
      setError('An error occurred. Please try again.');
      return;
    }

    // Confirm the OTP
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );

    firebase.auth().signInWithCredential(credential)
      .then(() => {
        console.log("OTP verification successful");
        navigate('/setpass'); // Navigate to Setpass.jsx
      })
      .catch((error) => {
        console.log("Error verifying OTP:", error);
        setError('Incorrect OTP. Please try again.');
      });
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${background})` }} 
    >
      <form className="login-form">
        <h2>Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleChange}
          className="input-field"
          required
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="submit-button"
        >
          Submit
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Pass;