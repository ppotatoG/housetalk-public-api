import axios from 'axios';
import { DEFINE, RADIUS, WALKING_LIMIT } from '../constants/location';
import { Facility, FacilitySearchResults } from '../types/location';
import { calculateWalkingDistance } from '../utils/calculateWalkingTime';

export const searchNearbyFacilities = async (
  latitude: number,
  longitude: number
): Promise<FacilitySearchResults> => {
  try {
    const results: FacilitySearchResults = {};

    for (const category in DEFINE.CATEGORY_GROUP_CODE) {
      const response = await axios.get<{ documents: Facility[] }>(
        'https://dapi.kakao.com/v2/local/search/category.json',
        {
          headers: { Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}` },
          params: {
            category_group_code: DEFINE.CATEGORY_GROUP_CODE[category],
            x: longitude,
            y: latitude,
            radius: RADIUS,
          },
        }
      );

      let closestFacility: Facility | null = null;
      let minimumDistance = Infinity;

      for (const facility of response.data.documents) {
        const distance = Number(facility.distance);

        if (!distance) {
          continue;
        }

        if (distance < minimumDistance) {
          minimumDistance = distance;
          closestFacility = facility;
        }
      }

      if (closestFacility) {
        const walkingDistance = calculateWalkingDistance(minimumDistance);
        if (walkingDistance !== null && walkingDistance <= WALKING_LIMIT) {
          results[category] = {
            id: category,
            place_name: closestFacility.place_name,
            distance: walkingDistance,
          };
        } else {
          results[category] = { id: category, place_name: '', distance: null };
        }
      } else {
        results[category] = { id: category, place_name: '', distance: null };
      }
    }

    for (const keyword in DEFINE.QUERY) {
      const keywordResponse = await axios.get<{ documents: Facility[] }>(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
          headers: { Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}` },
          params: {
            query: DEFINE.QUERY[keyword],
            x: longitude,
            y: latitude,
            radius: RADIUS,
          },
        }
      );

      let closestFacility: Facility | null = null;
      let minimumDistance = Infinity;

      for (const facility of keywordResponse.data.documents) {
        const distance = Number(facility.distance);

        if (!distance) {
          continue;
        }

        if (distance < minimumDistance) {
          minimumDistance = distance;
          closestFacility = facility;
        }
      }

      if (closestFacility) {
        const walkingDistance = calculateWalkingDistance(minimumDistance);
        if (walkingDistance !== null && walkingDistance <= WALKING_LIMIT) {
          results[keyword] = {
            id: keyword,
            place_name: closestFacility.place_name,
            distance: walkingDistance,
          };
        } else {
          results[keyword] = { id: keyword, place_name: '', distance: null };
        }
      } else {
        results[keyword] = { id: keyword, place_name: '', distance: null };
      }
    }

    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
