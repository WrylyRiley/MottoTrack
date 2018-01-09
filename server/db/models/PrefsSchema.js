const mongoose = require('../connection')

const PreferenceSchema = new mongoose.Schema({
  colorScheme: String,
  quotesChoice: String
})

module.exports = mongoose.model('Prefs', PreferenceSchema)
