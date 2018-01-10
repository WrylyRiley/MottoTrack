const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

var Posts = require('../db/models/post')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.disable('etag')


// Route for /posts, delivered through Api.js, linked with PostService.js

app.get ('/', (req, res) => {
  res.send({message: "hello from the server!"})
})

app.get('/habits', (req, res) => {
  
})

// app.get('/posts', (req, res) => {
//   Posts.find({})
//     .then(posts => res.send({ posts: posts }))
//     .catch(err => console.log(err))
// })

// app.post('/posts', (req, res) => {
//   var db = req.db
//   var title = req.body.title
//   var description = req.body.description
//   var new_post = new Posts({
//     title: title,
//     description: description
//   })

//   new_post.save(error => {
//     if (error) {
//       console.log(error)
//     }
//     res.send({
//       success: true,
//       message: 'Post saved successfully'
//     })
//   })
// })

app.listen(process.env.PORT || 8081, _ => {
  console.log(`Listening on Port 8081`)
})
