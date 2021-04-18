import mongoose from 'mongoose';

const EventsTypeSchema =  mongoose.Schema({
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

const EventsType = mongoose.model('EventsType', EventsTypeSchema);
export default EventsType;