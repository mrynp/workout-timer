import React from "react";

const WorkoutInput = ({
  addExercise,
  editExercise,
  isEditing,
  isRunning,
  exerciseName,
  setExerciseName,
  exerciseTime,
  setExerciseTime,
}) => {
  const capitalizeFirstLetter = (string) => {
    return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleAddExercise = () => {
    if (exerciseName && exerciseTime) {
      const name = capitalizeFirstLetter(exerciseName);
      const time = parseInt(exerciseTime);

      if (isEditing) {
        editExercise(name, time);
      } else {
        addExercise(name, time);
      }

      setExerciseName("");
      setExerciseTime("");
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
            disabled={isRunning}
          />

          <input
            value={exerciseTime}
            className="time-input"
            onChange={(e) => setExerciseTime(e.target.value)}
            type="number"
            placeholder="Time (s)"
            disabled={isRunning}
          />
          <button onClick={handleAddExercise} disabled={isRunning}>
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
