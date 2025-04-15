
import React, { useState } from 'react';
import { X } from 'lucide-react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-center justify-center gap-x-2 md:gap-x-4 text-center">
          <div className="flex items-center gap-x-2 md:gap-x-3">
            <span className="inline-flex items-center">
              <svg
                className="hidden md:block h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <span className="text-sm md:text-base font-medium whitespace-nowrap">
              Book a free content strategy call today
            </span>
          </div>
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <a
              href="https://calendly.com/hyperscriber/free-introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-700 px-3 md:px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Schedule Now
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="inline-flex items-center justify-center p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
