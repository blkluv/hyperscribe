
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <>
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 -left-4 w-96 h-96 bg-blue-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -bottom-8 right-0 w-96 h-96 bg-purple-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
      </div>
      
      {/* Main circular backdrop - simplified */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full"
      />
      
      {/* Floating particles - fewer and more subtle */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20 backdrop-blur-md"
          style={{
            width: Math.random() * 10 + 4,
            height: Math.random() * 10 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [Math.random() * 15, Math.random() * -15, Math.random() * 15],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 7,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default HeroBackground;
