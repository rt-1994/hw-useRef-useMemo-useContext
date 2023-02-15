import React, {useState, useMemo, useRef} from "react";
import styles from "./InputSaver.scss"

const InputSaver = ()=>{
    const [text, setText] = useState("Test")
    const [show, setShow] = useState(true)

    function changeText(event){
        setText(event.target.value)
    }

    return(
        <div className={styles.inputSaver}>
            <div className={styles.buttons}>
                <button onClick={()=>setShow(true)} className={styles.button}>Show</button>
                <button onClick={()=>setShow(false)} className={styles.button}>Hide</button>
            </div>
            <p>An input field!</p>
            {show && <input type="text" onChange={changeText} value={text}/>}
        </div>
    )
}

export default InputSaver;