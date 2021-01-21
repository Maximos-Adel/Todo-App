import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, complete, deleted }) => (
  <>
    {todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          {...todo}
          complete={() => complete(todo.id)}
          deleted={() => deleted(todo.id)}
        />
      );
    })}

    <div className="panel-block">
      {todos.length} Todo{todos.length > 1 ? "s" : ""}
    </div>
  </>
);

export default TodoList;
