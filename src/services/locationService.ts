import { DEFINE } from '@/constants/location';
import { FacilitySearchResults } from '@/types/location';
import { processFacilities } from '@/services/processFacilities';

export const searchNearbyFacilities = async (
  latitude: number,
  longitude: number
): Promise<FacilitySearchResults> => {
  try {
    const results: FacilitySearchResults = {};

    for (const category in DEFINE.CATEGORY_GROUP_CODE) {
      results[category] = await processFacilities(
        'category',
        DEFINE.CATEGORY_GROUP_CODE[category],
        longitude,
        latitude
      );
    }

    for (const keyword in DEFINE.QUERY) {
      results[keyword] = await processFacilities(
        'keyword',
        DEFINE.QUERY[keyword],
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
