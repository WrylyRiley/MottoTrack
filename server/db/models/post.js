var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
  totle: String,
  description: String
})

var Post = mongoose.model("Post", PostSchema)

module.exports = Post
