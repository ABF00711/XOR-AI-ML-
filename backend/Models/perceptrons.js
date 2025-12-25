const mongoose = require('mongoose');

const perceptronSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    function: {
        type: String,
        required: true
    },
    train_formula: {
        type: String,
        required: true
    },
    weights: {
        type: [Number],
        required: true
    },
    bias: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
});

const PerceptronDB = mongoose.model('Perceptron', perceptronSchema);
module.exports = PerceptronDB;