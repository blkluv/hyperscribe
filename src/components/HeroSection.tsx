
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroVisual from './hero/HeroVisual';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600/5 via-purple-500/10 to-blue-400/5">
      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <HeroContent />
          
          {/* Right visual */}
          <HeroVisual />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
