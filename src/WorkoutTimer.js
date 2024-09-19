import React, { useEffect, useState } from "react";

const WorkoutTimer = ({ workoutPlan }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isRunning) {
      if (currentExerciseIndex < workoutPlan.length - 1) {
        setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
        setTimeRemaining(workoutPlan[currentExerciseIndex + 1].time);
      } else {
        setIsRunning(false);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeRemaining, currentExerciseIndex, workoutPlan]);

  const startWorkout = () => {
    if (workoutPlan.length > 0) {
      setCurrentExerciseIndex(0);
      setTimeRemaining(workoutPlan[0].time);
      setIsRunning(true);
    }
  };

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      if (workoutPlan.length > 0) {
        if (timeRemaining === 0 && currentExerciseIndex === 0) {
          setTimeRemaining(workoutPlan[0].time);
        }
        setIsRunning(true);
      }
    }
  };

  const currentExercise = workoutPlan[currentExerciseIndex];
  const nextExercise =
    currentExerciseIndex < workoutPlan.length - 1
      ? workoutPlan[currentExerciseIndex + 1]
      : null;

  return (
    <div className="timer-container">
      {isRunning && (
        <div className="timer-display">
          <p>{timeRemaining}</p>
          <p>{currentExercise?.name}</p>
          {nextExercise && <p> {nextExercise.name}</p>}
        </div>
      )}

      <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
    </div>
  );
};

export default WorkoutTimer;
