import React from "react";
import Card from "./Card";

//maping each elm for prop pass
const CardList = ({ robros }) => {
  const cardArray = robros.map((user, i) => {
    return (
      <Card
        key={i}
        id={robros[i].id}
        name={robros[i].name}
        email={robros[i].email}
        alias={robros[i].alias}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
