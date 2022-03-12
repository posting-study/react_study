# Create React App

CRA 는 여러 패키지(빌드 시스템, 테스트 정적타입 등...)를 조합한 리액트 프로젝트를 쉽고 빠르게 만들수 있도록 도와주는 도구이다.

Create React App은 노드가 설치되어 있다면 바로 사용할 수 있다.

```BASH
$ npx create-react-app
```

Create React App은 기본적으로 Yarn을 패키지 매니저로 사용한다. (--use-npm 옵션을 사용하여 대신에 npm을 패키지 매니저로 사용할 수 있음)

생성된 리액트 프로젝트는 다음과 같은 구조로 이루어진다.

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

node_modules 디렉토리에 모든 패키지가 다운받아져있는 것도 확인할 수 있다.


src/index.js 파일을 확인해 보면 다음과 같이
```JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

App.js에서 가지고 온 App 컴포넌트를 ReactDom.render로 브라우저의 실제 DOM(id가 root인)에 렌더링한다.

id가 root인 DOM은 public/index.html의 body에서 
```HTML
 <div id="root"></div>
```
와 같이 찾아볼 수 있다.

=> 결론: 리액트 컴포넌트가 렌더링된 결과물이 위의 div 내부에 렌더링 된다.