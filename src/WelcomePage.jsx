import React, { useState } from 'react';
import './welcomepage.css';
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

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

  const handleNextClick = async () => {
    if (wardNo && selectedLocation && pincode && state && address && phonenumber && isNotARobot) {
      // Check if the phone number is verified (if OTP is already sent)
      const isPhoneVerified = localStorage.getItem('otp') ? true : false;
  
      if (!isPhoneVerified) {
        toast.error("Please verify your phone number before proceeding.");
        return; // Stop further execution if phone is not verified
      }
  
      const phoneNumber = `+91${phonenumber}`;
      const otp = generateOTP();
      setLoadingOTP(true);
      localStorage.setItem('otp', otp);
  
      try {
        const response = await fetch('https://shresta-1.onrender.com/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: phoneNumber,
            body: `Your OTP code is: ${otp}`,
          }),
        });
  
        const data = await response.json();
        if (data.success) {
          toast.success("OTP sent successfully!");
          navigate('/Pass1');
        } else {
          toast.error("Please verify your Number.Contact Admin");
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
      <ToastContainer />
      <div className="content-box">
        <h1>Welcome to Shreshta</h1>
        <div className="ward-selection">
          <label htmlFor="wardNo">Select Ward No (Optional):</label>
          <input type="text" id="wardNo" value={wardNo} onChange={handleWardNoChange} />
        </div>

        <div className="location-selection">
          <label htmlFor="location">Select Location:</label>
          <input type="text" id="location" value={selectedLocation} onChange={handleLocationChange} />
        </div>

        <div className="pincode">
          <label htmlFor="pincode">Enter Pincode:</label>
          <input type="text" id="pincode" value={pincode} onChange={handlePincodeChange} />
        </div>

        <div className="state-selection">
          <label htmlFor="state">Select State:</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option value="">--Select State--</option>
            {statesList.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="address">
          <label htmlFor="address">Enter Address:</label>
          <textarea id="address" value={address} onChange={handleAddressChange}></textarea>
        </div>

        <div className="phonenumber">
          <label htmlFor="phonenumber">Enter Phone Number:</label>
          <input type="text" id="phonenumber" value={phonenumber} onChange={handlePhonenumberChange} />
        </div>

        <div className="flex">
          <input
            type="checkbox"
            id="robotCheck"
            checked={isNotARobot}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="robotCheck">I am not a robot</label>
        </div>

        <button
          className="next-button"
          onClick={handleNextClick}
          disabled={loadingOTP}
        >
          {loadingOTP ? 'Sending OTP...' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default WelcomeComponent;