
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Code, Rocket, Target } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const FloatingCards = () => {
  return (
    <motion.div
      className="relative w-full h-full"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Growth Analytics Card */}
      <motion.div 
        className="absolute left-[5%] top-[15%] w-48 transform rotate-[-5deg] z-10"
        variants={item}
        whileHover={{ scale: 1.05, rotate: -3, transition: { duration: 0.2 } }}
      >
        <Card className="bg-white/90 backdrop-blur-md border-2 border-blue-100 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <LineChart className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm">Growth Analytics</h3>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-blue-500 h-full rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-purple-500 h-full rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1, delay: 0.7 }}
                ></motion.div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-green-500 h-full rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '92%' }}
                  transition={{ duration: 1, delay: 0.9 }}
                ></motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* AI Content Card */}
      <motion.div 
        className="absolute right-[10%] top-[5%] w-56 transform rotate-[3deg] z-20"
        variants={item}
        whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2 } }}
      >
        <Card className="bg-white/90 backdrop-blur-md border-2 border-purple-100 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Code className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm">AI Content</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Performance</span>
                <motion.span 
                  className="text-xs font-semibold text-green-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >+42%</motion.span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Engagement</span>
                <motion.span 
                  className="text-xs font-semibold text-blue-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >87%</motion.span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Launch Strategy Card */}
      <motion.div 
        className="absolute left-[15%] bottom-[25%] w-52 transform rotate-[6deg] z-30"
        variants={item}
        whileHover={{ scale: 1.05, rotate: 4, transition: { duration: 0.2 } }}
      >
        <Card className="bg-white/90 backdrop-blur-md border-2 border-green-100 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg bg-green-100">
                <Rocket className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-sm">Launch Strategy</h3>
            </div>
            <div className="flex items-center gap-1 mt-2">
              {[40, 55, 35, 60, 75, 90, 70].map((height, index) => (
                <motion.div 
                  key={index}
                  className="h-8 w-1 bg-green-500 rounded-full"
                  initial={{ height: 0 }}
                  animate={{ height: height + '%' }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + (index * 0.1),
                    type: "spring",
                    stiffness: 300
                  }}
                  style={{ opacity: 0.4 + (index * 0.1) }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Conversion Rate Card */}
      <motion.div 
        className="absolute right-[15%] bottom-[10%] w-48 transform rotate-[-4deg] z-40"
        variants={item}
        whileHover={{ scale: 1.05, rotate: -2, transition: { duration: 0.2 } }}
      >
        <Card className="bg-white/90 backdrop-blur-md border-2 border-blue-100 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-2 rounded-lg bg-blue-100">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm">Conversion Rate</h3>
            </div>
            <div className="flex items-center justify-center">
              <motion.div 
                className="relative h-14 w-14 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <svg className="h-full w-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E6E6E6"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <motion.path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4361EE"
                    strokeWidth="3"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ strokeDasharray: "32, 100" }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                  />
                </svg>
                <motion.div 
                  className="absolute text-lg font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >32%</motion.div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCards;
