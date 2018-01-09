
const mongoose = require('mongoose')

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/posts', {useMongoClient: true})
}

mongoose.connection.on('error', console.error.bind(console, 'connection error')).once('open', function(callback) {
  console.log('Connection Succeeded')
})

mongoose.Promise = Promise

module.exports = mongoose
