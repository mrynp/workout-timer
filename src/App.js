import React from "react";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";
import "./App.css";
import { useState } from "react";

function App() {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTime, setExerciseTime] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

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
    handleDelete(index);
  };

  const handleDrag = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index) => {
    const draggedItem = workoutPlan[draggedItemIndex];
    const remainingItems = workoutPlan.filter((_, i) => i !== draggedItemIndex);

    const reorderedWorkoutPlan = [
      ...remainingItems.slice(0, index),
      draggedItem,
      ...remainingItems.slice(index),
    ];

    setWorkoutPlan(reorderedWorkoutPlan);
    setDraggedItemIndex(null);
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
        handleDrag={handleDrag}
        handleDrop={handleDrop}
        workoutPlan={workoutPlan}
      />
    </div>
  );
}

export default App;
