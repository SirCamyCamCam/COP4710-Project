const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema =  new Schema({
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

module.exports = Student = mongoose.model("Students", StudentSchema);