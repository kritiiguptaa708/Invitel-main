import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, Trophy, Star } from 'lucide-react';

const MilestoneCard = ({ user, rank }) => {
  return (
    <motion.div 
      className="share-card-container"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="share-card-inner" style={{ backgroundColor: rank.color }}>
        <div className="share-card-content">
          <div className="share-header">
            <span className="brand-tag">NGO<span>GLOBAL</span></span>
            <Trophy size={24} />
          </div>
          
          <div className="share-body">
            <div className="share-avatar-ring">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Avatar" />
            </div>
            <h2 className="share-name">{user.name.toUpperCase()}</h2>
            <div className="share-rank-badge">
              <Star size={16} fill="#000" />
              <span>OFFICIAL {rank.name}</span>
            </div>
            <p className="share-stat-line">
              Helping <b>{user.friendsInvited}</b> communities through <b>₹{user.totalDonations.toLocaleString()}</b> in impact.
            </p>
          </div>

          <div className="share-footer">
            <div className="qr-placeholder">
              <div className="qr-box"></div>
              <span>SCAN TO JOIN ME</span>
            </div>
            <div className="share-url">hero.io/{user.referralCode}</div>
          </div>
        </div>
      </div>
      
      <div className="share-actions">
        <button className="action-btn download"><Download size={18} /> SAVE IMAGE</button>
        <button className="action-btn social"><Share2 size={18} /> SHARE TO STORY</button>
      </div>
    </motion.div>
  );
};

export default MilestoneCard;