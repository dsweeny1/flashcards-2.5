const { createPromptModule } = require('inquirer');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.round;
  }

  createCards() {
    const card = new Card(prototypeQuestions)
    let cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    this.cards = cards
    return cards
  }

  createDeck() {
    let deck = new Deck(this.createCards())
    return deck
  }

  createNewRound() {
    let round = new Round(this.createDeck())
    return round
  }

  start() {
    this.createNewRound() 
    this.printMessage(this.createDeck(), this.createNewRound());
    this.printQuestion(this.createNewRound());
  }
  
  printQuestion(round) {
      util.main(round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

}

module.exports = Game;