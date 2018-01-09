// import Habit from '../../db/models/HabitSchema'
var Post = require('../../db/models/post')

function postIndex(req, res) {
  console.log('Before index search')
  Post.find({})
    .then(posts => res.send({posts: posts}))
    .catch(err => console.log(err))
}

function addPost (req, res) {
  console.log("Adding post to DB")
  var title = req.body.title
  var description = req.body.description

  var newPost = new Post({
    title: title,
    description: description
  })

  Post.create(newPost)
    .then(res.send({
      success: true,
      message: "Post Saved Successfully!"
    }))
    .catch(err => console.error(err))
}


module.exports = {
  postIndex : postIndex,
  addPost : addPost
}
