import React from "react";

const WorkoutList = ({
  workoutPlan,
  handleDelete,
  handleEdit,
  handleDrag,
  handleDrop,
  handleDuplicate,
}) => {
  const secondsToMinutes = (time) => {
    const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
    const seconds = `${time - minutes * 60}`.padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <ul>
        {workoutPlan.map((workout, workoutIndex) => {
          return (
            <li
              className="workout-item"
              key={workoutIndex}
              draggable
              onDragStart={() => handleDrag(workoutIndex)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(workoutIndex)}
            >
              <p>
                <span>{secondsToMinutes(workout.time)}</span> {workout.name}
              </p>
              <div className="actions-container">
                <button
                  onClick={() => {
                    handleDuplicate(workoutIndex);
                  }}
                >
                  <i class="fa-regular fa-clone fa-lg"></i>
                </button>
                <button
                  onClick={() => {
                    handleEdit(workoutIndex);
                  }}
                >
                  <i class="fa-regular fa-pen-to-square fa-lg"></i>
                </button>
                <button
                  onClick={() => {
                    handleDelete(workoutIndex);
                  }}
                >
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
