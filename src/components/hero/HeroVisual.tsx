
import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import FloatingCards from './FloatingCards';

const HeroVisual = () => {
  return (
    <motion.div 
      className="relative h-[550px] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <HeroBackground />
      </div>
      
      <div className="relative z-10 h-full w-full flex items-center justify-center pointer-events-none">
        <div className="w-full h-full max-w-[500px] max-h-[500px]">
          <FloatingCards />
        </div>
      </div>
      
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl"></div>
      </div>
    </motion.div>
  );
};

export default HeroVisual;
