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
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredRobros = this.state.robros.filter(robros => {
      return robros.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div>
        <h1 className="tc">Robros!</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <CardList robros={filteredRobros} />;
      </div>
    );
  }
}

export default App;
