import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("User");

  // Pull name from localStorage to show in the Nav
  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setUserName(parsed.name.split(' ')[0]); // Just the first name
    }
  }, [location]); // Refresh name when navigating

  return (
    <nav className="top-nav glass-nav">
      <div className="logo">
        <Link to="/">✨ InviteL</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
        <Link to="/hub" className={location.pathname === '/hub' ? 'active' : ''}>Impact Hub</Link>
        <Link to="/missions" className={location.pathname === '/missions' ? 'active' : ''}>Quests</Link>
        <Link to="/milestones" className={location.pathname === '/milestones' ? 'active' : ''}>Unlocks</Link>        
        <Link to="/network" className={location.pathname === '/network' ? 'active' : ''}>Network</Link>
        <Link to="/leaderboard" className={location.pathname === '/leaderboard' ? 'active' : ''}>Rankings</Link>
        <Link to="/subscribe">FOR NGOs</Link>
      </div>

      <div className="nav-profile">
        <Link to="/profile" className={`profile-nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>
          <div className="nav-avatar">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} alt="Nav Avatar" />
          </div>
          <span className="nav-username">{userName}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;