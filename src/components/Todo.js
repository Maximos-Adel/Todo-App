import React from "react";

const Todo = ({ completed, text, complete, deleted }) => (
  <label
    className="panel-block"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div className={`${completed ? "completed" : ""}`}>{text}</div>
    <div>
      <button
        style={{
          marginRight: "5px",
        }}
        className="button is-small is-light "
        onClick={complete}
      >
        <i className="fas fa-check "></i>
      </button>
      <button className="button is-small is-light" onClick={deleted}>
        <i className="fas fa-trash "></i>
      </button>
    </div>
  </label>
);

export default Todo;
