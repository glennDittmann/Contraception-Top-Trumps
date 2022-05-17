"use strict"

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


    updateCardHolder(id, gameLogic) {
        let currentCardData = this.cards[0];

        let imageId = id + "_card-image";

        let img = document.getElementById(imageId);
        if (img == null) {
            img = this.addCardImageImgElement(imageId, id, gameLogic, currentCardData);
        }

        img.src = currentCardData["path"]
        
        if (id === 'card-img-container2' && !gameLogic.isRevealed()) {
            img.src = "assets/card-backside.png"
        } else if (this.cards[0].hasOwnProperty("path")) {
            img.src = currentCardData["path"]
        } else {
            img.src = "assets/unknown.svg"
        }

        if (gameLogic.selectedAttribute != "") {
            const cardHolder = document.getElementById(id);
            const overlayImgId = this.GetOverlayImgId(cardHolder, gameLogic.selectedAttribute);
            const overlayImg = document.getElementById(overlayImgId);
            Deck.setAttributeOverlaySelected(overlayImg, gameLogic.selectedAttribute)
        }
    }

    addCardImageImgElement(imageId, id, gameLogic, currentCardData) {
        // displays the top card, here the first card in the array
        let img = document.createElement('img')
        img.className = "card-image"
        img.id = imageId;

        const cardHolder = document.getElementById(id);
        cardHolder.appendChild(img)

        let children = cardHolder.children;
        if (id === 'card-img-container1' || (id === 'card-img-container2' && gameLogic.isRevealed()) ) { 
            this.addOverlayImg(cardHolder, "effectiveness", gameLogic);
            this.addOverlayImg(cardHolder, "STI-protection", gameLogic);
            this.addOverlayImg(cardHolder, "cost", gameLogic);
            this.addOverlayImg(cardHolder, "accessibility", gameLogic);
            this.addOverlayImg(cardHolder, "side-effects", gameLogic);

            children[0].innerHTML = currentCardData["effectiveness"]
            children[1].innerHTML = currentCardData["STI-protection"]
            children[2].innerHTML = currentCardData["cost"]
            children[3].innerHTML = currentCardData["accessibility"]
            children[4].innerHTML = currentCardData["side-effects"]
        }

        return img;
    }

    static handleAttributeClick(overlayImg, attributeName, gameLogic) {
        console.log(gameLogic.gameState);
        if (gameLogic.gameState == 1){
            Deck.setAttributeOverlaySelected(overlayImg, attributeName)
    
            const increment = 0.045;
            let opacity = 0;
            overlayImg.style.opacity = opacity
            const instance = window.setInterval(function (overlayImg) {
                    overlayImg.style.opacity = opacity
                    opacity = opacity + increment;
                    if (opacity > 1) {
                        window.clearInterval(instance);
                        gameLogic.chooseAttribute(attributeName)
                    }
                },
                10,
                overlayImg);
    
            gameLogic.selectedAttribute = attributeName;
        }
    }

    static setAttributeOverlaySelected(overlayImg, attributeName) {
        overlayImg.src = "assets/attribute_selected.svg"
        overlayImg.className = attributeName + "_selected"
    }

    static handleAttributeHover(overlayImg, attributeName, gameLogic) {
            overlayImg.src = "assets/attribute_hovered.svg"
            overlayImg.className = attributeName + "_hovered"
    }

    addOverlayImg(cardHolder, attributeName, gameLogic, clickable = true, hoverable = true) {
        const id = this.GetOverlayImgId(cardHolder, attributeName)

        const overlayImg = document.createElement('img')
        overlayImg.id = id
        
        if(clickable) {
            overlayImg.onclick = function () {
                Deck.handleAttributeClick(overlayImg, attributeName, gameLogic)
            }
        }
        
        if(hoverable){
                overlayImg.onmouseenter = function () {
                    Deck.handleAttributeHover(overlayImg, attributeName, gameLogic)
                }
        }
        
        cardHolder.appendChild(overlayImg)
        Deck.handleAttributeHover(overlayImg, attributeName, gameLogic)
    }

    GetOverlayImgId(cardHolder, attributeName) {
        return cardHolder.id + "_" + attributeName + "_overlay";
    }

    AddAICardSelectedOverlay(gameLogic){
        const cardHolder = document.getElementById('card-img-container2');
        
        this.addOverlayImg(cardHolder, "effectiveness", gameLogic, false, false);
        this.addOverlayImg(cardHolder, "STI-protection", gameLogic, false, false);
        this.addOverlayImg(cardHolder, "cost", gameLogic, false, false);
        this.addOverlayImg(cardHolder, "accessibility", gameLogic, false, false);
        this.addOverlayImg(cardHolder, "side-effects", gameLogic, false, false);
    }
}