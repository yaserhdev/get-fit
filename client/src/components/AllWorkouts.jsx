import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const AllWorkouts = () => {
  const { loading, data } = useQuery(QUERY_WORKOUTS);
  const userData = data?.workouts;
  console.log(userData);


  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>All Workouts</h2>
      {Auth.loggedIn() ? (
      <ul>
        {!loading ? userData.map((workout, id) => (
          <li key={id}>
            <p>Name: {workout.workoutName}</p>
            <p>Created By: {workout.workoutAuthor}</p>
            <p>Description: {workout.description}</p>
            <p>Created At: {workout.createdAt}</p>
          </li>
        )):''}
      </ul>
      ) : (
        <p>
            To see others workouts, please login or signup{' '}
            <Link to="/login">here</Link>.
        </p>
    )}
    </div>
  );



};

export default AllWorkouts;
