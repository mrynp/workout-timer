import React from "react";

const WorkoutInput = (props) => {
  return (
    <div>
      <div className="input-container">
        <div>
          <input
            className="exercise-input"
            type="text"
            placeholder="Add an exercise..."
          />
          <input className="time-input" type="number" placeholder="Time (s)" />
          <button>Add Exercise</button>
        </div>
        <div>
          <input className="time-input" type="number" placeholder="Time (s)" />
          <button>Add Rest</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInput;
