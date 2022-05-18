"use strict"

import Deck from './cardDeck.js'
import {ATTRIBUTES, N_ATTRIBUTES} from './cardConstants.js'

export class GameState {
    static ClassicWaitingForAttribute = 1
    static ClassicShowingComparisonResult = 2
    static ChooseLowerWaitingForAttribute = 3
    static ChooseLowerComparisonResult = 4
}

export default class GameLogic {
    constructor() {
        this.revealed = false;
        this.streakCount = 0;
        this.gameState = 0;
        this.selectedAttribute = ""
        this.selectedAttributeAI = "";

        this.addNextRoundButton();

        window.onresize = GameLogic.resizeWindow

        GameLogic.resizeWindow()
    }

    init(deck) {
        deck.shuffle()
        const decks = deck.split();
        this.playerDeck = decks.deck1
        this.aiDeck = decks.deck2

        const discardDeck = new Deck({}, this);
        this.discardDeck = discardDeck

        console.log(this.playerDeck.cards)
        console.log(this.aiDeck.cards)

        this.handleProceedToNextGameState()
    }

    static resizeWindow() {
        const scaleWidth = window.innerWidth / 1920
        const scaleHeight = window.innerHeight / 1080;
        const scale = Math.min(scaleHeight, scaleWidth)

        const gameCanvas = document.getElementById("game-canvas");
        gameCanvas.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';


        const cardsArea = document.getElementById("cards-area");
        let paddingLeft = 270 - 60 - 30; // minus the amount the player 1 has right padding so the cards padding border is in center
        if (scaleWidth > scaleHeight) {
            paddingLeft = 0.5 * (window.innerWidth - scaleHeight * (1920 - paddingLeft * 2)) / scaleHeight;
        }
        cardsArea.style.paddingLeft = paddingLeft + 'px';
    }

    handleProceedToNextGameState() {
        if(this.gameState === 0) {
            this.nextRoundButton.style.visibility = "hidden";
            this.revealed = false;
            this.gameState = GameState.ClassicWaitingForAttribute
        }
        else if(this.gameState === GameState.ClassicWaitingForAttribute) {
            this.handleProceedFromWaitingForAttribute();
        }
        else if (this.gameState === GameState.ClassicShowingComparisonResult) {
            this.handleEnterChooseLowerWaitingForAttribute();
        }

        this.updateCardHolders()
    }

    handleEnterChooseLowerWaitingForAttribute() {
        this.discardPlayedCards();

        this.nextRoundButton.style.visibility = "hidden";

        // spawn new cards
        this.gameState = GameState.ClassicWaitingForAttribute
    }

    handleProceedFromWaitingForAttribute() {
        this.revealed = true;
        const selectedAttribute = this.selectedAttribute;

        let wonComparison = false
        if (selectedAttribute === "effectiveness") {
            wonComparison = this.compEffectiveness()
        } else if (selectedAttribute === "STI-protection") {
            wonComparison = this.compStiProtection()
        } else if (selectedAttribute === "cost") {
            wonComparison = this.compCost()
        } else if (selectedAttribute === "accessibility") {
            wonComparison = this.compAccessibility()
        } else if (selectedAttribute === "side-effects") {
            wonComparison = this.compSideEffects()
        }

        if (wonComparison) {
            ++this.streakCount
        } else {
            this.streakCount = 0
        }

        this.nextRoundButton.style.visibility = "visible";
        this.gameState = GameState.ClassicShowingComparisonResult
        console.log(this.gameState);
    }

    updateCardHolders() {
        this.playerDeck.updateCardHolder(1, this)
        this.aiDeck.updateCardHolder(2, this)
    }

    discardPlayedCards() {
        this.revealed = false
        this.playerDeck.cards.shift()
        this.aiDeck.cards.shift()
    }

    selectedAttributeAI() {
        const selectedAttrIdx = Math.floor(Math.random() * N_ATTRIBUTES);
        this.selectedAttributeAI = ATTRIBUTES[selectedAttrIdx];
    }

    addNextRoundButton() {
        this.nextRoundButton = document.getElementById("next-round-button");

        const gameLogic = this;
        this.nextRoundButton.onclick = function () {
            GameLogic.handleNextRoundClick(gameLogic);
        }
    }

    static handleNextRoundClick(gameLogic) {
        console.log(gameLogic.gameState)

        gameLogic.handleProceedToNextGameState()

        console.log(gameLogic.gameState)
    }

    isRevealed() {
        return this.revealed;
    }

    compEffectiveness() {
        return this.playerDeck.cards[0]["effectiveness"] <= this.aiDeck.cards[0]["effectiveness"];  // a smaller pearl-index is better
    }

    compStiProtection() {
        return this.playerDeck.cards[0]["sti-protection"] >= this.aiDeck.cards[0]["sti-protection"];
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