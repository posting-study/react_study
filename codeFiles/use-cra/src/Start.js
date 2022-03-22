import React , {useState} from "react";

function Start(){
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

export default Start;