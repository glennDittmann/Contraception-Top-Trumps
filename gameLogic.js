"use strict"

import Deck from './cardDeck.js'
import {ATTRIBUTES, N_ATTRIBUTES} from './cardConstants.js'

export class GameState {
    static ClassicWaiting = 1
    static ClassicShowResult = 2
    static ChooseLowerWaiting = 3
    static ChooseLowerShowResult = 4
}

export default class GameLogic {
    constructor() {
        this.streakCount = 0;
        this.gameState = 0;
        this.currentWinnerNumber = 0;  // will be updated to 1 or 2, i.e. the respect player number
        this.selectedAttribute = ""
        this.selectedAttributeAi = "";
        this.selectedSide = 0
        this.addNextRoundButton();
        this.updatePointDisplay();
        this.correctSound = new Audio("assets/audio/correct_sound_effect.mp3");
        this.wrongSound = new Audio("assets/audio/wrong_sound_effect.mp3");
        this.correctSound.loop = false;
        this.wrongSound.loop = false;

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
        const topBar = document.getElementById("top-bar");
        gameCanvas.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';
        topBar.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';

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
            this.handleLeaveChooseLowerResults()
        } else if (this.gameState === GameState.ClassicWaiting) {
            this.handleLeaveClassicWaiting()
        } else if (this.gameState === GameState.ClassicShowResult) {
            this.handleLeaveClassicShowResults()
        } else if (this.gameState === GameState.ChooseLowerWaiting) {
            this.handleLeaveChooseLowerWaiting()
        } else if (this.gameState === GameState.ChooseLowerShowResult) {
            this.handleLeaveChooseLowerResults()
        }
    }

    handleInitNewGameState() {
        if (this.gameState === GameState.ClassicWaiting) {
            this.handleEnterClassicWaitingForInput()
        } else if (this.gameState === GameState.ClassicShowResult) {
            this.handleEnterClassicShowResults()
        } else if (this.gameState === GameState.ChooseLowerWaiting) {
            this.handleEnterChooseLowerWaitingForInput();
        } else if (this.gameState === GameState.ChooseLowerShowResult) {
            this.handleEnterChooseLowerResults();
        }
    }

    handleLeaveClassicWaiting() {
        this.gameState = GameState.ClassicShowResult
    }

    handleLeaveClassicShowResults() {
        this.nextRoundButton.style.visibility = "hidden";
        this.selectedAttribute = "";
        this.discardPlayedCards();

        this.gameState = GameState.ChooseLowerWaiting
    }

    handleLeaveChooseLowerResults() {
        this.nextRoundButton.style.visibility = "hidden";
        this.selectedAttributeAi = "";
        this.selectedAttribute = "";
        this.selectedSide = -1;
        this.discardPlayedCards();

        this.gameState = GameState.ClassicWaiting
    }

    handleLeaveChooseLowerWaiting() {
        this.gameState = GameState.ChooseLowerShowResult
    }

    handleEnterChooseLowerWaitingForInput() {
        this.assignRandomAttributeAi()
    }

    handleEnterClassicWaitingForInput() {
    }

    handleEnterClassicShowResults() {
        const selectedAttribute = this.selectedAttribute;
        let wonComparison = this.IsChosenAttributeBetter(selectedAttribute);
        this.handleComparisonResult(wonComparison);

        this.updatePointDisplay();

        this.nextRoundButton.style.visibility = "visible";
    }

    handleEnterChooseLowerResults() {
        const selectedAttribute = this.selectedAttributeAi;

        const isComparisonBasedOnLeftCard = (this.selectedSide === 1)
        let wonComparison = this.IsChosenAttributeBetter(selectedAttribute, isComparisonBasedOnLeftCard);

        this.handleComparisonResult(wonComparison)

        this.updatePointDisplay();

        this.nextRoundButton.style.visibility = "visible";
    }

    handleComparisonResult(wonComparison) {
        const isComparisonBasedOnLeftCard = (this.selectedSide === 1)  // depending on which side a card was chosen the winner number is 1 OR 2
        if (wonComparison) {
            this.correctSound.play();
            this.currentWinnerNumber = isComparisonBasedOnLeftCard ? 1 : 2;
            ++this.streakCount;
        } else {
            this.wrongSound.play();
            this.currentWinnerNumber = isComparisonBasedOnLeftCard ? 2 : 1;
            this.streakCount = 0;
        }
    }

    IsChosenAttributeBetter(selectedAttribute, isComparisonBasedOnLeftCard = true) {
        let attributeIndex = this.getSelectedIndex(selectedAttribute);

        const leftSideValue = isComparisonBasedOnLeftCard ?
            this.playerDeck.cards[0][selectedAttribute] :
            this.aiDeck.cards[0][selectedAttribute]

        const rightSideValue = isComparisonBasedOnLeftCard ?
            this.aiDeck.cards[0][selectedAttribute] :
            this.playerDeck.cards[0][selectedAttribute]

        switch (attributeIndex) {
            case 0: {
                // a smaller pearl-index is better
                return leftSideValue <= rightSideValue
            }
            case 1: {
                return leftSideValue >= rightSideValue
            }
            case 2: {
                return leftSideValue <= rightSideValue
            }
            case 3: {
                return leftSideValue >= rightSideValue
            }
            case 4: {
                return leftSideValue <= rightSideValue
            }
            default: {
                return false
            }
        }
    }

    getSelectedIndex(selectedAttribute) {
        for(let i = 0; i < N_ATTRIBUTES; ++i)
        {
            if (selectedAttribute === ATTRIBUTES[i])
            {
                return i;
            }
        }

        return -1;
    }

    updateCardHolders() {
        this.playerDeck.updateCardHolder(1, this)
        this.aiDeck.updateCardHolder(2, this)
    }

    discardPlayedCards() {
        this.playerDeck.cards.shift()
        this.aiDeck.cards.shift()

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
}