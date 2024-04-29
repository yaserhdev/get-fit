const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    exercises: [Exercise]!
  }

  type Exercise {
    _id: ID
    exercise_name: String
    exercise_author: String
    category: String
    description: String
    sets: Int
    reps: Int
    weight: Int
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
    signup(username: String!, email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addExercise(exercise_name: String!, category: String!, description: String!, sets: Int!, reps: Int!, weight: Int!): Exercise
    removeExercise(exerciseId: ID!): Exercise
  }
`

module.exports = typeDefs;