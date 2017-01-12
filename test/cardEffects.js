
const test = require('ava')
const {guardEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect} = require('../db/cardEffects')
const {setPlayers, newGame, startTurn, playCard, checkWin} = require('../db/functions')
const drawCard = require('../db/drawCard')
const newDeck = require('../db/db')

function makeGame () {
  return {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [], immune: false},
      {name: 'Dick', hand: [], immune: false},
      {name: 'Harry', hand: [], immune: false}
    ],
    playerTurn: 0
  }
}
const deck = newDeck

test('gaurdEffect | should not effect immune player', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[0]], immune: false},
      {name: 'Dick', hand: [deck[5]], immune: true},
      {name: 'Harry', hand: [deck[7]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[1].immune = true
  game.players[0].hand.push(deck[0]) // adds guard to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[7]) // adds baron to hand

  // Act
  guardEffect(game, 1, 'priest')

  // Assert
  t.deepEqual(expectedGame.players, game.players, 'should not eliminate targeted player on correct guess if targeted player is immune')
})


test('gaurdEffect | takes a targeted player and a guess and eliminates the player if the guess was correct', (t) => {
  t.plan(1)

  // Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[0]], immune: false},
      {name: 'Harry', hand: [deck[7]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[0].hand.push(deck[0]) // adds guard to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[7]) // adds baron to hand

  // Act
  guardEffect(game, 1, 'priest')

  // Assert
  t.deepEqual(expectedGame.players, game.players, 'should eliminate targeted player on correct guess')
})

//priest effect


test('baronEffect | should not effect immune player', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[7]], immune: false},
      {name: 'Dick', hand: [deck[5]], immune: true},
      {name: 'Harry', hand: [deck[15]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[1].immune = true
  game.players[0].hand.push(deck[7]) // adds baron to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  // Act
  baronEffect(game, 1)

  // Assert
  t.deepEqual(expectedGame.players, game.players, 'should not take effect if targeted player is immune')
})

test('baronEffect | takes a targeted player and eliminates the player with the lower ranked card', (t) => {
  t.plan(1)

  // Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[7]], immune: false},
      {name: 'Harry', hand: [deck[15]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[0].hand.push(deck[7]) // adds baron to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  // Act
  baronEffect(game, 1)

  // Assert
  t.deepEqual(expectedGame.players, game.players, 'should eliminate the player with the lower ranked card')
})

test('handmaidEffect | should make the turn player immune', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[9]], immune: true},
      {name: 'Dick', hand: [deck[5]], immune: false},
      {name: 'Harry', hand: [deck[15]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[0].hand.push(deck[9]) // adds handmaid to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  //Act
  handmaidEffect(game)

  //Assert
  t.deepEqual(game.players, expectedGame.players, 'should make the turn player immune')
})

test('princeEffect | should not effect immune player', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[11]], immune: false},
      {name: 'Dick', hand: [deck[5]], immune: true},
      {name: 'Harry', hand: [deck[15]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[1].immune = true
  game.players[0].hand.push(deck[11]) // adds prince to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  // Act
  princeEffect(game, 1)

  // Assert
  t.deepEqual(expectedGame.players, game.players, 'should not take effect if targeted player is immune')
})

test('princeEffect | should replace the card in the targeted players hand', (t) => {
  t.plan(3)
  //Arrange
  const game = makeGame()

  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[11]], immune: false},
      {name: 'Dick', hand: [deck[14]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[0].hand.push(deck[11]) // adds prince to hand
  game.players[1].hand.push(deck[14]) // adds countess to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  //Act
  princeEffect(game, 1)
  princeEffect(game, 2)
  //Assert
  t.notDeepEqual(game.players[1].hand[0], deck[14], 'card does not remain the same')
  t.deepEqual(Object.keys(game.players[1].hand[0]), ['name', 'effect', 'rank'], 'new card in targeted players hand should be a card object')
  t.deepEqual(game.players.length, expectedGame.players.length, 'should eliminate targeted player if they have princess')
})

test('kingEffect | should not effect immune player', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[13]], immune: false},
      {name: 'Dick', hand: [deck[5]], immune: true},
      {name: 'Harry', hand: [deck[15]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[1].immune = true
  game.players[0].hand.push(deck[13]) // adds king to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  // Act
  kingEffect(game, 1)

  // Assert
  t.deepEqual(expectedGame.players, game.players, 'should not take effect if targeted player is immune')
})

test('kingEffect | should exchange hands with targeted player', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Tom', hand: [deck[5]], immune: false},
      {name: 'Dick', hand: [deck[13]], immune: false},
      {name: 'Harry', hand: [deck[15]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[0].hand.push(deck[13]) // adds king to hand
  game.players[1].hand.push(deck[5]) // adds priest to hand
  game.players[2].hand.push(deck[15]) // adds princess to hand

  //Act
  kingEffect(game, 1)
  //Assert
  t.deepEqual(game.players, expectedGame.players, 'should echange hands with targeted player')
})

test('princessEffect | playing the princess should eliminate you from the game', (t) => {
  t.plan(1)

  //Arrange
  const game = makeGame()
  const expectedGame = {
    deck: newDeck,
    players: [
      {name: 'Dick', hand: [deck[13]], immune: false},
      {name: 'Harry', hand: [deck[1]], immune: false}
    ],
    playerTurn: 0
  }

  game.players[0].hand.push(deck[15]) // adds princess to hand
  game.players[1].hand.push(deck[13]) // adds king to hand
  game.players[2].hand.push(deck[1]) // adds guard to hand

  //Act
  princessEffect(game)
  //Assert
  t.deepEqual(game.players, expectedGame.players, 'should eliminate the turn player')
})
