<div align="center">

# Weather ☀️

현재 위치 및 다른 도시의 날씨를 확인할 수 있는 웹 애플리케이션입니다.

![React](https://img.shields.io/badge/React-ffffff?style=flat-square&logo=react&logoColor=ffffff&labelColor=61dafb&color=61dafb)

</div>

> **프로그래머스 데브코스: 클라우드 기반 프론트엔드 엔지니어링** 수업시간에 진행한 학습 예제입니다.

> [**OpenWeather API**](https://openweathermap.org/)를 사용했습니다.

## 💡 주요 기능

### 현재 위치의 날씨 조회

- Geolocation API를 사용해 위치를 사용해 현재 위치의 날씨를 출력합니다.

### 선택한 도시의 날씨 조회

- 버튼을 클릭하면 선택된 도시의 날씨를 출력합니다.

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 패키지를 설치합니다.
2. `.env.local` 파일을 생성하고 아래 내용을 입력합니다.
   ```shell
   VITE_WEATHER_API_KEY=#발급받은 API Key
   ```
3. `npm run dev`를 입력해 실행합니다.
