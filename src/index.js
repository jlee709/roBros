import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { searchRobros } from "./reducers/searchRobros.js";
// import { robros } from "./robros";
import App from "./containers/App";
import "./containers/App.css";

const store = createStore(searchRobros);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
