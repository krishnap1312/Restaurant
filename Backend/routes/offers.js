const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');

// Get all offers
router.get('/', async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get a specific offer by ID
router.get('/:id', async (req, res) => {
    try {
        const offer = await Offer.findById(req.params.id);
        if (!offer) return res.status(404).json({ message: 'Offer not found' });
        res.json(offer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add a new offer
router.post('/', async (req, res) => {
    const { title, description, imageUrl } = req.body;
    try {
        const newOffer = new Offer({ title, description, imageUrl });
        await newOffer.save();
        res.status(201).json(newOffer); // Return the created offer
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update an existing offer by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOffer) return res.status(404).json({ message: 'Offer not found' });
        res.json(updatedOffer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete an offer by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
        if (!deletedOffer) return res.status(404).json({ message: 'Offer not found' });
        res.json({ message: 'Offer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
