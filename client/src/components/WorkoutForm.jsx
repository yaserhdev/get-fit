import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../utils/mutations';
import { QUERY_WORKOUTS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const WorkoutForm = () => {
    const [workoutFormData, setWorkoutFormData] = useState({
        workoutName: '',
        description: '',
    });
    const [addWorkout, { error }] = useMutation(
        ADD_WORKOUT, {
        refetchQueries: [
            QUERY_WORKOUTS,
            'getWorkouts',
            QUERY_ME,
            'me',
        ]
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(workoutFormData);
        try {
            const { loading, data } = await addWorkout({
                variables: {
                    workoutFormData,
                    workoutAuthor: Auth.getProfile().data.username,
                }
            });
            setWorkoutFormData('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setWorkoutFormData({
            ...workoutFormData,
            [name]: value,
        })
    };

    return (
        <div>
            <h3>How did you last 'get-fit'?</h3>

            {Auth.loggedIn() ? (
                <>
                <form
                className="workout-form"
                onSubmit={handleFormSubmit}
                >
                    <div>
                        <textarea
                        name="workoutName"
                        placeholder="Workout Name"
                        value={workoutFormData.workoutName}
                        onChange={handleChange}
                        ></textarea>
                        <textarea
                        name="description"
                        placeholder="Describe your workout..."
                        value={workoutFormData.description}
                        onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <button className="add-workout-btn" type="submit">
                            Add Workout
                        </button>
                    </div>
                    {error && (
                        <div>
                            {error.message}
                        </div>
                    )}
                </form>
                </>
            ) : (
                <p>
                    To see your workouts, please login or signup{' '}
                    <Link to="/login">here</Link>.
                </p>
            )}
        </div>
    );
};

export default WorkoutForm;
