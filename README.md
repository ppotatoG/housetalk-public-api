# HouseTalk Public API

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt='node'/> <img src="https://img.shields.io/badge/Express.js-000?style=flat-square&logo=express&logoColor=white" alt='express'/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt='typescript'/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" alt='axios'/>

카카오 API를 활용하여 경도와 위도 기반 주변 시설의 도보 거리 정보를 제공하는 서버입니다.

## 설치 및 실행

```bash
git clone https://github.com/ppotatoG/housetalk-public-api.git
cd housetalk-public-api
npm install
# .env.local에 KAKAO_API_KEY 설정
npm run dev # 개발 서버 실행
```

## API 사용 예시

### 주변 시설 검색

요청

```http
GET http://localhost:8080/api/nearby-places?latitude=37.4979&longitude=127.0276
```

반환 타입 (FacilitySearchResults):

```typescript
interface FacilitySearchResults {
  [key: string]: {
    id: string;
    name: string;
    place_name: string;
    distance: number | null;
  };
}
```