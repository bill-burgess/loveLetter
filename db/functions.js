var {newDeck} = require('./db.js')

var deck = newDeck
var players = setPlayers(['Bill', 'Dave', 'Steve'])

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

function deal(deck, players){
  deck.splice(Math.floor(Math.random() * deck.length), 1)
  players.map(player => {
    drawCard(deck, player)
  })
}


deal(deck, players)
console.log(players)
console.log(deck)
