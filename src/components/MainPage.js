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

  render() {
    const { onSearchChange, searchfield, robros, isPending } = this.props;
    const filteredRobros = robros.filter(robros => {
      return robros.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
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

export default MainPage;
