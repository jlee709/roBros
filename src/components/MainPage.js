import React, { Component } from "react";
import { setSearchField, requestRobros } from "../actions/actions";

import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";

import "./MainPage.css";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobros();
  }

  filteredRobros = robros => {
    return robros.filter(robros => {
      return robros.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, searchfield, robros, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBar searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robros={this.filteredRobros(robros)} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
