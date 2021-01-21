import React from "react";
import { clear_Todo } from "../redux/actionCreator";
import { connect } from "react-redux";

function Clear({ clear }) {
  return (
    <div className="panel-block">
      <button className="button is-light is-fullwidth" onClick={() => clear()}>
        Clear
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clear_Todo()),
  };
}
export default connect(null, mapDispatchToProps)(Clear);
