import React, { useState } from 'react';
import { 
  Check, Zap, Percent, Shield, TrendingUp, 
  Calculator, X, Target, Users, ZapOff, BarChart3 
} from 'lucide-react';
import './SubscriptionModel.css';

const SubscriptionModel = () => {
  const [donorCount, setDonorCount] = useState(100);
  
  // Logic: 
  // Trad Ads: ₹600 per donor
  // InviteL: ~₹150 (Platform + Success Fee combined avg)
  const traditionalCost = donorCount * 600;
  const invitelCost = donorCount * 150;
  const adSpendSavings = traditionalCost - invitelCost;

  return (
    <div className="sub-page-wrapper">
      <header className="sub-header">
        <div className="model-tag">REVENUE MODEL 2.0</div>
        <h1>NGO PARTNER PLANS</h1>
        <p>Zero Upfront Marketing Risk. Pay for Actual Growth.</p>
      </header>

      {/* REVENUE LOGIC BANNER */}
      <div className="revenue-logic-banner">
        <div className="logic-card">
          <div className="logic-icon-circle"><Percent size={28} color="#FFD600" /></div>
          <div>
            <h3>3-5% Success Fee</h3>
            <p>We only earn when you receive donations through our verified referral network.</p>
          </div>
        </div>
        <div className="logic-card border-left">
          <div className="logic-icon-circle"><TrendingUp size={28} color="#A855F7" /></div>
          <div>
            <h3>Performance Based</h3>
            <p>No new donors acquired? You pay nothing beyond your base platform fee.</p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE SAVINGS CALCULATOR & BAR GRAPH */}
      <div className="calculator-container">
        <div className="calc-header">
          <Calculator size={24} />
          <h2>IMPACT CALCULATOR</h2>
        </div>
        
        <div className="calc-content">
          <div className="slider-box">
            <label>DONORS ACQUIRED: <span>{donorCount}</span></label>
            <input 
              type="range" min="10" max="1000" step="10" 
              value={donorCount} 
              onChange={(e) => setDonorCount(e.target.value)}
              className="impact-slider"
            />
            
            {/* DYNAMIC BAR GRAPH */}
            <div className="bar-graph-container">
              <div className="graph-label">COST COMPARISON</div>
              
              <div className="bar-wrapper">
                <div className="bar-meta-info"><span>Traditional Ads</span> <b>₹{traditionalCost.toLocaleString()}</b></div>
                <div className="bar-bg">
                  <div className="bar-fill trad-bar" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="bar-wrapper">
                <div className="bar-meta-info"><span>InviteL Model</span> <b>₹{invitelCost.toLocaleString()}</b></div>
                <div className="bar-bg">
                  <div className="bar-fill invitel-bar" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="result-box">
            <label>TOTAL BUDGET SAVED</label>
            <div className="savings-amount">₹{adSpendSavings.toLocaleString()}</div>
            <p>This is money kept in your mission, not given to Big Tech.</p>
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="comparison-section">
        <h2 className="section-title">WHY CHOOSE INVITEL?</h2>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>STRATEGY</th>
                <th className="ads-col">META / GOOGLE ADS</th>
                <th className="invitel-col">INVITEL NETWORK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Billing</strong></td>
                <td>Pay for Clicks (No Guarantee)</td>
                <td>Pay for Verified Donors</td>
              </tr>
              <tr>
                <td><strong>Risk</strong></td>
                <td>NGO bears 100% loss</td>
                <td>Risk-Free Performance</td>
              </tr>
              <tr>
                <td><strong>Engagement</strong></td>
                <td>Cold Traffic</td>
                <td>High-Trust Referrals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PRICING GRID */}
      <div className="pricing-grid">
        <div className="price-card">
          <div className="plan-name">STARTER</div>
          <div className="plan-price">₹0<span>/mo</span></div>
          <div className="fee-badge">5% SUCCESS FEE</div>
          <ul className="plan-features">
            <li><Check size={16} /> Standard Dashboard</li>
            <li><Check size={16} /> 1 Active Mission</li>
          </ul>
          <button className="plan-btn">GET STARTED</button>
        </div>

        <div className="price-card featured">
          <div className="popular-tag">MOST POPULAR</div>
          <div className="plan-name">PRO IMPACT</div>
          <div className="plan-price">₹4,999<span>/mo</span></div>
          <div className="fee-badge yellow">3% SUCCESS FEE</div>
          <ul className="plan-features">
            <li><Check size={16} /> Unlimited Missions</li>
            <li><Check size={16} /> Priority Feed Access</li>
          </ul>
          <button className="plan-btn featured-btn">GO PRO NOW</button>
        </div>

        <div className="price-card">
          <div className="plan-name">ELITE NODE</div>
          <div className="plan-price">₹14,999<span>/mo</span></div>
          <div className="fee-badge">CUSTOM FEE</div>
          <ul className="plan-features">
            <li><Check size={16} /> API Access</li>
            <li><Check size={16} /> White-labeled Reports</li>
          </ul>
          <button className="plan-btn">CONTACT SALES</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModel;