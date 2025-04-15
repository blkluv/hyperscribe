import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerHeight, setBannerHeight] = useState('48px'); // Default mobile height

  // Update banner height based on screen size
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setBannerHeight('56px'); 
      } else {
        setBannerHeight('48px');
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show banner when scrolling up or at top, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set CSS variable for banner height
  useEffect(() => {
    const effectiveHeight = isVisible && !isScrolled ? bannerHeight : '0px';
    document.documentElement.style.setProperty('--banner-height', effectiveHeight);
    // Cleanup on component unmount or visibility change
    return () => {
       document.documentElement.style.setProperty('--banner-height', '0px');
    };
  }, [isVisible, isScrolled, bannerHeight]);

  if (!isVisible) return null;

  return (
    // Use the state variable for height class (h-12 = 48px, md:h-14 = 56px)
    <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white ${bannerHeight === '48px' ? 'h-12' : 'md:h-14'} z-40 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Use justify-between to push content and button apart */}
      <div className="max-w-[1440px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Empty div for spacing on the left, maintaining center alignment */}
        <div className="w-8"></div> 
        
        {/* Centered Text Content */}
        <div className="flex items-center justify-center gap-x-2 md:gap-x-4 text-center flex-grow">
          <div className="flex items-center gap-x-2 md:gap-x-3">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path
                  d="M12 4L14.0206 8.81949L19.0211 9.23607L15.1715 12.6805L16.2145 17.7639L12 15.1L7.78555 17.7639L8.82845 12.6805L4.97892 9.23607L9.97937 8.81949L12 4Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-xs sm:text-sm md:text-base font-medium">
              Book a content strategy call worth $499 completely free!
            </p>
          </div>
          <a
            href="https://calendly.com/hyperscriber/free-introductory-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 px-3 md:px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Schedule Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
