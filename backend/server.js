require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Use routes
app.use('/api/workouts', workoutRoutes);
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => { 
        app.listen(process.env.PORT, () => {
            console.log('MongoDB connected & Server started on port 3000')
        });
    })
    
    .catch(err => console.log(err));

