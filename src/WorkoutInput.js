import React, { useState } from "react";

const WorkoutInput = ({
  onAddExercise,
  workoutPlan,
  exerciseName,
  setExerciseName,
  exerciseTime,
  setExerciseTime,
}) => {
  const [restTime, setRestTime] = useState("");

  const capitalizeFirstLetter = (string) => {
    return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const secondsToMinutes = (time) => {
    const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
    const seconds = `${time - minutes * 60}`.padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleAddExercise = () => {
    if (exerciseName && exerciseTime) {
      onAddExercise({
        name: capitalizeFirstLetter(exerciseName),
        time: secondsToMinutes(exerciseTime),
      });
    }
  };

  const handleAddRest = () => {
    if (
      workoutPlan.length > 0 &&
      workoutPlan[workoutPlan.length - 1].name === "rest"
    ) {
      alert("Cannot add consecutive rest periods.");
      return;
    }

    if (restTime) {
      onAddExercise({
        name: "Rest",
        time: secondsToMinutes(restTime),
      });
    }
  };

  return (
    <div>
      <div className="input-container">
        <div>
          <input
            value={exerciseName}
            className="exercise-input"
            onChange={(e) => setExerciseName(e.target.value)}
            type="text"
            placeholder="Add an exercise..."
          />
          <input
            value={exerciseTime}
            className="time-input"
            onChange={(e) => setExerciseTime(e.target.value)}
            type="number"
            placeholder="Time (s)"
          />
          <button
            onClick={() => {
              handleAddExercise();
              setExerciseName("");
              setExerciseTime("");
            }}
          >
            Add Exercise
          </button>
        </div>
        <div>
          <input
            value={restTime}
            className="time-input"
            onChange={(e) => setRestTime(e.target.value)}
            type="number"
            placeholder="Time (s)"
          />
          <button
            onClick={() => {
              handleAddRest();
              setRestTime("");
            }}
          >
            Add Rest
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInput;
