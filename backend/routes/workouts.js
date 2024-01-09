const express = require('express');
const WorkoutModel = require('../models/WorkoutModel');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.send('GET all workouts');
});

// GET a single workout
router.get('/:id', (req, res) => {
    res.send('GET a single workout');
});

// POST a single workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await WorkoutModel.create({ title, reps, load })
        res.status(201).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    
    res.send('POST a single workout');
});

// DELETE a single workout
router.delete('/:id', (req, res) => {
    res.send('DELETE a single workout');
});
    
// UPDATE a single workout
router.patch('/:id', (req, res) => {
    res.send('UPDATE a single workout');
});

// PUT a single workout
router.put('/:id', (req, res) => {
    res.send('PUT a single workout');
});

module.exports = router;