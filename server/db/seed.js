const Post = require("../db/models/post"),
    seedData = require("./seeds.json")
    // seedHabits = require("./seedHabits.json")

Post.remove({})
    .then(_ => {
        return Post.collection.insert(seedData)
    })
    .then(_ => {
        process.exit()
    })

// const Habits = require("../db/models/HabitSchema"),
// seedData = require("./seeds.json")

// Habits.remove({})
//     .then(_ => {
//         return Habits.collection.insert(seedHabits)
//     })
//     .then(_ => {
//         process.exit()
//     })
