# 바벨(babel)

바벨은 js 코드를 변환해 주는 컴파일러다(입력과 출력이 모두 js이다). 초기 바벨은 ES6를 ES5로 바꿔주는 컴파일러였지만, 최근의 바벨은 코드에서 정적 타입 언어 문법(typescript)을 사용하거나, 주석을 제거하거나 코드를 압축하는 용도로 사용되는데,

리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용한다. 

>JSX
JSX 문법은 HTML에서 태그를 사용하는 방식과 유사하며, JSX 문법을 사용하는 게 간결하고 가독성이 좋다

## 바벨을 실행하는 방법

바벨은 여러 방식으로 실행될 수 있다
- @babel/cli로 실행 
- 웹팩에서 babel-loader로 실행
- @babel/core를 직접 실행
- @babel/register로 실행 -> 리액트에서 사용하는 경우 많지 않음

이중에서 `웹팩에서 babel-loader`로 실행하는 법을 알아보자

1. 기본 패키지 설치, 코드 생성
```BASH
$ npm init -y

$ npm install @babel/core @babel/cli @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals @babel/preset-react @babel/preset-env
```
바벨을 실행하기 위해서 `@babel/core` 패키지를 필수로 설치해야 한다. (플러그인과 프리셋을 추가로 설치하자)

프로젝트 루트에 src 폴더와 code.js를 작성하자
```JS
const element = <div>babel test</div>;
const test = `element type is ${element.type}`;
const add = (a,b)=> a+b;
```

2. 웹팩을 이용하기 위해 패키지를 설치한다
`npm install webpack webpack-cli webpack-dev-server babel-loader`

3. 프로젝트 루트에 webpack.config.js 파일을 만들고 babel-loader을 설정하자
```JS
const path = require('path');

module.exports = {
    entry: './src/code.js', //웹팩으로 번들링할 파일 지정
    output: { //번들링된 결과를 dist/code.bundle.js파일로 저장 (컴파일 이후 파일)
        path: path.resolve(__dirname, 'dist'),
        filename: 'code.bundle.js',
    },
    module: { //모듈의 컴파일 방식
        rules: [{test: /\.js$/, use: 'babel-loader'}], //js 파일을 babel-loader가 처리하도록 설정
    },
    optimization: {minimizer: []},
};
```
## 확장성과 유연성을 고려한 바벨 설정

바벨 설정파일에서 사용할 수 있다는 속성중에 `extends`속성을 이용하면 다른 설정 파일을 가져올 수 있꼬, `env`, `overrides` 속성을 이용하면 환경별, 파일별로 다른 설정을 적용할 수 있다.

1. 실습을 위한 필요한 플러그인들을 설치하자
```BASH
$ npm init -y

$ npm install @babel/core @babel/cli @babel/plugin-transform-arrow-functions @babel/plugin-transform-template-literals @babel/preset-react @babel/preset-minify
```
2. 프로젝트 루트에 common 폴더를 만들고 안에 .babelrc 파일을 만든다
```JS
{
    "presets": ["@babel/preset-react"],
    "plugins": [
        [ //플러그인 옵션 설정
            "@babel/plugin-transform-template-literals",
            {
                "loose": true //문자열 연결할때 + 연산자 이용
            }
        ]
    ]
}
```

- babel.config.js 파일을 만들지 않은 이유

3. 프로젝트 루트에 src 폴더 안에 example-extends 폴더를 만들고 그 안에 .babelrc 파일을 만든다
```JS
{
    "extends": "../../common/.babelrc", //다른 파일에 있는 설정 가져옴
    "plugins": [ //가져온 설정에 플러그인 추가
        "@babel/plugin-transform-arrow-functions", 
        "@babel/plugin-transform-template-literals" //플러그인 옵션은 현재 파일의 옵션이다(loose 옵션 사라짐)
    ]
}
```

```JS
//code.js
const element = <div>babel test</div>;
const test = `element type is ${element.type}`;
const add = (a,b)=>a+b;
```
## 전체 설정, 지역 설정 파일

## 바벨과 폴리필

