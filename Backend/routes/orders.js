// orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authenticateUser = require('../middleware/authenticateUser');

// Get orders for the logged-in user
router.get('/', authenticateUser, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.userId });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
