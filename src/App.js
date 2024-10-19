import React from "react";
import WorkoutInput from "./WorkoutInput";
import WorkoutList from "./WorkoutList";
import WorkoutTimer from "./WorkoutTimer";
import "./App.css";
import { useState, useEffect } from "react";
import texture from "./assets/texture.png";

function App() {
  const [workoutPlan, setWorkoutPlan] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseTime, setExerciseTime] = useState("");
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedWorkoutPlan = localStorage.getItem("workoutPlan");
    if (savedWorkoutPlan) {
      setWorkoutPlan(JSON.parse(savedWorkoutPlan));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("workoutPlan", JSON.stringify(workoutPlan));
  }, [workoutPlan]);

  const addExercise = (exercise) => {
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
    setEditingIndex(index);
  };

  const editExercise = (name, time) => {
    const updatedWorkoutPlan = workoutPlan.map((workoutPlan, workoutIndex) => {
      if (workoutIndex === editingIndex) {
        return { name, time };
      }
      return workoutPlan;
    });
    setWorkoutPlan(updatedWorkoutPlan);
    setEditingIndex(null);
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

  const handleReset = (resetTimer) => {
    setWorkoutPlan([]);
    if (resetTimer) resetTimer();
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
              <WorkoutTimer
                isRunning={isRunning}
                setIsRunning={setIsRunning}
                workoutPlan={workoutPlan}
                handleReset={handleReset}
              />

              <div className="divider">
                <div className="line"></div>
              </div>

              <div className="right-container">
                <div className="app-workout">
                  <div className="screen-gradient">
                    <div className="screen-border">
                      <div className="screen">
                        <WorkoutInput
                          isRunning={isRunning}
                          exerciseName={exerciseName}
                          setExerciseName={setExerciseName}
                          exerciseTime={exerciseTime}
                          setExerciseTime={setExerciseTime}
                          addExercise={addExercise}
                          editExercise={editExercise}
                          isEditing={editingIndex !== null}
                        />
                        <WorkoutList
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                          handleDrag={handleDrag}
                          handleDrop={handleDrop}
                          handleDuplicate={handleDuplicate}
                          workoutPlan={workoutPlan}
                          isRunning={isRunning}
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
