import React from "react";

const Todo = ({ completed, text, complete, deleted }) => (
  <div className="todo">
    <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
    <button className="complete-btn" onClick={complete}>
      <i className="fas fa-check "></i>
    </button>

    <button className="trash-btn" onClick={deleted}>
      <i className="fas fa-trash "></i>
    </button>
  </div>
);

export default Todo;
