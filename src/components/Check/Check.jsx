import React, {useEffect, useState} from "react";
import styles from "./Check.scss";

let arr = [
    {
        id:1,
        status: "In process"
    },
    {
        id:2,
        status: "In process"
    },
    {
        id:3,
        status: "In process"
    }
]

const Check = ()=>{

    const [items, setItems] = useState(arr)
    const [count, setCount] = useState(0)

    function checkItem(){
        const result = items.map((item)=>{
            if(item.id === count){
                return{
                    ...item,
                    status: "Delivered"
                }
            }
            return item
        })
        setItems(result)
    }

    useEffect(()=>{
        checkItem()
    }, [count])

    return(
        <div className={styles.check}>
            <div className={styles.checkInner}>
                <ul>
                    {items.map((item)=><li key={item.id}>{item.status}</li>)}
                </ul>

                <button onClick={()=>setCount(count+1)}>Special button</button>
            </div>
        </div>
    )
}

export default Check;