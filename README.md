# HouseTalk Public API

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>

카카오 API를 활용하여 경도와 위도 기반 주변 시설의 도보 거리 정보를 제공하는 서버입니다.

## 설치 및 실행

```bash
git clone https://github.com/ppotatoG/housetalk-public-api.git
cd housetalk-public-api
npm install
# .env.local에 KAKAO_API_KEY 설정
npm run dev # 개발 서버 실행
