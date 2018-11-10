import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};

const middleware = [thunk];

const devtools =
  process.env.NODE_ENV === "test"
    ? x => x
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    devtools
  )
);

export default store;
