const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// SHorter method of initializing a connection to a database 
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:12491/posts')
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback) {
  console.log("Connection Succeeded")
})



app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Route for /posts, delivered through Api.js, linked with PostService.js
app.get('/posts', (req, res) => {
  res.send([
    {
      title: 'Hello World!',
      description: 'Hi There! How are you?'
    }
  ])
})

app.listen(process.env.PORT || 8081)


