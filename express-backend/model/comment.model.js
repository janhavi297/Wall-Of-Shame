const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    snippetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'snippet',
        required: true
    },
    commentText: {
        type: String,
        required: true
    }
});

const commentModel = mongoose.model('comment', commentSchema)

module.exports = commentModel