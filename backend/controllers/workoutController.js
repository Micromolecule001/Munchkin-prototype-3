const Workout = require('../models/WorkoutModel');

// GET all workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a single workout