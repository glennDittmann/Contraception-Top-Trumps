import Deck from './cardDeck.js'

export default class GameLogic {
    
    init(deck) {
        deck.shuffle()
        const decks = deck.split();
        this.playerDeck = decks.deck1
        this.aiDeck = decks.deck2

        const discardDeck = new Deck({}, this);
        this.discardDeck = discardDeck


        this.playerDeck.updateCardHolder('card1', this)
        this.aiDeck.updateCardHolder('card2', this)

        console.log(this.playerDeck.cards)
        console.log(this.aiDeck.cards)
    }

    chooseAttribute(name) {
        if(name == "effectiveness")
        {

        }

        if(name == "STI-protection")
        {

        }

        if(name == "cost")
        {

        }

        if(name == "accessibility")
        {

        }

        if(name == "side-effects")
        {

        }

        this.playerDeck.cards.shift()
        this.playerDeck.updateCardHolder('card1', this)

        this.aiDeck.cards.shift()
        this.aiDeck.updateCardHolder('card2', this)
    }
}
