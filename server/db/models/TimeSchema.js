const mongoose = require('../connection')

const TabSchema = new mongoose.Schema({
  Name: String,
  timeStamp: 
})

module.exports = mongoose.model('Tab', TabSchema)
