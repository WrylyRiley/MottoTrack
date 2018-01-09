const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
import HabitController from './Controllers/HabitController'

const app = express()

// Shorter method of initializing a connection to a database
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/posts', { useMongoClient: true })
mongoose.Promise = Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(callback) {
  console.log('Connection Succeeded')
})

var Post = require('../db/models/post')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Route for /posts, delivered through Api.js, linked with PostService.js

app.route('/').get()


app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })

  Post.create(new_post).then(
    res.send({
      success: true,
      message: 'Post saved successfully'
    })
  ).catch (err =>
  console.error(err))
})

app.listen(process.env.PORT || 8081)
