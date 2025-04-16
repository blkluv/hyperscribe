
import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import FloatingCards from './FloatingCards';

const HeroVisual = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full lg:w-1/2 relative h-[500px] overflow-hidden rounded-xl"
    >
      <HeroBackground />
      <FloatingCards />
    </motion.div>
  );
};

export default HeroVisual;
