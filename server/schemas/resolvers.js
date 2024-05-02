// const { DataTypes } = require('sequelize');
const { User, Workout, Exercise } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('exercises');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('exercises');
    },
    // workouts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    workouts: async (parent, { workoutId }) => {
      return Workout.find().sort({ createdAt: -1 });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('exercises');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    // addWorkout: async (parent, {
    //   day,
    //   workout_type,
    //   exercises,
    // }) => {
    //   const newWorkout = await Workout.create({
    //     day,
    //     workout_type,
    //     exercises
    //   })
    //   return { newWorkout };
    // },

    addWorkout: async (parent, { workout }, context) => {
      if (context.user) {
      //   const workout = await Workout.create({
      //    day,
      //    workout_type,
      //    username: context.user.username,
      //    exercises
      //  });
       const updatedUser = await User.findOneAndUpdate(
         { _id: context.user._id },
         { $push: { workouts: workout } },
         { new: true }
       );
       return updatedUser;
      }
      throw AuthenticationError;
    },

    addExercise: async (parent, { 
      exercise_name,
      category,
      description,
      sets,
      reps,
      weight
     }, context) => {
      if (context.user) {
        const exercise = await Exercise.create({
          exercise_name,
          exercise_author: context.user.username,
          category,
          description,
          sets,
          reps,
          weight
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { exercises: exercise._id } }
        );

        return exercise;
      }

      throw AuthenticationError;
      ('You need to be logged in!');
     },
     removeExercise: async (parent, { exerciseId }, context) => {
       if (context.user) {
        const exercise = await Exercise.findOneAndDelete({
          _id: exerciseId,
          exercise_author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { exercises: exercise._id } }
        );

        return exercise;
       }
       throw AuthenticationError;
     },
  },
};

module.exports = resolvers;