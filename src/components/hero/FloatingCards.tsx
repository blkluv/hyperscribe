
import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';
import { LineChart, Code, Rocket, Target } from 'lucide-react';

const FloatingCards = () => {
  return (
    <>
      {/* Growth Analytics Card */}
      <FloatingCard
        className="absolute left-[20%] top-[20%] w-48 h-48"
        rotate={6}
        animationProps={{
          initial: { y: 0 },
          animate: { y: [-10, 10, -10] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
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
      </FloatingCard>
      
      {/* AI Content Card */}
      <FloatingCard
        className="absolute right-[15%] top-[10%] w-56 h-44"
        rotate={-3}
        animationProps={{
          initial: { y: 0 },
          animate: { y: [15, -5, 15] },
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
      >
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
      </FloatingCard>
      
      {/* Launch Strategy Card */}
      <FloatingCard
        className="absolute left-[10%] bottom-[15%] w-52 h-40"
        rotate={12}
        animationProps={{
          initial: { y: 0 },
          animate: { y: [5, -15, 5] },
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      >
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
      </FloatingCard>
      
      {/* Conversion Rate Card */}
      <FloatingCard
        className="absolute right-[20%] bottom-[20%] w-48 h-36"
        rotate={-6}
        animationProps={{
          initial: { y: 0 },
          animate: { y: [-8, 12, -8] },
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
        }}
      >
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
      </FloatingCard>
    </>
  );
};

export default FloatingCards;
