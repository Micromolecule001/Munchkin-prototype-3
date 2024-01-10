const express = require('express');
const { getAllWorkouts, createWorkout, getSingleWorkout, deleteSingleWorkout, updateSingleWorkout } = require('../controllers/workoutController');
const router = express.Router();


// GET all workouts
router.get('/', getAllWorkouts);

// GET a single workout
router.get('/:id', getSingleWorkout);

// POST a single workout
router.post('/', createWorkout);

// DELETE a single workout
router.delete('/:id', deleteSingleWorkout);
    
// UPDATE a single workout
router.patch('/:id', updateSingleWorkout);

module.exports = router;