import React from 'react';

const Header = () => {
  return (
    <header className="bg-oc-orange shadow-md">
      <div className="max-w-full px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Community Fridge Finder
            </h1>
            <p className="text-lg sm:text-xl text-white opacity-90 mt-1">
              Orange County
            </p>
          </div>
        </div>
        
        {/* Subtitle/Description */}
        <div className="mt-3 text-center">
          <p className="text-sm sm:text-base text-white opacity-80 max-w-2xl mx-auto">
            Find nearby community fridges to access free food or share surplus items with your neighbors
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;