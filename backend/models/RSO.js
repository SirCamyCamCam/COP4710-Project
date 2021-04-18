import mongoose from 'mongoose';

const RSOSchema =  mongoose.Schema({
    studentArray: [{
        student: {
            type: Object,
            required: true
        }
    }],
    name: {
        type: String,
        required: true
    },
    rsoAdmin: {
        type: Object,
        required: true
    },
    university: {
        type: Object,
        required: true
    }
})

const RSO = mongoose.model('RSO', RSOSchema);
export default RSO;