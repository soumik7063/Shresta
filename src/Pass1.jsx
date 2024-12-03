import React, { useState } from 'react';
import './Pass1.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pass1 = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = () => {
    const storedOtp = localStorage.getItem('otp'); // Retrieve stored OTP for comparison
    if (otp === storedOtp) {
      toast.success('OTP verification successful!', {
        position: 'top-center',
        autoClose: 3000,
      });
      navigate('/StoreImageTextFirebase'); // Redirect to the next page
    } else {
      toast.error('Incorrect OTP. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };


  return (
    <div className="otp-container">
      <div className="otp-form-wrapper">
        <form className="otp-form">
          <h2>OTP Verification</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
            className="otp-input"
            required
          />
          <button type="button" onClick={handleSubmit} className="otp-submit">
            Verify OTP
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Pass1;
