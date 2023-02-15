import React from "react";
import styles from "./Cards.scss";
import cn from "classnames";

const Card = (props)=>{

    return(
        <div onClick={props.select} className={cn(styles.card, props.status?styles.active:"")}>
            <img src={props.src} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}

export default Card;