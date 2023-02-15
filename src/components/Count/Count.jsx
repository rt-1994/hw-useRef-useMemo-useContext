import React, {useState} from "react";
import styles from "./Count.scss";


const Count = ()=>{

    const [value, setValue] = useState(0)

    return(
        <div className={styles.count}>
            <span>Counter: </span>
            <span> {value} </span>
            <button onClick={()=>setValue(value+1)}>+</button>
            <button onClick={()=>setValue(value-1)}>-</button>
            <button onClick={()=>setValue(value*2)}>X2</button>
            <button onClick={()=>setValue(value/2)}>/2</button>
            <button onClick={()=>setValue(0)}>Reset</button>
        </div>
    )
}

export default Count;