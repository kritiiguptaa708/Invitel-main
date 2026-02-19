import React, { useState, useEffect } from 'react';
import LiquidProgressBar from '../components/LiquidProgressBar';
import { Lock, Unlock, Target, Gift } from 'lucide-react';
import './Milestones.css';

const Milestones = () => {
  // Simulating the user's current XP/Credits. 
  // Set to 420 for the demo to show some locked and some unlocked.
  const [userXP, setUserXP] = useState(420);

  const rewards = [
    {
      id: 1,
      title: "Starbucks Coffee Voucher",
      target: 200,
      color: "var(--accent-yellow)",
      desc: "A free coffee to fuel your next networking session."
    },
    {
      id: 2,
      title: "1-Month Spotify Premium",
      target: 500,
      color: "var(--accent-green)",
      desc: "Ad-free music sponsored by our corporate CSR partners."
    },
    {
      id: 3,
      title: "Verified LinkedIn Certificate",
      target: 1000,
      color: "var(--accent-blue)",
      desc: "Official 'Community Builder' credential for your resume."
    },
    {
      id: 4,
      title: "Exclusive Impact Hoodie",
      target: 2500,
      color: "var(--accent-pink)",
      desc: "Premium physical merchandise shipped directly to you."
    }
  ];

  return (
    <div className="milestones-wrapper">
      <div className="milestones-header">
        <h1>UNLOCK PROGRESS</h1>
        <p>Track your Impact XP and see how close you are to the next Loot Drop.</p>
        <div className="current-xp-badge">
          <Target size={24} /> YOU HAVE: {userXP} XP
        </div>
      </div>

      <div className="milestones-list">
        {rewards.map((reward) => {
          const isUnlocked = userXP >= reward.target;
          const xpNeeded = reward.target - userXP;

          return (
            <div key={reward.id} className={`milestone-card ${isUnlocked ? 'unlocked-card' : 'locked-card'}`}>
              
              <div className="milestone-status" style={{ backgroundColor: isUnlocked ? reward.color : '#e0e0e0' }}>
                {isUnlocked ? <Unlock size={28} color="#000" /> : <Lock size={28} color="#888" />}
              </div>

              <div className="milestone-content">
                <div className="milestone-text">
                  <h2>{reward.title}</h2>
                  <p>{reward.desc}</p>
                </div>

                <div className="milestone-progress">
                  {isUnlocked ? (
                    <div className="unlocked-alert">
                      <Gift size={20} /> REWARD UNLOCKED & READY TO CLAIM!
                    </div>
                  ) : (
                    <>
                      <div className="xp-missing-alert">
                        <strong>{xpNeeded} XP NEEDED</strong> to unlock this reward.
                      </div>
                      <LiquidProgressBar 
                        progress={userXP} 
                        target={reward.target} 
                        color={reward.color} 
                      />
                    </>
                  )}
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Milestones;