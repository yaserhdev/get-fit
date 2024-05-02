import { gql } from '@apollo/client';

// Query to fetch user profile information
export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    me {
      _id
      username
      email
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

export const GET_WORKOUTS = gql`
  query getWorkouts {
    workouts {
      _id
      day
      workout_type
      exercises {
        _id
        exercise_name
        category
        sets
        reps
        weight
      }
    }
  }
`;

// Mutation to update user profile information
export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($username: String!, $email: String!) {
    updateUserProfile(username: $username, email: $email) {
      _id
      username
      email
    }
  }
`;

// Mutation to add a new workout
export const ADD_WORKOUT = gql`
  mutation AddWorkout($workoutInput: WorkoutInput!) {
    addWorkout(workoutInput: $workoutInput) {
      _id
      day
      workoutType
    }
  }
`;

// Query to fetch list of workouts for the user
export const GET_USER_WORKOUTS = gql`
  query GetUserWorkouts {
    userWorkouts {
      _id
      day
      workoutType
    }
  }
`;

// Mutation to add a new exercise to a workout
export const ADD_EXERCISE_TO_WORKOUT = gql`
  mutation AddExerciseToWorkout($workoutId: ID!, $exerciseInput: ExerciseInput!) {
    addExerciseToWorkout(workoutId: $workoutId, exerciseInput: $exerciseInput) {
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

// Query to fetch list of exercises for a workout
export const GET_WORKOUT_EXERCISES = gql`
  query GetWorkoutExercises($workoutId: ID!) {
    workoutExercises(workoutId: $workoutId) {
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

// Mutation to add a new cardio exercise to a workout
export const ADD_CARDIO_TO_WORKOUT = gql`
  mutation AddCardioToWorkout($workoutId: ID!, $cardioInput: CardioInput!) {
    addCardioToWorkout(workoutId: $workoutId, cardioInput: $cardioInput) {
      _id
      cardioType
      duration
    }
  }
`;

// Query to fetch list of cardio exercises for a workout
export const GET_WORKOUT_CARDIO = gql`
  query GetWorkoutCardio($workoutId: ID!) {
    workoutCardio(workoutId: $workoutId) {
      _id
      cardioType
      duration
    }
  }
`;

// Mutation to delete a workout
export const DELETE_WORKOUT = gql`
  mutation DeleteWorkout($workoutId: ID!) {
    deleteWorkout(workoutId: $workoutId)
  }
`;

// Mutation to delete an exercise from a workout
export const DELETE_EXERCISE_FROM_WORKOUT = gql`
  mutation DeleteExerciseFromWorkout($workoutId: ID!, $exerciseId: ID!) {
    deleteExerciseFromWorkout(workoutId: $workoutId, exerciseId: $exerciseId)
  }
`;

// Mutation to delete a cardio exercise from a workout
export const DELETE_CARDIO_FROM_WORKOUT = gql`
  mutation DeleteCardioFromWorkout($workoutId: ID!, $cardioId: ID!) {
    deleteCardioFromWorkout(workoutId: $workoutId, cardioId: $cardioId)
  }
`;