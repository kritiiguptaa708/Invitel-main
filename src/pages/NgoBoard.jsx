import React from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidProgressBar from '../components/LiquidProgressBar';
import { Target, Zap, ShieldAlert, Utensils } from 'lucide-react';
import './NgoBoard.css';

const NgoBoard = () => {
  const navigate = useNavigate();

  const missions = [
    {
      id: "m1",
      title: "Operation: Hunger Relief",
      faction: "Neutral",
      difficulty: "Urgent",
      raised: 62000,
      goal: 100000,
      color: "var(--accent-yellow)",
      // YOUR UPDATED MESSAGE
      bounty: "IMPACT: 500 families will get food for 10 days",
      desc: "Mass mobilization to provide essential nutrition kits to 500 households in underserved sectors."
    },
    {
      id: "m2",
      title: "Quest: Digital Classrooms",
      faction: "Celestial",
      difficulty: "Medium",
      raised: 80000,
      goal: 85000,
      color: "var(--accent-purple)",
      bounty: "₹1,200 = 1 Digital Tablet",
      desc: "Equip rural learning centers with modern tech gear before the school year starts."
    }
  ];

  return (
    <div className="mission-board-wrapper">
      <div className="board-header">
        <h1>ACTIVE MISSIONS</h1>
        <p>Select a quest. Deploy your resources. Save lives.</p>
      </div>

      <div className="missions-grid">
        {missions.map(mission => (
          <div key={mission.id} className="mission-card">
            <div className="mission-badges">
              <span className="badge-tag bg-yellow"><Target size={14}/> {mission.difficulty}</span>
              <span className="badge-tag bg-dark"><ShieldAlert size={14}/> {mission.faction}</span>
            </div>
            
            <h2>{mission.title}</h2>
            <p className="mission-desc">{mission.desc}</p>

            <div className="bounty-box">
              <Utensils size={18} color="var(--accent-pink)" />
              <span><strong>TARGET:</strong> {mission.bounty}</span>
            </div>

            <LiquidProgressBar 
              progress={mission.raised} 
              target={mission.goal} 
              color={mission.color} 
            />

            <button 
              className="forge-btn"
              onClick={() => navigate(`/donate/${mission.id}`)}
              style={{ backgroundColor: mission.color, color: '#000' }}
            >
              DEPLOY RESOURCES
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NgoBoard;