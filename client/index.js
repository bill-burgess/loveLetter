const morphdom = require('morphdom')
const events = require('./events')
const Store = require('./store')
const view = require('./view')
const {setPlayers, newGame, startTurn, playCard, checkWin} = require('../db/functions')

const model = {game: newGame(''), location: ''}
const store = Store(model)
console.log(model.game.players)

document.addEventListener('DOMContentLoaded', (e) => {
  const root = document.querySelector('#app')

  events(store)
  store.subscribe((model) => {
    console.log('model:', model)

    morphdom(root, view(model))
  })
  morphdom(root, view(model))
})
