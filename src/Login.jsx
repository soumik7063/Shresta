import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';
import { db2 } from './firebaseRegistrationConfig';
import { getDocs, collection, where, query } from 'firebase/firestore';
import background from './login.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      // Check if the email and password match
      if (emailArray.length > 0 && passwordArray.length > 0) {
        // Check the domain of the email
        if (email.endsWith('@svecw.edu.in')) {
          toast.success('Login successful! Redirecting to Dashboard 😊🎉', {
            position: 'top-center'
          });
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000); // Delay navigation by 2 seconds (2000 milliseconds)
        } else {
          toast.success('Login successful! 😊🎉', {
            position: 'top-center'
          });
          setTimeout(() => {
            navigate('/WelcomePage');
          }, 2000); // Delay navigation by 2 seconds (2000 milliseconds)
        }
      } else {
        toast.error('Check your Credentials ❌', {
          position: 'top-center'
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again ⚠️', {
        position: 'top-center'
      });
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${background})` }}>
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <span onClick={handleRegister} className="register-link">Register</span></p>
        <p className="links"><span onClick={handleForgotPassword} className="forgot-password">Forgot Password?</span></p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;