const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]!
  }

  type Workout {
    _id: ID
    workoutName: String
    workoutAuthor: String
    createdAt: String
    exercises: [Exercise]!
  }

  type Exercise {
    _id: ID
    exerciseName: String
    sets: Int
    reps: Int
    weight: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    workouts(username: String): [Workout]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(workoutName: String!): Workout
    addExercise(workoutId: ID!, exerciseName: String!, sets: Int!, reps: Int!, weight: String!): Workout
    removeWorkout(workoutId: ID!): Workout
    removeExercise(workoutId: ID!, exerciseId: ID!): Workout
    updateWorkout(workoutId: ID!, workoutName: String!): Workout
    updateExercise(workoutId: ID!, exerciseId: ID!, exerciseName: String!, sets: Int!, reps: Int!, weight: String!): Workout
  }
`;

module.exports = typeDefs;
