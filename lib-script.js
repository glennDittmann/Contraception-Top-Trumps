import Deck from './cardDeck.js'
import {CONDOM, MINI_PILL, PATCH, PREP, COPPER_COIL,
    VASECTOMY, TUBENLIGATUR, INJECTION, FERTILITY_CYCLE, DIAPHRAGMA, MORNING_AFTER_PILL, COMBINED_PILL, COITUS_INTERRUPTUS, ATTRIBUTES} from './cardConstants.js'

function resizeLibWindow() {
    const scaleWidth = window.innerWidth / 1920
    const scaleHeight = window.innerHeight / 1080;
    const scale = Math.min(scaleHeight, scaleWidth)

    const cardLib = document.getElementById("card-lib");
    cardLib.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';
}

function fillCardValues(card) {
    console.log(card.name);
    console.log(card.name + "-" + ATTRIBUTES[0]);
    const effectiveness = document.getElementById(card.name + "-" + ATTRIBUTES[0]);
    const stiProtection = document.getElementById(card.name + "-" + ATTRIBUTES[1]);
    const cost = document.getElementById(card.name + "-" + ATTRIBUTES[2]);
    const accessibility = document.getElementById(card.name + "-" + ATTRIBUTES[3]);
    const sideEffects = document.getElementById(card.name + "-" + ATTRIBUTES[4]);

    effectiveness.innerHTML = card[ATTRIBUTES[0]];
    stiProtection.innerHTML = card[ATTRIBUTES[1]];
    cost.innerHTML = card[ATTRIBUTES[2]];
    accessibility.innerHTML = card[ATTRIBUTES[3]];
    sideEffects.innerHTML = card[ATTRIBUTES[4]];
}

const cards = [CONDOM, MINI_PILL, PATCH, PREP, COPPER_COIL,
               VASECTOMY, TUBENLIGATUR, INJECTION, FERTILITY_CYCLE, DIAPHRAGMA, MORNING_AFTER_PILL, COMBINED_PILL, COITUS_INTERRUPTUS];


const deck = new Deck(cards);
console.log(deck.cards);
cards.forEach(fillCardValues);
//window.onresize = resizeLibWindow;