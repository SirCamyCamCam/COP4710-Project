import mongoose from 'mongoose';

const StudentSchema =  mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    university: {
        type: Object,
        required: true
    },
    student_id: {
        type: Object,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('Student', StudentSchema);
export default Student;