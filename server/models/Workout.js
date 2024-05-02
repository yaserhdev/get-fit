const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: {
      type: String,
      required: true,
    },
    workout_type: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise',
        },
    ],
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;