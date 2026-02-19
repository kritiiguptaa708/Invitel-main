import { REFERRAL_TREE, GLOBAL_CONFIG } from "../data/mockData";

export const useImpactCalculations = () => {
  // Helper to flatten the tree and count everything
  const getStats = (node) => {
    let count = 0;
    let totalDonated = node.donated || 0;
    
    node.children.forEach(child => {
      const childStats = getStats(child);
      count += 1 + childStats.count;
      totalDonated += childStats.totalDonated;
    });
    
    return { count, totalDonated };
  };

  const { count: networkSize, totalDonated } = getStats(REFERRAL_TREE);
  const directReferrals = REFERRAL_TREE.children.length;
  const adSpendSaved = networkSize * GLOBAL_CONFIG.costPerAcquisition;

  return {
    networkSize,
    totalDonated,
    directReferrals,
    adSpendSaved,
    multiplier: (networkSize / directReferrals).toFixed(1),
  };
};