import React from 'react';
import { Crown, Star, Zap } from 'lucide-react';
import './Leaderboard.css';

const Leaderboard = () => {
  const leaders = [
    { rank: 1, name: "Marcus V.", nodes: 42, xp: 12500, title: "Supernova", isCurrentUser: true },
    { rank: 2, name: "Sarah Jenkins", nodes: 38, xp: 11200, title: "Luminary", isCurrentUser: false },
    { rank: 3, name: "Elena Fisher", nodes: 25, xp: 8400, title: "Ambassador", isCurrentUser: false },
    { rank: 4, name: "Mike Ross", nodes: 15, xp: 5100, title: "Leader", isCurrentUser: false },
    { rank: 5, name: "Alex Vance", nodes: 8, xp: 2400, title: "Builder", isCurrentUser: false },
  ];

  return (
    <div className="leaderboard-wrapper">
      <div className="leaderboard-header">
        <Crown size={50} className="crown-icon" />
        <h1>THE HIGH TABLE</h1>
        <p>Global rankings based on verified Network Nodes and Impact XP.</p>
      </div>

      <div className="table-container">
        <table className="neo-leaderboard">
          <thead>
            <tr>
              <th>RANK</th>
              <th>AMBASSADOR</th>
              <th>TIER</th>
              <th>NETWORK NODES</th>
              <th>TOTAL XP</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((user) => (
              <tr key={user.rank} className={user.isCurrentUser ? "current-user-row" : ""}>
                <td className="rank-cell">
                  {user.rank === 1 ? <span className="gold-medal">#1</span> : `#${user.rank}`}
                </td>
                <td className="name-cell">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Avatar" />
                  {user.name} {user.isCurrentUser && "(YOU)"}
                </td>
                <td><span className="tier-badge">{user.title}</span></td>
                <td className="nodes-cell"><Star size={16}/> {user.nodes}</td>
                <td className="xp-cell"><Zap size={16}/> {user.xp.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;