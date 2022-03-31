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
}


class Card
{
    constructor(values)
    {
        this.values = values 
    }

    compare(a, b)
    {
        return 0
    }
}
