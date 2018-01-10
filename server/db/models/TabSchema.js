const mongoose = require('../connection')

const TabSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumImageURL: String,
  youtubeID: String,
  lyrics: String,
  tab: String
})

module.exports = mongoose.model('Tab', TabSchema)
