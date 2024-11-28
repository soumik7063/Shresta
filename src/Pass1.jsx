import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import background from './otp1.jpg';

const Pass1 = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = () => {
    const storedOtp = localStorage.getItem('otp'); // Retrieve stored OTP for comparison
    if (otp === storedOtp) {
      console.log('OTP verification successful');
      navigate('/StoreImageTextFirebase'); // Redirect to the next page
    } else {
      setError('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${background})` }}
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
        <button type="button" onClick={handleSubmit} className="submit-button">
          Submit
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Pass1;
