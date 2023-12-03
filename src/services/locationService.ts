import { DEFINE } from '@/constants/location';
import { FacilitySearchResults } from '@/types/location';
import { processFacilities } from '@/services/processFacilities';

export const searchNearbyFacilities = async (
  latitude: number,
  longitude: number
): Promise<FacilitySearchResults> => {
  try {
    const results: FacilitySearchResults = {};

    for (const key in DEFINE.ITEMS) {
      const item = DEFINE.ITEMS[key];

      results[key] = await processFacilities(
        item.type,
        item.id,
        item.name,
        longitude,
        latitude
      );
    }

    return results;
  } catch (error) {
    console.error('Error in searchNearbyFacilities:', error);
    throw error;
  }
};
