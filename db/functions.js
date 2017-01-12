const {newDeck} = require('./db.js')
const drawCard = require('./drawCard')

function newPlayer (playerName) {
  return {
    name: playerName,
    hand: [],
    immune: false
  }
}

function setPlayers (playerNames) {
  return playerNames.map((playerName, i) => {
    return newPlayer(playerName, i)
  })
}

function deal (deck, players) {
  deck.splice(Math.floor(Math.random() * deck.length), 1)
  players.map(player => {
    drawCard(deck, player)
  })
}

function newGame (playerNames) {
  const game = {
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
  const effect = game.players[game.playerTurn].hand[cardPosInHand].effect
  game.players[game.playerTurn].hand.splice(cardPosInHand, 1)
  effect(game, targetedPlayer, guess)
}

function checkWin (game) {
  let winner = null
  if (game.players.length === 1) {
    winner = game.players[0]
  }
  if (game.deck.length === 0) {
    winner = highestCard(game.players)
  }
  return winner
}

function highestCard (players) {
  const handValues = players.map(player => {
    return player.hand[0].rank
  })
  const highestCard = Math.max.apply(null, handValues)
  const winner = players.filter(player => {
    return player.hand[0].rank === highestCard
  })
  return winner[0]
}

module.exports = {setPlayers, newGame, startTurn, playCard, checkWin}
