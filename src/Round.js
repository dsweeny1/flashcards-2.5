const Turn = require("./Turn")

class Round {
    constructor(deck, currentCard) {
        this.deck = deck.cards,
        this.currentCard = currentCard,
        this.turns = 0,
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
           return (this.currentCard = this.deck[this.turns])
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.returnCurrentCard())
        this.turns++
        const feedback = turn.giveFeedback()
        if (feedback === 'Nope! Try Again!') {
            this.incorrectGuesses.push(this.currentCard.id)
        } 
        return feedback
    }

    calculatePercentCorrect() {
        const percent = this.turns - this.incorrectGuesses.length;
        const percentCorrect = parseFloat((percent / this.turns) * 100);
        return percentCorrect
    }

    endRound() {
        const message = `** Round over! ** You answered ${this.calculatePercentCorrect().toFixed(2)}% of the questions correctly!`;
        console.timeLog(`Game Run Time`)
        console.log(message)
        return message;
    }
}

module.exports = Round