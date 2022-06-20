"use strict"

import {GameState} from "./gameLogic.js";
import {ATTRIBUTES, MISSING_CARD_PATH, HIDDEN_CARD_PATH} from "./cardConstants.js";

export default class Deck {
    constructor(cards, gameLogic) {
        if (gameLogic === undefined){  // simulate overridden constructor that just uses cards
            this.cards = cards;
            this.gameLogic = null;
        }
        else {
            this.cards = cards;
            this.gameLogic = gameLogic;
        }

        this.initAttributesModal();
    }

    initAttributesModal() {
        this.attributesModal = document.getElementById("myAttributesModal");

        const attributesModal = this.attributesModal;
        const gameLogic = this.gameLogic

        window.onclick = function (event) {
            if (event.target === attributesModal) {
                gameLogic.updateGuideText()
            }
        }
    }

    getNumCards() {
        return this.cards.length
    }

    shuffle() {
        // this.cards.sort((a,b) => Math.random() - .5) apparently this is not perfectly randomized... https://www.youtube.com/watch?v=NxRwIZWjLtE at 9:40
        for (let i = this.getNumCards() - 1; i > 0; i--) {
            const newIdx = Math.floor(Math.random() * (i + 1))  // a new position between 0 and i
            const oldCard = this.cards[newIdx]
            this.cards[newIdx] = this.cards[i]
            this.cards[i] = oldCard
        }
    }

    split() {
        const deck1 = new Deck(this.cards.slice(0, this.getNumCards() / 2), this.gameLogic);
        const deck2 = new Deck(this.cards.slice(this.getNumCards() / 2, this.getNumCards()), this.gameLogic);

        return {deck1, deck2}
    }

    updateCardHolder(playerNumber, gameLogic) {
        const cardHolderIdBase = "card-img-container";
        const cardHolderId = cardHolderIdBase + playerNumber;

        let currentCardData = this.cards[0];

        let imageId = cardHolderId + "_card-image";

        let img = document.getElementById(imageId);
        if (img == null) {
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[0]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[1]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[2]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[3]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[4]);

            img = this.addCardImageImgElement(imageId, cardHolderId, gameLogic, playerNumber);
        }

        this.updateAllAttributeStatsAndVisuals(cardHolderId, currentCardData, playerNumber, gameLogic)

