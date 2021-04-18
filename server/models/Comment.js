import mongoose from 'mongoose';

const CommentSchema =  mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    rating: {
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

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;