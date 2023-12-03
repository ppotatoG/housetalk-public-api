import { DEFINE } from '@/constants/location';
import { FacilitySearchResults } from '@/types/location';
import { processFacilities } from '@/services/processFacilities';

export const searchNearbyFacilities = async (
  latitude: number,
  longitude: number
): Promise<FacilitySearchResults> => {
  try {
    const facilityPromises = Object.entries(DEFINE.ITEMS).map(([key, item]) =>
      processFacilities(item.type, item.id, item.name, longitude, latitude)
        .then(result => ({ key, result }))
        .catch(error => {
          console.error(`Error processing ${key}:`, error);
          return {
            key,
            result: {
              id: item.id,
              name: item.name,
              place_name: '',
              distance: null,
            },
          };
        })
    );

    const facilities = await Promise.all(facilityPromises);
    const results: FacilitySearchResults = {};

    facilities.forEach(({ key, result }) => {
      results[key] = result;
    });

    return results;
  } catch (error) {
    console.error('Error in searchNearbyFacilities:', error);
    throw error;
  }
};
