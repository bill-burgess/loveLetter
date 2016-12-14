function drawCard (deck, player) {
  var cardSlot = Math.floor(Math.random() * deck.length)
  var draw = deck[cardSlot]
  deck.splice(cardSlot, 1)
  player.hand.push(draw)
}

module.exports = drawCard
