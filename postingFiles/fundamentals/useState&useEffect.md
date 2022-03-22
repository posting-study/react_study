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


상탯값 변경함수에 함수 넣기(?)

```JS
function ChangeColor()){
    const [color, setColor] = useState("red");
    function onClick(){
        if(color==="red") setColor("blue");
        else setColor("red");
    }
    return(
        <>
        <button style={{backgroundColor: color}} onClick={onClick}>
            확인
        </button>
        </>
    );
}
```

useState 훅 하나로 여러 상탯값을 관리할 수도 있다. useStaate 훅의 상탯값 변경 함수는 이전 상탯값을 덮어씀을 이해하자. useState 훅은 이전 상탯값을 덮어쓰기 때문에 전개연산자를 써야 하고, 상탯값을 하나의 객체로 관리할 때는 useReducer 훅을 사용하는 것이 더 좋다


## useEffect 훅
