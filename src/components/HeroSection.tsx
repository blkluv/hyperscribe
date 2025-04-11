
import HeroContent from './hero/HeroContent';
import HeroVisual from './hero/HeroVisual';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[calc(100vh-60px)] md:min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left content */}
          <HeroContent />
          
          {/* Right visual - only show on desktop */}
          {!isMobile && <HeroVisual />}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mt-20"
        >
          <a 
            href="#workflow" 
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="mb-2">View more</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
