const mongoose = require('../connection')

const HabitSchema = new mongoose.Schema({
  updated: {type: Date, default: Date.now}
  name: String,
  type: String,
  color: String,
  startDate: Date,
  endDate: Date,
  daysCompleted: [Date]
})

module.exports = mongoose.model('Habit', HabitSchema)
