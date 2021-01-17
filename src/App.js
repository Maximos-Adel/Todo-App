import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/visibleTodoList";

import Link from "./components/Link";
function App() {
  return (
    <div>
      <AddTodo />
      <Link />
      <VisibleTodoList />
    </div>
  );
}

export default App;
