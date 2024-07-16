const express = require('express');
const Feedback = require('../models/Feedback'); // Create this model
const router = express.Router();

// Create Feedback Schema
const FeedbackSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    description: { type: String, required: true }
});

const FeedbackModel = mongoose.model('Feedback', FeedbackSchema);

// Post feedback
router.post('/', async (req, res) => {
    const { itemName, rating, description } = req.body;
    try {
        const newFeedback = new FeedbackModel({ itemName, rating, description });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to submit feedback', error });
    }
});

module.exports = router;
