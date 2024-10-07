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

  const handleAddExercise = () => {
    if (exerciseName && exerciseTime) {
      onAddExercise({
        name: capitalizeFirstLetter(exerciseName),
        time: parseInt(exerciseTime),
      });
      setExerciseName("");
      setExerciseTime("");
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
        time: parseInt(restTime),
      });
      setRestTime("");
    }
  };

  return (
    <div className="input-container">
      <div>
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
            }}
          >
            Add
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="rgba(228,228,231,1)"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </button>
        </div>
        <div>
          <div className="rest-input">Rest</div>
          <input
            value={restTime}
            className="time-input"
            onChange={(e) => setRestTime(e.target.value)}
            type="number"
            placeholder="Time (s)"
            required
          />
          <button
            onClick={() => {
              handleAddRest();
            }}
          >
            Add
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="rgba(228,228,231,1)"
            >
              <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInput;
