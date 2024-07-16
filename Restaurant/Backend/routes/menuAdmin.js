// routes/menu.js

const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Create a new menu item
router.post('/', async (req, res) => {
    const { name, description, price, imageUrl, category, ingredients, isAvailable, rating, reviews, dietaryOptions } = req.body;
    const newItem = new MenuItem({ name, description, price, imageUrl, category, ingredients, isAvailable, rating, reviews, dietaryOptions });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Fetch all menu items
router.get('/', async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Fetch a specific menu item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await MenuItem.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
