import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pass1.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import otpBackground from './otp2.jpg';

// MUI Components
import { TextField, Button, Box, Typography } from '@mui/material';

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
    <Box
      sx={{
        backgroundImage: `url(${otpBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '35px',
          borderRadius: '15px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          maxWidth: '450px',
          width: '100%',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '25px', fontWeight: 600 }}>
          OTP Verification
        </Typography>

        <TextField
          label="Enter OTP"
          variant="outlined"
          fullWidth
          value={otp}
          onChange={handleChange}
          InputProps={{
            style: {
              color: "#000", // Ensures text is visible
              backgroundColor: "#fff", // Ensures correct background
              border: "none", // Removes any double borders
              height: "50px", // Adjust height properly
              padding: "10px", // Ensures text is not too high
              lineHeight: "1.5", // Keeps text centered
              display: "flex",
              alignItems: "center", // Aligns text vertically
            },
          }}
          sx={{
            marginBottom: "20px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "1px solid #007bff" }, // Custom border
              "&:hover fieldset": { border: "1px solid #0056b3" },
              "&.Mui-focused fieldset": { border: "1px solid #0056b3" },
              height: "50px", // Ensure outer container matches input height
            },
            "& .MuiInputBase-input": {
              height: "50px", // Ensures input height is set
              padding: "10px", // Adjusts vertical alignment
              display: "flex",
              alignItems: "center",
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          sx={{
            padding: '14px',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.2s',
            '&:hover': {
              backgroundColor: '#0056b3',
              transform: 'scale(1.05)',
            },
            '&:active': {
              backgroundColor: '#003d7a',
              transform: 'scale(0.95)',
            },
          }}
        >
          Verify OTP
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Pass1;
