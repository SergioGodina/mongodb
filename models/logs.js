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

module.exports = mongoose.model('logs', logs)