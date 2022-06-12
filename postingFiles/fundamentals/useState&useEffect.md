# useState & useEffect

## useState 훅
컴포넌트에 상탯값(state)을 추가할 때 useState 훅을 사용한다.

useState를 사용하기 위해 선언을 꼭 해주자.
```JS
import React , {useState} from "react";
```

useState 훅의 인자는 초깃값이고, 반환하는 배열의 첫번째 원소는 상탯값, 두번째 원소는 상탯값 변경 함수이다.
```JS
const [상탯값, 상탯값변경함수] = useState(초깃값);
```
상탯값을 변하게 하고 싶다면 상탯값 변경 함수를 사용해야 한다. 리액트는 이 상탯값 변경 함수가 호출되면 컴포넌트를 다시 그리고, 이 컴포넌트의 자식 컴포넌트도 같이 렌더링된다.

리액트는 효율적으로 렌더링하기 위해 상탯값 변경을 `batch`로 처리하는데, 상탯값 변경 함수가 비동기로 동작한다는 것과 함께 이해해야 한다. (비동기로 동작하지만 순서는 보장된다)

+) 리액트는 내부에서 관리하는 이벤트 처리 함수에 대해서만 상탯값 변경을 batch로 처리하고, 리액트 외부에서 관리되는 이벤트 처리 함수는 상탯값 변경이 batch로 처리되지 않는다. (ex.window 객체의 이벤트 처리 함수)


```JS
import React, {useState} from 'react';

function Count(){
    const [number, setNumber] = useState(0);
    const onClickIncrease = () => {
        setNumber(number+1);
    }
    const onClickDecrease = () => {
        setNumber(number-1);
    }

    //상탯값 변경 함수에 함수를 넘길 수 있는데, 컴포넌트 최적화 시 사용한다
    /*
    const onClickDecrease = () => {
        setNumber(number=>number-1);
    }
    */
    return(
        <>
        <h1>{number}</h1>
        <button onClick={onClickIncrease}>+1</button>
        <button onClick={onClickDecrease}>-1</button>
        </>
    );
}

export default Count;

```

useState 훅 하나로 여러 상탯값을 관리할 수도 있다. useState 훅의 상탯값 변경 함수는 이전 상탯값을 덮어쓰기 때문에 전개연산자를 써야 하고, 상탯값을 하나의 객체로 관리할 때는 useReducer 훅을 사용하는 것이 더 좋다.


### setState

setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행한다. state가 변경되면, 컴포넌트가 리렌더링된다는 것이 앞에서 useState 훅을 통해 확인한 내용이다.

setState를 의도에 맞게 사용하기 위해 유의해야할 점이 있다. 

state는 객체이고, setState()는 비동기로 처리되고 이를 연속적으로 호출하면 앞에서 봤듯이 batch로 처리된다. batch 처리가 되면, 리액트는 state 값을 바로 바꾸는 것이 아니라 효율적인 렌더링을 위해 변경 상태값을 일괄적으로 처리한다.

이 때문에 setState 호출 직후에 새로운 값이 바로 state에 반영되지 않을 수 있다. 그래서 항상 최신의 state 값을 사용하려면, 객체를 넘기는 대신 **업데이트 함수**를 작성해야 한다. 코드로 확인하자.

앞에 작성했던 onClickIncrease 함수에서 setNumber를 세번 연속으로 작성해보자
```JS
const onClickIncrease = () => {
        setNumber(number+1);
        setNumber(number+1);
        setNumber(number+1);
}
```
이렇게 하면 버튼을 클릭하면 number가 3 증가할 것 같지만, 그렇지 않다. 1만 증가된다.

setState를 연속 호출해 3을 증가시키고 싶다면 업데이트 함수를 적어줘야 한다. (함수 호출이 곧 렌더링)
```JS
const onClickIncrease = () => {
        setNumber(number => number+1);
        setNumber(number => number+1);
        setNumber(number => number+1);
}
```
이렇게 함수를 적어주면 3씩 증가되는 것을 확인할 수 있다!

------
## useEffect 훅
함수를 실행할 때 함수 외부의 상태를 변경하는 연산을 부수 효과라고 하는데 대부분의 부수 효과는 useEffect 훅에서 처리하는게 좋다. (부수효과 ex: api 호출, 이벤트 처리 함수 등록...)

useEffect 훅에 입력하는 함수를 부수 효과 함수라고 하고, 부수 효과 함수는 렌더링 결과가 실제 돔에 반영된 후 호출되고, 컴포넌트가 사라지기 직전에 마지막으로 호출된다. 

### 컴포넌트에서 API 호출하기
```JS
useEffect(
        ()=>{
            getUserApi(userId).then(data=>setUser(data));
        }, //api 통신을 하고받아온 데이터는 user 상탯값에 저장한다
        [userId], //userId 값이 변경되는 경우에만 api 통신을 하도록 설정함
    );
```
=> 부수 효과 함수는 렌더링할때마다 호출되어 불필요한 api 통신을 많이 하는데, 이를 방지하기 위해서 useEffect 훅의 두번째 매개변수로 배열(의존성 배열이라 함)을 입력하면 배열의 값이 변경되는 경우에만 함수가 호출된다.
### 이벤트 처리 함수 등록, 해제
```JS
useEffect(()=>{
    const onResize=()=>setWidth(window.innerWidth);
    window.addEventListener('resize', onResize); //창크기가 변경될때마다 onResize 이벤트 처리 함수 호출됨
    return ()=>{ //부수 효과 함수는 함수를 반환할 수 있다.
    window.removeEventListener('resize', onResize);
    };
}, []); 
```
=> 부수효과 함수는 함수를 반환할 수 있다. 반환된 함수는 부수 효과 함수가 호출되기 직전에 호출되고, 컴포넌트가 사라지기 직전에 마지막으로 호출된다.(프로그램이 비정상적으로 종료되지 않는 한 반드시 호출되는 것이 보장된다)

=> 의존성 배열로 빈 배열을 입력하면 컴포넌트가 생성될 때만 부수효과 함수가 호출되고, 컴포넌트가 사라질 때만 반환된 함수가 호출된다.
