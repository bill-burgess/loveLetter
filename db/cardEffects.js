const drawCard = require('./drawCard')

function getActivePlayer (game) {
  return game.players[game.playerTurn]
}

function guardEffect (game, targetedPlayerPos, guess) {
  console.log('Guard played')
  // Targeted player cannot be self and guess cannot be guard
  const targetedPlayer = game.players[targetedPlayerPos]

  if (targetedPlayer.immune === false) {
    if (targetedPlayer.hand[0].name === guess) {
      game.players.splice(targetedPlayerPos, 1)
    }
  }
}

function priestEffect (game, targetedPlayer) {
  console.log('Priest played')
  // Targeted player cannot be self
  if (!game.players[targetedPlayer].immune) {
  // Targeted player shows turn player their hand
  }
}

function baronEffect (game, targetedPlayerPos) {
  // Targeted player cannot be self
  const activePlayer = getActivePlayer(game)
  const targetedPlayer = game.players[targetedPlayerPos]

  const activeRank = activePlayer.hand[0].rank
  const targetRank = targetedPlayer.hand[0].rank

  console.log('Baron played')
  if (!targetedPlayer.immune) {
      // Turn player and targeted player show each other their hands
    if (activeRank === targetRank) return

    const playerIdToEliminate = (activeRank > targetRank)
      ? targetedPlayerPos
      : game.playerTurn

    game.players.splice(playerIdToEliminate, 1)
  }
}

function handmaidEffect (game) {
  console.log('Handmaid played')
  game.players[game.playerTurn].immune = true
}

function princeEffect (game, targetedPlayerPos) {
  console.log('Prince played')
  const targetedPlayer = game.players[targetedPlayerPos]

  if (!targetedPlayer.immune) {
    if (targetedPlayer.hand[0].name === 'princess') {
      game.players.splice(targetedPlayerPos, 1)
    }else{
      game.players[targetedPlayerPos].hand.splice(0, 1)
      drawCard(game.deck, game.players[targetedPlayerPos])
    }
  }
}

function kingEffect (game, targetedPlayerPos) {
  console.log('King played')
  // Targeted player cannnot be self
  const targetedPlayer = game.players[targetedPlayerPos]
  if (!targetedPlayer.immune) {
    game.players[game.playerTurn].hand.push(targetedPlayer.hand[0])
    targetedPlayer.hand.push(game.players[game.playerTurn].hand[0])
    game.players[targetedPlayerPos].hand.splice(0, 1)
    game.players[game.playerTurn].hand.splice(0, 1)
  }
}

function countessEffect (game) {
  console.log('Countess played')
}

function princessEffect (game) {
  console.log('Princess played')
  game.players.splice(game.playerTurn, 1)
}

module.exports = {guardEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect}
