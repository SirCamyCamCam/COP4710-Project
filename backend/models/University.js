const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniversitySchema =  new Schema({
    superAdmin: {
        type: Object,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },    
    lon: {
        type: Number,
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

module.exports = University = mongoose.model("university", UniversitySchema);