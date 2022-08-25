class Turn {
    constructor(guess, card) {
        this.userGuess = guess,
        this.card = card
    }

    returnGuess = () => {
        return this.userGuess
    }

    returnCard = () => {
        return this.card
    }

    evaluateGuess = () => {
        return this.card.correctAnswer === this.userGuess
    }

    giveFeedback = () => {
        if (this.evaluateGuess()) {
            return `Correct!`
        } else {
            return `Nope! Try Again!`
        }
    }
}

module.exports = Turn;