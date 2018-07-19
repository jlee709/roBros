import { shallow } from "enzyme";
import React from "react";
import Card from "./Card";

it("expects a card to render", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
