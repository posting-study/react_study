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
상탯값을 변하게 하고 싶다면 상탯값 변경 함수를 사용해야 한다.

## useEffect 훅
