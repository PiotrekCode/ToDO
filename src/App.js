import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const removeTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary">Lista ToDo</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} removeTask={removeTask} />
      </div>
    </div>
  );
};

export default App;