const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

var Posts = require('../db/models/post')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Disabled caching I think? DBs fetched weren't updating Vue, so I had to add this.
app.disable('etag')

app.get('/', (req, res) => {
  res.send({ message: 'hello from the server!' })
})

// make this a modal with vuetify
app.post('/posts', (req, res) => {
  var title = req.body.title
  var motto = req.body.motto
  var description = req.body.description

  var newPost = new Posts({
    title: title,
    motto: motto,
    description: description
  })

  newPost.save(error => {
    if (error) {
      console.log(error)
    }

    res.send({
      success: true,
      message: 'Successfully added!'
    })
  })
})

app.get('/posts/:id', (req, res) => {
  Tabs.findById(req.params.id, (error, post) => {
    if (error) {
      console.log(error)
    }
    res.send(post)
  })
})

app.put('/posts/:id', (req, res) => {
  Tabs.findById(req.params.id, (error, post) => {
    if (error) {
      console.log(error)
    }

    post.title = title,
    post.motto = motto,
    post.description = description
  })

  post.save(error => {
    if (error) {
      console.log(error)
    }
    res.send({ success: true })
  })
})

app.delete('/posts/:id', (req, res) => {
  Tabs.findById(req.params.id, (error, post) => {
    if (error) {
      console.log(error)
    }
  }).remove()
})

app.listen(process.env.PORT || 8081, _ => {
  console.log(`Listening on Port 8081`)
})
