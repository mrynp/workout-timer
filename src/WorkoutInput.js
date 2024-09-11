import React from "react";

const WorkoutInput = () => {
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
      <ul>
        {workoutPlan.map((workout, workoutIndex) => {
          return (
            <li key={workoutIndex}>
              {workout.name}-{workout.time}s
              <i class="fa-regular fa-pen-to-square"></i>
              <i class="fa-regular fa-square-minus"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutInput;
