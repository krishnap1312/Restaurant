const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Ensure bcryptjs is used
const jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret';

// Middleware to authenticate user
const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token is required' });

    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => { // Split to get the token
        if (err) return res.status(401).json({ message: 'Invalid token' });
        req.userId = decoded.userId; // Set userId from token
        next();
    });
};

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user profile
router.get('/profile', authenticateUser, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ username: user.username, email: user.email, mobile: user.mobile, address: user.address, location: user.location });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update user profile
router.put('/profile', authenticateUser, async (req, res) => {
    const { username, email, mobile, address, location } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.userId, { username, email, mobile, address, location }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ username: user.username, email: user.email, mobile: user.mobile, address: user.address, location: user.location });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
