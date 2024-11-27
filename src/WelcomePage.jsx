import React, { useState, useCallback } from 'react';
import './welcomepage.css';
import firebase from './firebase'; // Import firebase initialization
import background from './p5.jpg';
import { useNavigate } from 'react-router-dom';
import GetCurrentAddress from './GetCurrentAddress'; // Import GetCurrentAddress
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const WelcomeComponent = () => {
  const [wardNo, setWardNo] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [fetchingAddress, setFetchingAddress] = useState(false);
  const [isNotARobot, setIsNotARobot] = useState(false);
  const navigate = useNavigate();

  const handleWardNoChange = (e) => setWardNo(e.target.value);
  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handlePincodeChange = (e) => setPincode(e.target.value);
  const handlePhonenumberChange = (e) => setPhonenumber(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleCheckboxChange = () => {
    setIsNotARobot(!isNotARobot);
  };

  const handleNextClick = () => {
    if (wardNo && selectedLocation && pincode && state && address && phonenumber && isNotARobot) {
      const phoneNumber = "+91" + phonenumber;

      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible', // or 'normal'
        callback: (response) => {
          // Handle successful recaptcha verification
        },
      });

      recaptchaVerifier.render()
        .then(() => {
          firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
            .then((confirmationResult) => {
              localStorage.setItem('verificationId', confirmationResult.verificationId);
              console.log("OTP has been sent");
              navigate('/Pass1'); // Navigate to next page
            })
            .catch((error) => {
              console.log("Error sending OTP:", error);
            });
        })
        .catch((error) => {
          console.log("Error rendering Recaptcha:", error);
        });
    } else {
      toast.error("Please fill in all fields and verify you're not a robot.");
    }
  };

  const handleLocationIconClick = useCallback(() => {
    setFetchingAddress(true);
  }, []);

  const handleAddressFetched = useCallback((fetchedAddress) => {
    setAddress(fetchedAddress);
    setFetchingAddress(false);
  }, []);

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
          <div className="address-input">
            <textarea id="address" value={address} onChange={handleAddressChange} rows={4} cols={50} />
            <button onClick={handleLocationIconClick} className="location-icon">📍</button>
            {fetchingAddress && <GetCurrentAddress onAddressFetched={handleAddressFetched} />}
          </div>
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

        <button onClick={handleNextClick} className="blue-button">Next</button>
        <div id="recaptcha-container"></div> {/* RecaptchaVerifier container */}
      </div>
    </div>
  );
};

export default WelcomeComponent;