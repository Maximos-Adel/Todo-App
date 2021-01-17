import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, complete, deleted }) => (
  <div className="todo-container">
    <ul className="todo-list">
      {todos && todos.length ? (
        todos.map((todo) => {
          return (
            <div>
              <Todo
                key={todo.id}
                {...todo}
                complete={() => complete(todo.id)}
                deleted={() => deleted(todo.id)}
              />
            </div>
          );
        })
      ) : (
        <h2 className="massage">There are no Todos yet !</h2>
      )}
    </ul>
  </div>
);

export default TodoList;
