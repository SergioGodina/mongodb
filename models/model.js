const mongoose = require('mongoose');

const logs = new mongoose.Schema({
    datetime: {
        required: true,
        type: Number
    },
    current_temperature: {
        required: true,
        type: Number
    },
    current_humedity: {
        required: true,
        type: Number
    },
    adjustment_temperature: {
        required: true,
        type: Number
    },
    state: {
        required: true,
        type: Boolean
    }
})

const users = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    Rol: {
        required: true,
        type: String
    }
})

const log = mongoose.model('logs', logs)
const user = mongoose.model('users', users)

module.exports = { log, user };