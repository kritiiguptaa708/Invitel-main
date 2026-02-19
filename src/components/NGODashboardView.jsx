import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, Info, DollarSign } from 'lucide-react';
import './NGODashboard.css';

const NGODashboardView = ({ ngoName = "Save The Children", stats }) => {
  // Logic: For every user joined via referral, we save the NGO roughly ₹450 in ads.
  const adSpendSaved = stats.referrals * 450; 
  const totalValue = stats.rawDonations + adSpendSaved;

  return (
    <div className="ngo-view-container">
      <div className="ngo-header">
        <div>
          <h1>PARTNER PORTAL: {ngoName.toUpperCase()}</h1>
          <p>Community-Driven Performance Metrics</p>
        </div>
        <div className="live-badge">LIVE PERFORMANCE</div>
      </div>

      <div className="performance-grid">
        {/* 1. RAW REVENUE */}
        <div className="perf-card">
          <label>TOTAL DONATIONS</label>
          <div className="value">₹{stats.rawDonations.toLocaleString()}</div>
          <div className="sub-value">Directly contributed by users</div>
        </div>

        {/* 2. THE BONUS REVENUE (The "Magic" Number) */}
        <div className="perf-card highlight-card">
          <div className="card-top">
            <label>BONUS REVENUE GENERATED</label>
            <Info size={14} className="info-icon" />
          </div>
          <div className="value" style={{color: 'var(--accent-green)'}}>
            + ₹{adSpendSaved.toLocaleString()}
          </div>
          <div className="sub-value">Marketing costs saved via Invitel Referrals</div>
        </div>

        {/* 3. TOTAL ECOSYSTEM VALUE */}
        <div className="perf-card total-card">
          <label>TOTAL ECOSYSTEM VALUE</label>
          <div className="value">₹{totalValue.toLocaleString()}</div>
          <div className="sub-value">Real-world impact created</div>
        </div>
      </div>

      {/* 4. PERFORMANCE BREAKDOWN */}
      <section className="logic-breakdown">
        <h3>How we calculate your "Bonus Revenue"</h3>
        <div className="logic-step">
          <div className="step-num">1</div>
          <p>Average Cost Per Acquisition (CPA) for NGOs on Meta/Google is <b>₹450</b>.</p>
        </div>
        <div className="logic-step">
          <div className="step-num">2</div>
          <p>Your community brought in <b>{stats.referrals} new donors</b> at zero ad cost.</p>
        </div>
        <div className="logic-step">
          <div className="step-num">3</div>
          <p>We credit this <b>₹{adSpendSaved.toLocaleString()}</b> as "Performance Bonus" available for field missions.</p>
        </div>
      </section>
    </div>
  );
};

export default NGODashboardView;