const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    commentInfo: {
        type: String
    },
    note_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'comment',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    }
});

const toDoModel = mongoose.model('todo', toDoSchema)

module.exports = toDoModel