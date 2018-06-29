import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

import { robros } from "./robros";
import App from "./App";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
