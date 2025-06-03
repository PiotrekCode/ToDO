import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => (
  <ul className="list-group">
    {tasks.map((task, index) => (
      <Task key={index} task={task} removeTask={() => removeTask(index)} />
    ))}
  </ul>
);

export default TaskList;