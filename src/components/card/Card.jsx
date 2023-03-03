import React, {useEffect, useMemo} from 'react';
import './card.scss'
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";

const Card = observer(({card}) => {
    const {
        selected1,
        selected2,
        checkMatch,
        selectCard,
        deselectCards
    } = CardsController

    const clickHandler = () => {
        selectCard(card)
    }

    const cardClassName = useMemo(() => {
        let className = 'card'
        className += card.matched ? ' card_matched' : ''
        className += selected1 === card || selected2 === card ? ' card_selected' : ''
        return className
    }, [selected1, selected2])

    useEffect(() => {
        if (selected2 !== null) {
            if (checkMatch()) {

            }
            deselectCards()
        }
    }, [selected2])


    return (
        <div
            className={cardClassName}
            onClick={clickHandler}
        >
            {card.cardId}
            <div>
                {selected1 === card || selected2 === card ? 'selected' : null}
            </div>
            <div>
                {card.matched ? 'matched' : null}
            </div>

        </div>
    );
});

export default Card;