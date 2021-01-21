import React, { useState } from "react";
import { connect } from "react-redux";
import { add_Todo } from "../redux/actionCreator";

function AddTodo({ add }) {
  const [text, setText] = useState("");

  return (
    <div className="panel-block">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        className="input"
        placeholder="Enter to add"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            add(text);
            setText("");
          }
        }}
      />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    add: (text) => dispatch(add_Todo(text)),
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);
