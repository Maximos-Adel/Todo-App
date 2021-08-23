import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/visibleTodoList";
import Link from "./components/Link";
import Clear from "./components/ClearTodo";

function App() {
  return (
    <div className="container is-fluid">
      <div className="panel">
        <div className="panel-heading">
          <span role="img" aria-label="atom">
            ⚛️
          </span>{" "}
          React ToDo
        </div>
        <AddTodo />
        <Link />
        <VisibleTodoList />
        <Clear />
      </div>
    </div>
  );
}

export default App;
