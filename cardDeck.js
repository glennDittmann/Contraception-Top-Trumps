"use strict"

import {GameState} from "./gameLogic.js";
import {ATTRIBUTES} from "./cardConstants.js";

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
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[0]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[1]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[2]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[3]);
            this.addAttributeStatsLabel(cardHolderId, ATTRIBUTES[4]);

            img = this.addCardImageImgElement(imageId, cardHolderId, gameLogic, playerNumber);
        }

        this.updateAllAttributeStatsAndVisuals(cardHolderId, currentCardData, playerNumber, gameLogic)

        img.src = currentCardData["path"]

        if ((cardHolderId === 'card-img-container2') && (gameLogic.gameState === GameState.ClassicWaiting)) {
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
        } else if (gameLogic.selectedAttributeAi !== "") {
            const cardHolder = document.getElementById(cardHolderId);
            const overlayImgId = Deck.getOverlayImgId(cardHolder, gameLogic.selectedAttributeAi);
            const overlayImg = document.getElementById(overlayImgId);
            Deck.setAttributeOverlayChooseHigher(overlayImg, gameLogic.selectedAttributeAi)
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

        Deck.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[0], currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[1], currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[2], currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[3], currentCardData, playerNumber, gameLogic)
        Deck.updateAttributeStatAndVisual(cardHolder, ATTRIBUTES[4], currentCardData, playerNumber, gameLogic)
    }

    static updateAttributeStatAndVisual(cardHolder, attributeName, currentCardData, playerNumber, gameLogic) {
        const isHidden = (playerNumber === 2) && (gameLogic.gameState === GameState.ClassicWaiting);

        const attributeLabelDivId = Deck.getAttributeLabelId(cardHolder.id, attributeName);
        const attributeLabelDiv = document.getElementById(attributeLabelDivId);
        attributeLabelDiv.innerHTML = isHidden ? "" : currentCardData[attributeName]

        const attributeOverlayId = Deck.getOverlayImgId(cardHolder, attributeName);
        const overlayImage = document.getElementById(attributeOverlayId);

        if (isHidden) {
            Deck.setAttributeOverlayHidden(overlayImage, attributeName)
        } else {
            Deck.setAttributeOverlayRegular(overlayImage, attributeName)
        }
    }

    static handleAttributeClick(overlayImg, attributeName, gameLogic, playerNumber) {
        if ((gameLogic.gameState === GameState.ClassicWaiting) ||
            (gameLogic.gameState === GameState.ChooseLowerWaiting)) {

            if (gameLogic.gameState === GameState.ChooseLowerWaiting) {
                if (attributeName !== gameLogic.selectedAttributeAi) {
                    return
                }
                Deck.setAttributeOverlayChooseHigher(overlayImg, attributeName)
            } else if (gameLogic.gameState === GameState.ClassicWaiting) {
                Deck.setAttributeOverlaySelected(overlayImg, attributeName)
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
            Deck.setAttributeOverlaySelectedAndHovered(overlayImg, attributeName)
        } else if (gameLogic.selectedAttributeAi === attributeName) {
            Deck.setAttributeOverlayChooseHigherHovered(overlayImg, attributeName)
        } else {
            Deck.setAttributeOverlayHovered(overlayImg, attributeName)
        }
    }

    static handleAttributeMouseLeave(overlayImg, attributeName, gameLogic) {
        if (gameLogic.selectedAttribute === attributeName) {
            Deck.setAttributeOverlaySelected(overlayImg, attributeName)
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

    static setAttributeOverlaySelected(overlayImg) {
        overlayImg.src = "assets/attribute_selected.svg"
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

    static setAttributeOverlaySelectedAndHovered(overlayImg) {
        overlayImg.src = "assets/attribute_selected_and_hovered.svg"
    }

    static setAttributeOverlayChooseHigherHovered(overlayImg) {
        overlayImg.src = "assets/attribute_choose_higher_hovered.svg"
    }

    addOverlayImg(cardHolder, attributeName, gameLogic, playerNumber, clickable = true, hoverable = true) {
        const id = Deck.getOverlayImgId(cardHolder, attributeName)

        const overlayImg = document.createElement('img')
        overlayImg.id = id
        overlayImg.className = attributeName + "_overlay"

        if (clickable) {
            overlayImg.onclick = function () {
                Deck.handleAttributeClick(overlayImg, attributeName, gameLogic, playerNumber)
            }
        }

        if (hoverable) {
            overlayImg.onmouseenter = function () {
                Deck.handleAttributeMouseEnter(overlayImg, attributeName, gameLogic, playerNumber)
            }

            overlayImg.onmouseleave = function () {
                Deck.handleAttributeMouseLeave(overlayImg, attributeName, gameLogic)
            }
        }

        cardHolder.appendChild(overlayImg)
        Deck.setAttributeOverlayHidden(overlayImg, attributeName)
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