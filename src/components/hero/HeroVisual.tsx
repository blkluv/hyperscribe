
import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import FloatingCards from './FloatingCards';

const HeroVisual = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full lg:w-1/2 relative h-[500px]"
    >
      <HeroBackground />
      <FloatingCards />
    </motion.div>
  );
};

export default HeroVisual;
