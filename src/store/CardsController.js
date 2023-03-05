import {makeAutoObservable} from "mobx";
import cards from './collections/cards.json'

class CardsController {
    cards = []
    selected = []

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
        if (this.selected.length === 2 &&
            this.selected[0].cardId === this.selected[1].cardId) {
            this.selected[0].matched = true
            this.selected[1].matched = true
            return true
        }
        return false

    }

    selectCard = (card) => {
        if (
            this.selected.includes(card) ||
            card.matched
        ) return

        if (this.selected.length === 0) {
            this.selected.push(card)
            return
        }

        if (this.selected.length === 1) {
            this.selected.push(card)
        }

    }
    deselectCards = () => {
        this.selected.length = 0
    }

    isCompleted = () => {
        console.log('isCompleted',this.cards.length,this.cards.filter(card => card.matched).length)
        return this.cards.length === this.cards.filter(card => card.matched).length
    }


}


export default new CardsController()