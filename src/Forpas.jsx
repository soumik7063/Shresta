import React, { useState } from 'react';
import firebase from './firebase'; // Import firebase initialization
import './login.css'; // Assuming you have CSS for styling
import { useNavigate } from 'react-router-dom';
import background from './forgot.jpg';

const Forpas = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  const handleSendOtp = () => {
    const phoneNumber = "+91" + phone;
    const appVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Recaptcha verified");
      },
      'expired-callback': () => {
        console.log("Recaptcha expired");
      }
    });

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // Store verification ID locally
        localStorage.setItem('verificationId', confirmationResult.verificationId);
        console.log("OTP has been sent");
        navigate('/pass'); // Navigate to Pass.jsx
      })
      .catch((error) => {
        console.log("Error sending OTP:", error);
      });
  };

  return (
    <div className="login-container" style={{ backgroundImage :`url(${background})` }}>
      <form className="login-form">
        <h2>Forgot Password</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={handleChange}
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="input-field"
          required
        />
        <button
          type="button"
          onClick={handleSendOtp}
          className="send-otp-button"
        >
          Send OTP
        </button>
      </form>
      <div id="sign-in-button"></div> {/* RecaptchaVerifier container */}
    </div>
  );
};

export default Forpas;
