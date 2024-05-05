import { gql } from '@apollo/client';

export const QUERY_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      _id
      workoutName
      workoutAuthor
      createdAt
      description
    }
  }
`;

export const QUERY_USERS = gql`
  query Users {
  users {
    _id
    email
    password
    username
    workouts {
      _id
      createdAt
      workoutAuthor
      workoutName
      description
    }
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      workouts {
        _id
        workoutName
        workoutAuthor
        createdAt
        description
      }
    }
  }
`;
