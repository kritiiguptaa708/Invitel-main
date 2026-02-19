import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Heart, 
  Zap, 
  Users, 
  Copy, 
  CheckCircle, 
  ChevronRight, 
  MapPin, 
  Star, 
  FileText, 
  Camera,
  X,
  Download,
  ShieldCheck
} from 'lucide-react';
import PulseTicker from '../components/PulseTicker'; // Ensure this component exists
import './Dashboard.css';

// --- SUB-COMPONENT: TAX RECEIPT MODAL ---
const ReceiptModal = ({ isOpen, onClose, user, rankColor }) => {
  if (!isOpen) return null;
  const receiptNo = Math.floor(Math.random() * 900000 + 100000);

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="receipt-paper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: `15px 15px 0px ${rankColor}` }}
        >
          <button className="close-receipt" onClick={onClose}><X /></button>
          
          <div className="receipt-header">
            <div className="ngo-logo">NGO<span>GLOBAL</span></div>
            <div className="receipt-status">OFFICIAL 80G RECEIPT</div>
          </div>

          <div className="receipt-body">
            <p className="serial-no">CERTIFICATE NO: #TX-{receiptNo}</p>
            <h2 className="receipt-title">TAX-EXEMPT RECEIPT</h2>
            
            <div className="receipt-row">
              <span className="label">DONOR NAME:</span>
              <span className="value">{user.name.toUpperCase()}</span>
            </div>
            <div className="receipt-row">
              <span className="label">DATE:</span>
              <span className="value">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="receipt-row total">
              <span className="label">TOTAL IMPACT:</span>
              <span className="value">₹{user.totalDonations.toLocaleString()}</span>
            </div>

            <div className="tax-disclaimer">
              <ShieldCheck size={16} />
              <span>This contribution is 50% tax-exempt under Section 80G of the Income Tax Act. Valid for FY 2024-25.</span>
            </div>
          </div>

          <div className="receipt-footer">
            <div className="tear-line"></div>
            <button className="download-btn" onClick={() => window.print()}>
              <Download size={18} /> GENERATE PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// --- MAIN DASHBOARD COMPONENT ---
const Dashboard = () => {
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [user, setUser] = useState({
    name: "User",
    totalDonations: 12500,
    friendsInvited: 8,
    referralCode: "HERO-77",
  });

  // Load user data from registration
  useEffect(() => {
    const saved = localStorage.getItem('userProfile');
    if (saved) {
      const parsed = JSON.parse(saved);
      setUser(prev => ({ 
        ...prev, 
        name: parsed.name || prev.name,
        referralCode: parsed.referralCode || prev.referralCode 
      }));
    }
  }, []);

  // INDIVIDUAL RANK LOGIC
  const getRankData = (friends) => {
    if (friends >= 20) return { name: "LEGEND", color: "#FFD600", multi: 2.5, next: "MAX", icon: <Star /> };
    if (friends >= 10) return { name: "GUARDIAN", color: "#22C55E", multi: 2.0, next: "LEGEND", icon: <Award /> };
    if (friends >= 5) return { name: "CATALYST", color: "#A855F7", multi: 1.5, next: "GUARDIAN", icon: <Zap /> };
    return { name: "SEED", color: "#EC4899", multi: 1.0, next: "CATALYST", icon: <Heart /> };
  };

  const rank = getRankData(user.friendsInvited);

  const copyLink = () => {
    const link = `${window.location.origin}/register?ref=${user.referralCode}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="dashboard-page-container">
      <PulseTicker />
      
      <div className="dashboard-wrapper">
        
        {/* 1. HERO HEADER: Individual Identity */}
        <section className="hero-header-card" style={{ borderColor: rank.color }}>
          <div className="hero-profile">
            <div className="hero-avatar" style={{ backgroundColor: rank.color }}>
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} 
                alt="Hero Avatar" 
              />
              <div className="hero-level-tag">{rank.name}</div>
            </div>
            <div className="hero-details">
              <h1 className="neo-title">HELLO, {user.name.toUpperCase()}</h1>
              <div className="receipt-badge" onClick={() => setIsReceiptOpen(true)}>
                <FileText size={14} /> VIEW TAX RECEIPT (80G)
              </div>
            </div>
          </div>
          
          <div className="referral-action" onClick={copyLink}>
            <label>YOUR INVITE LINK</label>
            <div className="invite-pill">
              <code>{user.referralCode}</code>
              {copied ? <CheckCircle size={18} color="#22C55E" /> : <Copy size={18} />}
            </div>
          </div>
        </section>

        {/* 2. PROGRESS TRACKER: The Goal */}
        <section className="tier-progress-box">
          <div className="tier-labels">
            <span>Rank: <strong>{rank.name}</strong></span>
            <span>Next: <strong>{rank.next}</strong></span>
          </div>
          <div className="neo-progress-track">
            <motion.div 
              className="neo-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: '75%' }} 
              style={{ backgroundColor: rank.color }}
            />
          </div>
          <p className="impact-hint">
            You're doing great! Invite 2 more friends to unlock <strong>{rank.next}</strong> status.
          </p>
        </section>

        {/* 3. IMPACT STATS: Individual Results */}
        <div className="impact-grid">
          <div className="glass-card">
            <Users className="card-icon" />
            <h3>{user.friendsInvited}</h3>
            <p>Friends Joined</p>
          </div>
          
          <div className="glass-card">
            <Heart className="card-icon" />
            <h3>₹{user.totalDonations.toLocaleString()}</h3>
            <p>Your Contributions</p>
          </div>
          
          <div className="glass-card highlight-glow" style={{ boxShadow: `8px 8px 0px ${rank.color}` }}>
            <Zap className="card-icon" style={{ color: rank.color }} />
            <h3>₹{(user.friendsInvited * 450).toLocaleString()}</h3>
            <p>Ad-Spend Saved</p>
          </div>
        </div>

        {/* 4. MISSION TRACKER: Realistic Proof */}
        <section className="achievements-section">
          <h3 className="section-title"><MapPin size={24} /> MISSION UPDATES</h3>
          <div className="impact-timeline">
            <div className="timeline-item">
              <div className="timeline-dot" style={{ backgroundColor: rank.color }}></div>
              <div className="timeline-info">
                <div className="timeline-header">
                  <h4>Resource Deployment</h4>
                  <span className="proof-tag"><Camera size={12}/> PHOTO VERIFIED</span>
                </div>
                <p>₹1,200 from your contributions was used today to provide medical supplies in Sector 7.</p>
                <span className="proof-link">VIEW GPS PROOF <ChevronRight size={14}/></span>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" style={{ backgroundColor: '#ccc' }}></div>
              <div className="timeline-info">
                <div className="timeline-header">
                  <h4>Friend Milestone</h4>
                </div>
                <p>Sarah Jenkins joined using your link. NGO advertising cost reduced by ₹450.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. THE RECEIPT POPUP */}
        <ReceiptModal 
          isOpen={isReceiptOpen} 
          onClose={() => setIsReceiptOpen(false)} 
          user={user} 
          rankColor={rank.color}
        />
      </div>
    </div>
  );
};

export default Dashboard;