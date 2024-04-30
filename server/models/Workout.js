const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: {
      type: Date,
      required: true,
    },
    workout_type: {
      type: String,
      required: true,
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