import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";

console.log(shallow(<Card />));

it("expects a card to render", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
