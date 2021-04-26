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
    rating: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    student: {
        type: Object,
        required: true
    }
})

module.exports = Comment = mongoose.model("comment", CommentSchema);