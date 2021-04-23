const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    time: {
        type : Date, 
        default: Date.now,
        required: true
    },
    lat: {
        type : Number,
        required: true
    },
    lon: {
        type : Number,
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

module.exports = Event = mongoose.model("event", EventSchema);