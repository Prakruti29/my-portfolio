import React from 'react';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-portfolio-teal rounded-full"></div>
        <div className="absolute inset-1 bg-white dark:bg-navy-900 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-portfolio-teal dark:text-portfolio-light-teal font-bold text-xl">PG</span>
        </div>
      </div>
    </a>
  );
};

export default Logo;
