import React from 'react';
import { motion } from 'framer-motion';
import { Heart, UserPlus, Gift } from 'lucide-react';

const PulseTicker = () => {
  const messages = [
    { icon: <Heart size={14}/>, text: "Someone just donated ₹500 to Hunger Relief", color: "var(--accent-pink)" },
    { icon: <UserPlus size={14}/>, text: "New member joined Team Unity!", color: "var(--accent-purple)" },
    { icon: <Gift size={14}/>, text: "Milestone Reached: 1,000 families helped this week!", color: "var(--accent-yellow)" },
    { icon: <Heart size={14}/>, text: "Rahul just saved ₹450 in ad costs by inviting a friend", color: "var(--accent-green)" },
  ];

  return (
    <div style={{ background: '#000', color: '#fff', padding: '12px 0', overflow: 'hidden', borderBottom: '4px solid #000', whiteSpace: 'nowrap' }}>
      <motion.div 
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{ display: 'flex', gap: '60px' }}
      >
        {[...messages, ...messages].map((m, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 900, fontSize: '0.85rem' }}>
            <span style={{ color: m.color }}>{m.icon}</span>
            {m.text.toUpperCase()}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PulseTicker;