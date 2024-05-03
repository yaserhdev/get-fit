import { gql } from '@apollo/client';

export const QUERY_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      _id
      workoutName
      workoutAuthor
      createdAt
      exercises {
        exerciseName
        sets
        reps
        weight
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
        exercises {
          exerciseName
          sets
          reps
          weight
        }
      }
    }
  }
`;
