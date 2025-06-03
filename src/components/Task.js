import React from "react";

const Task = ({ task, removeTask }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    {task}
    <button onClick={removeTask} className="btn btn-danger btn-sm">Usuń</button>
  </li>
);

export default Task;