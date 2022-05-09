import Deck from './cardDeck.js'
import {ANTI_BABY_PILL, COITUS_INTERRUPTUS, CONDOM, COPPER_COIL, DIAPHRAGMA,
        FERTILITY_CYCLE, STERILIZATION, THE_SWITCH} from './cardConstants.js'


export default class GameLogic
{
    init(deck)
    {
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

    chooseAttribute(name)
    {
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


const gameLogic = new GameLogic();

const cards = [CONDOM, DIAPHRAGMA, ANTI_BABY_PILL, COITUS_INTERRUPTUS, COPPER_COIL, STERILIZATION,
    FERTILITY_CYCLE, THE_SWITCH];
const deck = new Deck(cards, gameLogic)

gameLogic.init(deck);