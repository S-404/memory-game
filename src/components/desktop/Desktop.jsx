import React, {useEffect} from 'react';
import Card from "../card/Card";
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";
import './desktop.scss'
import timeout from "../../utils/timeout";
import CounterController from "../../store/CounterController";
const Desktop = observer(() => {

    const {cards,selected,checkMatch,deselectCards,isCompleted} = CardsController
    const {incrementAttempts, startTimer, stopTimer,  isTimerStarted} = CounterController

    useEffect(() => {
        if (selected.length !== 2) return

        if (!isTimerStarted) {
            startTimer()
        }

        (async function check() {
            incrementAttempts(checkMatch())
            if(isCompleted()){
                stopTimer()
            }
            await timeout(500)
            deselectCards()
        })()
    }, [selected.length])

    return (
        <div className='desktop'>
            {cards.map((card,index) => (
                <Card
                    key={`card_id${card.cardId}_${index}`}
                    card={card}
                />
            ))}
        </div>
    );
});

export default Desktop;