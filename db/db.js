var gaurd = {name: 'gaurd', effect: gaurdEffect}
var priest = {name: 'priest', effect: priestEffect}
var baron = {name: 'baron', effect: baronEffect}
var handmaid = {name: 'handmaid', effect: handmaidEffect}
var prince = {name: 'prince', effect: princeEffect}
var king = {name: 'king', effect: kingEffect}
var countess = {name: 'countess', effect: countessEffect}
var princess = {name: 'princess', effect: princessEffect}

function gaurdEffect(){
  console.log('Gaurd played')
}

function priestEffect(){
  console.log('Priest played')
}

function baronEffect(){
  console.log('Baron played')
}

function handmaidEffect(){
  console.log('Handmaid played')
}

function princeEffect(){
  console.log('Prince played')
}

function kingEffect(){
  console.log('King played')
}

function countessEffect(){
  console.log('Countess played')
}

function princessEffect(){
  console.log('Princess played')
}

var newDeck = [gaurd, gaurd, gaurd, gaurd, gaurd, priest, priest, baron, baron, handmaid, handmaid, prince, prince, king, countess, princess]

module.exports = {newDeck, gaurdEffect, priestEffect, baronEffect, handmaidEffect, princeEffect, kingEffect, countessEffect, princessEffect}
