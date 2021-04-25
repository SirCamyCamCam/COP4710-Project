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
    date:{
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
        type : String, 
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
    commentArray: [{
        comment: {
            type: Object
        }
    }],
    category: {
        type: String,
        default: "None",
        required: true
    },
    rso: {
        type: String
    },
    university: {
        type: String
    }
})

module.exports = Event = mongoose.model("event", EventSchema);