import React from 'react';
function LogIn(){
    return <h1>user login</h1>
}

function LogOut(){
    return <h1>user logout</h1>
}
function UserLog(props){
    const log = props.isLoggedIn;
    if(!log) return null;
    return(
        <>
        {
            log===true && //log가 참일때만 LogIn 실행
            <LogIn/>
        }
        </>
    );
}

export default UserLog;