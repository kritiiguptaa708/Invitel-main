import React from 'react';
import { motion } from 'framer-motion';
import './Network.css';

const Network = () => {
  // We use exact pixel offsets from the center (0,0) instead of percentages
  const referrals = [
    { id: 1, name: "Sarah J.", amount: 5000, offsetX: -160, offsetY: -120, delay: 0.2 },
    { id: 2, name: "Mike T.", amount: 2000, offsetX: 190, offsetY: -90, delay: 0.4 },
    { id: 3, name: "Elena R.", amount: 1500, offsetX: -120, offsetY: 160, delay: 0.6 },
    { id: 4, name: "David K.", amount: 8000, offsetX: 150, offsetY: 150, delay: 0.8 },
  ];

  // The center of our 800x600 canvas
  const centerX = 400;
  const centerY = 300;

  return (
    <div className="network-wrapper">
      <div className="network-header">
        <h1>Your Impact Network</h1>
        <p>Watch your influence expand across the globe.</p>
      </div>

      <div className="constellation-canvas">
        {/* SVG Canvas for the laser connections */}
        <svg viewBox="0 0 800 600" className="star-line-container">
          {referrals.map((star) => (
            <motion.line 
              key={`line-${star.id}`}
              x1={centerX} 
              y1={centerY} 
              x2={centerX + star.offsetX} 
              y2={centerY + star.offsetY}
              stroke="#7C3AED" /* Electric Violet Hex Code */
              strokeWidth="3" 
              strokeOpacity="0.8"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ pathLength: 1, opacity: 1 }} 
              transition={{ delay: star.delay, duration: 1.5, ease: "easeOut" }}
            />
          ))}
        </svg>

        {/* Central Supernova (You) */}
        <motion.div 
          className="star supernova"
          style={{ top: centerY, left: centerX }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          YOU
        </motion.div>

        {/* Orbiting Stars (Referrals) */}
        {referrals.map((star) => (
          <motion.div 
            key={`star-${star.id}`}
            className="star orbiting-star"
            style={{ top: centerY + star.offsetY, left: centerX + star.offsetX }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: star.delay + 0.5, type: "spring" }}
            whileHover={{ scale: 1.3, zIndex: 10 }}
          >
            <div className="star-tooltip">
              <strong>{star.name}</strong><br/>₹{star.amount}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Network;