# 함수형 프로그래밍이란
명령형(imperative) 코드 vs 선언형(declarative) 코드

명령형 코드: 원하는 결과의 과정을 표현하는 코드가 작성된다.
선언형 코드: 원하는 결과를 나타내는 코드가 작성된다.  ex) css

=> 개발자들은 명령형 코드를 피하고 다른 함수를 사용할 수 있다. 버그나 실수를 줄이고, 코드 양 자체도 줄일 수 있다
명령형 코드에서는 함수가 무엇을 하려고 하는지 파악하는데 시간이 걸린다.
# 함수형 프로그래밍 특징 4가지

## 1. 순수 함수로 이루어진다(부수효과 x, 조합성을 강조한다)

함수에서 외부의 상탯값을 참조하거나, 외부의 상탯값을 변경하는 것은 순수함수 X

동일한 인자가 인풋으로 들어오고 항상 동일한 결과값 반환하는 것이 순수함수이다.

이 순수 함수는 외부에 영향을 받지 않아야 하고 부수효과가 없어야 한다.(부수효과: 외부의 상태에 영향을 미침)

이 순수 함수들로 조합성을 강조(모듈화 수준을 높임)하는 것이 함수형 프로그래밍이다.

순수함수를 사용하면 안정성이 높아지고, 모듈화 수준이 높아진다는 것은 생산성을 높인다는 것이다.

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
### 일급객체, 일급함수

`일급객체`: 변수에 할당 할 수 있고 객체의 인자로 넘길 수 있으며 객체의 리턴값으로 리턴할 수 있는 세가지 조건을 충족하는 객체를 말한다.

`일급함수`란, 함수가 위의 일급객체로 다루어지는 경우, 다시 말해서 함수를 다른 변수(값과 같이)로 다룰 수 있는 경우를 뜻한다. JS에서의 함수는 일급함수이다.

- Monad (중요)
- Semigroup
- Applicative
- Functor

=> 다양한 컨셉을 잘 이해해야 함
