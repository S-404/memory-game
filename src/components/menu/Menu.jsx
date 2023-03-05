import React from 'react';
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";
import CounterController from "../../store/CounterController";

const Menu = observer(() => {
    const {initCards, isCompleted} = CardsController
    const {resetCounter} = CounterController
    const onClickButton = (cardsQty) => {
        resetCounter()
        initCards(cardsQty)
    }
    return (
        <div>
            <button onClick={()=>onClickButton(4)}>New Easy Game</button>
            <button onClick={()=>onClickButton(8)}>New Medium Game</button>
            <button onClick={()=>onClickButton(12)}>New Hard Game</button>
            {isCompleted ? 'Completed' : null}
        </div>
    );
});

export default Menu;