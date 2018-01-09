


app.get('/posts', (req, res) => {
  Post.find({}, 'title description', (err, posts) => {
    if (err) {
      console.error(err)
    }
    res.send({
      posts: posts
    })
  }).sort({ _id: -1 })
})
