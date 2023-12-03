import { AxiosResponse } from 'axios';
import { createKakaoApiInstance } from './createKakaoApiInstance';
import { DefineKey, Facility } from '@/types/location';
import { RADIUS } from '@/constants/location';

export const fetchFacilities = async (
  type: DefineKey,
  query: string,
  longitude: number,
  latitude: number
): Promise<Facility[]> => {
  const kakaoApi = createKakaoApiInstance();
  try {
    const paramKey = type === 'category' ? 'category_group_code' : 'query';
    const response: AxiosResponse<{ documents: Facility[] }> =
      await kakaoApi.get(`/${type}.json`, {
        params: {
          [paramKey]: query,
          x: longitude,
          y: latitude,
          radius: RADIUS,
        },
      });

    return response.data.documents;
  } catch (error) {
    console.error(`Error fetching facilities (${type}):`, error);
    throw error;
  }
};
