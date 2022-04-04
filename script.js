import Deck from './cardDeck.js'
import {ANTI_BABY_PILL, COITUS_INTERRUPTUS, CONDOM, COPPER_COIL, DIAPHRAGMA,
        FERTILITY_CYCLE, STERILIZATION, THE_SWITCH} from './cardConstants.js'

var cards = [CONDOM, DIAPHRAGMA, ANTI_BABY_PILL, COITUS_INTERRUPTUS, COPPER_COIL, STERILIZATION,
             FERTILITY_CYCLE, THE_SWITCH]

const deck = new Deck(cards)
deck.shuffle()
let { cards1, cards2 } = deck.split()
var deck1 = new Deck(cards1)
var deck2 = new Deck(cards2)

deck1.display()

console.log(deck1.cards[0]["path"])
console.log(deck2.cards)