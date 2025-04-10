
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            OUR SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            AI-Powered Content Solutions for <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">SaaS Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            We combine AI efficiency with human creativity to deliver high-converting content that drives growth, engages audiences, and establishes thought leadership.
          </p>
          
          {/* Social proof element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 flex flex-wrap gap-3 justify-center"
          >
            <div className="flex items-center gap-2 bg-blue-50/80 px-3 py-1.5 rounded-full">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium">Trusted by 30+ SaaS companies</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50/80 px-3 py-1.5 rounded-full">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium">100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50/80 px-3 py-1.5 rounded-full">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium">Expert content team</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto rounded-full px-7 sm:px-9 py-6 sm:py-7 shadow-lg hover:shadow-xl transition-all text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 relative overflow-hidden group">
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Book a Free Consultation Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
