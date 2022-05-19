"use strict"

import Deck from './cardDeck.js'
import {ATTRIBUTES, N_ATTRIBUTES} from './cardConstants.js'

export class GameState {
    static ClassicWaiting = 1
    static ClassicShowResult = 2
    static ChooseLowerWaitingForAttribute = 3
    static ChooseLowerShowResult = 4
}

export default class GameLogic {
    constructor() {
        this.streakCount = 0;
        this.gameState = 0;
        this.selectedAttribute = ""
        this.selectedAttributeAi = "";
        this.addNextRoundButton();
        this.updatePointDisplay();

        window.onresize = GameLogic.resizeWindow

        GameLogic.resizeWindow()
    }

    init(deck) {
        this.deck = deck;
        this.dealNewCards();

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
        this.handleLeaveCurrentGameState();
        this.handleInitNewGameState();

        this.updateCardHolders()
    }

    handleLeaveCurrentGameState() {
        if (this.gameState === 0) {
            this.handleLeaveChooseLowerResult()
        } else if (this.gameState === GameState.ClassicWaiting) {
            this.handleLeaveClassicWaiting()
        } else if (this.gameState === GameState.ClassicShowResult) {
            this.handleLeaveShowClassicResults()
        } else if (this.gameState === GameState.ChooseLowerWaitingForAttribute) {
            this.handleLeaveChooseLowerWaiting()
        } else if (this.gameState === GameState.ChooseLowerShowResult) {
            this.handleLeaveChooseLowerResult()
        }
    }

    handleInitNewGameState() {
        if (this.gameState === GameState.ClassicWaiting) {
            this.handleEnterClassicShowResults();
        } else if (this.gameState === GameState.ClassicShowResult) {
            this.handleEnterChooseLowerWaitingForSelection();
        } else if (this.gameState === GameState.ChooseLowerWaitingForAttribute) {
            this.handleEnterChooseLowerShowResult();
        } else if (this.gameState === GameState.ChooseLowerShowResult) {
            this.handleEnterShowChooseLowerResults();
        }
    }

    handleLeaveChooseLowerResult() {
        this.nextRoundButton.style.visibility = "hidden";
        this.selectedAttributeAi = "";

        this.gameState = GameState.ClassicWaiting
    }

    handleLeaveClassicWaiting() {
        this.gameState = GameState.ClassicShowResult
    }

    handleLeaveShowClassicResults() {
        this.nextRoundButton.style.visibility = "hidden";
        this.selectedAttribute = "";

        this.gameState = GameState.ChooseLowerWaitingForAttribute
    }

    handleLeaveChooseLowerWaiting() {
        this.gameState = GameState.ChooseLowerShowResult
    }

    handleEnterChooseLowerShowResult() {
        this.assignRandomAttributeAi()
    }

    handleEnterChooseLowerWaitingForSelection() {
        this.discardPlayedCards();
    }

    handleEnterShowChooseLowerResults() {
    }

    handleEnterClassicShowResults() {
        const selectedAttribute = this.selectedAttribute;
        let wonComparison = false
        if (selectedAttribute === ATTRIBUTES[0]) {
            wonComparison = this.compEffectiveness()
        } else if (selectedAttribute === ATTRIBUTES[1]) {
            wonComparison = this.compStiProtection()
        } else if (selectedAttribute === ATTRIBUTES[2]) {
            wonComparison = this.compCost()
        } else if (selectedAttribute === ATTRIBUTES[3]) {
            wonComparison = this.compAccessibility()
        } else if (selectedAttribute === ATTRIBUTES[4]) {
            wonComparison = this.compSideEffects()
        }

        if (wonComparison) {
            ++this.streakCount
        } else {
            this.streakCount = 0
        }

        this.updatePointDisplay();

        this.nextRoundButton.style.visibility = "visible";
    }

    handleEnterClassicLowerWaitingForAttribute() {

    }

    updateCardHolders() {
        this.playerDeck.updateCardHolder(1, this)
        this.aiDeck.updateCardHolder(2, this)
    }

    discardPlayedCards() {
        this.playerDeck.cards.shift()
        this.aiDeck.cards.shift()
        
        console.log(this.playerDeck.cards.length);
        console.log(this.aiDeck.cards.length);


        if(this.playerDeck.cards.length === 1 && this.aiDeck.cards.length === 1){
            document.getElementById("next-round-button").innerHTML = "Neu mischen";
        }
        else if( this.playerDeck.cards.length === 0 && this.aiDeck.cards.length === 0){  // both decks are empty, usually on check should be sufficient; just in case though
            this.dealNewCards();
            document.getElementById("next-round-button").innerHTML = "Nächste Karte";
        }
    }

    dealNewCards(){
        this.deck.shuffle()
        const decks = this.deck.split();
        this.playerDeck = decks.deck1
        this.aiDeck = decks.deck2
    }

    assignRandomAttributeAi() {
        const selectedAttrIdx = Math.floor(Math.random() * N_ATTRIBUTES);
        this.selectedAttributeAi = ATTRIBUTES[selectedAttrIdx];
    }

    addNextRoundButton() {
        this.nextRoundButton = document.getElementById("next-round-button");

        const gameLogic = this;
        this.nextRoundButton.onclick = function () {
            GameLogic.handleNextRoundClick(gameLogic);
        }
    }

    static handleNextRoundClick(gameLogic) {
        if(gameLogic.selectedAttribute !== "")
        {
            gameLogic.handleProceedToNextGameState()
        }
    }

    updatePointDisplay(){
        document.getElementById("point-display").innerHTML = "Deine Punkte: " + this.streakCount;
    }

    compEffectiveness() {
        const attributeName = ATTRIBUTES[0]
        return this.playerDeck.cards[0][attributeName] <= this.aiDeck.cards[0][attributeName];  // a smaller pearl-index is better
    }

    compStiProtection() {
        const attributeName = ATTRIBUTES[1]
        return this.playerDeck.cards[0][attributeName] >= this.aiDeck.cards[0][attributeName];
    }

    compCost() {
        const attributeName = ATTRIBUTES[2]
        return this.playerDeck.cards[0][attributeName] <= this.aiDeck.cards[0][attributeName];
    }

    compAccessibility() {
        const attributeName = ATTRIBUTES[3]
        return this.playerDeck.cards[0][attributeName] >= this.aiDeck.cards[0][attributeName];
    }

    compSideEffects() {
        const attributeName = ATTRIBUTES[4]
        return this.playerDeck.cards[0][attributeName] <= this.aiDeck.cards[0][attributeName];
    }
}