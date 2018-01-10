const mongoose = require('../connection')

function dateMaker() {
  return 
  
}

const HabitSchema = new mongoose.Schema({
  updated: {type: Date, default: Date.now}
  name: String,
  type: String,
  color: String,
  startDate: Date,
  endDate: Date,
  daysCompleted: {type: {}, set: }
})

module.exports = mongoose.model('Habit', HabitSchema)
