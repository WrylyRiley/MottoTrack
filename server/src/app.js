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

app.get('/posts', (req, res) => {
  Posts.find({})
        .then(posts => {
            res.send(posts)
        })
        .catch(err => {
            console.log(err)
        })
})

// make this a modal with vuetify
app.post('/posts', (req, res) => {
  Posts.create(req.body).then(res.send(req.body))
})

app.get('/posts/:id', (req, res) => {
  Posts.findById(req.params.id, (error, post) => {
    if (error) {
      console.log(error)
    }
    res.send(post)
  })
})

app.put('/posts/:id', (req, res) => {
  Posts.findById(req.params.id, (error, post) => {
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
  Posts.findOneAndRemove({"_id": req.params.id}, (error, post) => {
    if (error) {
      console.log(error)
    }
  }).then(res.send({msg: "success"}))
})

app.listen(process.env.PORT || 8081, _ => {
  console.log(`Listening on Port 8081`)
})
