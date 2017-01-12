function drawCard (deck, player) {
  const cardSlot = Math.floor(Math.random() * deck.length)
  const draw = deck[cardSlot]
  deck.splice(cardSlot, 1)
  player.hand.push(draw)
}

module.exports = drawCard
