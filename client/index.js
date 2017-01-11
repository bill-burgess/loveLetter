const morphdom = require('morphdom')
const events = require('./events')
const Store = require('./store')
const view = require('./view')

const model = {game: [], location: ''}
const store = Store(model)

document.addEventListener('DOMContentLoaded', (e) => {
  const root = document.querySelector('#app')

  events(store)
  store.subscribe((model) => {
    console.log('model:', model)

    morphdom(root, view(model))
  })
})
