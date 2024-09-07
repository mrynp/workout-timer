import React from "react";
import axios from "axios";
import { useState } from "react";

const SearchExercise = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseData, setExerciseData] = useState(null);
  const [exerciseTime, setExerciseTime] = useState("");
  const [restTime, setRestTime] = useState("");

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises/name/${exerciseName}`,
        {
          headers: {
            "x-rapidapi-key":
              "cb3b003debmsh8ab1ba925103268p189597jsn2c9cfbfdf3c6",
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          },
        }
      );

      if (response.data.length === 0) {
        alert("Exercise not found in ExerciseDB.");
        return;
      }

      const combinedData = {
        name: exerciseName,
        gifUrl: response.data[0]?.gifUrl || "",
        description:
          response.data[0]?.instructions || "No description available",
      };

      setExerciseData(combinedData);
    } catch (error) {
      console.error("Error fetching exercise details:", error);
      alert("An error occurred while fetching exercise details.");
    }
  }

  const handleAddExercise = () => {
    if (exerciseData && exerciseTime) {
      console.log({
        ...exerciseData,
        exerciseTime: parseInt(exerciseTime),
        restTime: parseInt(restTime) || 0,
      });
    }
    setExerciseTime("");
    setRestTime("");
  };

  return (
    <div>
      <input
        type="text"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
        placeholder="Search for an exercise..."
      />
      <button onClick={handleSearch}>Search</button>
      <input
        type="number"
        value={exerciseTime}
        onChange={(e) => setExerciseTime(e.target.value)}
        placeholder="Time (seconds)"
      />
      <input
        type="number"
        value={restTime}
        onChange={(e) => setRestTime(e.target.value)}
        placeholder="Rest Time (seconds)"
      />
      <button onClick={handleAddExercise}>Add To Work Out</button>

      {exerciseData && (
        <div>
          <h2>{exerciseData.name}</h2>
          <img src={exerciseData.gifUrl} alt={exerciseData.name} />
          <p>{exerciseData.description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchExercise;
