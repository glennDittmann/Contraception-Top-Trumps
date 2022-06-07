"use strict"

import Deck from './cardDeck.js'
import GameLogic from './gameLogic.js';
import {CONDOM, MORNING_AFTER_PILL, COMBINED_PILL, MINI_PILL, COITUS_INTERRUPTUS, PATCH, PREP, COPPER_COIL,
    VASECTOMY, TUBENLIGATUR, INJECTION, FERTILITY_CYCLE, DIAPHRAGMA} from './cardConstants.js'

    
const cards = [CONDOM, MORNING_AFTER_PILL, COMBINED_PILL, MINI_PILL, COITUS_INTERRUPTUS, PATCH, PREP, COPPER_COIL,
        VASECTOMY, TUBENLIGATUR, INJECTION, FERTILITY_CYCLE, DIAPHRAGMA];
        
const gameLogic = new GameLogic();
const deck = new Deck(cards, gameLogic);

gameLogic.init(deck);