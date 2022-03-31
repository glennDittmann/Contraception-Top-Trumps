import Deck from './cardDeck.js'
import {CONDOM} from './cardConstants.js'

var cards = [CONDOM]

const deck = new Deck(cards)

console.log(deck.cards)