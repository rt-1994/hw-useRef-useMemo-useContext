import React from 'react';
import styles from './styles.scss';
import {Tabs, Tab} from "./components/Tabs/Tabs";
import tabStyles from "./components/Tabs/Tabs.scss";
import Counter from "./components/Counter/Counter";
import Chips from "./components/Chips/Chips";
import Carusel from "./components/Carusel/Carusel";
import Cards from "./components/Cards/Cards";
import InputSaver from "./components/InputSaver/InputSaver";
import Count from "./components/Count/Count";
import Selecter from "./components/Selecter/Selecter";




localStorage.setItem("count", 0);

const App = () => {
    return (
        <div className={tabStyles.tabs}>
            <h1>Home work(useRef, useMemo, useContext)</h1>
            <Tabs>
                <Tab label="Chips">
                    <Chips/>
                </Tab>
                <Tab label="Counter">
                    <Counter/>
                </Tab>
                <Tab label="Carusel">
                    <Carusel/>
                </Tab>
                <Tab label="Cards">
                    <Cards/>
                </Tab>
                <Tab label="Input saver">
                    <InputSaver/>
                </Tab>
                <Tab label="Count">
                    <Count/>
                </Tab>
                <Tab label="Selecter">
                    <Selecter/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default App;