import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Donate.css';

const Donate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // Controls the simulated loading

  const handleDonate = (e) => {
    e.preventDefault();
    setIsProcessing(true); // Start the loading spinner

    // SIMULATE BACKEND DELAY & LOCAL STORAGE
    setTimeout(() => {
      // 1. Save dummy data to local storage to simulate backend
      const newDonation = { id, amount, date: new Date().toISOString() };
      localStorage.setItem('lastDonation', JSON.stringify(newDonation));
      
      // 2. Stop loading and redirect to Thank You page
      setIsProcessing(false);
      navigate('/thank-you', { state: { amount } }); 
    }, 2000); // 2 second delay
  };

  return (
    <div className="donate-wrapper">
      <div className="donate-card">
        <h2>Initiate Impact</h2>
        
        {isProcessing ? (
          <div className="processing-state">
            <div className="neo-spinner"></div>
            <h3>PROCESSING SECURE TRANSFER...</h3>
          </div>
        ) : (
          <form onSubmit={handleDonate} className="donate-form">
            <div className="input-group">
              <label>Amount (₹)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00" 
                required 
              />
            </div>
            <div className="impact-preview">
              Projected Impact: <strong>{amount ? Math.floor(amount / 500) : 0} Units</strong>
            </div>
            <button type="submit" className="submit-btn">EXECUTE PAYMENT</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Donate;