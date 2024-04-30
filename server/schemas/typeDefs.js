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
    addExercise(exercise_name: String!, category: String, description: String, sets: Int!, reps: Int!, weight: Int!): Exercise
    removeExercise(exerciseId: ID!): Exercise
  }
`

module.exports = typeDefs;