
import React from 'react';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-100/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute -bottom-8 right-0 w-96 h-96 bg-purple-200/70 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow delay-700"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Enhanced Content */}
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
              className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm"
            >
              AI-POWERED CONTENT AGENCY
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Smart Content for 
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600"> SaaS Startups</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl lg:mx-0 mx-auto"
            >
              Leveraging AI to create high-converting content that drives growth for SaaS companies. Content that converts, at scale.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
            >
              <Button className="rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-2 text-base hover:bg-blue-50/50">
                View Services
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
            >
              <p className="text-sm text-muted-foreground">Trusted by:</p>
              <div className="flex space-x-8">
                {['Company1', 'Company2', 'Company3'].map((company, index) => (
                  <span key={index} className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Hero Visual - Replacing the placeholder with a more engaging design */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm"></div>
              
              {/* Main content area */}
              <div className="relative glass-panel p-8 rounded-xl overflow-hidden backdrop-blur-md border border-white/20">
                {/* Dashboard mockup */}
                <div className="bg-white/95 dark:bg-gray-900/95 rounded-lg shadow-lg overflow-hidden">
                  {/* Header with tabs */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                    <div className="flex space-x-1 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md">Dashboard</div>
                      <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">Analytics</div>
                      <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">Content</div>
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Content Performance</span>
                      <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">+24%</span>
                    </h3>
                    
                    {/* Content metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Zap className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-xs text-gray-500">Engagement</span>
                        </div>
                        <p className="text-xl font-bold">87%</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Target className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-xs text-gray-500">Conversions</span>
                        </div>
                        <p className="text-xl font-bold">32%</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-xs text-gray-500">Growth</span>
                        </div>
                        <p className="text-xl font-bold">+18%</p>
                      </div>
                    </div>
                    
                    {/* Content chart visualization */}
                    <div className="h-32 bg-gray-50 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden relative">
                      <div className="absolute bottom-0 inset-x-0 h-32 flex items-end">
                        <div className="w-1/6 h-40% bg-blue-500 opacity-80 mx-1 rounded-t"></div>
                        <div className="w-1/6 h-70% bg-blue-500 opacity-80 mx-1 rounded-t"></div>
                        <div className="w-1/6 h-50% bg-blue-500 opacity-80 mx-1 rounded-t"></div>
                        <div className="w-1/6 h-90% bg-purple-500 opacity-80 mx-1 rounded-t"></div>
                        <div className="w-1/6 h-60% bg-purple-500 opacity-80 mx-1 rounded-t"></div>
                        <div className="w-1/6 h-80% bg-purple-500 opacity-80 mx-1 rounded-t"></div>
                      </div>
                    </div>
                    
                    {/* Content performance table */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 grid grid-cols-3 p-2">
                        <div>Channel</div>
                        <div>Performance</div>
                        <div>ROI</div>
                      </div>
                      <div className="text-xs grid grid-cols-3 p-2 border-b border-gray-200 dark:border-gray-700">
                        <div>Blog Posts</div>
                        <div className="text-green-600">High</div>
                        <div>324%</div>
                      </div>
                      <div className="text-xs grid grid-cols-3 p-2">
                        <div>Social Media</div>
                        <div className="text-blue-600">Medium</div>
                        <div>215%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -right-4 top-12 glass-panel py-3 px-4 rounded-lg shadow-lg border border-white/30 backdrop-blur-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">New Leads</p>
                    <p className="text-sm font-semibold">+18 Today</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -left-4 bottom-20 glass-panel py-3 px-4 rounded-lg shadow-lg border border-white/30 backdrop-blur-md"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/20 p-2 rounded-full">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Conversion Rate</p>
                    <p className="text-sm font-semibold text-purple-600">32.5%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
