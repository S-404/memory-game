import React, {useEffect, useState} from 'react';
import CounterController from "../../store/CounterController";
import CardsController from "../../store/CardsController";

const MenuNewGameButtons = () => {

    const {initCards} = CardsController
    const {resetCounter} = CounterController

    const [modes,] = useState([
        {cardsQty: 4, title: 'Easy'},
        {cardsQty: 8, title: 'Medium'},
        {cardsQty: 12, title: 'Hard'},
    ])

    const onClickButton = (cardsQty) => {
        resetCounter()
        initCards(cardsQty)
    }

    useEffect(()=>initCards(8),[])

    return (
        <div className='menu__new-game-buttons'>
            <h4>Start new game</h4>
            <div className='new-game-buttons__buttons'>
                {modes.map(mode => (
                    <button
                        key={`mode-button_${mode.title}`}
                        className='buttons__button'
                        onClick={() => onClickButton(mode.cardsQty)
                        }>
                        {mode.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MenuNewGameButtons;