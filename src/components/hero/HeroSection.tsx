
import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[calc(100vh-60px)] md:min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[80px]" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-purple-100/40 rounded-full mix-blend-multiply filter blur-[80px]" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 py-24 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block py-1.5 px-4 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            AI CONTENT AGENCY
          </span>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <HeroContent />
          </motion.div>
          
          {/* Only show visual on larger screens for better performance */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <HeroVisual />
            </motion.div>
          )}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 sm:mt-24"
        >
          <a 
            href="#workflow" 
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="mb-2 text-sm font-medium">Explore Our Services</span>
            <div className="p-2 rounded-full bg-blue-50 shadow-sm border border-blue-100">
              <ArrowDown className="animate-bounce h-5 w-5" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
