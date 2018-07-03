import React from "react";

const Scroll = props => {
  return (
    <div
      style={{ overflow: "scroll", border: "7px solid black", height: "666px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
