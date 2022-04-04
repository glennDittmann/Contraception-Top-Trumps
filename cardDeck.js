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
        // 0 1 2 3 4 5 6 7 8 9  --> 10 cards: 10/2 = 5
        var cards1 = this.cards.slice(0, this.getNumCards()/2)
        var cards2 = this.cards.slice(this.getNumCards()/2, this.getNumCards())
        return {cards1, cards2}
    }

    display()
    {
        // displays the top card, here the first card in the array
        var img = document.createElement('img')
        img.src = this.cards[0]["path"]
        var holder = document.getElementById('card1')
        holder.appendChild(img)
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
    
