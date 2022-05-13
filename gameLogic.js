import Deck from './cardDeck.js'

export default class GameLogic
{
    constructor()
    {
        this.revealed = false;

        function resizeWindow()
        {
            const scaleWidth = window.innerWidth / 1920
            const scaleHeight = window.innerHeight / 1080;
            const scale = Math.min(scaleHeight, scaleWidth)

            const gameCanvas = document.getElementById("game-canvas");
            gameCanvas.style.transform = 'scale(' + scale.toString() + ', ' + scale.toString() + ')';

            var paddingLeft = 150;
            if(scaleWidth > scaleHeight)
            {
                paddingLeft = 0.5 * (window.innerWidth - scaleHeight * (1920 - 300)) / scaleHeight;
            }
            gameCanvas.style.paddingLeft = paddingLeft + 'px';
        }

        window.onresize = resizeWindow

        resizeWindow()

    }

    init(deck)
    {
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

    chooseAttribute(name)
    {
        this.revealed = true;
        
        if(name == "effectiveness")
        {
            this.compEffectiveness();
        }

        if(name == "STI-protection")
        {
            this.compSTIprotection();
        }

        if(name == "cost")
        {
            this.compCost();
        }

        if(name == "accessibility")
        {
            this.compAccessibility();
        }

        if(name == "side-effects")
        {
            this.compSideEffects();
        }

        this.playerDeck.cards.shift()
        this.playerDeck.updateCardHolder('card1', this)

        this.aiDeck.cards.shift()
        this.aiDeck.updateCardHolder('card2', this)
    }

    isRevealed(){
        return this.revealed;
    }

    compEffectiveness()
    {
        return this.playerDeck.cards[0]["effectiveness"] <= this.aiDeck.cards[0]["effectiveness"];  // a smaller pearl-index is better
    }

    compSTIprotection()
    {
        return this.playerDeck.cards[0]["STI-protection"] >= this.aiDeck.cards[0]["STI-protection"];
    }

    compCost()
    {
        return this.playerDeck.cards[0]["cost"] <= this.aiDeck.cards[0]["cost"];
    }

    compAccessibility()
    {
        return this.playerDeck.cards[0]["accessibility"] >= this.aiDeck.cards[0]["accessibility"];
    }

    compSideEffects()
    {
        return this.playerDeck.cards[0]["side-effects"] <= this.aiDeck.cards[0]["side-effects"];
    }
}
