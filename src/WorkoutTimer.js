import React, { useState } from "react";

const WorkoutTimer = ({ workoutPlan }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startWorkout = () => {
    if (workoutPlan.length > 0) {
      setCurrentExerciseIndex(0);
      setTimeRemaining(workoutPlan[0].time);
      setIsRunning(true);

      console.log(currentExercise.name);
      console.log(nextExercise.name);
      console.log(timeRemaining);
      console.log(isRunning);
    }
  };

  const currentExercise = workoutPlan[currentExerciseIndex];
  const nextExercise = workoutPlan[currentExerciseIndex + 1];

  return (
    <div className="timer-container">
      {isRunning && (
        <div className="timer-display">
          <p>{timeRemaining}</p>
          <p>{currentExercise.name}</p>
          <p>{nextExercise.name}</p>
        </div>
      )}

      <button onClick={startWorkout}>Start Workout</button>
    </div>
  );
};

export default WorkoutTimer;
