const Workout = require('../models/WorkoutModel');
const mongoose = require('mongoose');


// GET all workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// POST a single workout
exports.createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(201).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET a single workout
exports.getSingleWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No workout with that id');
    }

    try {
        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE a single workout
exports.deleteSingleWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No workout with that id');
    }

    try {
        const workout = await Workout.findByIdAndDelete(id);
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// UPDATE a single workout
exports.updateSingleWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, reps, load } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No workout with that id');
    }

    try {
        const workout = await Workout.findByIdAndUpdate(id, { title, reps, load }, { new: true });
        res.status(200).json(workout);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}