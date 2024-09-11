import React from "react";

const WorkoutList = (props) => {
  const { workoutPlan } = props;
  return (
    <div>
      <ul>
        {workoutPlan.map((workout, workoutIndex) => {
          return (
            <li className="workout-item" key={workoutIndex}>
              <p>
                {workout.time}s {workout.name}
              </p>
              <div className="actions-container">
                <button>
                  <i class="fa-regular fa-pen-to-square fa-lg"></i>
                </button>
                <button>
                  <i class="fa-regular fa-square-minus fa-lg"></i>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutList;