import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

// import { robros } from "./robros";
import App from "./containers/App";
import "./containers/App.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
