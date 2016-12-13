var newDeck = require('./db.js')

var deck = newDeck

function drawCard(deck){
  var cardSlot = Math.floor(Math.random() * deck.length)
  draw = deck[cardSlot]
  deck.splice(cardSlot, 1)
  return draw
}

console.log(drawCard(deck))
console.log(deck)
