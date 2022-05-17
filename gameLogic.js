"use strict"

import Deck from './cardDeck.js'
import { ATTRIBUTES, N_ATTRIBUTES } from './cardConstants.js'

class GameState {
    static ClassicWaitingForAttribute = 1
    static ClassicShowingComparisonResult = 2
    static ChooseLowerWaitingForAttribute = 3
    static ChooseLowerComparisonResult = 4
}

export default class GameLogic {
    constructor() {
        this.revealed = false;
        this.streakCount = 0;
        this.gameState = GameState.ClassicWaitingForAttribute;
        this.selectedAttribute = ""
        this.selectedAttributeAI = "";
        

        function resizeWindow() {
            const scaleWidth = window.innerWidth / 1920
            const scaleHeight = window.innerHeight / 1080;
            const scale = Math.min(scaleHeight, scaleWidth)

            const gameCanvas = document.getElementById("game-canvas");
            gameCanvas.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';


            const cardsArea = document.getElementById("cards-area");
            let paddingLeft = 270 - 60; // minus the amount the player 1 has right padding so the cards padding border is in center
            if (scaleWidth > scaleHeight) {
                paddingLeft = 0.5 * (window.innerWidth - scaleHeight * (1920 - paddingLeft * 2)) / scaleHeight;
            }
            cardsArea.style.paddingLeft = paddingLeft + 'px';
        }

        window.onresize = resizeWindow

        resizeWindow()

    }

    init(deck) {

        deck.shuffle()
        const decks = deck.split();
        this.playerDeck = decks.deck1
        this.aiDeck = decks.deck2

        const discardDeck = new Deck({}, this);
        this.discardDeck = discardDeck


        this.playerDeck.updateCardHolder('card-img-container1', this)
        this.aiDeck.updateCardHolder('card-img-container2', this)

        console.log(this.playerDeck.cards)
        console.log(this.aiDeck.cards)
    }


    chooseAttribute(name) {

        if (this.gameState === GameState.ClassicWaitingForAttribute) {
            this.revealed = true;

            this.aiDeck.AddAICardSelectedOverlay(this);

            let wonComparison = false
            if (name === "effectiveness") {
                wonComparison = this.compEffectiveness()
            } else if (name === "STI-protection") {
                wonComparison = this.compStiProtection()
            } else if (name === "cost") {
                wonComparison = this.compCost()
            } else if (name === "accessibility") {
                wonComparison = this.compAccessibility()
            } else if (name === "side-effects") {
                wonComparison = this.compSideEffects()
            }

            if (wonComparison) {
                ++this.streakCount
            } else {
                this.streakCount = 0
            }

            this.gameState = GameState.ClassicShowingComparisonResult
        } else if (this.gameState === GameState.ClassicShowingComparisonResult) {
            this.playerDeck.cards.shift()  // TODO: implement me
            this.aiDeck.cards.shift()      // TODO: implement me

            this.gameState = GameState.ClassicWaitingForAttribute
        }

        this.playerDeck.updateCardHolder('card-img-container1', this)
        this.aiDeck.updateCardHolder('card-img-container2', this)
    }


    selectedAttributeAI(){
        var selectedAttrIdx = Math.floor(Math.random() * N_ATTRIBUTES);
        this.selectedAttributeAI = ATTRIBUTES[selectedAttrIdx];
    }


    isRevealed() {
        return this.revealed;
    }

    compEffectiveness() {
        return this.playerDeck.cards[0]["effectiveness"] <= this.aiDeck.cards[0]["effectiveness"];  // a smaller pearl-index is better
    }

    compStiProtection() {
        return this.playerDeck.cards[0]["STI-protection"] >= this.aiDeck.cards[0]["STI-protection"];
    }

    compCost() {
        return this.playerDeck.cards[0]["cost"] <= this.aiDeck.cards[0]["cost"];
    }

    compAccessibility() {
        return this.playerDeck.cards[0]["accessibility"] >= this.aiDeck.cards[0]["accessibility"];
    }

    compSideEffects() {
        return this.playerDeck.cards[0]["side-effects"] <= this.aiDeck.cards[0]["side-effects"];
    }
}
