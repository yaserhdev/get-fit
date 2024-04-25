const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    exercises: [Exercise]!
  }
`