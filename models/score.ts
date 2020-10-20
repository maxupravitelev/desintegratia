const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const scoreSchema = new mongoose.Schema({
  score: { type: Number, default: 0 },
  playerName: { type: String, default: 'No Name' },

 })


module.exports = mongoose.model('Score', scoreSchema)