        if ((cardHolderId === 'card-img-container2') && (gameLogic.gameState === GameState.ClassicWaiting)) {
            img.src = HIDDEN_CARD_PATH
        } else if (currentCardData.hasOwnProperty("path") && (currentCardData["path"] !== "")) {
            img.src = currentCardData["path"]
        } else {
            img.src = MISSING_CARD_PATH
        }
    }
    

    addCardImageImgElement(imageId, cardHolderId, gameLogic, playerNumber) {
        // displays the top card, here the first card in the array
        let img = document.createElement('img')
        img.className = "card-image"
        img.id = imageId;

        const cardHolder = document.getElementById(cardHolderId);
        cardHolder.appendChild(img)

        this.addOverlayImg(cardHolder, ATTRIBUTES[0], gameLogic, playerNumber)
        this.addOverlayImg(cardHolder, ATTRIBUTES[1], gameLogic, playerNumber)
        this.addOverlayImg(cardHolder, ATTRIBUTES[2], gameLogic, playerNumber)
        this.addOverlayImg(cardHolder, ATTRIBUTES[3], gameLogic, playerNumber)
        this.addOverlayImg(cardHolder, ATTRIBUTES[4], gameLogic, playerNumber)

        return img;
    }

    updateAllAttributeStatsAndVisuals(cardHolderId, currentCardData, playerNumber, gameLogic) {
        const cardHolder = document.getElementById(cardHolderId);

        this.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[0], currentCardData, playerNumber, gameLogic)
        this.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[1], currentCardData, playerNumber, gameLogic)
        this.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[2], currentCardData, playerNumber, gameLogic)
        this.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[3], currentCardData, playerNumber, gameLogic)
        this.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[4], currentCardData, playerNumber, gameLogic)
    }

    updateAttributeStatAndVisual(cardHolder, attributeName, currentCardData, playerNumber, gameLogic) {
        const isHidden = (playerNumber === 2) && (gameLogic.gameState === GameState.ClassicWaiting);

        const attributeLabelDivId = Deck.getAttributeLabelId(cardHolder.id, attributeName);
        const attributeLabelDiv = document.getElementById(attributeLabelDivId);
        attributeLabelDiv.innerHTML = isHidden ? "" : currentCardData[attributeName]

        const attributeOverlayId = Deck.getOverlayImgId(cardHolder, attributeName);
        const overlayImg = document.getElementById(attributeOverlayId);
        const cardAttributeDescription = Deck.getOverlayImageTitle(currentCardData, attributeName);

        const attributesModal = this.attributesModal;
        overlayImg.onclick = function () {
            Deck.handleAttributeClick(overlayImg, attributeName, gameLogic, playerNumber, attributesModal,
                cardAttributeDescription)
        }

        if (gameLogic.selectedAttribute === attributeName) {
            Deck.setAttributeOverlaySelected(overlayImg, gameLogic, playerNumber)
        } else if (gameLogic.selectedAttributeAi === attributeName) {
            Deck.setAttributeOverlayChooseHigher(overlayImg)
            attributeLabelDiv.innerHTML = "???"
        } else if (isHidden) {
            Deck.setAttributeOverlayHidden(overlayImg)
        } else {
            Deck.setAttributeOverlayRegular(overlayImg)
        }
    }

    static handleAttributeClick(overlayImg, attributeName, gameLogic, playerNumber, attributesModal,
                                attributeText) {

        const chooseAttributeButton = document.getElementById('choose-attribute-button')

        let showConfirmButton = true;
        if (gameLogic.gameState === GameState.ChooseLowerWaiting) {
            if (gameLogic.selectedAttributeAi !== attributeName) {
                showConfirmButton = false;
            }
        } else if ((gameLogic.gameState === GameState.ChooseLowerShowResult) ||
            (gameLogic.gameState === GameState.ClassicShowResult)) {
            showConfirmButton = false;
        }

        chooseAttributeButton.style.display = showConfirmButton ? "block" : "none"
        chooseAttributeButton.onclick = function () {
            Deck.handleConfirmedAttributeSelection(overlayImg, attributeName, gameLogic, playerNumber)
        }

        const chooseModalContentText = document.getElementById('attribute-modal-content-text')
        chooseModalContentText.innerHTML = attributeText
        gameLogic.deck.resetIndicator();

        const cardHolderIdBase = "card-img-container";
        const cardHolderId = cardHolderIdBase + playerNumber;
        const cardHolder = document.getElementById(cardHolderId);
        gameLogic.deck.currentIndicator = document.getElementById(Deck.getOverlayImgIndicatorId(cardHolder, attributeName));
        gameLogic.deck.currentIndicator.style.display = "block"
    }

    resetIndicator() {
        if (this.currentIndicator != null) {
            this.currentIndicator.style.display = "none"
            this.currentIndicator = null
        }
    }

    static handleConfirmedAttributeSelection(overlayImg, attributeName, gameLogic, playerNumber) {
        if ((gameLogic.gameState === GameState.ClassicWaiting) ||
            (gameLogic.gameState === GameState.ChooseLowerWaiting)) {

            if (gameLogic.gameState === GameState.ChooseLowerWaiting) {
                if (attributeName !== gameLogic.selectedAttributeAi) {
                    return
                }
                Deck.setAttributeOverlayChooseHigher(overlayImg, attributeName)
            } else if (gameLogic.gameState === GameState.ClassicWaiting) {
                Deck.setAttributeOverlaySelected(overlayImg, gameLogic, playerNumber)
            }

            const increment = 0.045;
            let opacity = 0;
            overlayImg.style.opacity = opacity
            const instance = window.setInterval(function (overlayImg) {
                    overlayImg.style.opacity = opacity
                    opacity = opacity + increment;

                    if (opacity > 1) {
                        window.clearInterval(instance);
                        gameLogic.selectedAttribute = attributeName;
                        gameLogic.selectedSide = playerNumber;
                        gameLogic.handleProceedToNextGameState()
                    }
                },
                10,
                overlayImg);

            gameLogic.selectedAttribute = attributeName;
        }
    }

    static handleAttributeMouseEnter(overlayImg, attributeName, gameLogic, playerNumber) {
        if (gameLogic.selectedAttribute === attributeName) {
            Deck.setAttributeOverlaySelectedAndHovered(overlayImg, gameLogic, playerNumber)
        } else if (gameLogic.selectedAttributeAi === attributeName) {
            Deck.setAttributeOverlayChooseHigherHovered(overlayImg, attributeName)
        } else {
            Deck.setAttributeOverlayHovered(overlayImg, attributeName)
        }
    }

    static handleAttributeMouseLeave(overlayImg, attributeName, gameLogic, playerNumber) {
        if (gameLogic.selectedAttribute === attributeName) {
            Deck.setAttributeOverlaySelected(overlayImg, gameLogic, playerNumber)
        } else if (gameLogic.selectedAttributeAi === attributeName) {
            Deck.setAttributeOverlayChooseHigher(overlayImg, attributeName)
        } else {
            Deck.setAttributeOverlayRegular(overlayImg, attributeName)
        }
    }

    static setAttributeOverlayRegular(overlayImg) {
        overlayImg.src = "assets/attribute_hovered.svg"
        overlayImg.style.visibility = "visible"
        overlayImg.style.opacity = "0"
    }

    static setAttributeOverlayHidden(overlayImg) {
        overlayImg.src = "assets/attribute_hovered.svg"
        overlayImg.style.visibility = "hidden"
        overlayImg.style.opacity = "0"
    }

    static setAttributeOverlaySelected(overlayImg, gameLogic, playerNumber) {
        if(gameLogic.currentWinnerNumber === playerNumber) {
            Deck.setAttributeOverlayCorrect(overlayImg)
        }
        else {
            Deck.setAttributeOverlayWrong(overlayImg)
        }
    }

    static setAttributeOverlayCorrect(overlayImg) {
        overlayImg.src = "assets/attribute_correct.svg"
        overlayImg.style.visibility = "visible"
        overlayImg.style.opacity = "1"
    }

    static setAttributeOverlayWrong(overlayImg) {
        overlayImg.src = "assets/attribute_wrong.svg"
        overlayImg.style.visibility = "visible"
        overlayImg.style.opacity = "1"
    }

    static setAttributeOverlayChooseHigher(overlayImg) {
        overlayImg.src = "assets/attribute_choose_higher.svg"
        overlayImg.style.visibility = "visible"
        overlayImg.style.opacity = "1"
    }

    static setAttributeOverlayHovered(overlayImg) {
        overlayImg.src = "assets/attribute_hovered.svg"
        overlayImg.style.visibility = "visible"
        overlayImg.style.opacity = "1"
    }

    static setAttributeOverlaySelectedAndHovered(overlayImg, gameLogic, playerNumber) {
        //overlayImg.src = "assets/attribute_selected_and_hovered.svg"
        if(gameLogic.currentWinnerNumber === playerNumber) {
            overlayImg.src = "assets/attribute_correct_hovered.svg"
        }
        else {
            overlayImg.src = "assets/attribute_wrong_hovered.svg"
        }
    }

    static setAttributeOverlayChooseHigherHovered(overlayImg) {
        overlayImg.src = "assets/attribute_choose_higher_hovered.svg"
    }

    addOverlayImg(cardHolder, attributeName, gameLogic, playerNumber) {
        const id = Deck.getOverlayImgId(cardHolder, attributeName)

        const overlayImg = document.createElement('img')
        overlayImg.id = id
        overlayImg.className = attributeName + "_overlay"

        overlayImg.onmouseenter = function () {
            Deck.handleAttributeMouseEnter(overlayImg, attributeName, gameLogic, playerNumber)
        }

        overlayImg.onmouseleave = function () {
            Deck.handleAttributeMouseLeave(overlayImg, attributeName, gameLogic, playerNumber)
        }
        

        cardHolder.appendChild(overlayImg)

        Deck.setAttributeOverlayHidden(overlayImg, attributeName)

        this.addAttributeLabel(attributeName, cardHolder);

        this.addAttributeSelectionIndicator(attributeName, cardHolder);
    }

    addAttributeLabel(attributeName, cardHolder) {
        let labelElement = document.createElement('div')
        labelElement.className = attributeName + "_label"

        let labelElementImg = document.createElement('img')
        labelElementImg.className = attributeName + "_label_img"

        let imagePath = "";
        switch (attributeName) {
            case "effectiveness":
                imagePath = "pearl-index.svg"
                break;
            case "sti-protection":
                imagePath = "sti-protection.svg"
                break;
            case "cost":
                imagePath = "costs.svg"
                break;
            case "accessibility":
                imagePath = "accessibility.svg"
                break;
            case "side-effects":
                imagePath = "side-effects.svg"
                break;
            default:
                break;
        }
        labelElementImg.src = "assets/cards/card-labels/" + imagePath

        labelElement.appendChild(labelElementImg)
        cardHolder.appendChild(labelElement)
    }

    addAttributeSelectionIndicator(attributeName, cardHolder) {
        let indicatorPositionWrapper = document.createElement('div')
        indicatorPositionWrapper.className = attributeName + "_overlay"
        indicatorPositionWrapper.id = Deck.getOverlayImgIndicatorId(cardHolder, attributeName)
        indicatorPositionWrapper.style.display = "none"

        let wrapper = document.createElement('div')
        wrapper.id = "wrapper"

        let pulsingHeart = document.createElement('div')
        pulsingHeart.id = "pulsingHeart"

        wrapper.appendChild(pulsingHeart)
        indicatorPositionWrapper.appendChild(wrapper)
        cardHolder.appendChild(indicatorPositionWrapper)
    }

    static getOverlayImgId(cardHolder, attributeName) {
        return cardHolder.id + "_" + attributeName + "_overlay";
    }

    addAttributeStatsLabel(cardHolderId, attributeName) {
        const attributeLabelDiv = document.createElement('div')
        attributeLabelDiv.className = attributeName;
        attributeLabelDiv.id = Deck.getAttributeLabelId(cardHolderId, attributeName);
        attributeLabelDiv.innerHTML = attributeName;

        const cardHolder = document.getElementById(cardHolderId);
        cardHolder.appendChild(attributeLabelDiv)
    }

    static getAttributeLabelId(cardHolderId, attributeName) {
        return cardHolderId + "_" + attributeName;
    }

    static getOverlayImageTitle(cardData, attributeName){
        return cardData[attributeName + "-text"]  // this is the text display when hovering over an attribute
    }

    static getOverlayImgIndicatorId(cardHolder, attributeName) {
        return this.getOverlayImgId(cardHolder, attributeName) + "_indicator";
    }
}