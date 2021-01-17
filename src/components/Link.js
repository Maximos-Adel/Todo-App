import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actionCreator";
import { VisibilityFilters } from "../redux/reducers/visibilityFilter";

const Link = ({ onClick }) => (
  <div>
    {/* <button
      className="filter_btn"
      onClick={() => onClick(VisibilityFilters.SHOW_ALL)}
    >
      All
    </button>
    <button
      className="filter_btn"
      onClick={() => onClick(VisibilityFilters.SHOW_ACTIVE)}
    >
      Active
    </button>
    <button
      className="filter_btn"
      onClick={() => onClick(VisibilityFilters.SHOW_COMPLETED)}
    >
      Complete
    </button> */}

    <div class="select">
      <select name="todos" class="filter-todo">
        <option
          value="all"
          onChange={() => onClick(VisibilityFilters.SHOW_ALL)}
        >
          All
        </option>
        <option
          value="completed"
          onChange={() => onClick(VisibilityFilters.SHOW_COMPLETED)}
        >
          Completed
        </option>
        <option
          value="uncompleted"
          onChange={() => onClick(VisibilityFilters.SHOW_ACTIVE)}
        >
          Uncompleted
        </option>
      </select>
    </div>
  </div>
);

// const mapStateToProps = (state, action) => ({
//   active: action.filter === state.visibilityFilter,
// });

const mapDispatchToProps = (dispatch) => ({
  onClick: (filter) => dispatch(setVisibilityFilter(filter)),
});

export default connect(null, mapDispatchToProps)(Link);
