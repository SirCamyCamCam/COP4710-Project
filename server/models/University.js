import mongoose from 'mongoose';

const UniversitySchema =  mongoose.Schema({
    superAdmin: {
        type: Object,
        required: true
    },
    location: {
        type: GeolocationCoordinates,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const University = mongoose.model('University', UniversitySchema);
export default University;