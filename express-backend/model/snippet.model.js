const mongoose = require('mongoose')

const snippetSchema = new mongoose.Schema({
    header: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const snippetModel = mongoose.model('snippet', snippetSchema)

module.exports = snippetModel