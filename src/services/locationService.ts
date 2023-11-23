import axios from 'axios';

import { calculateWalkingTime } from '../utils/calculateWalkingTime';
import { DEFINE } from '../constants/location';

import { Facility, FacilitySearchResults } from '../types/location';

export const searchNearbyFacilities = async (
  latitude: number,
  longitude: number,
  walkingTimeLimit: number
): Promise<FacilitySearchResults> => {
  try {
    const results: FacilitySearchResults = {};

    for (const key in DEFINE.QUERY) {
      const response = await axios.get<{ documents: Facility[] }>(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
          headers: { Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}` },
          params: {
            query: DEFINE.QUERY[key],
            x: longitude,
            y: latitude,
            radius: 2000,
          },
        }
      );

      results[key] = response.data.documents.filter(document => {
        const walkingTime = calculateWalkingTime(parseInt(document.distance));
        return true;
        return walkingTime <= walkingTimeLimit;
      });
    }

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
