import mongoose from 'mongoose';

const EventsSchema =  mongoose.Schema({
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

const Events = mongoose.model('Events', EventsSchema);
export default Events;