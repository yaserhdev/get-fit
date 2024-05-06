import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addWorkout($workoutName: String!, $description: String!) {
    addWorkout(workoutName: $workoutName, description: $description) {
      _id
      workoutName
      workoutAuthor
      createdAt
      description
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation updateWorkout($workoutId: ID!, $workoutName: String!, $description: String!) {
    updateWorkout(workoutId: $workoutId, workoutName: $workoutName, description: $description) {
      _id
      workoutName
      workoutAuthor
      createdAt
      description
    }
  }
`;

// export const ADD_EXERCISE = gql`
//   mutation addExercise($workoutId: ID!, $exerciseName: String!, $sets: Int!, $reps: Int!, $weight: Int!) {
//     addComment(workoutId: $workoutId, exerciseName: $exerciseName, sets: $sets, reps: $reps, weight: $weight) {
//       _id
//       workoutName
//       workoutAuthor
//       createdAt
//       exercises {
//         _id
//         exerciseName
//         sets
//         reps
//         weight
//       }
//     }
//   }
// `;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId) {
      _id
      workoutName
      workoutAuthor
      createdAt
      description
    }
  }
`;

// export const REMOVE_EXERCISE = gql`
//   mutation removeExercise($workoutId: ID!, $exerciseId: ID!) {
//     removeExercise(workoutId: $workoutId, exerciseId: $exerciseId) {
//       _id
//       workoutName
//       workoutAuthor
//       createdAt
//       exercises {
//         _id
//         exerciseName
//         sets
//         reps
//         weight
//       }
//     }
//   }
// `;
