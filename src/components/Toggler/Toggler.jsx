import React, {useEffect, useRef, useState} from "react";
import styles from "./Toggler.scss";

const Toggler = ()=>{

    const [active, setActive] = useState(false)

    const red = useRef(null)
    const violet = useRef(null)
    const white = useRef(null)

    const toggle = ()=>{
        setActive(!active)
        if(!active){
            setTimeout(()=>{
                red.current.classList.remove(styles.redFinish)
                red.current.classList.add(styles.redStart)
            }, 3000)
            setTimeout(()=>{
                violet.current.classList.remove(styles.violetFinish)
                violet.current.classList.add(styles.violetStart)
            }, 2000)
            setTimeout(()=>{
                white.current.classList.remove(styles.whiteFinish)
                white.current.classList.add(styles.whiteStart)
            }, 500)
        }else{
            setTimeout(()=>{
                red.current.classList.remove(styles.redStart)
                red.current.classList.add(styles.redFinish)
            }, 500)
            setTimeout(()=>{
                violet.current.classList.remove(styles.violetStart)
                violet.current.classList.add(styles.violetFinish)
            }, 2000)
            setTimeout(()=>{
                white.current.classList.remove(styles.whiteStart)
                white.current.classList.add(styles.whiteFinish)
            }, 3000)
        }
    }

    return(
        <div className={styles.toggler}>
            <div className={styles.togglerInner}>
                <div ref={red} className={styles.red}></div>
                <div ref={violet} className={styles.violet}></div>
                <div ref={white} className={styles.white}></div>
                <button onClick={toggle} className={styles.button}>Toggle</button>
            </div>
        </div>
    )
}

export default Toggler;