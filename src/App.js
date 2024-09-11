import React from "react";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";
import "./App.css";
import { useState } from "react";

function App() {
  const [workoutPlan, setWorkoutPlan] = useState([
    {
      name: "pull up",
      time: 30,
    },
    {
      name: "rest",
      time: 30,
    },
    {
      name: "push up",
      time: 30,
    },
  ]);

  const addExerciseToWorkout = (exercise) => {
    setWorkoutPlan((prevPlan) => [...prevPlan, exercise]);
  };

  return (
    <div className="App">
      <h1>Workout Timer</h1>
      <WorkoutInput
        onAddExercise={addExerciseToWorkout}
        workoutPlan={workoutPlan}
      />
      <WorkoutList workoutPlan={workoutPlan} />
    </div>
  );
}

export default App;
