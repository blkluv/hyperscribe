
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  User, 
  FileText, 
  Sparkles, 
  Edit, 
  BarChart, 
  Rocket, 
  ArrowRightCircle 
} from 'lucide-react';

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

// Connector line between workflow steps
const Connector = ({ rotate = false }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
    className={`absolute w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ${rotate ? 'rotate-90' : ''}`}
    style={{ 
      left: rotate ? '-30px' : 'auto',
      top: rotate ? '50%' : 'auto',
      transform: rotate ? 'translateY(-50%) rotate(90deg)' : 'none'
    }}
  />
);

const AIHumanWorkflow = () => {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="relative max-w-md">
        {/* Title Card */}
        <motion.div 
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-64 z-50"
          variants={item}
        >
          <Card className="bg-white/90 backdrop-blur-md border-2 border-blue-100 shadow-xl">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold">AI + Human Workflow</h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <Brain className="h-5 w-5 text-purple-500" />
                <div className="h-px w-8 bg-gray-300"></div>
                <User className="h-5 w-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Step 1: AI Content Generation */}
        <motion.div 
          className="absolute left-0 top-8 w-56 z-40"
          variants={item}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Card className="bg-white/95 backdrop-blur-md border-2 border-purple-100 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-100">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-sm">AI Content Draft</h3>
              </div>
              <div className="space-y-2 mt-2">
                <motion.div 
                  className="h-3 bg-gray-100 rounded-full overflow-hidden"
                  initial={{ width: '100%' }}
                >
                  <motion.div 
                    className="h-full bg-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
                <motion.div 
                  className="h-3 bg-gray-100 rounded-full overflow-hidden"
                  initial={{ width: '100%' }}
                >
                  <motion.div 
                    className="h-full bg-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </motion.div>
                <motion.div 
                  className="h-3 bg-gray-100 rounded-full overflow-hidden"
                  initial={{ width: '100%' }}
                >
                  <motion.div 
                    className="h-full bg-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </motion.div>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs">
                  <span>Speed</span>
                  <motion.span 
                    className="font-medium text-green-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >+90%</motion.span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="relative h-8 flex justify-end pr-4">
            <Connector />
          </div>
        </motion.div>
        
        {/* Step 2: Human Expert Refinement */}
        <motion.div 
          className="absolute right-0 top-40 w-56 z-30"
          variants={item}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className="relative h-8 flex justify-start pl-4 mb-1">
            <Connector rotate={true} />
          </div>
          <Card className="bg-white/95 backdrop-blur-md border-2 border-blue-100 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-sm">Human Review</h3>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-start space-x-2">
                  <Edit className="h-4 w-4 text-blue-500 mt-0.5" />
                  <motion.span 
                    className="text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                  >Expert editing</motion.span>
                </div>
                <div className="flex items-start space-x-2">
                  <Sparkles className="h-4 w-4 text-blue-500 mt-0.5" />
                  <motion.span 
                    className="text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >Brand voice adjustment</motion.span>
                </div>
                <div className="flex items-start space-x-2">
                  <FileText className="h-4 w-4 text-blue-500 mt-0.5" />
                  <motion.span 
                    className="text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >Fact verification</motion.span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="relative h-8 flex justify-start pl-4 mt-1">
            <Connector />
          </div>
        </motion.div>
        
        {/* Step 3: Finalized Content */}
        <motion.div 
          className="absolute left-0 bottom-12 w-56 z-20"
          variants={item}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className="relative h-8 flex justify-end pr-4 mb-1">
            <Connector rotate={true} />
          </div>
          <Card className="bg-white/95 backdrop-blur-md border-2 border-green-100 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-green-100">
                  <Rocket className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-sm">Optimized Content</h3>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Engagement</span>
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                  >
                    <motion.span className="text-xs font-semibold mr-1 text-green-600">+65%</motion.span>
                    <ArrowRightCircle className="h-3 w-3 text-green-600" />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Conversion</span>
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                  >
                    <motion.span className="text-xs font-semibold mr-1 text-green-600">+42%</motion.span>
                    <ArrowRightCircle className="h-3 w-3 text-green-600" />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Time saved</span>
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1 }}
                  >
                    <motion.span className="text-xs font-semibold mr-1 text-green-600">70%</motion.span>
                    <ArrowRightCircle className="h-3 w-3 text-green-600" />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Analytics Indicator */}
        <motion.div 
          className="absolute right-2 bottom-4 w-48 z-10"
          variants={item}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <Card className="bg-white/95 backdrop-blur-md border-2 border-blue-100 shadow-xl">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-1.5 rounded-lg bg-blue-100">
                  <BarChart className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-semibold text-xs">Performance</h3>
              </div>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="relative h-12 w-12 flex items-center justify-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
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
                      animate={{ strokeDasharray: "85, 100" }}
                      transition={{ delay: 2.5, duration: 1.5 }}
                    />
                  </svg>
                  <motion.div 
                    className="absolute text-sm font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >85%</motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AIHumanWorkflow;
