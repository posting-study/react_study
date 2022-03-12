# Props와 State

리액트에서 컴포넌트는 props나 state와 같은 데이터를 입력받아 DOM을 생성한다.

리덕스와 같이 전역 데이터를 관리해 주는 라이브러리를 리액트에 적용할때도, state와 props 를 이용해 구현한다.

## Props
Props(Properties)는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터이다.

부모 컴포넌트에서 받는 데이터이기에, 이 데이터는 자식 컴포넌트에서 변경될 수 없다.

```JS
//App.js
import Start from './Start';
import './App.css';

function App() {
  return (
    <div className="App">
    <Start project="노드"/>
    <Start project="리액트"/> 
    </div>
  );
}

export default App;
```

다음과 같이 App 컴포넌트(부모)에서 Start 컴포넌트(자식)에게 project 값을 전달하려고 한다.

만약에 props 이름만 작성하고 값 설정을 생략하면, true로 설정한 것이다
```JS
<Start project="노드" isCheck/>
// isCheck={true}와 같은 의미
```

```JS
//Start.js
import React from "react";

function Start(props){
    return(
        <>
        <h1>안녕하세요 {props.project}를 시작합니다</h1>
        </>
    );
}

export default Start;
```
Start 컴포넌트에게 전달되는 props는 객체 형태로 파라미터를 통해 전달이 가능하다.

여러개의 props를 넘길때는 다음과 같이 비구조화 할당(구조 분해) 문법을 사용할 수 있다.
```JS
//Start.js
import React from "react";

function Start({project, color}){
    return(
        <>
        <h1 style={{color}}>안녕하세요 {project}를 시작합니다</h1>
        {/*<h1 style={{props.color}}>안녕하세요 {props.project}를 시작합니다</h1>*/}
        </>
    );
}

export default Start;
```


## State
한 컴포넌트 안에서 변경되는 데이터를 다룰 때 사용된다. 한 컴포넌트의 상태(context)를 다룬다고 생각하면 쉽다.

props와는 다르게 state는 각각의 컴포넌트 내부에 존재하기 때문에 변경이 가능하다.

리액트에서 Hooks가 도입되면서 `useState`를 사용해서 상태를 관리할 수 있게 되었다.

이에 관해서는 다음 정리에서 더 자세하게 다뤄보자.

