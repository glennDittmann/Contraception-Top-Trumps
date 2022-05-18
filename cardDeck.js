"use strict"

import {GameState} from "./gameLogic.js";

export default class Deck {
    constructor(cards, gameLogic) {
        this.cards = cards
        this.gameLogic = gameLogic
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
            this.addAttributeStatsLabel(cardHolderId, "effectiveness");
            this.addAttributeStatsLabel(cardHolderId, "sti-protection");
            this.addAttributeStatsLabel(cardHolderId, "cost");
            this.addAttributeStatsLabel(cardHolderId, "accessibility");
            this.addAttributeStatsLabel(cardHolderId, "side-effects");

            img = this.addCardImageImgElement(imageId, cardHolderId, gameLogic, currentCardData);
        }

        this.updateAllAttributeStatsAndVisuals(cardHolderId, currentCardData, playerNumber, gameLogic)

        img.src = currentCardData["path"]

        if (cardHolderId === 'card-img-container2' && !gameLogic.isRevealed()) {
            img.src = "assets/card-backside.png"
        } else if (this.cards[0].hasOwnProperty("path")) {
            img.src = currentCardData["path"]
        } else {
            img.src = "assets/unknown.svg"
        }

        if (gameLogic.selectedAttribute !== "") {
            const cardHolder = document.getElementById(cardHolderId);
            const overlayImgId = Deck.getOverlayImgId(cardHolder, gameLogic.selectedAttribute);
            const overlayImg = document.getElementById(overlayImgId);
            Deck.setAttributeOverlaySelected(overlayImg, gameLogic.selectedAttribute)
        }
    }

    addCardImageImgElement(imageId, cardHolderId, gameLogic) {
        // displays the top card, here the first card in the array
        let img = document.createElement('img')
        img.className = "card-image"
        img.id = imageId;

        const cardHolder = document.getElementById(cardHolderId);
        cardHolder.appendChild(img)

        this.addOverlayImg(cardHolder, "effectiveness", gameLogic);
        this.addOverlayImg(cardHolder, "sti-protection", gameLogic);
        this.addOverlayImg(cardHolder, "cost", gameLogic);
        this.addOverlayImg(cardHolder, "accessibility", gameLogic);
        this.addOverlayImg(cardHolder, "side-effects", gameLogic);

        return img;
    }

    updateAllAttributeStatsAndVisuals(cardHolderId, currentCardData, playerNumber, gameLogic) {
        const cardHolder = document.getElementById(cardHolderId);

        Deck.updateAttributeStatAndVisual(cardHolder, "effectiveness", currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, "sti-protection", currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, "cost", currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, "accessibility", currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, "side-effects", currentCardData, playerNumber, gameLogic)
    }

    static updateAttributeStatAndVisual(cardHolder, attributeName, currentCardData, playerNumber, gameLogic) {
        const isHidden = (playerNumber === 2) && (gameLogic.gameState === GameState.ClassicWaitingForAttribute);

        const attributeLabelDivId = Deck.getAttributeLabelId(cardHolder.id, attributeName);
        const attributeLabelDiv = document.getElementById(attributeLabelDivId);
        attributeLabelDiv.innerHTML = isHidden ? "" : currentCardData[attributeName]

        const attributeOverlayId = Deck.getOverlayImgId(cardHolder, attributeName);
        const overlayImage = document.getElementById(attributeOverlayId);

        if (isHidden) {
            Deck.setAttributeOverlayRegular(overlayImage, attributeName)
        } else {
            Deck.setAttributeOverlayHovered(overlayImage, attributeName)
        }
    }

    static handleAttributeClick(overlayImg, attributeName, gameLogic) {
        if (gameLogic.gameState === 1) {
            Deck.setAttributeOverlaySelected(overlayImg, attributeName)

            const increment = 0.045;
            let opacity = 0;
            overlayImg.style.opacity = opacity
            const instance = window.setInterval(function (overlayImg) {
                    overlayImg.style.opacity = opacity
                    opacity = opacity + increment;
                    if (opacity > 1) {
                        window.clearInterval(instance);
                        gameLogic.selectedAttribute = attributeName;
                        gameLogic.handleProceedToNextGameState()
                    }
                },
                10,
                overlayImg);

            gameLogic.selectedAttribute = attributeName;
        }
    }

    static handleAttributeMouseEnter(overlayImg, attributeName, gameLogic) {
        if (gameLogic.selectedAttribute === attributeName)
        {
            Deck.setAttributeOverlaySelectedAndHovered(overlayImg, attributeName)
        }
        else
        {
            Deck.setAttributeOverlayHovered(overlayImg, attributeName)
        }
    }

    static handleAttributeMouseLeave(overlayImg, attributeName, gameLogic) {
        if (gameLogic.selectedAttribute === attributeName)
        {
            Deck.setAttributeOverlaySelected(overlayImg, attributeName)
        }
        else
        {
            Deck.setAttributeOverlayHovered(overlayImg, attributeName)
        }
    }

    static setAttributeOverlaySelected(overlayImg, attributeName) {
        overlayImg.src = "assets/attribute_selected.svg"
        overlayImg.className = attributeName + "_selected"
        overlayImg.style.visibility = "visible"
    }

    static setAttributeOverlayHovered(overlayImg, attributeName) {
        overlayImg.src = "assets/attribute_hovered.svg"
        overlayImg.className = attributeName + "_hovered"
        overlayImg.style.visibility = "visible"
    }

    static setAttributeOverlaySelectedAndHovered(overlayImg, attributeName) {
        overlayImg.src = "assets/attribute_selected_and_hovered.svg"
        overlayImg.className = attributeName + "_hovered"
        overlayImg.style.visibility = "visible"
    }

    static setAttributeOverlayRegular(overlayImg, attributeName) {
        overlayImg.src = "assets/attribute_hovered.svg"
        overlayImg.className = attributeName + "_hovered"
        overlayImg.style.visibility = "hidden"
    }

    addOverlayImg(cardHolder, attributeName, gameLogic, clickable = true, hoverable = true) {
        const id = Deck.getOverlayImgId(cardHolder, attributeName)

        const overlayImg = document.createElement('img')
        overlayImg.id = id

        if (clickable) {
            overlayImg.onclick = function () {
                Deck.handleAttributeClick(overlayImg, attributeName, gameLogic)
            }
        }

        if (hoverable) {
            overlayImg.onmouseenter = function () {
                Deck.handleAttributeMouseEnter(overlayImg, attributeName, gameLogic)
            }

            overlayImg.onmouseleave = function () {
                Deck.handleAttributeMouseLeave(overlayImg, attributeName, gameLogic)
            }
        }

        cardHolder.appendChild(overlayImg)
        Deck.setAttributeOverlayRegular(overlayImg, attributeName)
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
}