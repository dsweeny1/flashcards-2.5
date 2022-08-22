const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Turn', function() {
    let card3;
    let turn;
    let card;

    beforeEach(() => {
        card3 = new Card(
            2,
            "What type of prototype method directly modifies the existing array?",
            ["mutator method", "accessor method", "iteration method"],
            "mutator method"
          );
        turn = new Turn('mutator method', card3)
        card = new Card();
    })

    it('Should be a function', () => {
        expect(Turn).to.be.a('function')
    })

    it('Should be an instantiation of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn)
    })

    it('Should return the user/s guess', () => {
        expect(turn.userGuess).to.equal('mutator method')
    })

    it('Should return the user/s card', () => {
        expect(turn.card).to.equal(card3)
    })

    it('Should be able to evaluate the user/s guess', () => {
        expect(turn.evaluateGuess()).to.equal(true);
    })

    it('Should be able to give feedback', () => {
        expect(turn.giveFeedback()).to.equal(`You got it right!`)
    })
})