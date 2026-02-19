import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Share2, Home, Zap } from 'lucide-react';
import './ThankYou.css';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-wrapper">
      <div className="success-card">
        <div className="success-icon">
          <CheckCircle size={80} color="var(--accent-green)" strokeWidth={3} />
        </div>
        
        <h1 className="neo-title">MISSION ACCOMPLISHED</h1>
        
        <div className="impact-shoutout">
          <p>Your contribution has been verified on the network.</p>
          <div className="impact-highlight">
            <h2>500 families will now get food for 10 days</h2>
          </div>
        </div>

        <div className="reward-alert">
          <Zap size={20} />
          <span>+250 IMPACT XP ADDED TO YOUR IDENTITY VAULT</span>
        </div>

        <div className="thank-you-actions">
          <button className="action-btn share-btn" onClick={() => navigate('/network')}>
            <Share2 size={20} /> VIEW NETWORK IMPACT
          </button>
          <button className="action-btn home-btn" onClick={() => navigate('/dashboard')}>
            <Home size={20} /> BACK TO HUD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;