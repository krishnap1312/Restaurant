// routes/specials.js
const express = require('express');
const router = express.Router();
const Special = require('../models/Special');

// Get all specials
router.get('/', async (req, res) => {
    try {
        const specials = await Special.find();
        res.json(specials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new special
router.post('/', async (req, res) => {
    const special = new Special({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });

    try {
        const newSpecial = await special.save();
        res.status(201).json(newSpecial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a special
router.put('/:id', async (req, res) => {
    try {
        const updatedSpecial = await Special.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedSpecial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a special
router.delete('/:id', async (req, res) => {
    try {
        await Special.findByIdAndDelete(req.params.id);
        res.json({ message: 'Special deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
