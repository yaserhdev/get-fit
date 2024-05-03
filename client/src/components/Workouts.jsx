import { useState } from 'react';

const Workouts = () => {
  const [workoutData, setWorkoutData] = useState({
    day: '',
    workoutName: '',
    exercises: [],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({ ...workoutData, [name]: value });
  };
  const handleAddExercise = () => {
    setWorkoutData({
      ...workoutData,
      exercises: [...workoutData.exercises, { name: '', reps: '', weight: '', sets: '' }],
    });
  };
  const handleExerciseChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExercises = [...workoutData.exercises];
    updatedExercises[index][name] = value;
    setWorkoutData({ ...workoutData, exercises: updatedExercises });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(workoutData);
  };

  return (
    <div>
      <h1>Log Your Workout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Day of the Week:
          <input type="text" name="day" value={workoutData.day} onChange={handleInputChange} />
        </label>
        <label>
          Type of Workout:
          <input type="text" name="workoutType" value={workoutData.workoutType} onChange={handleInputChange} />
        </label>
        <label>
          Cardio Type:
          <input type="text" name="cardioType" value={workoutData.cardioType} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddExercise}>Add Exercise</button>
        {workoutData.exercises.map((exercise, index) => (
          <div key={index}>
            <label>
              Exercise:
              <input type="text" name="name" value={exercise.name} onChange={(e) => handleExerciseChange(index, e)} />
            </label>
            <label>
              Reps:
              <input type="text" name="reps" value={exercise.reps} onChange={(e) => handleExerciseChange(index, e)} />
            </label>
            <label>
              Weight (lbs):
              <input type="text" name="weight" value={exercise.weight} onChange={(e) => handleExerciseChange(index, e)} />
            </label>
            <label>
              Sets:
              <input type="text" name="sets" value={exercise.sets} onChange={(e) => handleExerciseChange(index, e)} />
            </label>
          </div>
        ))}
        <button type="submit">Submit Workout</button>
      </form>
    </div>
  );
};

export default Workouts;