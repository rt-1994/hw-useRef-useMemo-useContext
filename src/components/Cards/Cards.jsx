import React, {useEffect, useRef, useState} from "react";
import styles from "./Cards.scss";
import Card from "./Card";
import images from "../../assets/images";
import card from "./Card";
import cn from "classnames";
import Modal from "./Modal";

let data = [
    {
        id: 1,
        name: "Seattle",
        image: "seattle",
        status: false
    },
    {
        id: 2,
        name: "Austin",
        image: "austin",
        status: false
    },
    {
        id: 3,
        name: "San_Francisco",
        image: "sanFrancisco",
        status: false
    }
]

const Cards = () => {
    const [cards, setCards] = useState(data);
    const [modalShow, setModalShow] = useState(false);
    const submit = useRef(null)
    const toggleAll = useRef(null)

    function select(id, event) {
        if (event.ctrlKey){
            let result = cards.map((item) => {
                if (item.id === id)
                    return {
                        ...item,
                        status: !item.status
                    }
                return item
            })
            setCards(result)
        }
    }

    function selectOthers() {
        let result = cards.map((item) => {
            return {
                ...item,
                status: !item.status
            }
        })
        setCards(result)
    }

    return (
        <div className={styles.cards}>
            <div className={styles.cardsHeader}>
                <h2>Select a travel</h2>
                <div>
                    <span onClick={()=>setModalShow(!modalShow)} ref={submit}>Submit</span>
                    <span ref={toggleAll} onClick={() => selectOthers()}>Toggle All</span>
                </div>
            </div>
            <div className={styles.cardsContent}>
                {cards.map((item) => (
                    <Card
                        key={item.id}
                        select={() => select(item.id, event)}
                        src={images[item.image]}
                        status={item.status}
                        name={item.name}
                    />
                ))}
            </div>


            {modalShow && (
                <Modal
                    value={cards}
                    show={()=>setModalShow(!modalShow)}
                />
            )}
        </div>
    )
}

export default Cards;