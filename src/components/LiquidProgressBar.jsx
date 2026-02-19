import React from 'react';
import './LiquidProgressBar.css';

const LiquidProgressBar = ({ progress, target, color = "var(--accent-blue)" }) => {
  const percentage = Math.min(Math.round((progress / target) * 100), 100);

  return (
    <div className="mana-bar-container">
      <div className="mana-bar-glass">
        <div 
          className="mana-liquid" 
          style={{ 
            height: `${percentage}%`, 
            backgroundColor: color 
          }}
        >
          {/* The wave effect */}
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
        </div>
      </div>
      <div className="mana-stats">
        <span className="mana-percentage">{percentage}% FUNDED</span>
        <span className="mana-raw">₹{progress.toLocaleString()} / ₹{target.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default LiquidProgressBar;