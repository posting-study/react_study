import React, {useState, useEffect} from 'react';

function Count(){
    const [number, setNumber] = useState(0);
    const onClickIncrease = () => {
        setNumber(number => number+1);
        setNumber(number => number+1);
        setNumber(number => number+1);
    }
    const onClickDecrease = () => {
        setNumber(number-1);
    }

    useEffect(()=>{
        document.title=`업데이트 횟수: ${number}`;
    })
    return(
        <>
        <h1>{number}</h1>
        <button onClick={onClickIncrease}>+1</button>
        <button onClick={onClickDecrease}>-1</button>
        </>
    );
}

export default Count;
