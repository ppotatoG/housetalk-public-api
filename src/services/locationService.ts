import axios from 'axios';

// 인근 학교 및 편의점 검색
export const searchNearbyFacilities = async (
  latitude: number,
  longitude: number
) => {
  try {
    // 학교
    const schoolsResponse = await axios.get(
      'https://dapi.kakao.com/v2/local/search/keyword.json',
      {
        headers: { Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}` },
        params: { query: '학교', x: longitude, y: latitude, radius: 1000 },
      }
    );

    // 편의점
    const storesResponse = await axios.get(
      'https://dapi.kakao.com/v2/local/search/keyword.json',
      {
        headers: { Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}` },
        params: { query: '편의점', x: longitude, y: latitude, radius: 1000 },
      }
    );

    // TODO: 시간 계산 및 정렬

    return {
      schools: schoolsResponse.data.documents,
      stores: storesResponse.data.documents,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
