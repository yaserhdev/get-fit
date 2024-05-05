const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const workoutSchema = new Schema({
  workoutName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
    trim: true,
  },
  workoutAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  description: {
    type: String,
    required: true,
    trim: true,
  }
  // exercises: [
  //   {
  //     exerciseName: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 30,
  //     },
  //     sets: {
  //       type: Number,
  //       required: true,
  //       minlength:1,
  //       maxlength: 3,
  //     },
  //     reps: {
  //       type: Number,
  //       required: true,
  //       minlength:1,
  //       maxlength: 4,
  //     },
  //     weight: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
