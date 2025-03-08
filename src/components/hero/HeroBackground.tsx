
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute -bottom-8 right-0 w-96 h-96 bg-purple-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow delay-700"></div>
      </div>
      
      {/* Main circular backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-70"></div>
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          d="M160,140 C190,180 290,155 295,120" 
          stroke="rgba(147, 51, 234, 0.3)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeDasharray="5,5"
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          d="M160,135 C200,195 320,280 380,260" 
          stroke="rgba(59, 130, 246, 0.3)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeDasharray="5,5"
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2.1 }}
          d="M300,120 C330,160 350,200 380,260" 
          stroke="rgba(16, 185, 129, 0.3)" 
          strokeWidth="1.5" 
          fill="none" 
          strokeDasharray="5,5"
        />
      </svg>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20 backdrop-blur-md"
          style={{
            width: Math.random() * 12 + 4,
            height: Math.random() * 12 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default HeroBackground;
