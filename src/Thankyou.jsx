import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Thankyou.css';
import background from './thank.jpg';

const Thankyou = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate('/feedback');
  };

  return (
    <div className="thankyou-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="thankyou-message">
        <h1>Thank You! 🙏🎉</h1>
        <p>Your responsibility and actions are appreciated</p>
        <p>We are grateful for your contribution. 🙌</p>
        <button className="cta-button" onClick={handleFeedbackClick}>Give Feedback</button>
      </div>
    </div>
  );
};

export default Thankyou;
