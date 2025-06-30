import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import FridgeList from './components/FridgeList';
import { fridges } from './data/fridges';
import './styles/index.css';

function App() {
  const [selectedFridge, setSelectedFridge] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  // Handle fridge selection from list or map
  const handleFridgeSelect = useCallback((fridge) => {
    setSelectedFridge(fridge);
    
    // If map is loaded, center on the selected fridge
    if (mapInstance && fridge) {
      mapInstance.setCenter({ lat: fridge.lat, lng: fridge.lng });
      mapInstance.setZoom(15);
    }
  }, [mapInstance]);

  // Handle map ready callback
  const handleMapReady = useCallback((map) => {
    setMapInstance(map);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Map Section */}
        <div className="h-3/4 sm:h-1/2 w-full">
          <Map
            fridges={fridges}
            selectedFridge={selectedFridge}
            onFridgeSelect={handleFridgeSelect}
            onMapReady={handleMapReady}
          />
        </div>
        
        {/* Fridge List Section */}
        <div className="h-1/4 sm:h-1/2 bg-white border-t border-gray-200">
          <FridgeList
            fridges={fridges}
            selectedFridge={selectedFridge}
            onFridgeSelect={handleFridgeSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;