import React from 'react';
import './card.scss'
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";

const Card = observer(({card}) => {
    const {selected, selectCard} = CardsController

    const clickHandler = () => {
        selectCard(card)
    }

    return (
        <div
            className={`card ${card.matched ? 'card_matched' : ''} ${selected.includes(card) ? 'card_selected' : ''}`}
            onClick={clickHandler}
        >
            <div className='card__card-inner'>
                <div className='card-inner__card-front'>
                    <div className='card-front__img'>
                        <img src={card?.src} alt={card?.cardId}/>
                    </div>
                </div>
                <div className='card-inner__card-back'/>
            </div>

        </div>
    );
});

export default Card;