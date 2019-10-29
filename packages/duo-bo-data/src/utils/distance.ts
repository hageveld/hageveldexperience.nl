/* Haversine formula: https://en.wikipedia.org/wiki/Haversine_formula */

const deg2rad = (deg: number): number => deg * (Math.PI/180);

export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const radius = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2-lat1);
    const dLon = deg2rad(lon2-lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = radius * c; // Distance in km
    return distance;
}

export const getDistanceHageveld = (lat: number, lon: number): number => getDistance(52.347938, 4.6301353, lat, lon);