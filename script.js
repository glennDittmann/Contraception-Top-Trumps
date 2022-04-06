import Deck from './cardDeck.js'
import {ANTI_BABY_PILL, COITUS_INTERRUPTUS, CONDOM, COPPER_COIL, DIAPHRAGMA,
        FERTILITY_CYCLE, STERILIZATION, THE_SWITCH} from './cardConstants.js'

var cards = [CONDOM, DIAPHRAGMA, ANTI_BABY_PILL, COITUS_INTERRUPTUS, COPPER_COIL, STERILIZATION,
             FERTILITY_CYCLE, THE_SWITCH]

const deck = new Deck(cards)
deck.shuffle()

let { deck1, deck2 } = deck.split()

deck1.display()

console.log(deck1.cards)
console.log(deck2.cards)