export const statistics = {
  totalSales: 42875.50,
  totalOrders: 1245,
  activePartners: 16,
  productsListed: 142,
  monthlySales: [
    { month: 'Jan', amount: 3540 },
    { month: 'Fév', amount: 3890 },
    { month: 'Mar', amount: 4120 },
    { month: 'Avr', amount: 4350 },
    { month: 'Mai', amount: 4580 },
    { month: 'Juin', amount: 4890 },
    { month: 'Juil', amount: 5120 },
    { month: 'Août', amount: 5450 },
    { month: 'Sep', amount: 5780 },
    { month: 'Oct', amount: 6120 },
    { month: 'Nov', amount: 0 },
    { month: 'Déc', amount: 0 },
  ],
  categoryDistribution: [
    { category: 'Légumes & Fruits', percentage: 32 },
    { category: 'Boulangerie', percentage: 18 },
    { category: 'Produits laitiers', percentage: 15 },
    { category: 'Épicerie', percentage: 20 },
    { category: 'Boissons', percentage: 15 }
  ],
  recentOrders: [
    { id: '#ORD-2345', customer: 'Épicerie du Coin', date: '17/04/2025', amount: 245.80, status: 'Livré' },
    { id: '#ORD-2344', customer: 'Marché Bio Durable', date: '16/04/2025', amount: 189.50, status: 'En cours' },
    { id: '#ORD-2343', customer: 'Coopérative Terroir', date: '15/04/2025', amount: 312.75, status: 'En préparation' },
    { id: '#ORD-2342', customer: 'Chez Nature', date: '14/04/2025', amount: 178.20, status: 'Livré' },
    { id: '#ORD-2341', customer: 'Épicerie du Coin', date: '13/04/2025', amount: 203.40, status: 'Livré' }
  ]
};
