const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSOSchema = new Schema({
    studentArray: [{
        student: {
            type: String,
            required: true
        }
    }],
    name: {
        type: String,
        required: true
    },
    rsoAdmin: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    }
})

module.exports = RSO = mongoose.model("rso", RSOSchema);