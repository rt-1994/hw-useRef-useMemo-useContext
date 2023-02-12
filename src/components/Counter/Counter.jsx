import React, {useEffect, useRef, useState} from "react";
import styles from "./Counter.scss";


const Counter = () => {
    const [count, setCount] = useState(0);
    const [timerId, setTimerId] = useState(null);
    const countVal = useRef(null);

    const changeCount = (value) => {
        if(value>0){
            countVal.current.style.color = "green"
        }else{
            countVal.current.style.color = "red"
        }

        const timeId = setInterval(() => {
            setCount((count) => count + value)
        }, 50)
        setTimerId(timeId)
    }

    const clearTimer = () => {
        clearInterval(timerId)
        countVal.current.style.color = "black"
    }

    return (
        <div className={styles.counter}>
            <div className={styles.counterBody}>
                <button onMouseDown={()=> changeCount(1)} onMouseUp={clearTimer} className={styles.up}>+</button>
                <h3 ref={countVal} className={styles.count}>{count}</h3>
                <button onMouseDown={()=> changeCount(-1)} onMouseUp={clearTimer} className={styles.down}>-</button>
            </div>
        </div>
    )
}

export default Counter;


