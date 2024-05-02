const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]
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
    day: String!
    workout_type: String!
    username: String
    exercises: [Exercise]
  }

  type Category {
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input WorkoutInput {
    day: String 
    workout_type: String
    username: String
    exercises: [ExerciseInput]
  }

  input ExerciseInput {
    exercise_name: String!
    category: String
    description: String
    sets: Int!
    reps: Int!
    weight: Int!
  }

  type Query {
    users: [User]
    user(username: String!): User
    workouts(username: String): [Workout]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUserProfile(username: String!, email: String!): User
    addExercise(exercise_name: String!, category: String, description: String, sets: Int!, reps: Int!, weight: Int!, workout_id: ID!): Exercise
    removeExercise(exerciseId: ID!): Exercise
    addWorkout(workout: WorkoutInput): Workout
    removeWorkout(workoutId: ID!): Workout
  }
`

module.exports = typeDefs;