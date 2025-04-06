
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-100/70 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-32 right-10 w-[600px] h-[600px] bg-purple-200/70 rounded-full mix-blend-multiply filter blur-[100px] opacity-50"
        />
      </div>
      
      {/* Subtle animated mesh grid overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 3 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 128, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Floating dots - fewer, more elegant */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/30 backdrop-blur-sm"
          style={{
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  );
};

export default HeroBackground;
