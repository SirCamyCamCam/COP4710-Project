const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RSOSchema = new Schema({
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

module.exports = RSO = mongoose.model("RSOs", RSOSchema);