import { useState, useEffect } from 'react';
import { getPastWorkouts } from '../components/Workouts.jsx'; // Assuming you have a service to fetch workout data

const Profile = () => {
  const [pastWorkouts, setPastWorkouts] = useState([]);

  useEffect(() => {
    // Fetch past workouts data when the component mounts
    const fetchData = async () => {
      try {
        const data = await getPastWorkouts(); // Fetch data from your backend API
        setPastWorkouts(data);
      } catch (error) {
        console.error('Error fetching past workouts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Past Workouts</h2>
      <ul>
        {pastWorkouts.map((workout) => (
          <li key={workout.id}>
            <p>Date: {workout.date}</p>
            <p>Exercises:</p>
            <ul>
              {workout.exercises.map((exercise) => (
                <li key={exercise.id}>
                  <p>Exercise: {exercise.name}</p>
                  <p>Weight: {exercise.weight} lbs</p>
                  <p>Reps: {exercise.reps}</p>
                  <p>Sets: {exercise.sets}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;