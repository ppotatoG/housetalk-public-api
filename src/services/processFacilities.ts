import { FacilityResult } from '@/types/location';
import { WALKING_LIMIT } from '@/constants/location';
import { calculateWalkingDistance } from '@/utils/calculateWalkingTime';
import { fetchFacilities } from './fetchFacilities';
import { findClosestFacility } from '@/utils/findClosestFacility';

export const processFacilities = async (
  type: 'category' | 'keyword',
  query: string,
  longitude: number,
  latitude: number
): Promise<FacilityResult> => {
  const facilities = await fetchFacilities(type, query, longitude, latitude);
  const { closestFacility, minimumDistance } = findClosestFacility(facilities);

  if (!closestFacility) return { id: query, place_name: '', distance: null };

  const walkingDistance = calculateWalkingDistance(minimumDistance);
  return walkingDistance !== null && walkingDistance <= WALKING_LIMIT
    ? {
        id: query,
        place_name: closestFacility.place_name,
        distance: walkingDistance,
      }
    : { id: query, place_name: '', distance: null };
};
