import React from "react";

const Card = ({ name, email, id, alias }) => {
  return (
    <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?150x150`} alt="robros" />
      <div>
        {/* take out id */}
        <p>{id}</p>
        <h3>{name}</h3>
        <p>{email}</p>
        <p>{alias}</p>
      </div>
    </div>
  );
};

export default Card;
