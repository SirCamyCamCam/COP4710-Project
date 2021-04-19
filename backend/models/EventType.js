const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventTypeSchema =  new Schema({
    privateArray: [{
        privateEvent: {
            type: Object
        },
        university: {
            type: Object
        }
    }],
    publicArray: [{
        publicEvent: {
            type: Object
        }
    }],
    rsoArray: [{
        rsoEvent: {
            type: Object
        },
        rso: {
            type: Object
        }
    }]
})

module.exports = EventType = mongoose.model("eventtype", EventTypeSchema);