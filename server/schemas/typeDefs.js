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
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    workouts: [Workout]
    me: User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(workoutName: String!, description: String!): Workout
    removeWorkout(workoutId: ID!): Workout
    updateWorkout(workoutId: ID!, workoutName: String!, description: String!): Workout
  }
`;

module.exports = typeDefs;
