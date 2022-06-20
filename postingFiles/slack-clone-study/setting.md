# sleact(슬랙 클론 코딩) 세팅 메모 

## 기본 서버 세팅

- npm install
- .env (COOKIE_SECRET, MYSQL_PASSWORD)
- MYSQL 접속 설정 (config/ config.json)
- 스키마 생성: `npx sequelize db:create`
=> MYSQL에 sleact 데이터베이스 생성됨
- 테이블 생성: `npm run dev`
=> DB 연결 성공! : back/models(테이블)
- 기초 데이터 넣기: `npx sequelize db:seed:all`
=> back/seeders의 테스트 데이터 넣음
- 다시 `npm run dev` -> 서버 돌아가는 것 확인


## 기본 프론트 세팅

use-cra 사용하지 않고 세팅

- package.json name 지을때 내가 설치한 npm package 이름과 겹치지 않게만 주의하기
- `$npm i react react-dom`
- `$npm i typescript @types/react @types/react-dom`
- package-lock.json에는 내가 설치한 패키지가 의존(dependencies 목록)하고 있는 패키지의 버전을 확인할 수 있음
- `$npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier` :eslint(코드 검사) prettier(코드 정렬)
- .eslintrc, .prettierrc 설정파일 작성
- tsconfig.json -> typescript 설정파일

## 바벨 & 웹팩 설정




## 웹팩 dev 설정



## 폴더 구조와 리액트 라우터



## 코드 스플리팅과 이모션


