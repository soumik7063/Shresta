// Complaints.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Complaint.module.css';

function Complaints() {
  const navigate = useNavigate();

  return (
    <div className={styles.complaintsPage}>
      <div className={styles.complaintsCard}>
        <div className={styles.cardHeader}>
          <h1>Complaints</h1>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.noComplaintsText}>
              <h3>📢 Solve Complaints Now</h3>
              <h2>
                Our Society is in your Hands
                <span className={styles.emoji}>🤝</span>
              </h2>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                className={styles.backButton}
                onClick={() => navigate('/dashboard')}
              >
                Back to Dashboard
              </button>
              <button
                className={styles.backToDashboardButton}
                onClick={() => navigate('/ComplaintsPage')}
              >
                List Complaints
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complaints;
