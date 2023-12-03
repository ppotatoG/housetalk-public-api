import axios from 'axios';

export const createKakaoApiInstance = () => {
  return axios.create({
    baseURL: 'https://dapi.kakao.com/v2/local/search',
    headers: { Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}` },
  });
};
