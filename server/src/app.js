const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

var Tabs = require('../db/models/TabSchema')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Disabled caching I think? DBs fetched weren't updating Vue, so I had to add this.
app.disable('etag')

app.get('/', (req, res) => {
  res.send({ message: 'hello from the server!' })
})

// make this a modal with vuetify
app.post('/tabs', (req, res) => {
  var title = req.body.title
  var artist = req.body.artist
  var genre = req.body.genre
  var album = req.body.album
  var albumImageURL = req.body.albumImageURL
  var youtubeID = req.body.youtubeID
  var lyrics = req.body.lyrics
  var tab = req.body.tab

  var newTab = new Tabs({
    title: title,
    artist: artist,
    genre: genre,
    album: album,
    albumImageURL: albumImageURL,
    youtubeID: youtubeID,
    lyrics: lyrics,
    tab: tab
  })

  newTab.save(error => {
    if (error) {
      console.log(error)
    }

    res.send({
      success: true,
      message: 'Successfully added!'
    })
  })
})

app.get('/tabs/:id', (req, res) => {
  Tabs.findById(req.params.id, (error, tablature) => {
    if (error) {
      console.log(error)
    }
    res.send(tablature)
  })
})

app.put('/tabs/:id', (req, res) => {
  Tabs.findById(req.params.id, (error, tablature) => {
    if (error) {
      console.log(error)
    }

    tablature.title = req.body.title
    tablature.artist = req.body.artist
    tablature.genre = req.body.genre
    tablature.album = req.body.album
    tablature.albumImageURL = req.body.albumImageURL
    tablature.youtubeID = req.body.youtubeID
    tablature.lyrics = req.body.lyrics
    tablature.tab = req.body.tab
  })

  tab.save(error => {
    if (error) {
      console.log(error)
    }
    res.send({ success: true })
  })
})

app.delete('/tabs/:id', (req, res) => {
  Tabs.findById(req.params.id, (error, tablature) => {
    if (error) {
      console.log(error)
    }
  }).remove()
})

app.listen(process.env.PORT || 8081, _ => {
  console.log(`Listening on Port 8081`)
})
