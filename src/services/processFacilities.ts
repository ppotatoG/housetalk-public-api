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
  try {
    const facilities = await fetchFacilities(type, id, longitude, latitude);
    const { closestFacility, minimumDistance } =
      findClosestFacility(facilities);

    if (!closestFacility) {
      return { id, name, place_name: '', distance: null };
    }

    const walkingDistance = calculateWalkingDistance(minimumDistance);
    if (walkingDistance === null || walkingDistance > WALKING_LIMIT) {
      return { id, name, place_name: '', distance: null };
    }

    return {
      id,
      name,
      place_name: closestFacility.place_name,
      distance: walkingDistance,
    };
  } catch (error) {
    console.error(`Error processing facilities for ${type} ${id}:`, error);
    throw error;
  }
};
