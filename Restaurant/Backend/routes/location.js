const express = require('express');
const axios = require('axios'); // Ensure this line is present
const router = express.Router();
require('dotenv').config();

const GEOCODING_API_KEY = process.env.GEOCODING_API_KEY;

router.get('/geocode', async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await axios.get(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=${GEOCODING_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching location' });
    }
});

module.exports = router;
