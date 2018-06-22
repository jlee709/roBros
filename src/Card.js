import React from "react";

const Card = props => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="robros" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.alias}</p>
      </div>
    </div>
  );
};

export default Card;
