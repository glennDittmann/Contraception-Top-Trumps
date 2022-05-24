"use strict"

import Deck from './cardDeck.js'
import GameLogic from './gameLogic.js';
import {MINI_PILL, TUBENLIGATUR, CONDOM, COPPER_COIL, DIAPHRAGMA,
        FERTILITY_CYCLE, PREP, INJECTION, VASECTOMY, PATCH} from './cardConstants.js'

const gameLogic = new GameLogic();

const cards = [CONDOM, DIAPHRAGMA, MINI_PILL, TUBENLIGATUR, COPPER_COIL, PREP,
    FERTILITY_CYCLE, INJECTION, VASECTOMY, PATCH];

const deck = new Deck(cards, gameLogic);

gameLogic.init(deck);