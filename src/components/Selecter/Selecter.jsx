import React, {useEffect, useState} from "react";
import styles from "./Selecter.scss";

let data = ["Bacon", "Tuna", "Tuna pants"]

const Selecter = ()=>{

    const [items, setItems] = useState(data)
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)

    useEffect(()=>{
        setShow(false)
    }, [value])

    return(
        <div className={styles.selecter}>
            <h3>Selected: {value}</h3>
            <button onClick={()=>setShow(!show)} className={styles.open}>OPEN MENU</button>

            {show && <ul className={styles.menu}>
                        {items.map((item, index)=><li onClick={()=>setValue(item)} key={index}>{item}</li>)}
                    </ul>
            }

        </div>
    )
}

export default Selecter;
