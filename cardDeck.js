export default class Deck 
{
    constructor(cards) 
    {
        this.cards = cards
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
        var deck1 = new Deck(this.cards.slice(0, this.getNumCards()/2))
        var deck2 = new Deck(this.cards.slice(this.getNumCards()/2, this.getNumCards()))

        return {deck1, deck2}
    }

    display(id)
    {
        // displays the top card, here the first card in the array
        var img = document.createElement('img')
        img.src = this.cards[0]["path"]
        var holder = document.getElementById(id)
        holder.appendChild(img)
    }
}