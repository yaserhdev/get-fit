import { gql } from '@apollo/client';

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

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($username: String!, $email: String!) {
    updateUserProfile(username: $username, email: $email) {
      _id
      username
      email
    }
  }
`;

export const ADD_EXERCISE = gql`
  mutation AddExercise($exerciseInput: ExerciseInput!) {
    addExercise(exerciseInput: $exerciseInput) {
      _id
      exercise_name
      category
      description
      sets
      reps
      weight
    }
  }
`;

export const REMOVE_EXERCISE = gql`
  mutation removeExercise($workoutId: ID!, $exerciseId: ID!) {
    removeExercise(workoutId: $workoutId, exerciseId: $exerciseId) {
      _id
      day
      workoutType
      exercises {
        _id
        exercise_name
        category
        description
        sets
        reps
        weight
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout($workoutInput: WorkoutInput!) {
    addWorkout(workoutInput: $workoutInput) {
      _id
      day
      workoutType
      exercises {
        _id
        exercise_name
        category
        description
        sets
        reps
        weight
      }
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation RemoveWorkout($workoutId: ID!) {
    removeWorkout(workoutId: $workoutId) {
      _id
    }
  }
`;

export const ADD_CARDIO_TO_WORKOUT = gql`
  mutation AddCardioToWorkout($workoutId: ID!, $cardioInput: CardioInput!) {
    addCardioToWorkout(workoutId: $workoutId, cardioInput: $cardioInput) {
      _id
      cardioType
      duration
    }
  }
`;

export const REMOVE_CARDIO_FROM_WORKOUT = gql`
  mutation RemoveCardioFromWorkout($workoutId: ID!, $cardioId: ID!) {
    removeCardioFromWorkout(workoutId: $workoutId, cardioId: $cardioId)
  }
`;