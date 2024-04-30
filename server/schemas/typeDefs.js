const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]!
  }

  type Exercise {
    _id: ID
    exercise_name: String!
    category: String
    description: String
    sets: Int!
    reps: Int!
    weight: Int!
  }

  type Workout {
    exercises: [Exercise]!
  }

  type Category {
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    workouts(username: String): [Workout]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signUp(username: String!, email: String!, password: String!): Auth
    updateUserProfile(username: String!, email: String!): User
    addExercise(exercise_name: String!, category: String, description: String, sets: Int!, reps: Int!, weight: Int!): Exercise
    removeExerciseFromWorkout(workoutId: ID!, exerciseId: ID!): Exercise
    addWorkout(day: String, workout_type: String, exercises: [Exercise]): Workout
    removeWorkout(workoutId: ID!): Workout
  }
`

module.exports = typeDefs;