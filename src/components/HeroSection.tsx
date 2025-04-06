
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroVisual from './hero/HeroVisual';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[calc(100vh-60px)] md:min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left content */}
          <HeroContent />
          
          {/* Right visual - only show on large screens or at the bottom on mobile */}
          {!isMobile ? (
            <HeroVisual />
          ) : (
            <div className="w-full mt-8">
              <HeroVisual />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
