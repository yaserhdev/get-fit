import { useState, useEffect } from 'react';
import Workouts from '../components/Workouts.jsx';
import Navbar from '../components/Navbar.jsx'; // Import the Navbar component

const Profile = () => { 
  const [pastWorkouts, setPastWorkouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Workouts();
        setPastWorkouts(data);
      } catch (error) {
        console.error('Error fetching past workouts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
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
