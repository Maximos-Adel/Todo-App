import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actionCreator";
import { VisibilityFilters } from "../redux/reducers/visibilityFilter";

const Link = ({ onClick, active }) => (
  <div className="panel-tabs">
    <a
      href="#"
      className={` ${VisibilityFilters.SHOW_ALL === active ? "is-active" : ""}`}
      onClick={() => onClick(VisibilityFilters.SHOW_ALL)}
    >
      All
    </a>
    <a
      href="#"
      className={` ${
        VisibilityFilters.SHOW_ACTIVE === active ? "is-active" : ""
      }`}
      onClick={() => onClick(VisibilityFilters.SHOW_ACTIVE)}
    >
      Active
    </a>
    <a
      href="#"
      className={` ${
        VisibilityFilters.SHOW_COMPLETED === active ? "is-active" : ""
      }`}
      onClick={() => onClick(VisibilityFilters.SHOW_COMPLETED)}
    >
      Complete
    </a>
  </div>
);

const mapStateToProps = (state) => ({
  active: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (filter) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
