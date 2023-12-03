import { DefineKey, Facility } from '@/types/location';
import { WALKING_LIMIT } from '@/constants/location';
import { calculateWalkingDistance } from '@/utils/calculateWalkingTime';
import { fetchFacilities } from './fetchFacilities';
import { findClosestFacility } from '@/utils/findClosestFacility';

export const processFacilities = async (
  type: DefineKey,
  id: string,
  name: string,
  longitude: number,
  latitude: number
): Promise<Facility> => {
  const facilities = await fetchFacilities(type, id, longitude, latitude);
  const { closestFacility, minimumDistance } = findClosestFacility(facilities);

  const result: Facility = {
    id: id,
    name: name,
    place_name: '',
    distance: null,
  };

  if (closestFacility) {
    const walkingDistance = calculateWalkingDistance(minimumDistance);
    if (walkingDistance !== null && walkingDistance <= WALKING_LIMIT) {
      result.place_name = closestFacility.place_name;
      result.distance = walkingDistance;
    }
  }

  return result;
};
