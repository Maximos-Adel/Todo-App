import { connect } from "react-redux";
import { complete_Todo, delete_Todo } from "../redux/actionCreator";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../redux/reducers/visibilityFilter";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => {
  return {
    complete: (id) => dispatch(complete_Todo(id)),
    deleted: (id) => dispatch(delete_Todo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
