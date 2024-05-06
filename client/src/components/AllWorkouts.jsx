import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
import styled from 'styled-components';

const StyledListContainer = styled.ul`
  position: relative;
  border-radius: 15px;
  list-style-position: inside;
  border: 1px solid black;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

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
      <StyledListContainer>
        {!loading ? userData.map((workout, id) => (
          <StyledListItem key={id}>
            <p>Name: {workout.workoutName}</p>
            <p>Created By: {workout.workoutAuthor}</p>
            <p>Description: {workout.description}</p>
            <p>Created At: {workout.createdAt}</p>
          </StyledListItem>
        )):''}
      </StyledListContainer>
    </div>
  );



};

export default AllWorkouts;
