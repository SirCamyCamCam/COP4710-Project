const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema =  new Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    AcoountType: {
        type: String,
        required: true
    }
})

module.exports = Admin = mongoose.model("admin", AdminSchema);