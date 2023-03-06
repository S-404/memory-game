import React from 'react';
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";
import CounterController from "../../store/CounterController";

const Menu = observer(() => {

    const {isCompleted} = CardsController

    return (
        <div className='menu'>
            <h1 className='menu__header'>MEMORY GAME</h1>
            <div className='menu__info'>
                <MenuNewGameButtons/>
                <Counter/>
            </div>
            <div className='menu__results'>
                {isCompleted ? <h3>Completed!</h3> : null}
            </div>
        </div>
    );
});

export default Menu;