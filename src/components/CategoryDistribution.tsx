import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../data/statistics';

const CategoryDistribution: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const categories = statistics.categoryDistribution;
    const canvas = canvasRef.current;
    
    // Définir les dimensions du canevas et échelle pour les écrans haute résolution
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Paramètres du graphique
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    let startAngle = -0.5 * Math.PI; // Commencer en haut
    
    // Couleurs pour chaque catégorie
    const colors = [
      '#10b981', // emerald-500
      '#14b8a6', // teal-500 
      '#0ea5e9', // sky-500
      '#6366f1', // indigo-500
      '#8b5cf6'  // violet-500
    ];
    
    // Dessiner les segments du pie chart
    categories.forEach((category, index) => {
      const endAngle = startAngle + (category.percentage / 100) * Math.PI * 2;
      
      // Dessiner le segment
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();
      
      // Calculer la position pour les légendes
      const midAngle = startAngle + (endAngle - startAngle) / 2;
      const x = centerX + Math.cos(midAngle) * (radius * 0.7);
      const y = centerY + Math.sin(midAngle) * (radius * 0.7);
      
      // Dessiner un petit cercle pour le pourcentage si assez grand
      if (category.percentage > 8) {
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${category.percentage}%`, x, y);
      }
      
      startAngle = endAngle;
    });
    
    // Dessiner la légende en bas
    const legendY = rect.height - 20;
    const legendItemWidth = rect.width / categories.length;
    
    categories.forEach((category, index) => {
      const legendX = (index + 0.5) * legendItemWidth;
      
      // Carré de couleur
      ctx.fillStyle = colors[index % colors.length];
      ctx.fillRect(legendX - 35, legendY, 10, 10);
      
      // Nom de la catégorie
      ctx.fillStyle = '#4b5563';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(category.category, legendX - 20, legendY + 5);
    });
    
    // Titre du graphique
    ctx.textAlign = 'center';
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('Répartition par catégorie', centerX, 20);
    
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

export default CategoryDistribution;
