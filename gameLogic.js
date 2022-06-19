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
        this.addStartButton();
        this.addNextRoundButton();
        this.addNewGameButton();
        this.updatePointDisplay();
        this.correctSound = new Audio("assets/audio/correct_sound_effect.mp3");
        this.correctSound.volume = 0.75;
        this.wrongSound = new Audio("assets/audio/wrong_sound_effect.mp3");
        this.wrongSound.volume = 0.75;
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

        this.handleProceedToNextGameState()
    }

    static resizeWindow() {
        const targetWidth = 1800
        const targetHeight = 1400


        const scaleWidth = window.innerWidth / targetWidth
        const scaleHeight = window.innerHeight / targetHeight;
        const scale = Math.min(scaleHeight, scaleWidth)

        const gameCanvas = document.getElementById("game-canvas");
        gameCanvas.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';

        const cardsArea = document.getElementById("cards-area");
        let paddingLeft = 120;
        if (scaleWidth > scaleHeight) {
            paddingLeft = 0.5 * (window.innerWidth - scaleHeight * (targetWidth - paddingLeft * 2)) / scaleHeight;
        }
        cardsArea.style.paddingLeft = paddingLeft + 'px';
    }

    handleProceedToNextGameState() {
        this.handleLeaveCurrentGameState();
        this.handleInitNewGameState();

        this.updateCardHolders()

        this.deck.resetIndicator();
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
        this.nextRoundButton.style.display = "none";
        this.selectedAttribute = "";
        this.discardPlayedCards();

        this.gameState = GameState.ChooseLowerWaiting
    }

    handleLeaveChooseLowerResults() {
        this.nextRoundButton.style.display = "none";
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

        this.updateGuideText()
    }

    handleEnterClassicWaitingForInput() {
        this.updateGuideText()
    }

    updateGuideText()
    {
        const chooseModalContentText = document.getElementById('attribute-modal-content-text')

        if (this.gameState === GameState.ChooseLowerWaiting) {
            chooseModalContentText.innerHTML = "Wähle: Stärkere Eigenschaft von der Karte (gegen Unbekannt)!"
        }
        else if (this.gameState === GameState.ClassicWaiting) {
            chooseModalContentText.innerHTML = "Wähle: Stärkere Seite für die Eigenschaft!"
        }

        const chooseAttributeButton = document.getElementById('choose-attribute-button')
        chooseAttributeButton.style.display = "none"
    }

    handleEnterClassicShowResults() {
        const selectedAttribute = this.selectedAttribute;
        let wonComparison = this.IsChosenAttributeBetter(selectedAttribute);

        this.handleTurnResult(wonComparison);
    }

    handleEnterChooseLowerResults() {
        const selectedAttribute = this.selectedAttributeAi;
        const isComparisonBasedOnLeftCard = (this.selectedSide === 1)

        let wonComparison = this.IsChosenAttributeBetter(selectedAttribute, isComparisonBasedOnLeftCard);
        this.handleTurnResult(wonComparison);
    }

    handleTurnResult(wonComparison) {
        this.handleComparisonResult(wonComparison)

        this.updatePointDisplay();

        this.nextRoundButton.style.display = "flex"

        const chooseAttributeButton = document.getElementById('choose-attribute-button')
        chooseAttributeButton.style.display = "none"

        const chooseModalContentText = document.getElementById('attribute-modal-content-text')
        chooseModalContentText.innerHTML = wonComparison ? "Richtig! Du hast einen Punkt gewonnen." : "Falsch. Du hast keinen Punkt bekommen."
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
            this.streakCount += 0;
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

        document.getElementById("next-round-button").innerHTML = "Nächste Karte";

        if(this.playerDeck.cards.length === 1 || this.aiDeck.cards.length === 1){
            document.getElementById("next-round-button").innerHTML = "Beenden";
        }

        if( (this.playerDeck.cards.length === 0) || (this.aiDeck.cards.length === 0)){
            this.dealNewCards();

            this.gameOver();
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

    addStartButton() {
        this.startButton = document.getElementById("start-button");

        const gameLogic = this;
        this.startButton.onclick = function () {
            GameLogic.handleStartClick(gameLogic);
        }
    }

    addNextRoundButton() {
        this.nextRoundButton = document.getElementById("next-round-button");

        const gameLogic = this;
        this.nextRoundButton.onclick = function () {
            GameLogic.handleNextRoundClick(gameLogic);
        }
    }

    addNewGameButton(){
        this.newGameButton = document.getElementById("new-game-button");
        const gameLogic = this;
        this.newGameButton.onclick = function () {
            GameLogic.handleNewGameClick(gameLogic);
        }
    }

    static handleStartClick(gameLogic) {
        gameLogic.startGame();
    }

    static handleNextRoundClick(gameLogic) {
        if(gameLogic.selectedAttribute !== "")
        {
            gameLogic.handleProceedToNextGameState()
        }
    }

    static handleNewGameClick(gameLogic) {
            gameLogic.startGame();
    }

    updatePointDisplay(){
        const pointDisplay = document.getElementById("point-display");
        pointDisplay.innerHTML = "DEINE PUNKTE: " + this.streakCount;

        pointDisplay.style.fontSize = "70px";
        setTimeout(()=>{
            pointDisplay.style.fontSize = "50px";
        },400)
    }

    startGame() {
        let preGame = document.getElementById("pre-game");
        let inGame = document.getElementById("in-game");
        let gameOver = document.getElementById("game-over");
        document.getElementById("next-round-button").innerHTML = "Nächste Karte";
        this.streakCount = 0;
        this.updatePointDisplay();
        preGame.style.display = "none";
        inGame.style.display = "block";
        gameOver.style.display = "none";

        const topBar = document.getElementById("top-bar");
        topBar.style.display = "flex";

        const attributesModal = document.getElementById("myAttributesModal");
        attributesModal.style.display = "block"
    }

    gameOver() {
        let preGame = document.getElementById("pre-game");
        let inGame = document.getElementById("in-game");
        let gameOver = document.getElementById("game-over");
        preGame.style.display = "none";
        inGame.style.display = "none";
        gameOver.style.display = "block";

        const topBar = document.getElementById("top-bar");
        topBar.style.display = "flex";

        const attributesModal = document.getElementById("myAttributesModal");
        attributesModal.style.display = "none"
    }
}