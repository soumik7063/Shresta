import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import './login.css';
import { db2 } from './firebaseRegistrationConfig';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = async () => {
    const dbref = collection(db2, 'Auth');
    try {
      const emailQuery = query(dbref, where('Email', '==', email));
      const passwordQuery = query(dbref, where('Password', '==', password));

      const emailSnapshot = await getDocs(emailQuery);
      const passwordSnapshot = await getDocs(passwordQuery);

      const emailArray = emailSnapshot.docs.map((doc) => doc.data());
      const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());

      if (emailArray.length > 0 && passwordArray.length > 0) {
        if (email.endsWith('@svecw.edu.in')) {
          toast.success('Login successful! Redirecting to Dashboard 😊🎉', {
            position: 'top-center',
          });
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        } else {
          toast.success('Login successful! 😊🎉', {
            position: 'top-center',
          });
          setTimeout(() => {
            navigate('/WelcomePage');
          }, 2000);
        }
      } else {
        toast.error('Check your Credentials ❌', {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again ⚠️', {
        position: 'top-center',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box-wrapper">
        <div className="login-box">
          {/* Image Section */}
          <div className="image-section">
            <img
              src="https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0="
              alt="Registration Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="form-section">
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <h2 className="welcome-heading">Welcome Back!</h2>
              {/* Email Input */}
              <div className="form-group">
                <label>Email <span><MdEmail className='icon'/></span> </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="form-group">
                <label>Password <span><RiLockPasswordFill className='icon'/></span></label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'} // Toggle input type
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* Eye icon for showing/hiding password */}
                  <div
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <button type="submit">Login</button>

              {/* Register and Forgot Password Links */}
              <div className="login-options">
                Don't have an account?{' '}
                <span onClick={handleRegister} className="register-link">
                  Register Here
                </span>
                <p className="forgot-password" onClick={handleForgotPassword}>
                  Forgot Password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
