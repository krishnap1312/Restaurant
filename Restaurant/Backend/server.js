const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const locationRoutes = require('./routes/location');
const menuAdminRoutes = require('./routes/menuAdmin');
const offersRoutes = require('./routes/offers');
const specialsRoutes = require('./routes/specials'); 
const orderRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/menu-admin', menuAdminRoutes);
app.use('/api/offers', offersRoutes);
app.use('/api/specials', specialsRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes); // Ensure this line is present

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
