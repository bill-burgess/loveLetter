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
    return players.push(newPlayer(playerName, i))
  })
}

var deck = newDeck

function drawCard(deck, playerName){

  var cardSlot = Math.floor(Math.random() * deck.length)
  draw = deck[cardSlot]
  deck.splice(cardSlot, 1)
  player.hand.push(draw)
}

// function deal(deck, players){
//   var discard = []
//
// }

var players = setPlayers(['Bill', 'Dave', 'Steve'])
console.log(players)
console.log(deck)
