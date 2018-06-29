import React, { Component } from "react";
import CardList from "./CardList";
import SearchBar from "./SearchBar";
// import { robros } from "./robros";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robros: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robros: users });
      });
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
      <div className="tc">
        <h1 className="f1">Robros!</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <CardList robros={filteredRobros} />;
      </div>
    );
  }
}

export default App;
