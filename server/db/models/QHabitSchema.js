const mongoose = require('../connection')


const QuantHabitObjects = new mongoose.Schema({
  actual: Number,
  date: Date
})

const QuantifiedHabitSchema = new mongoose.Schema({
  updated: {type: Date, default: Date.now}
  name: String,
  color: String,
  startDate: Date,
  endDate: Date,
  habitGoal: Number,
  achievedGoals: [QuantHabitObjects]
})

module.exports = mongoose.model('QHabit', QuantifiedHabitSchema)
