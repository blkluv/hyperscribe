
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600/10 via-purple-500/15 to-blue-400/5">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI-Powered Content Solutions for <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">SaaS Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We combine AI efficiency with human creativity to deliver high-converting content that drives growth, engages audiences, and establishes thought leadership.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-8 py-6 shadow-lg text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Book a Free Consultation Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
