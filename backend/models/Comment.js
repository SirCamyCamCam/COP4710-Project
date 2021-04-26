const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema =  new Schema({
    commentEvent:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    student: {
        type: Object,
        required: true
    }
})

module.exports = Comment = mongoose.model("comment", CommentSchema);