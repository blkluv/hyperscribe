
import React from 'react';
import { ArrowRight, Zap, Target, TrendingUp, Code, Rocket, LineChart } from 'lucide-react';
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
          {/* Left content */}
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
          
          {/* New Enhanced Hero Visual - 3D floating elements design */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-1/2 relative h-[500px]"
          >
            {/* Main circular backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-70"></div>
            
            {/* Animated floating blocks */}
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[20%] top-[20%] w-48 h-48"
            >
              <div className="glass-panel h-full w-full rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm p-6 flex flex-col justify-between transform rotate-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <LineChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Growth Analytics</h3>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [15, -5, 15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-[15%] top-[10%] w-56 h-44"
            >
              <div className="glass-panel h-full w-full rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm p-5 flex flex-col justify-between transform -rotate-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg">AI Content</h3>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Performance</span>
                    <span className="text-sm font-semibold text-green-600">+42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Engagement</span>
                    <span className="text-sm font-semibold text-blue-600">87%</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [5, -15, 5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-[10%] bottom-[15%] w-52 h-40"
            >
              <div className="glass-panel h-full w-full rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm p-5 flex flex-col justify-between transform rotate-12">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Rocket className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Launch Strategy</h3>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-2 rounded-full bg-green-500"></div>
                    <div className="h-8 w-2 rounded-full bg-green-400"></div>
                    <div className="h-8 w-2 rounded-full bg-green-300"></div>
                    <div className="h-8 w-2 rounded-full bg-green-400"></div>
                    <div className="h-8 w-2 rounded-full bg-green-500"></div>
                    <div className="h-8 w-2 rounded-full bg-green-600"></div>
                    <div className="h-8 w-2 rounded-full bg-green-700"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-8, 12, -8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-[20%] bottom-[20%] w-48 h-36"
            >
              <div className="glass-panel h-full w-full rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm p-4 flex flex-col justify-between transform -rotate-6">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Conversion Rate</h3>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <div className="relative h-16 w-16 flex items-center justify-center">
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E6E6E6"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4361EE"
                        strokeWidth="3"
                        strokeDasharray="32, 100"
                      />
                    </svg>
                    <div className="absolute text-lg font-bold">32%</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                d="M160,140 C190,180 290,155 295,120" 
                stroke="rgba(147, 51, 234, 0.3)" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5,5"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1.8 }}
                d="M160,135 C200,195 320,280 380,260" 
                stroke="rgba(59, 130, 246, 0.3)" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5,5"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 2.1 }}
                d="M300,120 C330,160 350,200 380,260" 
                stroke="rgba(16, 185, 129, 0.3)" 
                strokeWidth="1.5" 
                fill="none" 
                strokeDasharray="5,5"
              />
            </svg>
            
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/20 backdrop-blur-md"
                style={{
                  width: Math.random() * 12 + 4,
                  height: Math.random() * 12 + 4,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [Math.random() * 20, Math.random() * -20, Math.random() * 20],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
