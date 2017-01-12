const test = require('ava')
const {guardEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect} = require('../db/cardEffects')
const {setPlayers, newGame, startTurn, playCard, checkWin} = require('../db/functions')
const drawCard = require('../db/drawCard')
const newDeck = require('../db/db')

test('newGame | creates a game object with selected players and deals cards from a new deck', (t) => {
  t.plan()

  //Arrange
  const playerNames = ['Tom', 'Dick', 'Harry']

  //Act
  newGame(playerNames)
  
})
