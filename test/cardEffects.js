
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
  console.log(game.players[0].hand)
  console.log(game.players[1].hand)
  //Assert
  t.deepEqual(game.players, expectedGame.players, 'should echange hands with targeted player')
})
