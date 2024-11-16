import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FeedbackPage.css';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!feedback.trim() || !selectedEmoji) {
      toast.error('⚠️ Please provide both feedback and select an emoji. 😕', {
        position: "top-center",
        autoClose: 5000, // Display duration of 5 seconds
      });
      return;
    }

    toast.success('✅ Thank you for your feedback! 😊', {
      position: "top-center",
      autoClose: 5000, // Display duration of 5 seconds
    });

    // Redirect after toast has been shown
    setTimeout(() => {
      navigate('/');
    }, 5000); // Same duration as toast display time
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h1 className="feedback-heading">Feedback 📝</h1>
        <div className="emoji-container">
          {['😊', '😢', '😠', '😲', '😍'].map((emoji) => (
            <span
              key={emoji}
              role="img"
              aria-label={emoji}
              className={`emoji ${selectedEmoji === emoji ? 'selected' : ''}`}
              onClick={() => handleEmojiClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Your feedback here..."
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <ToastContainer /> {/* Correctly place ToastContainer here */}
    </div>
  );
};

export default FeedbackPage;
