import React, { useEffect, useRef, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { OC_CENTER, DEFAULT_ZOOM } from '../data/fridges';
import LoadingSpinner from './LoadingSpinner';

const Map = ({ fridges, selectedFridge, onFridgeSelect, onMapReady }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const infoWindowRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Initialize Google Maps
  const initializeMap = useCallback(async () => {
    try {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE',
        version: 'weekly',
        libraries: ['places']
      });

      const google = await loader.load();
      
      // Create map
      const map = new google.maps.Map(mapRef.current, {
        center: OC_CENTER,
        zoom: DEFAULT_ZOOM,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      mapInstanceRef.current = map;
      
      // Create info window
      infoWindowRef.current = new google.maps.InfoWindow();

      // Create markers for each fridge
      markersRef.current = fridges.map(fridge => {
        const marker = new google.maps.Marker({
          position: { lat: fridge.lat, lng: fridge.lng },
          map: map,
          title: fridge.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="#ff9900" stroke="#cc7700" stroke-width="2"/>
                <text x="16" y="20" text-anchor="middle" fill="white" font-size="16" font-weight="bold">F</text>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32),
            anchor: new google.maps.Point(16, 16)
          }
        });

        // Add click listener to marker
        marker.addListener('click', () => {
          onFridgeSelect(fridge);
          showInfoWindow(fridge, marker);
        });

        return { marker, fridge };
      });

      // Call onMapReady callback
      if (onMapReady) {
        onMapReady(map);
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error loading Google Maps:', err);
      setError('Failed to load map. Please check your internet connection.');
      setIsLoading(false);
    }
  }, [fridges, onFridgeSelect, onMapReady]);

  // Show info window for selected fridge
  const showInfoWindow = useCallback((fridge, marker) => {
    if (!infoWindowRef.current) return;

    const content = `
      <div style="max-width: 300px; padding: 8px;">
        <h3 style="margin: 0 0 8px 0; color: #ff9900; font-weight: bold; font-size: 16px;">
          ${fridge.name}
        </h3>
        <p style="margin: 0 0 6px 0; color: #666; font-size: 14px;">
          <strong>📍 ${fridge.address}</strong>
        </p>
        <p style="margin: 0 0 6px 0; color: #666; font-size: 14px;">
          <strong>⏰ ${fridge.hours}</strong>
        </p>
        <p style="margin: 0; color: #444; font-size: 13px; line-height: 1.4;">
          ${fridge.description}
        </p>
        ${fridge.notes ? `
          <p style="margin: 8px 0 0 0; color: #666; font-size: 12px; font-style: italic;">
            ${fridge.notes}
          </p>
        ` : ''}
      </div>
    `;

    infoWindowRef.current.setContent(content);
    infoWindowRef.current.open(mapInstanceRef.current, marker);
  }, []);

  // Handle selected fridge changes
  useEffect(() => {
    if (selectedFridge && markersRef.current) {
      const markerData = markersRef.current.find(
        item => item.fridge.id === selectedFridge.id
      );
      
      if (markerData) {
        showInfoWindow(selectedFridge, markerData.marker);
      }
    }
  }, [selectedFridge, showInfoWindow]);

  // Initialize map on component mount
  useEffect(() => {
    initializeMap();
  }, [initializeMap]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-center p-6">
          <div className="text-red-500 text-lg font-semibold mb-2">Map Error</div>
          <div className="text-gray-600">{error}</div>
          <button 
            onClick={initializeMap}
            className="mt-4 px-4 py-2 bg-oc-orange text-white rounded hover:bg-oc-orange-dark transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <LoadingSpinner />
        </div>
      )}
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: '300px' }}
      />
    </div>
  );
};

export default Map;