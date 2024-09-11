import React from "react";
// import SearchExercise from "./SearchExercise";
import WorkoutInput from "./WorkoutInput";

import "./App.css";
import { useState } from "react";

function App() {
  // const [workoutPlan, setWorkoutPlan] = useState([]);

  // const addExerciseToWorkout = (exercise) => {
  //   setWorkoutPlan((prevPlan) => [...prevPlan, exercise]);
  // };

  return (
    <div className="App">
      <h1>Workout Timer</h1>
      <WorkoutInput />
      {/* <SearchExercise onAddExercise={addExerciseToWorkout} /> */}
    </div>
  );
}

export default App;
