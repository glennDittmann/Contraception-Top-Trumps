// TODO: add comparison for chosen cagtegory
// TODO: add backside of card
// TODO: reveal opponent card, when category was chosen

export default class Deck
{
    constructor(cards, gameLogic)
    {
        this.cards = cards
        this.gameLogic = gameLogic


    }

    getNumCards()
    {
        return this.cards.length
    }
    
    shuffle()
    {
        // this.cards.sort((a,b) => Math.random() - .5) apparently this is not perfectly randomized... https://www.youtube.com/watch?v=NxRwIZWjLtE at 9:40
        for(let i = this.getNumCards() - 1; i > 0; i--)
        {
            const newIdx = Math.floor(Math.random() * (i + 1))  // a new position between 0 and i
            const oldCard = this.cards[newIdx]
            this.cards[newIdx] = this.cards[i]
            this.cards[i] = oldCard
        }
    }


    split()
    {
        const deck1 = new Deck(this.cards.slice(0, this.getNumCards() / 2), this.gameLogic);
        const deck2 = new Deck(this.cards.slice(this.getNumCards() / 2, this.getNumCards()), this.gameLogic);

        return {deck1, deck2}
    }


    updateCardHolder(id, gameLogic)
    {
        let currentCardData = this.cards[0];

        // displays the top card, here the first card in the array
        const img = document.createElement('img')
        img.src = currentCardData["path"]
        img.className = "card-image"

        if(this.cards[0].hasOwnProperty("path"))
        {
            img.src = currentCardData["path"]
        }
        else
        {
            img.src = "assets/unknown.svg"
        }

        const cardHolder = document.getElementById(id);
        cardHolder.appendChild(img)

        let children = cardHolder.children;
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

    addOverlayImg(cardHolder, className, gameLogic)
    {
        function handleAttributeHover(overlayImg, className)
        {
            overlayImg.src = "assets/attribute_hovered.svg"
            overlayImg.className = className + "_hovered"
        }

        function handleAttributeClick(overlayImg, className, gameLogic)
        {
            overlayImg.src = "assets/attribute_selected.svg"
            overlayImg.className = className + "_selected"

            const increment = 0.045;
            let opacity = 0;
            overlayImg.style.opacity = opacity
            const instance = window.setInterval(function (overlayImg)
                {
                    overlayImg.style.opacity = opacity
                    opacity = opacity + increment;
                    if (opacity > 1)
                    {
                        window.clearInterval(instance);
                        gameLogic.chooseAttribute(className)
                    }
                }, 10, overlayImg);
        }

        const id = cardHolder.id + "_" + className + "_overlay"

        const overlayImg = document.createElement('img')
        overlayImg.id = id
        overlayImg.onclick = function(){handleAttributeClick(overlayImg, className, gameLogic)}
        overlayImg.onmouseenter = function(){handleAttributeHover(overlayImg, className)}
        cardHolder.appendChild(overlayImg)
        handleAttributeHover(overlayImg, className)
    }

    compEffectiveness(a, b)
    {
        return a <= b;  // a smaller pearl-index is better
    }

    compSTIprotection(a, b)
    {
        return a >= b;
    }

    compCost(a, b)
    {
        return a <= b;
    }

    compAccessibility(a, b)
    {
        return a >= b;
    }

    compSideEffects(a, b)
    {
        return a <= b;
    }
}