const test = require('ava')
const {guardEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect} = require('../db/cardEffects')
const {setPlayers, newGame, startTurn, playCard, checkWin} = require('../db/functions')
const drawCard = require('../db/drawCard')
const newDeck = require('../db/db')

test('checkWin | should return the winner if the game is over or null if the game is still in play', (t) => {
  t.plan(3)

  //Arrange
  const game1 = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [newDeck[0]], immune: false},
      {name: 'Dick', hand: [newDeck[6]], immune: false},
      {name: 'Harry', hand: [newDeck[12]], immune: false}
    ],
    playerTurn: 0
  }

  const game2 = {
    deck: [],
    players: [
      {name: 'Tom', hand: [newDeck[0]], immune: false},
      {name: 'Dick', hand: [newDeck[6]], immune: false},
      {name: 'Harry', hand: [newDeck[12]], immune: false}
    ],
    playerTurn: 0
  }

  const game3 = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [newDeck[0]], immune: false}
    ],
    playerTurn: 0
  }

  //Act
  const win1 = checkWin(game1)
  const win2 = checkWin(game2)
  const win3 = checkWin(game3)

  //Assert
  t.is(win1, null, 'should return null if game is still in play')
  t.deepEqual(win2, {name: 'Harry', hand: [newDeck[12]], immune: false}, 'should return the player with the highest card if the deck is empty')
  t.deepEqual(win3, {name: 'Tom', hand: [newDeck[0]], immune: false}, 'should return the last remaining player if all others are eliminated')

})
