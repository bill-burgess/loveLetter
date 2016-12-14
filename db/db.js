var gaurd = {name: 'gaurd', effect: gaurdEffect, rank: 1}
var priest = {name: 'priest', effect: priestEffect, rank: 2}
var baron = {name: 'baron', effect: baronEffect, rank: 3}
var handmaid = {name: 'handmaid', effect: handmaidEffect, rank: 4}
var prince = {name: 'prince', effect: princeEffect, rank: 5}
var king = {name: 'king', effect: kingEffect, rank: 6}
var countess = {name: 'countess', effect: countessEffect, rank: 7}
var princess = {name: 'princess', effect: princessEffect, rank: 8}

function gaurdEffect (game, targetedPlayer, guess) {
  console.log('Gaurd played')
  // Targeted player cannot be self and guess cannot be gaurd
  if (game.players[targetedPlayer].immune === false) {
    if (game.players[targetedPlayer].hand[0].name === guess) {
      game.players.splice(targetedPlayer, 1)
    }
  }
}

function priestEffect (game, targetedPlayer) {
  console.log('Priest played')
  // Targeted player cannot be self
  if (game.players[targetedPlayer].immune === false) {
  // Targeted player shows turn player their hand
  }
}

function baronEffect (game, targetedPlayer) {
  // Targeted player cannot be self
  console.log('Baron played')
  if (game.players[targetedPlayer].immune === false) {
      // Turn player and targeted player show each other their hands
    if (game.players[game.playerTurn].hand[0].rank > game.players[targetedPlayer].hand[0].rank) {
      game.players.splice(targetedPlayer, 1)
    } else if (game.players[targetedPlayer].hand[0].rank > game.players[game.playerTurn].hand[0].rank) {
      game.players.splice(game.playerTurn, 1)
    }
  }
}

function handmaidEffect (game) {
  console.log('Handmaid played')
  game.players[game.playerTurn].immune = true
}

function princeEffect () {
  console.log('Prince played')
}

function kingEffect () {
  console.log('King played')
}

function countessEffect (game) {
  console.log('Countess played')
}

function princessEffect (game) {
  console.log('Princess played')
  game.players.splice(game.playerTurn, 1)
}

var newDeck = [gaurd, gaurd, gaurd, gaurd, gaurd, priest, priest, baron, baron, handmaid, handmaid, prince, prince, king, countess, princess]

module.exports = {newDeck, gaurdEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect}
