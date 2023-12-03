import { AxiosResponse } from 'axios';
import { createKakaoApiInstance } from './createKakaoApiInstance';
import { Facility } from '@/types/location';
import { RADIUS } from '@/constants/location';

export const fetchFacilities = async (
  type: 'category' | 'keyword',
  query: string,
  longitude: number,
  latitude: number
): Promise<Facility[]> => {
  const kakaoApi = createKakaoApiInstance();

  try {
    const response: AxiosResponse<{ documents: Facility[] }> =
      await kakaoApi.get(`/${type}.json`, {
        params: {
          [type === 'category' ? 'category_group_code' : 'query']: query,
          x: longitude,
          y: latitude,
          radius: RADIUS,
        },
      });

    return response.data.documents;
  } catch (error) {
    console.error('Error fetching facilities:', error);
    throw error;
  }
};
