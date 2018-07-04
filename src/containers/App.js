import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

import { setSearchField } from "../actions/actions";

const mapStateToProps = state => {
  return {
    searchfield: state.searchfield
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      robros: []
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

  render() {
    const { robros } = this.state;
    const { onSearchChange, searchfield } = this.props;
    const filteredRobros = robros.filter(robros => {
      return robros.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robros!</h1>
        <SearchBar searchChange={onSearchChange} />
        <Scroll>
          <CardList robros={filteredRobros} />;
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
