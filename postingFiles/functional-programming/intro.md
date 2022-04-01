# 함수형 프로그래밍의 역사

# 함수형 프로그래밍이란

# 함수형 프로그래밍 특징 4가지

## 1. 순수 함수로 이루어진다

함수에서 외부의 상탯값을 참조하거나, 외부의 상탯값을 변경하는 것은 순수함수 X

동일한 인자 -> 항상 동일한 결과값 반환
외부에 영향을 받지 않아야 함

## 2. 비상태 불변성 유지
전달된 데이터를 변경하는 것이 아니라, 새로운 오브젝트를 만들어 반환해야함

 ```JS
let a = {color: blue, num: 1};

function increase number(num){
    num += 1;
    return num
} // X

const a = {color: blue, num: 1};
function increase number(num){
    return Object.freeze({...number, num: a.num+1});
} //O
//=> JS에서는 불변성 데이터타입이 따로 없기 때문에 함수를 이용해 오브젝트를 불변성으로 만듬
 ```
 외부의 상태나 함수에 인자로 전달된 데이터의 상태를 변경하지 않음으로써 에러를 막아 불변성을 유지함
=> 멀티쓰레딩 환경에서도 안정적으로 동작함

## 3. expressions를 사용해야함

if, switch, for 등의 문장을 사용하지 않고 
표현으로 프로그래밍함

## 4. 일급함수 특징과 고차함수 속성을 가지고 있어야 함

- Monad (중요)
- Semigroup
- Applicative
- Functor

=> 다양한 컨섭을 잘 이해해야 함
