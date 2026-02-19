import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Download, PieChart, Users, ArrowUpRight, Info } from 'lucide-react';
import './NGOPerformanceReport.css';

const NGOPerformanceReport = ({ ngoName = "Action Against Hunger", stats = { raw: 125000, referrals: 240 } }) => {
  // Logic: ₹450 is the industry standard CAC (Cost per Acquisition) for NGOs
  const bonusRevenue = stats.referrals * 450;
  const totalImpact = stats.raw + bonusRevenue;

  return (
    <div className="report-page-container">
      <div className="report-sheet">
        {/* HEADER: AUDIT STYLE */}
        <header className="report-header">
          <div className="header-top">
            <div className="brand-logo">INVITEL<span>.ECONOMICS</span></div>
            <div className="report-id">REF: PR-{new Date().getFullYear()}-099</div>
          </div>
          <h1 className="report-title">PARTNER PERFORMANCE AUDIT</h1>
          <p className="ngo-name-label">ISSUED TO: <b>{ngoName.toUpperCase()}</b></p>
        </header>

        {/* TOP STATS: THE NUMBERS */}
        <div className="report-stats-grid">
          <div className="stat-card">
            <label>RAW DONATIONS</label>
            <h2>₹{stats.raw.toLocaleString()}</h2>
            <p>Direct platform contributions</p>
          </div>
          <div className="stat-card bonus-card">
            <label>PERFORMANCE BONUS <Info size={12}/></label>
            <h2>+ ₹{bonusRevenue.toLocaleString()}</h2>
            <p>Marketing spend saved by community</p>
          </div>
        </div>

        {/* THE TOTAL IMPACT BAR */}
        <div className="impact-bar-section">
          <div className="impact-label">
            <span>TOTAL ECOSYSTEM VALUE</span>
            <ArrowUpRight color="var(--accent-green)" />
          </div>
          <div className="impact-value">₹{totalImpact.toLocaleString()}</div>
          <div className="impact-progress-container">
            <div className="progress-segment raw" style={{width: '60%'}}></div>
            <div className="progress-segment bonus" style={{width: '40%'}}></div>
          </div>
          <div className="impact-legend">
            <span><i className="dot raw"></i> Donation</span>
            <span><i className="dot bonus"></i> Ad-Savings Bonus</span>
          </div>
        </div>

        {/* THE LOGIC: WHY THIS MATTERS */}
        <section className="logic-brief">
          <h3>EXECUTIVE SUMMARY</h3>
          <p>
            By leveraging the Invitel Referral Loop, <b>{ngoName}</b> has acquired <b>{stats.referrals} new recurring donors</b> at zero cost. 
            In a traditional marketing environment, this would have required an ad-spend of <b>₹{bonusRevenue.toLocaleString()}</b>. 
            This "Bonus Revenue" is now fully available for field operations rather than Meta/Google ad auctions.
          </p>
        </section>

        <footer className="report-footer">
          <button className="download-report-btn" onClick={() => window.print()}>
            <Download size={18} /> DOWNLOAD FINANCIAL REPORT (.PDF)
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NGOPerformanceReport;