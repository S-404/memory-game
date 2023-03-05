import {makeAutoObservable} from "mobx";
import cards from './collections/cards.json'

class CardsController {
    cards = []
    selected1 = null
    selected2 = null

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

    checkMatch = () => {
        if (this.selected1 && this.selected2 &&
            this.selected1.cardId === this.selected2.cardId) {
            this.selected1.matched = true
            this.selected2.matched = true
            return true
        }
        return false
    }

    selectCard = (card) => {
        if(
            card === this.selected1 ||
            card === this.selected2 ||
            card.matched
        ) return

        if (this.selected1 === null) {
            this.selected1 = card
            return
        }

        if (this.selected2 === null) {
            this.selected2 = card
        }

    }
    deselectCards = () => {
        this.selected1 = null
        this.selected2 = null
    }


}


export default new CardsController()