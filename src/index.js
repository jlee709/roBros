import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

import { robros } from "./robros";
import CardList from "./CardList";

ReactDOM.render(<CardList robros={robros} />, document.getElementById("root"));
registerServiceWorker();
