
const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/posts', {useMongoClient: true}).then(_ => {"Connected to MongoDB"}, err => {"No way, Jose. I couldn't connect"})


module.exports = mongoose
