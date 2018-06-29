import React, { Component } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
import { robros } from "./robros";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robros: robros,
      searchfield: ""
    };
  }

  onSearchChange = e => {
    console.log(e.target.value);

    const filteredRobros = this.state.robros.filter(robros => {
      return robros.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobros);
  };

  render() {
    return (
      <div>
        <h1 className="tc">Robros!</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <CardList robros={this.state.robros} />;
      </div>
    );
  }
}

export default App;
