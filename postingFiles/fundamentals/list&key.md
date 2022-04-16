# List와 Key

## List

리액트에서 배열을 엘리먼트 리스트로 만드는 방식은 js에서 map을 사용하는 방식과 비슷하다.

map()으로 각 요소에 대한 <li> 엘리먼트를 반환하자.
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

Key는 React가 어떤 항목을 변경, 추가, 삭제할때 식별하는 것을 돕고 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 한다.

Key는 리스트의 요소들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 



