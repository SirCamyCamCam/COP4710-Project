import mongoose from 'mongoose';

const EventsSchema =  mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    time: {
        type : Date, 
        default: Date.now,
        required: true
    },
    event_id: {
        type : Object,
        required: true
    },
    location: {
        type : GeolocationCoordinates,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Object,
        required: true
    },
    rso: {
        type: Object
    },
    commentArray: [{
        comment: {
            type: Object
        }
    }],
    category: {
        type: String,
        default: "None"
    },
    eventType: {
        type: String,
        required: true
    }
})

const Events = mongoose.model('Events', EventsSchema);
export default Events;