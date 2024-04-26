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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    exercise(username: String): [Exercise]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addExercise(exercise_name: String!, category: String!, description: String!, sets: Int!, reps: Int!, weight: Int!): Exercise
    removeExercise(exerciseId: ID!): Exercise
  }
`

module.exports = typeDefs;