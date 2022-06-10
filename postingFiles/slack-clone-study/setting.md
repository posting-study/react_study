# sleact(슬랙 클론 코딩) 세팅 메모 

## 기본 세팅

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