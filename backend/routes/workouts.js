const express = require('express');

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
router.post('/', (req, res) => {
    res.send('POST a single workout');
});

// DELETE a single workout
router.delete('/:id', (req, res) => {
    res.send('DELETE a single workout');
});

// PUT a single workout
router.put('/:id', (req, res) => {
    res.send('PUT a single workout');
});

// UPDATE a single workout
router.patch('/:id', (req, res) => {
    res.send('UPDATE a single workout');
});


module.exports = router;