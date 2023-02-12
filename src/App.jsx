import React from 'react';
import styles from './styles.scss';
import {Tabs, Tab} from "./components/Tabs/Tabs";
import tabStyles from "./components/Tabs/Tabs.scss";
import Counter from "./components/Counter/Counter";
import Chips from "./components/Chips/Chips";
import Carusel from "./components/Carusel/Carusel";




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
            </Tabs>
        </div>
    )
}

export default App;