import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

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
    const { searchfield, robros } = this.state;
    const filteredRobros = robros.filter(robros => {
      return robros.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robros!</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robros={filteredRobros} />;
        </Scroll>
      </div>
    );
  }
}

export default App;
