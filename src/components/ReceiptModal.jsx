import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ShieldCheck } from 'lucide-react';

const ReceiptModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay">
        <motion.div 
          className="receipt-paper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <button className="close-receipt" onClick={onClose}><X /></button>
          
          <div className="receipt-header">
            <div className="ngo-logo">NGO<span>GLOBAL</span></div>
            <div className="receipt-status">OFFICIAL 80G RECEIPT</div>
          </div>

          <div className="receipt-body">
            <p className="serial-no">CERTIFICATE NO: #TX-{Math.floor(Math.random() * 900000 + 100000)}</p>
            <h1>TAX-EXEMPT RECEIPT</h1>
            
            <div className="receipt-row">
              <span className="label">DONOR NAME:</span>
              <span className="value">{user.name.toUpperCase()}</span>
            </div>
            <div className="receipt-row">
              <span className="label">DATE:</span>
              <span className="value">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="receipt-row total">
              <span className="label">TOTAL CONTRIBUTION:</span>
              <span className="value">₹{user.totalDonations.toLocaleString()}</span>
            </div>

            <div className="tax-disclaimer">
              <ShieldCheck size={16} />
              <span>This contribution is 50% tax-exempt under Section 80G of the Income Tax Act.</span>
            </div>
          </div>

          <div className="receipt-footer">
            <div className="tear-line"></div>
            <button className="download-btn" onClick={() => window.print()}>
              <Download size={18} /> DOWNLOAD PDF
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ReceiptModal;