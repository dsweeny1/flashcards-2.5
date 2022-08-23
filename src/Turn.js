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
        if (this.card.correctAnswer === this.userGuess) {
            return true
        } else {
            return false
        }
    }

    giveFeedback = () => {
        if (this.evaluateGuess() === true) {
            return `Correct!`
        } else {
            return `Nope! Try Again!`
        }
    }
}

module.exports = Turn;