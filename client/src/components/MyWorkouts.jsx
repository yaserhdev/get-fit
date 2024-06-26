import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_WORKOUT, UPDATE_WORKOUT } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import WorkoutForm from './WorkoutForm';
import styled from 'styled-components';

const StyledListContainer = styled.ul`
  position: relative;
  border-radius: 15px;
  list-style-position: inside;
  border: 1px solid black;
  padding: 10px;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const MyWorkouts = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me;
  console.log(userData);
  const [removeWorkout] = useMutation(REMOVE_WORKOUT);
  const [updateWorkout] = useMutation(UPDATE_WORKOUT);

  const handleDeleteWorkout = async (workoutId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const { data } = await removeWorkout({
        variables: { workoutId },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateWorkout = async (workoutId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const { data } = await updateWorkout({
        variables: { workoutId },
      })
    } catch (err) {
      console.error(err);
    }
  }

  

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <h2>Workouts</h2>
      {Auth.loggedIn() ? (
      <StyledListContainer>
        {!loading ? userData.workouts.map((workout, id) => (
          <StyledListItem key={id}>
            <p>Name: {workout.workoutName}</p>
            <p>Created By: {workout.workoutAuthor}</p>
            <p>Description: {workout.description}</p>
            <p>Created At: {workout.createdAt}</p>
            <button className="edit-workout-btn" onClick={() => handleUpdateWorkout(workout._id)}>
              Edit this workout!
            </button>
            <button className="delete-workout-btn" onClick={() => handleDeleteWorkout(workout._id)}>
              Delete this workout!
            </button>
          </StyledListItem>
        )):''}
      </StyledListContainer>
      ) : (
        <p>
            To see your workouts, please login or signup{' '}
            <Link to="/login">here</Link>.
        </p>
      )}
    </div> 
  );
};

export default MyWorkouts;
