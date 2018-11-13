import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { searchRobros, requestRobros } from "./reducers/searchRobros.js";
// import { robros } from "./robros";
import App from "./containers/App";
import "./containers/App.css";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobros, requestRobros });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
