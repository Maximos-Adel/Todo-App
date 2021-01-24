import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos"],
};

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default persistReducer(persistConfig, rootReducer);
