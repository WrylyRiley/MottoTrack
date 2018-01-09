const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const HabitController = require('./Controllers/HabitController')

const app = express()
const Router = express.Router()

var Post = require('../db/models/post')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Route for /posts, delivered through Api.js, linked with PostService.js

Router.route('/#/posts')
  .get(HabitController.postIndex)
  .post(HabitController.addPost)


app.listen(8081, _ => { console.log(`Listening on Port 8081`)})
