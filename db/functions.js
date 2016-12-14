var {newDeck, gaurdEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect} = require('./db.js')

var testNames = ['Bill', 'Joyce', 'Dave']

function newPlayer (playerName, index) {
  return {
    name: playerName,
    hand: [],
    playerPosition: index,
    immune: false
  }
}

function setPlayers (playerNames) {
  return playerNames.map((playerName, i) => {
    return newPlayer(playerName, i)
  })
}

function drawCard (deck, player) {
  var cardSlot = Math.floor(Math.random() * deck.length)
  var draw = deck[cardSlot]
  deck.splice(cardSlot, 1)
  player.hand.push(draw)
}

function deal (deck, players) {
  deck.splice(Math.floor(Math.random() * deck.length), 1)
  players.map(player => {
    drawCard(deck, player)
  })
}

function newGame (playerNames) {
  var game = {
    deck: newDeck,
    players: setPlayers(playerNames),
    playerTurn: Math.floor(Math.random() * playerNames.length)
  }
  deal(game.deck, game.players)
  return game
}

function startTurn (game) {
  drawCard(game.deck, game.players[game.playerTurn])
}

function playCard (game, cardPosInHand, targetedPlayer, guess) {
  var effect = game.players[game.playerTurn].hand[cardPosInHand].effect
  game.players[game.playerTurn].hand.splice(cardPosInHand, 1)
  effect(game, targetedPlayer, guess)
}

function checkWin (game) {
  var winner = null
  if (game.players.length === 1) {
    winner = game.players[0]
  }
  if (game.deck.length === 0) {
    winner = highestCard(game.players)
  }
  return winner
}

function highestCard (players) {
  var handValues = players.map(player => {
    return player.hand[0].rank
  })
  var highestCard = Math.max.apply(null, handValues)
  return players.filter(player => {
    return player.hand[0].rank === highestCard
  })
}

var game = newGame(testNames)
startTurn(game)
playCard(game, 1, 1, 'priest')
console.log(game)
