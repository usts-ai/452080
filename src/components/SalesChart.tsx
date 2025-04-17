import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../data/statistics';

const SalesChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const salesData = statistics.monthlySales;
    const canvas = canvasRef.current;
    
    // Définir les dimensions du canevas et échelle pour les écrans haute résolution
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Paramètres du graphique
    const padding = { top: 30, right: 20, bottom: 40, left: 40 };
    const chartWidth = rect.width - padding.left - padding.right;
    const chartHeight = rect.height - padding.top - padding.bottom;
    
    // Trouver valeur maximum pour l'échelle
    const maxValue = Math.max(...salesData.map(item => item.amount)) * 1.1;
    
    // Dessiner les axes
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Axe Y
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, chartHeight + padding.top);
    
    // Axe X
    ctx.moveTo(padding.left, chartHeight + padding.top);
    ctx.lineTo(chartWidth + padding.left, chartHeight + padding.top);
    ctx.stroke();
    
    // Lignes de grille horizontales
    const numGridLines = 5;
    ctx.textAlign = 'right';
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#9ca3af';
    
    for (let i = 0; i <= numGridLines; i++) {
      const y = padding.top + (chartHeight / numGridLines) * i;
      const value = Math.round(maxValue - (maxValue / numGridLines) * i);
      
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(chartWidth + padding.left, y);
      ctx.strokeStyle = '#f3f4f6';
      ctx.stroke();
      
      ctx.fillText(value.toString(), padding.left - 5, y + 3);
    }
    
    // Barres et labels pour chaque mois
    const barWidth = chartWidth / salesData.length * 0.7;
    const barSpacing = chartWidth / salesData.length;
    
    ctx.textAlign = 'center';
    salesData.forEach((item, index) => {
      const x = padding.left + barSpacing * index + barSpacing / 2;
      const barHeight = (item.amount / maxValue) * chartHeight;
      const y = chartHeight + padding.top - barHeight;
      
      // Dessiner le dégradé pour la barre
      const gradient = ctx.createLinearGradient(0, y, 0, chartHeight + padding.top);
      gradient.addColorStop(0, '#10b981');
      gradient.addColorStop(1, '#14b8a6');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(x - barWidth / 2, y, barWidth, barHeight, [4, 4, 0, 0]);
      ctx.fill();
      
      // Dessiner l'étiquette du mois
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px sans-serif';
      ctx.fillText(item.month, x, chartHeight + padding.top + 15);
      
      // Dessiner la valeur au-dessus de la barre
      if (item.amount > 0) {
        ctx.fillStyle = '#374151';
        ctx.font = '10px sans-serif';
        ctx.fillText(item.amount.toString(), x, y - 5);
      }
    });
    
    // Titre du graphique
    ctx.textAlign = 'left';
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Ventes mensuelles (€)', padding.left, 15);
    
  }, []);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-4 h-80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </motion.div>
  );
};

export default SalesChart;
