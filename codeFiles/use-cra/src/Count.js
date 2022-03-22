import React, {useState} from 'react';

function Count(){
    const [number, setNumber] = useState(0);
    function onClickIncrease(){
        setNumber(number+1);
    }
    function onClickDecrease(){
        setNumber(number-1);
    }

    return(
        <>
        <h1>{number}</h1>
        <button onClick={onClickIncrease}>+1</button>
        <button onClick={onClickDecrease}>-1</button>
        </>
    );
}

export default Count;
