import React from "react";

const WorkoutList = ({
  workoutPlan,
  handleDelete,
  handleEdit,
  handleDrag,
  handleDrop,
  handleDuplicate,
  isRunning,
}) => {
  const secondsToMinutes = (time) => {
    const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");
    const seconds = `${time - minutes * 60}`.padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="list-container">
      <ul>
        {workoutPlan.length > 0 && (
          <li className="list-title">
            <div>Today's workout</div>
            <div className="li-border"></div>
          </li>
        )}
        {workoutPlan.map((workout, workoutIndex) => {
          return (
            <li
              className="workout-item"
              key={workoutIndex}
              draggable={!isRunning}
              onDragStart={() => handleDrag(workoutIndex)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(workoutIndex)}
              disabled={isRunning}
            >
              <div>
                <div className="workout-name">{workout.name}</div>
                <div>
                  <div className="workout-time">
                    {secondsToMinutes(workout.time)}
                  </div>
                  <div className="actions-container">
                    <button
                      onClick={() => {
                        handleDuplicate(workoutIndex);
                      }}
                      disabled={isRunning}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
                      </svg>{" "}
                    </button>
                    <button
                      onClick={() => {
                        handleEdit(workoutIndex);
                      }}
                      disabled={isRunning}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(workoutIndex);
                      }}
                      disabled={isRunning}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="17"
                        height="17"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="li-border"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkoutList;
