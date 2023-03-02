import {makeAutoObservable} from "mobx";
import cards from './collections/cards.json'

class CardsController {
    cards = []

    constructor() {
        makeAutoObservable(this)
    }

    shuffleCards = (cards) => {
        let currentIndex = cards.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[currentIndex], cards[randomIndex]] = [
                cards[randomIndex], cards[currentIndex]];
        }
        return cards
    }

    getNewCardsCollection = (quantity) => {
        let part = cards.slice(0, quantity)
        return this.shuffleCards(part.concat(...part))
    }
    initCards = (quantity) => {
        this.cards = this.getNewCardsCollection(quantity)
    }


}


export default new CardsController()