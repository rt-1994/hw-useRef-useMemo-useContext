import React, {useEffect, useRef, useState} from "react";
import styles from "./Carusel.scss";
import p1 from "../../assets/images/1.png";
import p2 from "../../assets/images/2.png";
import p3 from "../../assets/images/3.png";
import p4 from "../../assets/images/4.png";
import p5 from "../../assets/images/5.png";
import p6 from "../../assets/images/6.png";
import p7 from "../../assets/images/7.png";
import p8 from "../../assets/images/8.png";
import p9 from "../../assets/images/9.png";
import p10 from "../../assets/images/10.png";
import p11 from "../../assets/images/11.png";
import p12 from "../../assets/images/12.png";

const Carusel = ()=>{
    const [value, setValue] = useState(0)

    const headerCarusel = useRef(null)
    const carusel = useRef(null)

    const calcScroll = ()=>{
        setValue(carusel.current.scrollTop)
    }

    useEffect(()=>{
        headerCarusel.current.style.top = Math.floor(value/158)*(-30)+"px"
    }, [value])

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h4>Hello</h4>
                <div className={styles.titleCarusel}>
                    <ul ref={headerCarusel} className={styles.titleCaruselList}>
                        <li><img src={p1} alt=""/></li>
                        <li><img src={p2} alt=""/></li>
                        <li><img src={p3} alt=""/></li>
                        <li><img src={p4} alt=""/></li>
                        <li><img src={p5} alt=""/></li>
                        <li><img src={p6} alt=""/></li>
                        <li><img src={p7} alt=""/></li>
                        <li><img src={p8} alt=""/></li>
                        <li><img src={p9} alt=""/></li>
                        <li><img src={p10} alt=""/></li>
                        <li><img src={p11} alt=""/></li>
                        <li><img src={p12} alt=""/></li>
                    </ul>
                </div>
                <h4>comes in.</h4>
            </div>
            <div onScroll={()=>calcScroll()} ref={carusel} className={styles.carusel}>
                <div className={styles.caruselItem}>
                    <img src={p1} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p2} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p3} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p4} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p5} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p6} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p7} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p8} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p9} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p10} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p11} alt=""/>
                </div>
                <div className={styles.caruselItem}>
                    <img src={p12} alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Carusel;