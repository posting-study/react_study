# 조건부 렌더링

리액트에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있어, 상태에 따라 원하는 컴포넌트들을 선택해 렌더링할 수 있다.

## 1. if문이나 조건부 연산자를 사용해 조건에 따라 컴포넌트를 렌더링한다.

```JS
import React from 'react';
function LogIn(){
    return <h1>user login</h1>
}
function LogOut(){
    return <h1>user logout</h1>
}
function UserLog(props){
    const log = props.isLoggedIn;
    if(log) return <LogIn/>;
    else return <LogOut/>;
}

export default UserLog;
```

조건부 연산자도 사용 가능

```JS
function UserLog(props){
    const log = props.isLoggedIn;
    return(
        <>
        {log?<LogIn/>:<LogOut/>}
        The user is <b>{log?'currently':'not'}</b> logged in.
        </>
    )
}
```

## 2. && 연산자로 if문을 인라인으로 표현하기

`조건 && 엘리먼트`로 구성되어 있을 때, && 연산자 특성상 엘리먼트는 앞의 조건이 true일때만 작동되는 것을 이용한다.
```JS
function UserLog(props){
    const log = props.isLoggedIn;
    return(
        <>
        {
            log===true && //log가 참일때만 LogIn 실행
            <LogIn/>
        }
        </>
    );
}
```

falsy 표현식을 반환하면 && 연산자 뒤의 표현식은 건너뛰지만 falsy 표현식은 반환되는 것을 주의하자

## 3. 컴포넌트가 렌더링하는 것 막기

다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶다면 렌더링 결과를 출력하는 것이 아닌 `null`을 반환하자.

```JS
function UserLog(props){
    const log = props.isLoggedIn;
    if(!log) return null; //거짓일때는 컴포넌트 자체를 숨기고 싶다면 null 반환
    return(
        <>
        {
            log===true && //log가 참일때만 LogIn 실행
            <LogIn/>
        }
        </>
    );
}
```
