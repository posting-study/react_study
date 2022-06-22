# sleact(슬랙 클론 코딩) 세팅 메모 

## 기본 서버 세팅

- npm install
- .env (COOKIE_SECRET, MYSQL_PASSWORD)
- MYSQL 접속 설정 (config/ config.json)
- MYSQL 접속: ` mysql -u root -p`
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
- tsconfig.json -> typescript 설정파일(baseUrl와 paths 설정)

## 바벨 & 웹팩 설정

**설치 설정**
- `$npm i -D webpack @babel/core babel-loader @babel/preset-env @babel/preset-react`
- `$npm i -D @types/webpack @types/node @babel/preset-typescript`
- `$npm i style-loader css-loader`
- `$npm i -D tsconfig-paths` :ts와 webpack에서 alias 지정

**index.html 생성**
style 태그에 전체적으로 적용할 css 코드 작성 (핵심 css, 나머지 css는 js 파일에서 작성)

결국에 유저나 검색엔진이 제일 먼저 보는 것은 이 index.html 파일

**코드 설정**
웹팩: 노드 런타임에서 작동함 -> NODE_ENV 사용할 수 있음

typescript를 사용하기에 `webpack.config.ts` 파일 생성해줌

- mode와 devtool 기본 설정
- resolve의 extensions: 바벨이 처리할 확장할 목록
- alias : tsconfig.json에서와 마찬가지로 파일 path 처리(resolve안에 alias 설정)
    - ../layouts/App같은 것을 @layouts/App으로 접근 가능
- entry : 웹팩의 결과물(결과물 여러개로 만들어낼 수 있음) -> output에 dist폴더로 만들어지는 설정이 있음
- @babel/preset-env 에서 어느 브라우저에서 작동하게끔 도와줌
- css loader를 통해 작동
- devServer
- dev 버전일 때랑 아닐 때 사용할 플러그인 설정


**=> 결국에 html,css,js 파일만이 브라우저가 인식하기 때문에 결과물이 저 세 파일이도록 설정해야하는 것임**

실행하려면 `$npx webpack` 혹은 `$npm i webpack -g` 웹팩을 전역적으로 설치해줘서 `$webpack`을 명령어로 씀

-> 그러나 `$npx webpack` 이걸 사용하자

이때 `tsconfig-for-webpack-config.json` 파일에서 설정을 또 해줘야 한다...

명령어가 길때는 무조건  `package.json` 에다가 달아주기


## 웹팩 dev 설정

빌드를 다시 하지 않고도 코드 변경을 바로 적용해주는 핫리로딩 작업을 해주려면 서버가 따로 필요하다(cra가 해주는 것)

`$npm i webpack-dev-server -D`

CORS 에러도 해결하기 위해 `$npm i webpack-cli`도 같이 설정해주자

핫리로딩 위해 `npm i @pmmmwh/react-refresh-webpack-plugin react-refresh`

위에 설치한 플러그인에 대한 코드는 전부 `webpack.config.ts`에 작성
## 폴더 구조와 리액트 라우터
- `pages`: 서비스 페이지
    - `Login`: 로그인 페이지
    - `SignUp`: 회원가입 페이지
- `copmponents`: 페이지를 구성하는 겹치는 컴포넌트(소스)들
    - 각 컴포넌트는 컴포넌트 폴더 아래 `index.tsx` 와 `styles.tsx` 생성
- `layouts`: 페이지들의 공통 레이아웃
- `hooks`: 커스텀 hook
- `typings`
- `utils`: 기타 함수

**=> ts와 webpack에서 alias 지정**

## 리액트 라우터 적용하기
- `$npm i react-router react-router-dom`
- `$npm i -D @types/react-router @types/react-router-dom`
- client.tsx에서 App을 BrowserRouter로 감싸기
```ts
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    document.querySelector(...)
);
```
- spa(single page application)애서는 url이 없다. index.html 하나만 가지고 동작하는데, /~ 로 페이지를 나눠주는것처럼 보이는 것임(실제로 서버엔 그 주소가 없다 포트번호만 날라갈뿐 여기선 3090)
- `historyApiFallback: true`로 해두면 devServer가 /가상주소로 페이지를 이동시켜 줌 (=>해당 내용은 추가로 정리하겠다)


@layouts/App에 Switch, Redirect, Route 넣기

@pages/SignUp 작성
## 코드 스플리팅과 이모션

spa를 쓰다보면 하나의 페이지에 다 모으기 때문에 js 파일의 용량이 커져서 페이지 로딩이 오래 걸린다.

이때 필요한게 `코드 스플리팅` 인데, 초기화면에 필요한 컴포넌트만 불러오는 방식이다. (불필요한 컴포넌트는 불러오지 않는다)

어떤 컴포넌트를 분리할까? -> 페이지를 분리하자 -> 라우터를 코드스플리팅 해줌

예시)
- 로그인 페이지 & 회원가입 페이지 -> 둘이 동시에 불러올 필요가 없다(회원가입 페이지에 접근한 사람은 회원가입 페이지에 필요한 JS만 받음)
- 서버 사이드 렌더링이 필요없는 것들 -> 서버의 용량을 줄일 수 있음

**@loadable/component 사용하기**
`npm i @loadable/component @types/loadable__component`

loadable을 사용하면 코드 스플리팅하고, 불러오는 일을 자동으로 해준다 -> 페이지 단위로 하자


## css 적용

리엑트에서 css를 적용하는 방법은 크게 세가지가 있다

1. 인라인 스타일
2. css 모듈 `className` 사용
3. css in JS : styled-component, emotion...

**emotion 세팅**
- styled components와 비슷하지만 설정이 간단함.
- `$npm i @emotion/react @emotion/styled`
- `$npm i -D @emotion/babel-plugin` (웹팩에 babel 설정 추가)
- & 같은 선택자(sass 문법) 적극 활용, 변수명을 최소화하자
- 컴포넌트에 미리 css 입히기

