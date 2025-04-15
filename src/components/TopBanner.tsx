
import React from 'react';

const TopBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 flex-wrap">
        <span className="text-sm font-medium">
          Book a free content strategy call today
        </span>
        <a
          href="https://calendly.com/hyperscriber/free-introductory-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-blue-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
        >
          Schedule Now
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
