const mongoose = require('../connection')

const Tab = require('./TabSchema')

const UserSchema = new mongoose.Schema({
  name: String,
  isAdmin: Boolean,
  userID: String,
  passHash: String,
  favoriteTabs: [Tab],
  prefs: Prefs
})
