const express = require('express')
const route = express.Router()

module.exports = function (db) {
  // GET api/v1/game/
  route.get('/', get)
  route.post('/', post)

  function get (req, res, next) {
    db.find('game', {})
      .then((game) => {
        res.json({ data: game })
      })
      .catch(next)
  }

  function post (req, res, next) {
    db.add('game', req.body)
      .then((game) => {
        res.json({ data: game })
      })
      .catch(next)
  }

  return route
}
