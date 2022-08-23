const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game')

describe('Game', function() {

    let game;
    let deck;
    let round;

    beforeEach(() => {
        game = new Game()
        deck = new Deck()
        round = new Round(deck)
    })

    it('Should be a function', () => {
        expect(Game).to.be.a('function')
    })

    it('Should be an instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game)
    })

    it('Should create the cards at the start of a new game', () => {
        const newCards = game.createCards()
        expect(newCards).to.be.an('array')
    })

    it('Should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck)
    })

    it('Should instantiate a new Round', () => {
        expect(round).to.be.an.instanceOf(Round)
    })

    it('Should create a new deck with each round', () => {
        expect(game.createNewRound()).to.be.an('object')
    })
})