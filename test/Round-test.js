const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {
    let deck;
    let turn;
    let card1;
    let card2;
    let card3;
    let card4;
    let round;

    beforeEach(() => {
        card1 = new Card(
          1,
          "What allows you to define a set of related information using key-value pairs?",
          ["object", "array", "function"],
          "object"
        );
        card2 = new Card(
            2,
            "What is a comma-separated list of related values?",
            ["array", "object", "function"],
            "array"
          );
          card3 = new Card(
            3,
            "What type of prototype method directly modifies the existing array?",
            ["mutator method", "accessor method", "iteration method"],
            "mutator method"
          );
          card4 = new Card(
            4,
            "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
            ["mutator method", "accessor method", "iteration method"],
            "accessor method"
          );
          deck = new Deck([card1, card2, card3, card4]);
          turn = new Turn()
          round = new Round(deck);
      });

    it('Should be a function', () => {
        expect(Round).to.be.a('function')
    })

    it('Should be a new instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round)
    })

    it('Should be able to hold the deck of cards', () => {
        expect(round.deck).to.deep.equal([card1, card2, card3, card4])
    })

    it('Should be able to return the current card', () => {
        const currentCard = round.returnCurrentCard()
        expect(currentCard).to.equal(card1)
    })

    it('Should increment with each turn taken', () => {
        round.takeTurn()
        round.takeTurn()
        round.takeTurn()
        round.takeTurn()
        expect(round.turns).to.equal(4)
    })

    it('Should add to incorrect guesses when the user gets it wrong', () => {
        round.takeTurn('guess')
        expect(round.incorrectGuesses.length).to.equal(1)
    })

    it('Should be able to check if the answer is correct or incorrect', () => {
        expect(round.takeTurn('object')).to.equal('Correct!')
        expect(round.takeTurn('guess')).to.equal('Nope! Try Again!')
    })

    it('Should return feedback', () => {
        let feedback = round.takeTurn()
        expect(feedback).to.equal('Nope! Try Again!')
    })

    it('Should calculate the total percent correct', () => {
        round.takeTurn('object')
        round.takeTurn('guess')

        expect(round.calculatePercentCorrect()).to.equal(50)
    })

    it('Should be able to end the round and give the player their correct percentage', () => {
        expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`)
    })
})