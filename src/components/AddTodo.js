import React, { useState } from "react";
import { connect } from "react-redux";
import { add_Todo } from "../redux/actionCreator";

function AddTodo({ add }) {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>Max Todo List</h1>
      </header>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          className="todo-input"
          placeholder="Enter to add"
        />
        <button
          onClick={() => {
            add(text);
            setText("");
          }}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    add: (text) => dispatch(add_Todo(text)),
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);
