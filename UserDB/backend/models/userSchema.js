const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    domain: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

const users = new mongoose.model('users',userSchema);

module.exports = users;