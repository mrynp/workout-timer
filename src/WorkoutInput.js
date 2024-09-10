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
      <h2>Add Exercise</h2>
      <input type="text" placeholder="Add an exercise..." />
      <input type="number" placeholder="Time (seconds)" />
      <button>Add Exercise</button>
      <h2>Add Rest Time</h2>
      <input type="number" placeholder="Time (seconds)" />
      <button>Add Rest Time</button>

      <ul>
        {workoutPlan.map((workout, workoutIndex) => {
          return (
            <li key={workoutIndex}>
              {workout.name}-{workout.time}s
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutInput;
