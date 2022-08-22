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
        } if (this.turns === 30) {
            console.log(this.endRound())
        }
        return feedback
    }

    calculatePercentCorrect() {
        const percent = this.turns - this.incorrectGuesses.length;
        const percentCorrect = (percent / this.turns) * 100;
        return percentCorrect
    }

    endRound() {
        const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        return message;
    }
}

module.exports = Round