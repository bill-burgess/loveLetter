var {newDeck} = require('./db.js')

function newPlayer (playerName, index) {
  return {
    name: playerName,
    hand: [],
    playerPosition: index
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
