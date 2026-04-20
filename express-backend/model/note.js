const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    noteHeader: {
        type: String,
        required: true
    },
    noteCode: {
        type: String,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    }
});

const toDoModel = mongoose.model('todo', toDoSchema)

module.exports = toDoModel