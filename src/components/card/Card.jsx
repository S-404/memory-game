import React, {useEffect, useMemo} from 'react';
import './card.scss'
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";
import CounterController from "../../store/CounterController";

const Card = observer(({card}) => {
    const {
        selected1,
        selected2,
        checkMatch,
        selectCard,
        deselectCards
    } = CardsController

    const {
        incrementAttempts,
        startTimer,
        isTimerStarted,
    } = CounterController

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
        if (selected2 !== card) return

        if (!isTimerStarted) {
            startTimer()
        }

        function timeout(delay) {
            return new Promise(res => setTimeout(res, delay));
        }

        async function check() {
            if (selected2 !== null) {
                let isSuccessful = checkMatch()
                incrementAttempts(isSuccessful)
                await timeout(500)
                deselectCards()
            }
        }

        check()

    }, [selected2])


    return (
        <div
            className={cardClassName}
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