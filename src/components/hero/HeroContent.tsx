
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="text-left space-y-8">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
      >
        Your <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">SaaS Business</span> 
        <br className="hidden sm:block" />
        Should Never Worry About Content Again
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl font-light"
      >
        AI-powered, human-refined content for SaaS businesses — LinkedIn, SEO blogs, landing pages, newsletters, and more.
        <br className="hidden sm:block" />
        Strategy, quality, and speed—without compromise. 🤖 🧠 🚀
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-3"
      >
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-blue-50">
          <CheckCircle size={18} className="text-blue-500" />
          <span className="text-sm font-medium">3x faster content delivery</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-blue-50">
          <CheckCircle size={18} className="text-blue-500" />
          <span className="text-sm font-medium">AI + human expertise</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-blue-50">
          <CheckCircle size={18} className="text-blue-500" />
          <span className="text-sm font-medium">Built to convert</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
          <Button className="w-full sm:w-auto rounded-full px-7 sm:px-9 py-6 sm:py-7 shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 relative overflow-hidden group">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto rounded-full px-7 sm:px-9 py-6 sm:py-7 border-2 border-blue-200 text-blue-700 hover:bg-blue-50/70"
          asChild
        >
          <Link to="/services">
            View Services
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroContent;
