const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    mfa: {
        type: Boolean,
        default: false
    }
});

const UserDB = mongoose.model('User', userSchema);
module.exports = UserDB;