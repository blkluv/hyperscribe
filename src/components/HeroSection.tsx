
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-8 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
              AI-POWERED CONTENT AGENCY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Smart Content for 
              <span className="text-gradient"> SaaS Startups</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl lg:mx-0 mx-auto">
              Leveraging AI to create high-converting content that drives growth for SaaS companies. Content that converts, at scale.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button className="rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-shadow text-base">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-2 text-base">
                View Services
              </Button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-8">
              <p className="text-sm text-muted-foreground">Trusted by:</p>
              <div className="flex space-x-6">
                {['Company1', 'Company2', 'Company3'].map((company, index) => (
                  <span key={index} className="text-sm font-medium opacity-70">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-panel p-6 relative overflow-hidden lg:ml-auto">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Intelligent Content</h3>
                  <p className="text-muted-foreground">Creating compelling SaaS content that drives conversions</p>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -right-3 bottom-16 glass-panel py-3 px-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Avg. Conversion Rate</p>
                    <p className="text-sm font-semibold">+27% Increase</p>
                  </div>
                </div>
              </div>
              
              {/* Small decoration element */}
              <div className="absolute -left-2 top-10 glass-panel p-3 rounded-lg shadow-lg">
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
