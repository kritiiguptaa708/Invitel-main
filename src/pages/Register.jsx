import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', faction: 'Celestial' });
  const [isCreating, setIsCreating] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsCreating(true);

    // Simulate "Character Creation"
    setTimeout(() => {
      const referralCode = `REF-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      const userData = {
        ...formData,
        referralCode,
        totalDonated: 0,
        referrals: 0,
        badge: 'Spark'
      };

      // Store in localStorage for the Dashboard to find
      localStorage.setItem('userProfile', JSON.stringify(userData));
      
      setIsCreating(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h1 className="register-title">JOIN THE<br/>NETWORK</h1>
        
        {isCreating ? (
          <div className="creation-state">
            <div className="neo-loader"></div>
            <h3>GENERATING UNIQUE IDENTITY...</h3>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="register-form">
            <div className="input-group">
              <label>FULL NAME</label>
              <input 
                type="text" 
                required 
                placeholder="Ex: Marcus V."
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>EMAIL ADDRESS</label>
              <input 
                type="email" 
                required 
                placeholder="you@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>FACTION SELECTION</label>
              <select onChange={(e) => setFormData({...formData, faction: e.target.value})}>
                <option value="Celestial">CELESTIAL (LIGHT)</option>
                <option value="Nebula">NEBULA (DARK)</option>
              </select>
            </div>

            <button type="submit" className="spawn-btn">SPAWN PROFILE</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;