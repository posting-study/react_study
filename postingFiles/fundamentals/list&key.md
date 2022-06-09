# List와 Key

## List

리액트에서 배열을 엘리먼트 리스트로 만드는 방식은 js에서 map을 사용하는 방식과 비슷하다.

map()으로 각 요소에 대한 `<li>` 엘리먼트를 반환하자.

```JS
import React from "react";
function List() {
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return ( 
      <ul>{listItems}</ul>
    );
  }
 
export default List;
```
이 코드를 실행해보면, 
`Warning: Each child in a list should have a unique "key" prop.` 라는 경고가 뜬다.

리스트의 각 항목에 key를 넣어야 한다는 경고인데, `key`는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 속성이다.

## Key

key는 React가 어떤 항목을 변경, 추가, 삭제할때 식별하는 것을 돕고 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.

그래서 key는 리스트의 요소들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용한다. 대부분 데이터의 id를 key로 사용하고, id가 없다면 항목의 인덱스를 key로 사용할 수 있다.

(하지만 인덱스로 key를 사용하게 되는 경우 항목들이 재배열 될 때 원하지 않는 데이터가 보일 수 있다. **결론:인덱스로 key를 두지 말자**) 

=>이때 key 값은 배열 안에서 고유해야하는 값이고, 다른 배열일때는 동일한 key를 사용할 수 있다.

```JS
const studentList = students.map((s) =>
      <li key={student.id}>{s.name}</li>
    );
```


리액트에서 key가 필요한 이유에 대해서 좀 더 깊이 이해하자면 이렇다. 

리액트 DOM 노드의 자식들을 재귀적으로 처리할때, 기본적으로 동시에 두 리스트를 순회하고 차이점이 있으면 변경을 생성한다. key 없이 이 트리를 단순하게 구성하면 리스트 맨 앞에 엘리먼트를 추가하는 경우 성능 비효율의 문제가 일어난다.
그렇기에 노드의 자식들에 key를 두어 리액트는 그 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인한다. 이전의 비효율적인 방식이 아닌, 효율적인 트리 변환 작업이 수행되는 것이다.

#### key로 컴포넌트 추출하기

key는 주변 배열의 context 에서만 의미가 있는데, 밑의 예시처럼 Hello라는 컴포넌트를 추출한 경우, Hello 컴포넌트 안이 아닌, List 안 배열의 `<Hello />` 엘리먼트가 key를 가져야 한다. Hello(그리고 key는 props로 넘길 수도 없다.)

```JS
import React from "react";

function Hello({name,id}){ 
    
    return(
        <h1>hi my name is {name} and my id is {id}</h1>
    )
}

function List() {
    const students = [
        {
            id:1,
            name: "a"
        },
        {
            id:2,
            name: "bb"
        },
        {
            id:3,
            name: "ccc"
        },

    ]
    const listItems = students.map((s) => //map 함수 내부에 있는 엘리먼트에 key 를 넣어주자!!
        <Hello key={s.id} id={s.id} name={s.name}/> //key는 컴포넌트로 전달되지 않는다
    );
    return (
      <ul>{listItems}</ul>
    );
  }
 
export default List;
```

위 코드를 인라인으로 처리할 수 있음을 알자

```JS
function List() {
    const students = [
        {
            id:1,
            name: "a"
        },
        {
            id:2,
            name: "bb"
        },
        {
            id:3,
            name: "ccc"
        },

    ]
    return (
      <ul>
          {students.map((s) =>
          <Hello key={s.id} id={s.id} name={s.name}/>
          )}
      </ul>
    );
  }
```
