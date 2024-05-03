const { User, Workout } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    workouts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Workout.find(params).sort({ createdAt: -1 });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('workouts');
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
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    addWorkout: async (parent, { workoutName }, context) => {
      if (context.user) {
        const workout = await Workout.create({
          workoutName,
          workoutAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workouts: workout._id } }
        );
        return workout;
      }
      throw AuthenticationError;
    },
    addExercise: async (parent, { workoutId, exerciseName, sets, reps, weight }, context) => {
      if (context.user) {
        return Workout.findOneAndUpdate(
          { _id: workoutId },
          {
            $addToSet: {
              exercises: { exerciseName, sets, reps, weight },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeWorkout: async (parent, { workoutId }, context) => {
      if (context.user) {
        const workout = await Workout.findOneAndDelete({
          _id: workoutId,
          workoutAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workouts: workout._id } }
        );
        return workout;
      }
      throw AuthenticationError;
    },
    removeExercise: async (parent, { workoutId, exerciseId }, context) => {
      if (context.user) {
        return Workout.findOneAndUpdate(
          { _id: workoutId },
          {
            $pull: {
              exercises: {
                _id: exerciseId,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
