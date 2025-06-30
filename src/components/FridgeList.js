import React from 'react';
import FridgeItem from './FridgeItem';

const FridgeList = ({ fridges, selectedFridge, onFridgeSelect }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">
          Community Fridges ({fridges.length})
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Click on any fridge to see details and location on map
        </p>
      </div>
      
      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto">
        {fridges.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <div className="text-4xl mb-2">🤔</div>
              <div>No community fridges found</div>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {fridges.map(fridge => (
              <FridgeItem
                key={fridge.id}
                fridge={fridge}
                isSelected={selectedFridge?.id === fridge.id}
                onSelect={() => onFridgeSelect(fridge)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FridgeList;