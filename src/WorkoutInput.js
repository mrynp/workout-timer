import React, { useState } from "react";

const WorkoutInput = ({ onAddExercise }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTime, setExerciseTime] = useState("");
  const [restTime, setRestTime] = useState("");

  const handleAddExercise = () => {
    if (exerciseName && exerciseTime) {
      onAddExercise({
        type: "exercise",
        name: exerciseName,
        time: parseInt(exerciseTime), // Default rest time to 0 if not specified
      });
      setExerciseName("");
      setExerciseTime("");
    }
  };

  const handleAddRest = () => {
    onAddExercise({
      type: "rest",
      name: "rest",
      time: parseInt(restTime), // Default rest time to 0 if not specified
    });
    setRestTime("");
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
          <button onClick={handleAddExercise}>Add Exercise</button>
        </div>
        <div>
          <input
            value={restTime}
            className="time-input"
            onChange={(e) => setRestTime(e.target.value)}
            type="number"
            placeholder="Time (s)"
          />
          <button onClick={handleAddRest}>Add Rest</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInput;
