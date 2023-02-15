## 요구사항

- [x] PC 메인 페이지 작업
- [x] 반응형 페이지 작업
- [ ] 최상단 슬라이드 작업
  - [x] 무한 루프 true
  - [x] 맨 끝(next) - 첫 슬라이드 이동, 맨 마지막(prev) - 마지막 슬라이드 이동
  - [x] fade 슬라이드
  - [x] 페이지네이션 표시
  - [x] 타이머 5초후 next
  - [ ] progress 표시
- [x] Local Hotels 배너
  - [x] 좌우 터치 스와이프 기능
  - [x] 부드러운 이미지 전환 지향
  - [x] 무한 루프 false
  - [x] 맨처음과 끝 일경우 disable

## 구현 과정

1. Create-react-app 사용
   - 프로젝트 구성을 빠르게 하기 위하여 CRA(Create-react-app) 사용
   - 템플릿을 Typescript로 지정하여 Typescript도 사용가능
   ```shell
   npx create-react-app my-app --template typescript
   ```
2. React-router 사용
   - 라우터를 사용하기 위해 대중적으로 많이 사용하는 React-router를 사용하여 제작
   ```shell
   yarn add react-router-dom
   ```
3. Styeld-component 사용
   - 스타일 정의와 재사용성을 위하여 styled-component 사용
   ```shell
   yarn add @emotion/styled @emotion/react
   ```
4. Axios 라이브러리 적용
   - 데이터 페칭을 위하여 axios 라이브러리 적용
   ```shell
   yarn add axios
   ```
5. Slider 구현을 위해 react-slick 컴포넌트 사용
   - Slider 구현
   ```shell
   yarn add react-slick
   ```
   - 관련 css 모듈
   ```shell
   slick-carousel
   ```
6. 컴포넌트 정리
   - Header
   - HeadLine
   - CardView

## 실행 방법

1. yarn
2. yarn start
