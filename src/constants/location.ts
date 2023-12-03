import { Define } from '@/types/location';

export const DEFINE: Define = {
  ITEMS: {
    SUPERMARKET: { type: 'category', id: 'MT1', name: '대형마트' },
    CONVENIENCE_STORE: { type: 'category', id: 'CS2', name: '편의점' },
    SCHOOL: { type: 'category', id: 'SC4', name: '학교' },
    PARKING: { type: 'category', id: 'PK6', name: '주차장' },
    GAS_STATION: { type: 'category', id: 'OL7', name: '주유소' },
    CAFE: { type: 'category', id: 'CE7', name: '카페' },
    SUBWAY: { type: 'category', id: 'SW8', name: '지하철역' },
    BANK: { type: 'category', id: 'BK9', name: '은행' },
    HOSPITAL: { type: 'category', id: 'HP8', name: '병원' },
    PHARMACY: { type: 'category', id: 'PM9', name: '약국' },

    STARBUCKS: { type: 'keyword', id: '스타벅스', name: '스타벅스' },
    DAISO: { type: 'keyword', id: '다이소', name: '다이소' },
    OLLIVE_YOUNG: { type: 'keyword', id: '올리브영', name: '올리브영' },
    PC_ROOM: { type: 'keyword', id: 'PC방', name: 'PC방' },
    CINEMA: { type: 'keyword', id: '영화관', name: '영화관' },
  },
};

export const WALKING_LIMIT = 20;

export const RADIUS = 1500;
