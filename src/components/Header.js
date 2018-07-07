import React, { Component } from "react";
import CounterButton from "./CounterButton";

// repvents addional re-reners for DOM optimizations
class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className={"f1"}>Robros!</h1>
        <CounterButton color={"red"} />
      </div>
    );
  }
}

export default Header;
