
import React from 'react';
import { motion } from 'framer-motion';

type FloatingCardProps = {
  className: string;
  animationProps: {
    initial: any;
    animate: any;
    transition: any;
    float: {
      y: number[];
      transition: {
        duration: number;
        repeat: number;
        ease: string;
      }
    }
  };
  children: React.ReactNode;
};

const FloatingCard = ({ className, animationProps, children }: FloatingCardProps) => {
  return (
    <motion.div
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={animationProps.transition}
      className={className}
    >
      <motion.div 
        animate={animationProps.float.y ? { y: animationProps.float.y } : {}}
        transition={animationProps.float.transition}
        className="glass-panel h-full w-full rounded-2xl shadow-lg border border-white/20 backdrop-blur-sm p-5 flex flex-col justify-between"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
