// Global Configuration
export const GLOBAL_CONFIG = {
  costPerAcquisition: 450.00, // ₹ saved per referral
  currency: "₹",
};

// Rank Tiers with theme colors
export const RANK_TIERS = {
  NOVA: { name: "Nova", min: 0, color: "#9333ea", glow: "0 0 20px #9333ea" },
  SUPERNOVA: { name: "Supernova", min: 500, color: "#c026d3", glow: "0 0 25px #c026d3" },
  GALAXY: { name: "Galaxy Leader", min: 2000, color: "#2563eb", glow: "0 0 30px #2563eb" },
  AMBASSADOR: { name: "Cosmic Ambassador", min: 5000, color: "#0ea5e9", glow: "0 0 35px #0ea5e9" },
};

// Hardcoded Referral Tree (Simulating the get_referral_tree function)
// Format: { id, name, level, children: [] }
export const REFERRAL_TREE = {
  id: "root",
  name: "You (The North Star)",
  impactPoints: 2450,
  level: 0,
  children: [
    {
      id: "ref1",
      name: "Arjun S.",
      level: 1,
      donated: 500,
      children: [
        { id: "ref1-1", name: "Priya K.", level: 2, donated: 200, children: [] },
        { id: "ref1-2", name: "Rahul M.", level: 2, donated: 150, children: [] },
      ],
    },
    {
      id: "ref2",
      name: "Sarah J.",
      level: 1,
      donated: 1200,
      children: [
        { id: "ref2-1", name: "Leo V.", level: 2, donated: 300, children: [] },
      ],
    },
  ],
};

// Growth Data for Charts (Past 7 days)
export const GROWTH_STATS = [
  { day: "Mon", referrals: 2, impact: 400 },
  { day: "Tue", referrals: 5, impact: 900 },
  { day: "Wed", referrals: 3, impact: 1400 },
  { day: "Thu", referrals: 8, impact: 2100 },
  { day: "Fri", referrals: 12, impact: 2800 },
  { day: "Sat", referrals: 15, impact: 3500 },
  { day: "Sun", referrals: 22, impact: 4250 },
];