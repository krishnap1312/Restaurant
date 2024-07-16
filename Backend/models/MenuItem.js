const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    ingredients: { type: [String], required: true },
    isAvailable: { type: Boolean, default: true },
    rating: { type: Number, default: 0, min: 0, max: 5 }, // New field for rating
    reviews: { type: [String], default: [] }, // New field for reviews
    dietaryOptions: { type: [String], default: [] }, // New field for dietary options (e.g., Vegan, Gluten-Free)
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
