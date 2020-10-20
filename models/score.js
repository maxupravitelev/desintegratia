const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const scoreSchema = new mongoose.Schema({
    score: { type: Number },
    playerName: { type: String, default: 'No Name' },
});
module.exports = mongoose.model('Score', scoreSchema);
