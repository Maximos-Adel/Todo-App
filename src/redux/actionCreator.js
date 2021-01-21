import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_TODO,
} from "./actionTypes";

export const add_Todo = (text) => {
  const action = {
    type: ADD_TODO,
    text,
  };
  console.log("add", action);
  return action;
};

export const complete_Todo = (id) => {
  const action = {
    type: COMPLETE_TODO,
    id,
  };
  console.log("complete", action);
  return action;
};

export const delete_Todo = (id) => {
  const action = {
    type: DELETE_TODO,
    id,
  };
  console.log("delete", action);
  return action;
};

export const setVisibilityFilter = (filter) => {
  const action = {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
  console.log("filter", action);
  return action;
};

export const clear_Todo = () => {
  const action = {
    type: CLEAR_TODO,
  };
  console.log("clear", action);
  return action;
};
