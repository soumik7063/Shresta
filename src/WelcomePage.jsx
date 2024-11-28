import React, { useState } from 'react';
import './welcomepage.css';
import background from './p5.jpg';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WelcomeComponent = () => {
  const [wardNo, setWardNo] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [isNotARobot, setIsNotARobot] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const navigate = useNavigate();

  const handleWardNoChange = (e) => setWardNo(e.target.value);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handlePincodeChange = (e) => setPincode(e.target.value);
  const handlePhonenumberChange = (e) => setPhonenumber(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCheckboxChange = () => setIsNotARobot(!isNotARobot);

  // Generate a random 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleNextClick = async () => {
    if (wardNo && selectedLocation && pincode && state && address && phonenumber && isNotARobot) {
      const phoneNumber = "+91" + phonenumber;
      const otp = generateOTP(); // Generate OTP
      setLoadingOTP(true);

      // Store OTP in localStorage for verification later
      localStorage.setItem('otp', otp);  // Store OTP in localStorage

      try {
        // Call your backend to send OTP using Twilio
        const response = await fetch('https://shresta-1.onrender.com/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: phoneNumber,
            body: `Your OTP code is: ${otp}`, // Send the generated OTP
          }),
        });

        const data = await response.json();

        if (data.success) {
          toast.success("OTP sent successfully!");
          navigate('/Pass1'); // Navigate to the next page where OTP will be verified
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP. Please try again.");
      } finally {
        setLoadingOTP(false);
      }
    } else {
      toast.error("Please fill in all fields and verify you're not a robot.");
    }
  };

  const statesList = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Jammu and Kashmir'
  ];

  return (
    <div className="welcome-page">
      <div className="background-image" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="content-box">
        <ToastContainer />
        <h1>Welcome to Shreshta</h1>

        <div className="ward-selection">
          <label htmlFor="wardNo">Select Ward No (Optional):</label>
          <input type="text" id="wardNo" value={wardNo} onChange={handleWardNoChange} />
        </div>

        <div className="location-selection">
          <label htmlFor="location">Select Location:</label>
          <select id="location" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Select Location</option>
            <option value="bhimavaram">Bhimavaram</option>
            <option value="ravulapalem">Ravulapalem</option>
            <option value="kanuru">Kanuru</option>
            <option value="navuduru">Navuduru</option>
            <option value="konthiwada">Konthiwada</option>
          </select>
        </div>

        <div className="pincode">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" value={pincode} onChange={handlePincodeChange} />
        </div>

        <div className="phonenumber">
          <label htmlFor="phonenumber">Phone Number:</label>
          <input type="text" id="phonenumber" value={phonenumber} onChange={handlePhonenumberChange} />
        </div>

        <div className="address">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={handleAddressChange} rows={4} cols={50} />
        </div>

        <div className="state-selection">
          <label htmlFor="state">Select State:</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option value="">Select State</option>
            {statesList.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="not-a-robot">
          <label>
            <input type="checkbox" checked={isNotARobot} onChange={handleCheckboxChange} />
            I am not a robot
          </label>
        </div>

        <button onClick={handleNextClick} className="blue-button" disabled={loadingOTP}>
          {loadingOTP ? 'Sending OTP...' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default WelcomeComponent;
