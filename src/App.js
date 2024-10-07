import React from "react";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";
import WorkoutTimer from "./WorkoutTimer";
import "./App.css";
import { useState } from "react";
import texture from "./assets/texture.png";

function App() {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTime, setExerciseTime] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const addExerciseToWorkout = (exercise) => {
    setWorkoutPlan((prevPlan) => [...prevPlan, exercise]);
  };

  const handleDelete = (index) => {
    const newWorkoutPlan = workoutPlan.filter((workout, workoutIndex) => {
      return workoutIndex !== index;
    });
    setWorkoutPlan(newWorkoutPlan);
  };

  const handleEdit = (index) => {
    const editExerciseName = workoutPlan[index].name;
    const editExerciseTime = workoutPlan[index].time;
    setExerciseName(editExerciseName);
    setExerciseTime(editExerciseTime);
    handleDelete(index);
  };

  const handleDrag = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index) => {
    const draggedItem = workoutPlan[draggedItemIndex];
    const remainingItems = workoutPlan.filter((_, i) => i !== draggedItemIndex);

    const reorderedWorkoutPlan = [
      ...remainingItems.slice(0, index),
      draggedItem,
      ...remainingItems.slice(index),
    ];

    setWorkoutPlan(reorderedWorkoutPlan);
    setDraggedItemIndex(null);
  };

  const handleDuplicate = (index) => {
    const duplicateItem = { ...workoutPlan[index] };
    const newWorkoutPlan = [
      ...workoutPlan.slice(0, index + 1),
      duplicateItem,
      ...workoutPlan.slice(index + 1),
    ];
    setWorkoutPlan(newWorkoutPlan);
  };

  return (
    <main>
      <div className="app-container">
        <div className="App">
          <div className="app-filter">
            <div className="app-layer">
              <div className="app-second-layer"></div>
            </div>
            <img className="texture" src={texture} alt=""></img>
            <div className="workout-container">
              <div className="left-container">
                <div className="app-header">
                  <div className="app-name">
                    <h1>Workout Timer</h1>
                  </div>

                  <div className="app-buttons">
                    <div className="btn-container">
                      <div className="btn-padding">
                        <button className="custom-btn">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill=" rgba(255, 255, 255, 0.4)"
                          >
                            <path d="M9 8.48216V15.518L15.0307 12.0001L9 8.48216ZM7.75194 5.43872L18.2596 11.5682C18.4981 11.7073 18.5787 12.0135 18.4396 12.252C18.3961 12.3265 18.3341 12.3885 18.2596 12.432L7.75194 18.5615C7.51341 18.7006 7.20725 18.62 7.06811 18.3815C7.0235 18.305 7 18.2181 7 18.1296V5.87061C7 5.59446 7.22386 5.37061 7.5 5.37061C7.58853 5.37061 7.67547 5.39411 7.75194 5.43872Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="btn-label">START</div>
                    </div>
                    <div className="btn-container">
                      <div className="btn-padding">
                        <button className="custom-btn">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill=" rgba(255, 255, 255, 0.4)"
                          >
                            <path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="btn-label">Pause</div>
                    </div>
                    <div className="btn-container">
                      <div className="btn-padding">
                        <button className="custom-btn">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="12"
                            height="12"
                            fill=" rgba(255, 255, 255, 0.4)"
                          >
                            <path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H8V9.5H2V3.5H4V5.99936C5.82381 3.57166 8.72764 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H16V14.5H22V20.5H20V18.0006C18.1762 20.4283 15.2724 22 12 22C6.47715 22 2 17.5228 2 12H4Z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="btn-label">Reset</div>
                    </div>
                  </div>
                </div>
                <div className="app-workout">
                  <div className="screen-gradient">
                    <div className="screen-border">
                      <div className="screen">
                        <WorkoutTimer workoutPlan={workoutPlan} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider">
                <div className="line"></div>
              </div>

              <div className="right-container">
                <div className="app-workout">
                  <div className="screen-gradient">
                    <div className="screen-border">
                      <div className="screen">
                        <WorkoutInput
                          exerciseName={exerciseName}
                          setExerciseName={setExerciseName}
                          exerciseTime={exerciseTime}
                          setExerciseTime={setExerciseTime}
                          onAddExercise={addExerciseToWorkout}
                          workoutPlan={workoutPlan}
                        />
                        <WorkoutList
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          handleDrag={handleDrag}
                          handleDrop={handleDrop}
                          handleDuplicate={handleDuplicate}
                          workoutPlan={workoutPlan}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
