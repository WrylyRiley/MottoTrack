const mongoose = require('../connection')

const Habit = require('./HabitSchema')
const QHabit = require('./QHabitSchema')
const Prefs = require('./PrefsSchema')

const UserSchema = new mongoose.Schema({
  name: String,
  isAdmin: Boolean,
  userID: String,
  passHash: String,
  habits {
    daily: Habit,
    weekly: Habit,
    monthly: Habit,
    sporadic: Habit,
    quantified: QHabit
  },
  prefs: Prefs
})
