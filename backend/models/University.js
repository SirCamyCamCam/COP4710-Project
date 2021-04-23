const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UniversitySchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },    
    desc: {
        type: String,
        required: true
    },
    location : {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    
})
UniversitySchema.index({"location" : "2dsphere"});
module.exports = University = mongoose.model("university", UniversitySchema);