const Post = require("../models/PostSchema"),
    seedData = require("./seeds.json")

Post.remove({})
    .then(_ => {
        return Post.collection.insert(seedData)
    })
    .then(_ => {
        process.exit()
    })
