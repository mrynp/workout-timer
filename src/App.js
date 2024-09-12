import React from "react";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";
import "./App.css";
import { useState } from "react";

function App() {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTime, setExerciseTime] = useState("");

  const addExerciseToWorkout = (exercise) => {
    setWorkoutPlan((prevPlan) => [...prevPlan, exercise]);
  };

  const handleDelete = (index) => {
    const newWorkoutPlan = workoutPlan.filter((workout, workoutIndex) => {
      return workoutIndex !== index;
    });
    setWorkoutPlan(newWorkoutPlan);
  };

  const handleEdit = (index) => {
    const editExerciseName = workoutPlan[index].name;
    const editExerciseTime = workoutPlan[index].time;
    setExerciseName(editExerciseName);
    setExerciseTime(editExerciseTime);
    console.log(editExerciseName);
    console.log(editExerciseTime);
    handleDelete(index);
  };

  return (
    <div className="App">
      <h1>Workout Timer</h1>
      <WorkoutInput
        exerciseName={exerciseName}
        setExerciseName={setExerciseName}
        exerciseTime={exerciseTime}
        setExerciseTime={setExerciseTime}
        onAddExercise={addExerciseToWorkout}
        workoutPlan={workoutPlan}
      />
      <WorkoutList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        workoutPlan={workoutPlan}
      />
    </div>
  );
}

export default App;
