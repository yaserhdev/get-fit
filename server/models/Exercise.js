const { Schema, model } = require('mongoose');

// define Exercise schema

const exerciseSchema = new Schema({
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      workout_id: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout',
        },
      ],
});

// Create Exercise model
const Exercise = model('Exercise', exerciseSchema);

// export Exercise model

module.exports = Exercise;