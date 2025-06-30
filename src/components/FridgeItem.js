import React from 'react';

const FridgeItem = ({ fridge, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-4 cursor-pointer transition-colors duration-200 hover:bg-gray-50 ${
        isSelected ? 'bg-oc-orange bg-opacity-10 border-l-4 border-oc-orange' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {/* Fridge Name */}
          <h3 className={`text-base font-semibold mb-1 ${
            isSelected ? 'text-oc-orange-dark' : 'text-gray-900'
          }`}>
            {fridge.name}
          </h3>
          
          {/* Address */}
          <p className="text-sm text-gray-600 mb-2 flex items-center">
            <span className="mr-1">📍</span>
            {fridge.address}
          </p>
          
          {/* Hours */}
          <p className="text-sm text-gray-600 mb-2 flex items-center">
            <span className="mr-1">⏰</span>
            {fridge.hours}
          </p>
          
          {/* Description - truncated for list view */}
          <p className="text-sm text-gray-700 line-clamp-2">
            {fridge.description}
          </p>
          
          {/* Notes indicator */}
          {fridge.notes && (
            <p className="text-xs text-gray-500 mt-2 italic">
              💡 Additional info available
            </p>
          )}
        </div>
        
        {/* Selection indicator */}
        <div className="ml-4 flex-shrink-0">
          {isSelected ? (
            <div className="w-3 h-3 bg-oc-orange rounded-full"></div>
          ) : (
            <div className="w-3 h-3 border-2 border-gray-300 rounded-full"></div>
          )}
        </div>
      </div>
      
      {/* Click instruction */}
      <div className="mt-2 text-xs text-gray-500">
        Click to view on map
      </div>
    </div>
  );
};

export default FridgeItem;