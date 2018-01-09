const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Shorter method of initializing a connection to a database
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:12491/posts')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function(callback) {
  console.log('Connection Succeeded')
})

var Post = require('../models/post')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Route for /posts, delivered through Api.js, linked with PostService.js
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', (err, posts) => {
    if (err) { console.error(err)}
    res.send ({
      posts: posts
    })
  }).sort({_id:-1})
})

app.post('/posts', (req, res) => {
  var db = req.db
  var title = req.body.title
  var description = req.body.description
  var newPost = new Post({
    title: title,
    description: description
  })

  newPost.save(err => {
    if (err) {
      console.log(err)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

app.post 
app.listen(process.env.PORT || 8081)
