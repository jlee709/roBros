import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobros } from "../actions/actions";

import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobros.searchfield,
    robros: state.requestRobros.robros,
    isPending: state.requestRobros.isPending,
    error: state.requestRobros.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobros: () => dispatch(requestRobros())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobros();
  }

  render() {
    const { onSearchChange, searchfield, robros, isPending } = this.props;
    const filteredRobros = robros.filter(robros => {
      return robros.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robros!</h1>
        <SearchBar searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robros={filteredRobros} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
