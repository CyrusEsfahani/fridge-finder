// Utility functions for map operations

/**
 * Calculate distance between two points using Haversine formula
 * @param {Object} point1 - {lat, lng}
 * @param {Object} point2 - {lat, lng}
 * @returns {number} Distance in miles
 */
export const calculateDistance = (point1, point2) => {
  const R = 3959; // Earth's radius in miles
  const dLat = toRadians(point2.lat - point1.lat);
  const dLng = toRadians(point2.lng - point1.lng);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Convert degrees to radians
 * @param {number} degrees
 * @returns {number} Radians
 */
const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Get user's current location
 * @returns {Promise<{lat: number, lng: number}>}
 */
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      }
    );
  });
};

/**
 * Sort fridges by distance from a given point
 * @param {Array} fridges - Array of fridge objects
 * @param {Object} userLocation - {lat, lng}
 * @returns {Array} Sorted array of fridges with distance property
 */
export const sortFridgesByDistance = (fridges, userLocation) => {
  return fridges
    .map(fridge => ({
      ...fridge,
      distance: calculateDistance(userLocation, { lat: fridge.lat, lng: fridge.lng })
    }))
    .sort((a, b) => a.distance - b.distance);
};

/**
 * Format distance for display
 * @param {number} distance - Distance in miles
 * @returns {string} Formatted distance string
 */
export const formatDistance = (distance) => {
  if (distance < 0.1) {
    return '< 0.1 mi';
  } else if (distance < 1) {
    return `${(distance * 1000).toFixed(0)} ft`;
  } else {
    return `${distance.toFixed(1)} mi`;
  }
};

/**
 * Create custom marker icon for Google Maps
 * @param {string} color - Hex color for the marker
 * @param {string} text - Text to display on marker
 * @returns {string} SVG data URL
 */
export const createCustomMarker = (color = '#ff9900', text = 'F') => {
  const svg = `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="${color}" stroke="#ffffff" stroke-width="2"/>
      <text x="16" y="20" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${text}</text>
    </svg>
  `;
  
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
};

/**
 * Check if a point is within Orange County bounds (approximate)
 * @param {Object} point - {lat, lng}
 * @returns {boolean} True if within Orange County
 */
export const isWithinOrangeCounty = (point) => {
  // Approximate Orange County bounds
  const bounds = {
    north: 33.946,
    south: 33.350,
    east: -117.420,
    west: -118.125
  };
  
  return (
    point.lat >= bounds.south &&
    point.lat <= bounds.north &&
    point.lng >= bounds.west &&
    point.lng <= bounds.east
  );
};

/**
 * Generate directions URL for Google Maps
 * @param {Object} destination - {lat, lng}
 * @param {Object} origin - {lat, lng} (optional)
 * @returns {string} Google Maps directions URL
 */
export const generateDirectionsUrl = (destination, origin = null) => {
  const baseUrl = 'https://www.google.com/maps/dir/';
  const dest = `${destination.lat},${destination.lng}`;
  
  if (origin) {
    const orig = `${origin.lat},${origin.lng}`;
    return `${baseUrl}${orig}/${dest}`;
  }
  
  return `${baseUrl}/${dest}`;
};