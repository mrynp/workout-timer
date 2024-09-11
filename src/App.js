import React from "react";
// import SearchExercise from "./SearchExercise";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";

import "./App.css";
import { useState } from "react";

function App() {
  // const [workoutPlan, setWorkoutPlan] = useState([]);

  // const addExerciseToWorkout = (exercise) => {
  //   setWorkoutPlan((prevPlan) => [...prevPlan, exercise]);
  // };
  const workoutPlan = [
    {
      type: "exercise",
      name: "pull up",
      time: 30,
    },
    {
      type: "exercise",
      name: "push up",
      time: 30,
    },
    {
      type: "rest",
      name: "rest",
      time: 30,
    },
  ];

  return (
    <div className="App">
      <h1>Workout Timer</h1>
      <WorkoutInput />
      <WorkoutList workoutPlan={workoutPlan} />
      {/* <SearchExercise onAddExercise={addExerciseToWorkout} /> */}
    </div>
  );
}

export default App;
