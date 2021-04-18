import mongoose from 'mongoose';

const SuperAdminSchema =  mongoose.Schema({
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
    }
})

const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema);
export default SuperAdmin;