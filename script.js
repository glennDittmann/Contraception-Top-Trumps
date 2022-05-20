"use strict"

import Deck from './cardDeck.js'
import GameLogic from './gameLogic.js';
import {ANTI_BABY_PILL, COITUS_INTERRUPTUS, CONDOM, COPPER_COIL, DIAPHRAGMA,
        FERTILITY_CYCLE, STERILIZATION, INJECTION, VASECTOMY, PATCH} from './cardConstants.js'

const gameLogic = new GameLogic();

const cards = [CONDOM, DIAPHRAGMA, ANTI_BABY_PILL, COITUS_INTERRUPTUS, COPPER_COIL, STERILIZATION,
    FERTILITY_CYCLE, INJECTION, VASECTOMY, PATCH];

const deck = new Deck(cards, gameLogic);

gameLogic.init(deck);