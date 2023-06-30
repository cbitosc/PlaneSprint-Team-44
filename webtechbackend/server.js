// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URI } = require('./config');
const authRoutes = require('./auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/auth', authRoutes);



// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
