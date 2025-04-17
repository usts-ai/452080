import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../data/statistics';

const RecentOrders: React.FC = () => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Livré':
        return 'bg-green-100 text-green-800';
      case 'En cours':
        return 'bg-blue-100 text-blue-800';
      case 'En préparation':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Commandes récentes</h2>
        <motion.button 
          className="text-sm text-emerald-600 font-medium flex items-center hover:text-emerald-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voir toutes
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>

      <motion.div 
        className="overflow-x-auto -mx-5"
        variants={tableVariants}
        initial="hidden"
        animate="visible"
      >
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Épicerie</th>
              <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
              <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="py-3 px-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {statistics.recentOrders.map((order, index) => (
              <motion.tr 
                key={order.id} 
                className="hover:bg-gray-50"
                variants={rowVariants}
              >
                <td className="py-3 px-5 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="py-3 px-5 whitespace-nowrap text-sm text-gray-700">{order.customer}</td>
                <td className="py-3 px-5 whitespace-nowrap text-sm text-gray-700">{order.date}</td>
                <td className="py-3 px-5 whitespace-nowrap text-sm font-medium text-gray-900">{order.amount.toFixed(2)} €</td>
                <td className="py-3 px-5 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-5 whitespace-nowrap text-sm text-gray-700">
                  <motion.button 
                    className="text-emerald-600 hover:text-emerald-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default RecentOrders;
