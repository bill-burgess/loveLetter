const {guardEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect} = require('./cardEffects.js')

const guard = {name: 'guard', effect: guardEffect, rank: 1}
const priest = {name: 'priest', effect: priestEffect, rank: 2}
const baron = {name: 'baron', effect: baronEffect, rank: 3}
const handmaid = {name: 'handmaid', effect: handmaidEffect, rank: 4}
const prince = {name: 'prince', effect: princeEffect, rank: 5}
const king = {name: 'king', effect: kingEffect, rank: 6}
const countess = {name: 'countess', effect: countessEffect, rank: 7}
const princess = {name: 'princess', effect: princessEffect, rank: 8}

const newDeck = [guard, guard, guard, guard, guard, priest, priest, baron, baron, handmaid, handmaid, prince, prince, king, countess, princess]

module.exports = newDeck
