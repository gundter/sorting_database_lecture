var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    number: Number,
    completed: Boolean,
    note: String,
    created_on: {type: Date, default: new Date() }
});

module.exports = mongoose.model('Todo', TodoSchema);