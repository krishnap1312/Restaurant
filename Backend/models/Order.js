const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
        required: true
    },
    items: [{
        name: String,
        quantity: Number,
        price: Number
    }]
});

module.exports = mongoose.model('Order', OrderSchema);
