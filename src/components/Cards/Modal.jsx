import React from "react";
import styles from "./Cards.scss";
import Card from "./Card";
import images from "../../assets/images";

const Modal = (props)=>{


    return(
        <div className={styles.modal}>
            <div className={styles.modalInner}>
                <div className={styles.modalHeader}>
                    <h2>Selected travels</h2>
                    <span onClick={props.show} className={styles.close}>x</span>
                </div>
                <div className={styles.cardList}>
                    {props.value.map((item) => {
                        if (item.status===true) {
                            return (
                                <Card
                                    key={item.id}
                                    select={() => select(item.id)}
                                    src={images[item.image]}
                                    name={item.name}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal;