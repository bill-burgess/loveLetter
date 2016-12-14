var {guardEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect} = require('./cardEffects.js')

var guard = {name: 'guard', effect: guardEffect, rank: 1}
var priest = {name: 'priest', effect: priestEffect, rank: 2}
var baron = {name: 'baron', effect: baronEffect, rank: 3}
var handmaid = {name: 'handmaid', effect: handmaidEffect, rank: 4}
var prince = {name: 'prince', effect: princeEffect, rank: 5}
var king = {name: 'king', effect: kingEffect, rank: 6}
var countess = {name: 'countess', effect: countessEffect, rank: 7}
var princess = {name: 'princess', effect: princessEffect, rank: 8}

var newDeck = [guard, guard, guard, guard, guard, priest, priest, baron, baron, handmaid, handmaid, prince, prince, king, countess, princess]

module.exports = {newDeck}
