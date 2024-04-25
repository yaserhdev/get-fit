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
})

// Create Exercise model
const Exercise = model('Exercise', exerciseSchema);

// export Exercise model

module.exports = Exercise;