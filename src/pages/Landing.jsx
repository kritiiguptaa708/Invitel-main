import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <header className="hero-section">
        <div className="hero-badge">Welcome to InviteL</div>
        <h1 className="hero-title">MULTIPLY<br/>YOUR IMPACT</h1>
        <p className="hero-subtitle">
          Don't just donate. Build a constellation of change. Invite friends, unlock badges, and track your real-world impact.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate('/missions')}>
            START QUEST
          </button>
          <button className="btn-secondary" onClick={() => navigate('/leaderboard')}>
            VIEW LEADERBOARD
          </button>
        </div>
      </header>

      <section className="stats-section">
        <div className="stat-block bg-yellow">
          <h2>₹12.5M</h2>
          <p>Total Raised</p>
        </div>
        <div className="stat-block bg-green">
          <h2>1,240</h2>
          <p>Active Ambassadors</p>
        </div>
        <div className="stat-block bg-purple">
          <h2>5,600</h2>
          <p>Network Referrals</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;