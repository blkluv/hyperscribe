
import React from 'react';
import { motion } from 'framer-motion';

type FloatingCardProps = {
  className: string;
  rotate?: number;
  animationProps: {
    initial: { y: number };
    animate: { y: number[] };
    transition: {
      duration: number;
      repeat: number;
      ease: string;
      delay?: number;
    };
  };
  children: React.ReactNode;
};

const FloatingCard = ({ className, rotate = 0, animationProps, children }: FloatingCardProps) => {
  return (
    <motion.div
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={animationProps.transition}
      className={className}
    >
      <div 
        className="glass-panel h-full w-full rounded-2xl shadow-lg border border-white/30 backdrop-blur-sm p-5 flex flex-col justify-between"
        style={{ transform: rotate !== 0 ? `rotate(${rotate}deg)` : 'none' }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingCard;
