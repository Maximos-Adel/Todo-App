import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actionTypes";

const todos = (state = [], action) => {
  let newTodos = [];
  switch (action.type) {
    case ADD_TODO:
      newTodos = [
        ...state,
        { text: action.text, id: Math.random(), completed: false },
      ];
      console.log("from add reducer", newTodos);
      return newTodos;

    case COMPLETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      console.log("from complete reducer", newTodos);
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todos) => todos.id !== action.id);
      console.log("from delete reducer", newTodos);
      return newTodos;

    default:
      return state;
  }
};

export default todos;
