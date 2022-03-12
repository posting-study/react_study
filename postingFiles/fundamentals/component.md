# 리액트 컴포넌트

리액트 앱은 컴포넌트라는 단위로 이루어져 있다.

이때 이 컴포넌트는 함수형과 클래스형으로 작성할 수 있는데, 함수형 컴포넌트를 주로 다뤄보겠다.

컴포넌트는 다음과 같은 형태로 이루어진다.
```JS
import React from 'react'; 

function Start() {
  return <div>리액트시작</div>
}

export default Start;
```

- 리액트 컴포넌트를 생성할 때는 다음과 같이 import로 리액트를 불러와야 한다
- 리액트 컴포넌트에서는 JSX라 하는 xml 형식 값을 리턴할 수 있다
- export로 다음 컴포넌트를 내보낼 수 있으며, 다른 컴포넌트에서 이 컴포넌트를 사용할 수 있다


