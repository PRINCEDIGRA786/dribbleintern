const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    purpose: {
        type: Array,
        // default: []
    },
    profilepic: {
        type: String,
    },
    location: {
        type: String,
    }

});

const User = mongoose.model('users', UserSchema);


module.exports = User;