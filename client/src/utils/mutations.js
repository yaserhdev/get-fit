import { gql } from '@apollo/client';

export const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    exercises: [Exercise]!
  }

  type Exercise {
    _id: ID
    name: String
    reps: Int
    weight: Float
    sets: Int
  }

  type AuthPayload {
    token: String
    user: User
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    username: String!
    email: String!
    password: String!
  }

  type Query {
    # Define any queries here
  }

  type Mutation {
    login(input: LoginInput!): AuthPayload
    signup(input: SignupInput!): AuthPayload
    # Define other mutations here
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;