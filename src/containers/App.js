import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobros } from "../actions/actions";

import MainPage from "../components/MainPage";

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
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
