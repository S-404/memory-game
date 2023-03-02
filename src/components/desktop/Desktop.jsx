import React from 'react';
import Card from "../card/Card";
import CardsController from "../../store/CardsController";
import {observer} from "mobx-react-lite";

const Desktop = observer(() => {

    const {cards} = CardsController

    return (
        <div>
            {cards.map((card) => (
                <Card
                    key={`card_id${card.cardId}_${Math.random()}`}
                    card={card}
                />
            ))}
        </div>
    );
});

export default Desktop;