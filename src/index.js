import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { robros } from "./robros";

ReactDOM.render(
  <div>
    <Card
      id={robros[0].id}
      name={robros[0].name}
      alias={robros[0].alias}
      email={robros[0].email}
    />
    <Card
      id={robros[1].id}
      name={robros[1].name}
      alias={robros[1].alias}
      email={robros[1].email}
    />
    <Card
      id={robros[2].id}
      name={robros[2].name}
      alias={robros[2].alias}
      email={robros[2].email}
    />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
