
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full lg:w-1/2 text-center lg:text-left"
    >
      <motion.span 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="inline-block py-1.5 px-4 mb-5 sm:mb-6 text-xs font-medium tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm"
      >
        AI-POWERED CONTENT AGENCY
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
      >
        Smart Content for 
        <span className="text-gradient bg-gradient-to-r from-blue-600 to-blue-500"> SaaS Startups</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl lg:mx-0 mx-auto font-light"
      >
        Leveraging AI to create high-converting content that drives growth for SaaS companies. Content that converts, at scale.
      </motion.p>
      
      {/* Social proof element with improved spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mb-10 flex flex-wrap gap-3 justify-center lg:justify-start"
      >
        <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full">
          <Check size={16} className="text-green-600" />
          <span className="text-sm font-medium">3x faster content delivery</span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full">
          <Check size={16} className="text-green-600" />
          <span className="text-sm font-medium">AI + human quality</span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2 rounded-full">
          <Check size={16} className="text-green-600" />
          <span className="text-sm font-medium">ROI focused approach</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 relative overflow-hidden group">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Book a Free Consultation
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 border-2 text-sm sm:text-base hover:bg-blue-50/50"
          asChild
        >
          <Link to="/services">
            View Services
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
