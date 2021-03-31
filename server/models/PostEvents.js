import mongoose from 'mongoose';

const EventsSchema =  mongoose.Schema({
    Desc: {
        type: String,
        required: true
    },
    Time: {
        type : Date, 
        default: Date.now 
    }
})

const PostEvent = mongoose.model('PostEvent', EventsSchema);
export default PostEvent;