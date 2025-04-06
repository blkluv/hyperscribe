
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroVisual from './hero/HeroVisual';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative min-h-[calc(100vh-60px)] md:min-h-screen flex items-center bg-gradient-to-br from-blue-600/5 via-blue-500/10 to-blue-400/5">
      <div className="container mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left content */}
          <HeroContent />
          
          {/* Right visual - only show on large screens or at the bottom on mobile */}
          {!isMobile ? (
            <HeroVisual />
          ) : (
            <div className="w-full mt-8">
              <HeroVisual />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
