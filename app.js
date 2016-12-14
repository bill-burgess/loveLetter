var {drawCard, setPlayers, newGame, startTurn, playCard, checkWin} = require('./db/functions')
var express = require('express')
var expresshbs = require('express-handlebars')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

app.engine('handlebars', expresshbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

var game = null

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/game', (req, res) => {
  game = newGame(['bot1', 'bot2', 'bot3', req.body.name])
  res.redirect('/game')
})

app.get('/game', (req, res) => {
  console.log(game)
  res.render('game', game.players[3])
})

var PORT = 3000

app.listen(PORT, console.log('server started on port: ', PORT))
