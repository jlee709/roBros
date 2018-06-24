import React from "react";
import CardList from "./CardList";
import { robros } from "./robros";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div>
      <h1 className="tc">Robros!</h1>
      <SearchBar />
      <CardList robros={robros} />;
    </div>
  );
};

export default App;
